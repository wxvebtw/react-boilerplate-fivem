declare global {
  interface Window {
    GetParentResourceName?: () => string;
    invokeNative?: unknown;
  }
}

export const isEnvBrowser = (): boolean => !window.invokeNative;
