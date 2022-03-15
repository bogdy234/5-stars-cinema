import {useState} from 'react';

const useShowModal = () => {
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    const toggleSuccess = () => {
        setShowSuccess(a => !a);
    };

    const toggleError = () => {
        setShowError(a => !a);
    };

    return {showSuccess, showError, toggleSuccess, toggleError}
};

export default useShowModal;
