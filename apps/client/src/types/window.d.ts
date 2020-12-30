declare global {
  interface Window {
    [key: string]: Promise<void>;
  }
}
