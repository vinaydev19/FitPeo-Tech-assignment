import React from 'react'
import humanBody from "../../assets/human-body.jpg"

function AnatomySection() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="relative">
                {/* Human body illustration placeholder */}
                <div className="relative  bg-gradient-to-b rounded-lg flex items-center justify-center">
                    <div className="h-80 bg-gradient-to-b  relative">
                        <div className="h-80 bg-gradient-to-b  rounded-full relative overflow-hidden flex items-center justify-center" >
                            <img src={humanBody} alt="Human Body" className="w-full h-full object-contain" />
                        </div>
                        {/* Heart indicator */}
                        <div className="absolute top-18 left-2/3 transform -translate-x-1/2">
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Healthy Heart</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Healthy leg indicator */}
                <div className="absolute bottom-25 left-20">
                    <div className="bg-cyan-500 text-white flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>healthy leg</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AnatomySection