declare module 'redux-persist/lib/storage' {
  import { WebStorage } from 'redux-persist/types';
  const storage: WebStorage;
  export default storage;
}
