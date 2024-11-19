// toastUtils.js
import { toast } from 'react-toastify';



export const showToast = (message, type = 'info') => {
  let className = 'z-50';

  switch (type) {
    case 'success':
      className = 'shadow-md text-gray-300 bg-navy-dark';
      break;
    case 'error':
      className = 'shadow-lg shadow-burgundy text-gray-300 bg-navy-dark';
      break;
    case 'info':
    default:
      className = 'bg-blue-500 text-gray-300 bg-navy-dark';
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
