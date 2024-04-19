import { toast, ToastOptions } from "react-toastify";

interface AlertOptions extends ToastOptions {
  appearance?: string;
}

export const useNotifications = () => ({
  // message was an object here but this was failing silently
  addNotification: (message: string, options: AlertOptions) =>
    options.appearance ? toast[options.appearance](message, options) : toast(message, options),
});
