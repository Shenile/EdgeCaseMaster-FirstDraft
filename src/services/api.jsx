import axios from 'axios';

const API_URL = 'https://ecmaster.onrender.com';
const Local_API_URL = 'http://127.0.0.1:5000'
export const runTests = async (code, inputString, outputString) => {
    try {

        console.log(code, inputString, outputString);
        const response = await axios.post(`${API_URL}/runtests`, { code, inputString, outputString });
     
        return { data: response.data, error: null };
    } catch (error) {
       
        let errorMsg;
        if (error.response) {
            // Server responded with a status other than 2xx
            switch (error.response.status) {
                case 400:
                    errorMsg = 'Bad Request: ' + (error.response.data.error || error.response.data.err);
                    break;
                case 500:
                    errorMsg = 'Internal Server Error: ' + (error.response.data.error || error.response.data.err);
                    break;
                default:
                    errorMsg = 'An unexpected error occurred: ' + (error.response.data.error || error.response.data.err);
            }
        } else if (error.request) {
            // Request was made but no response was received
            errorMsg = 'Server Not Responding.';
        } else {
            // Something else happened while setting up the request
            errorMsg = 'Error setting up request: ' + error.message;
        }
        
        return { data: null, error: errorMsg };
    }
};
