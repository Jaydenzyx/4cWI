
type Props = {
    description: string;

}

function Card({description}: Props){
    return(

        <div className="card flex bg-cyan-700 h-20 w-50 items-center m-1 hover:bg-cyan-600 rounded-lg ">
            <p className="text-white">{description}</p>

        </div>
    )
}

export default Card;