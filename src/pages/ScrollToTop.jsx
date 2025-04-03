import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';


export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="absolute border-none cursor-pointer z-1 bottom-20 right-10 p-2 rounded-full shadow-gray-400 bg-gray-200 text-[#000]"
            >

                <FaAngleUp className='w-6 h-6' />
            </button>
        )
    );
};

ScrollToTop.displayName = "/src/widgets/layout/ScrollToTop.jsx";

export default ScrollToTop;