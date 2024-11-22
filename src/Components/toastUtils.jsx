// toastUtils.js
import { toast } from 'react-toastify';



export const showToast = (message, type = 'info') => {
  let className = 'z-50';

  switch (type) {
    case 'success':
      className = ' text-surface-a10 bg-gray-300';
      break;
    case 'error':
      className = ' text-surface-a10 bg-gray-300';
      break;
    case 'info':
    default:
      className = ' text-surface-a10 bg-gray-300';
      break;
  }

  toast(message, {
    type,
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className, // Apply Tailwind CSS classes
  });
};
