import React from 'react'

export default function LoadingCirce() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative inline-flex">
                <div className="w-6 h-6 bg-red-500 bg-opacity-75 rounded-full"></div>
                <div className="w-6 h-6 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-6 h-6 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>
    );
}
