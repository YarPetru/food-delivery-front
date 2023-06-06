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
