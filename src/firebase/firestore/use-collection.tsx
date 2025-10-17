'use client';

import { useEffect, useState, useMemo } from 'react';
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAt,
  endAt,
  doc,
  getDoc,
  type DocumentData,
  type Query,
  type CollectionReference,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';

// This hook is used to listen to a collection in Firestore.
// It can be used to get the data from a collection and listen to its changes.
export function useCollection<T>(
  collectionRef: CollectionReference | Query | null
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!collectionRef) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const data: T[] = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as T[];
        setData(data);
        setLoading(false);
      },
      async (err) => {
        console.error(err);
        const permissionError = new FirestorePermissionError({
          path: collectionRef.path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionRef]);

  return { data, loading };
}
