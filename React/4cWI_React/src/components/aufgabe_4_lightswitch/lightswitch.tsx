import { useState } from "react";



const Lightswitch = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleLight = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${isOn ? "bg-yellow-500" : "bg-gray-500"}`}>

            <button className={'hover:cursor-pointer'}onClick={toggleLight}>{isOn ? "Turn Off" : "Turn On"}</button>
            <div className="text-6xl mb-8">
                {isOn ? '💡' : '⚡'}
            </div>


        </div>
    );
};

export default Lightswitch;