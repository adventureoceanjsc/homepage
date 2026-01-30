import React, { useEffect } from 'react';

const Notification = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    }[type] || 'bg-blue-500';

    return (
        <div className={`fixed top-24 right-4 px-6 py-4 rounded-lg shadow-lg z-50 ${bgColor} text-white animate-fade-in-up`}>
            <div className="flex items-center gap-2">
                <span className="material-icons">
                    {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
                </span>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Notification;
