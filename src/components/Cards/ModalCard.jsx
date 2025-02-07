import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from '../button/Button';
import { ImYoutube } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiSignal } from "react-icons/hi2";

const ModalCard = ({
    linkY="",
    linkG="",
    linkL=""
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div>
            {/* Button to open modal */}
            <Button
                onClick={openModal}
                children="View More"
                className='mt-3'
            />


            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-customBlack2 w-96 h-64 p-6 rounded-lg shadow-2xl">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white hover:text-red-600 transition-transform duration-200"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Card content */}
                        <div className="flex flex-col gap-2 items-center justify-center h-full text-white">
                            <h3 className="text-2xl font-bold mb-4 ">More about this Project</h3>

                            <a className='flex items-center text-2xl gap-2 hover:text-customBlue' href={linkY}><ImYoutube/> <p>You-Tube</p></a>
                            <a className='flex items-center text-2xl gap-2 hover:text-customBlue' href={linkG}><FaGithub /> <p>Github</p></a>
                            <a className='flex items-center text-2xl gap-2 hover:text-customBlue' href={linkL}><HiSignal /> <p>Live</p></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalCard;
