import React from 'react'

export default function LoadingCircle() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="relative inline-flex">
                <div className="w-6 h-6 bg-blue-600 bg-opacity-75 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>
    );
}
