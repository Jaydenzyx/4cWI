
type Props = {
    title: string;
    description: string;

}

function Card({title, description}: Props){
    return(

        <div className="card">
            <div>I am a Card</div>
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    )
}

export default Card;