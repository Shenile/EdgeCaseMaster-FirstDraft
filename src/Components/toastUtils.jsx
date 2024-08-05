// toastUtils.js
import { toast } from 'react-toastify';



export const showToast = (message, type = 'info') => {
  let className = '';

  switch (type) {
    case 'success':
      className = 'shadow-md bg-green-500 text-white';
      break;
    case 'error':
      className = 'shadow-2xl shadow-red-300 text-red';
      break;
    case 'info':
    default:
      className = 'bg-blue-500 text-white';
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
