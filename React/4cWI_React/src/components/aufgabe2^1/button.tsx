import { useState } from "react";

type Props = {
    title: string;
};

const Button = ({ title }: Props) => {
    const [AmountofClicks, setAmountofClicks] = useState(0);
    let style = AmountofClicks>5?"bg-red-400":"";

    return (
        <div>
            <button className={`bg-green-500 h-20 w-30 hover:cursor-pointer ${style}`} onClick={() => setAmountofClicks(AmountofClicks + 1)}>{title}</button>
            <div>Amount of Clicks :{AmountofClicks}</div>


        </div>
        );
};

export default Button;