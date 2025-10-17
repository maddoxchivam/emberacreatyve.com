'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';
import React from 'react';

// This provider is responsible for initializing Firebase on the client-side.
// It should be used as a wrapper around the root of your application.
export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firebaseApp, firestore, auth } = initializeFirebase();

  return (
    <FirebaseProvider firebaseApp={firebaseApp} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
