
import { useLocation } from 'react-router-dom';

const { useEffect } = require('react');

const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

export default useScrollToTop;