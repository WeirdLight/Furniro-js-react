import { Container, Button, Card } from "react-bootstrap";
import accesory from './images/accesory.png';
import dinning from './images/dinning.png';
import innerPeace from './images/inner-peace.png';
import { GoArrowRight, GoChevronRight } from "react-icons/go";
import { useState } from "react";
import './index.scss';

const initialRoomsData = [
    {
        id: 3,
        image: innerPeace,
        title: "Inner Peace",
        type: 'Bed Room',
        link: '#inner-peace'
    },
    {
        id: 1,
        image: accesory,
        title: "Accessories",
        type: "Accessories",
        link: '#accesory'
    },
    {
        id: 2,
        image: dinning,
        title: "Dining",
        type: "Dining",
        link: '#dinning',
    }
];

let roomRole = ['first', 'second', 'third'];

export default function RoomsComponent() {
    const [rooms, setRooms] = useState(initialRoomsData);

    const changeImg = () => {
        setRooms(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    return (
        <Container className="rooms-container">
            <Container className="text-side">
                <h2 className="title">50+ Beautiful rooms inspiration</h2>
                <p className="descr">Our designer already made a lot 
                    of beautiful prototipe of rooms that inspire you</p>
                <Button>Explore More</Button>
            </Container>
            <Container className="image-side">
                {rooms.map((room, idx) => (
                    <Card key={room.id} className={`room-card`}>
                        <Card.Img variant="top" src={room.image} className={roomRole[idx]} />
                        <Card.Body>
                            <Card.Text>{room.id < 10 && `0${room.id}`}<hr/>{room.type}</Card.Text>
                            <Card.Title>{room.title}</Card.Title>
                            <Button href={room.link}><GoArrowRight /></Button>
                        </Card.Body>
                    </Card>
                ))}
                <Container className="carousel">
                    {rooms.map((_, idx) => (
                        <span key={idx} className={roomRole[idx] + (idx === 0 ? " active" : "")}><span className="dot"></span></span>
                    ))}
                </Container>
            </Container>
            <Button className="btn-rooms" onClick={changeImg}><GoChevronRight /></Button>
        </Container>
    );
}