import { useState, useCallback } from 'react';
import { useAppDispatch } from './redux-hooks';
import { AsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch } from 'store';

type UseThunkReturn<T> = [(arg: T) => void, boolean, any];

export function useThunk<T>(
  thunk: AsyncThunk<any, T, { dispatch: AppDispatch }>
): UseThunkReturn<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback(
    (arg: T) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: any) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}

// import { useState, useCallback } from 'react';
// import { useAppDispatch } from './redux-hooks';

// type UseThunkReturn<T> = [(arg: T) => void, boolean, any];

// export function useThunk<T>(thunk: any): UseThunkReturn<T> {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<any>(null);
//   const dispatch = useAppDispatch();

//   const runThunk = useCallback(
//     (arg: T) => {
//       setIsLoading(true);
//       dispatch(thunk(arg))
//         .unwrap()
//         .catch((err: any) => setError(err))
//         .finally(() => setIsLoading(false));
//     },
//     [dispatch, thunk]
//   );

//   return [runThunk, isLoading, error];
// }

// -----------2
// import { useState, useCallback } from 'react';
// import { useAppDispatch } from './redux-hooks';
// import { AppThunk, RootState } from './store';

// type UseThunkReturn<T> = [(arg: T) => void, boolean, any];

// export function useThunk<T>(thunk: AppThunk<T>): UseThunkReturn<T> {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<any>(null);
//   const dispatch = useAppDispatch();

//   const runThunk = useCallback(
//     (arg: T) => {
//       setIsLoading(true);
//       dispatch(thunk(arg))
//         .unwrap()
//         .catch((err: any) => setError(err))
//         .finally(() => setIsLoading(false));
//     },
//     [dispatch, thunk]
//   );

//   return [runThunk, isLoading, error];
// }
