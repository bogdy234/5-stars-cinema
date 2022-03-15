import {useEffect} from 'react';


const useClickOutside = (ref: any, cb: () => void) => {

    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target)) {
            cb();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export default useClickOutside;
