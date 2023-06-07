import React from 'react'

const Modal = ({ isOpen, closeModal }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-2/3 animate-slide-in">
                        <span className="text-right text-gray-500 cursor-pointer" onClick={closeModal}>
                            &times;
                        </span>
                        <h2 className="text-lg font-bold mb-4">Modal Title</h2>
                        <p>Modal content goes here...</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;
