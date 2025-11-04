type Props = {
    description: string;

}

function button({description}: Props){
    const handleClick = () => {
        alert("Clicked");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-16 left-4 h-10 w-40 flex items-center justify-center rounded-lg hover:bg-green-400 bg-green-500 transition-colors duration-200 "
        >
            <span className="text-white">{description}</span>
        </button>
    )
}

export default button;