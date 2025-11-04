import Card from "./aufgabe2_card.tsx";
import Button from "./aufgabe2_button.tsx";
import PersonCard from "./aufgabe2_personcard.tsx";

export default function App() {
    return (
        <div>
            <Card description="Coffee"/>
            <Card description="Tea"/>
            <Card description="Beer"/>

            <Button description="Sendar"/>


            <PersonCard title="John Doe" description="Architect & Engineer"/>

        </div>
    )
}

