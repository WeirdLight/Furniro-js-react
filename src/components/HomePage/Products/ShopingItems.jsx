import { Card, Button, Badge, Container, ListGroup, Image } from "react-bootstrap";
import syltherine from './images/Syltherine.png';
import leviosa from './images/Leviosa.png';
import lolito from './images/Lolito.png';
import respira from './images/Respira.png';
import grifo from './images/Grifo.png';
import muggo from './images/Muggo.png';
import pingky from './images/Pingky.png';
import potty from './images/Potty.png';
import like from './images/like.svg';
import share from './images/share.svg';
import compare from './images/compare.svg';
import { GoArrowRight } from "react-icons/go";

const items = [
    {
        id: 1,
        title: "Syltherine",
        descr: "Stylish cafe chair",
        sale: 30,
        isNew: false,
        cost: 2500000,
        prev: syltherine
    },
    {
        id: 2,
        title: "Leviosa",
        descr: "Stylish cafe chair",
        sale: null,
        isNew: false,
        cost: 2500000,
        prev: leviosa
    },
    {
        id: 3,
        title: "Lolito",
        descr: "Luxury big sofa",
        sale: 50,
        isNew: false,
        cost: 14000000,
        prev: lolito
    },
    {
        id: 4,
        title: "Respira",
        descr: "Outdoor bar table and stool",
        sale: null,
        isNew: true,
        cost: 500000,
        prev: respira
    },
    {
        id: 5,
        title: "Grifo",
        descr: "Night lamp",
        sale: null,
        isNew: false,
        cost: 15000000,
        prev: grifo
    },
    {
        id: 6,
        title: "Muggo",
        descr: "Small mug",
        sale: null,
        isNew: true,
        cost: 1500000,
        prev: muggo
    },
    {
        id: 7,
        title: "Pingky",
        descr: "Cute bed set",
        sale: 50,
        isNew: false,
        cost: 7000000,
        prev: pingky
    },
    {
        id: 8,
        title: "Potty",
        descr: "Minimalist flower pot",
        sale: null,
        isNew: true,
        cost: 500000,
        prev: potty
    }
];

export default function ShopintItemsComponent() {
  return (
    <Container className="shop-items-container">
        {items.map((item) => (
            <Card>
                <Card.Img src={item.prev} alt={item.title} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="descr">{item.descr}</Card.Text>
                    {item.sale && <Badge bg="sale">-{item.sale}%</Badge>}
                    {item.isNew && <Badge bg="new">New</Badge>}
                    <Card.Text className="cost">
                        Rp {item.sale ? (item.cost * (item.sale / 100)).toLocaleString('id-ID') : 
                        item.cost.toLocaleString('id-ID')}
                        {item.sale && <span className="old-cost"> Rp {item.cost.toLocaleString('id-ID')}</span>}
                    </Card.Text>
                </Card.Body>
                <Card.Body className="card-hover">
                    <Button>Add to cart</Button>
                    <ListGroup horizontal>
                        <ListGroup.Item >
                            <Image src={share} alt="share" />
                            <a href="#share">Share</a>
                        </ListGroup.Item>
                        <ListGroup.Item href="#compare">
                            <Image src={compare} alt="compare" />
                            <a href="#compare">Compare</a>
                        </ListGroup.Item>
                        <ListGroup.Item href="#like">
                            <Image src={like} alt="like" />
                            <a href="#like">Like</a>
                        </ListGroup.Item>
                    </ListGroup>
                    <a href="#learn-more">
                        <GoArrowRight />
                        Learn more
                    </a>
                </Card.Body>
            </Card>
        ))}
    </Container>
  );
}