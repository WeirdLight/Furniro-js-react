import { Container, Card } from "react-bootstrap";
import living from "./images/living.png";
import dining from "./images/dining.png";
import bedroom from "./images/bedroom.png";

import './index.scss';

const rageRoomsData = [
    {
        id: 1,
        title: "Dining",
        img: dining,
        link: "#dining"
    },
    {
        id: 2,
        title: "Living",
        img: living,
        link: "#living"
    },
    {
        id: 3,
        title: "Bedroom",
        img: bedroom,
        link: "#bedroom"
    }
];

export default function RageComponent() {
  return (
    <Container className="rage-container">
        <h2 className="title">Browse The Range</h2>
        <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Container className="rage-cards-container">
            <RageCards data={rageRoomsData} />
        </Container>
    </Container>
  );
}

function RageCards({data}){
    return (
        <>
            {data.map((item) => (
                <Card key={item.id} className="rage-card" href={item.link}>
                    <Card.Body>
                        <Card.Img src={item.img} alt={item.title} />
                        <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}