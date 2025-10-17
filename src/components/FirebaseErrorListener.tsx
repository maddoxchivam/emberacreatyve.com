'use client';

import React, { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/firebase/errors';

// This component is responsible for listening to Firestore permission errors
// and displaying a toast notification to the user.
// It is intended for development purposes only and should be used within a
// component that has access to the `useToast` hook.
export default function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      console.error('Firestore Permission Error:', error.toString());
      
      // We are throwing the error here to make it visible in the Next.js
      // development error overlay. This is useful for debugging security rules.
      // This line should be removed or commented out in production.
      throw error;
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null;
}
