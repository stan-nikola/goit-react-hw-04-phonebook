import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

const notificationRoot = document.querySelector('#notification');

export function Notification() {
  return createPortal(<ToastContainer />, notificationRoot);
}
