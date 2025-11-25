import { useState } from "react";

type Props = {
    incrementText: string;
    decrementText: string;
};

const ButtonCounter = ({ incrementText, decrementText }: Props) => {
    const [AmountofClicks, setAmountofClicks] = useState(0);
    let style = AmountofClicks>5?"bg-red-400":"";

    return (
        <div className={'flex'}>

            <button className={`bg-green-500 h-20 w-30 hover:cursor-pointer ${style}`} onClick={() => setAmountofClicks(AmountofClicks + 1)}>{incrementText}</button>
            <button className={'bg-red-500 h-20 w-30 hover:cursor-pointer '} onClick={() => setAmountofClicks(AmountofClicks-1)}>{decrementText}</button>
            <div>Amount of Clicks :{AmountofClicks}</div>




        </div>
    );
};

export default ButtonCounter;