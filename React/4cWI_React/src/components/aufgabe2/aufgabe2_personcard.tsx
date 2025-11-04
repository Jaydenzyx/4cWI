type Props = {
    title: string;
    description: string;
}

function PersonCard({ title, description }: Props) {
    return (
        <div>
            <img src="https://www.w3schools.com/howto/img_avatar.png"/>
            <h2 className="text-xl font-semibold ">{title}</h2>
            <p className="text-gray-600 ">{description}</p>
        </div>


    )
}

export default PersonCard;