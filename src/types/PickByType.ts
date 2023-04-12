export type PickByType<T, V> = {
  [P in keyof T as T[P] extends V | undefined ? P : never]: T[P];
};
