import { Card, Container, Button } from "react-bootstrap";
import './index.scss';

export default function BannerComponent() {
  return (
    <Container className="banner-container">
        <Card>
            <Card.Body>
                <Container className="card-content">
                    <Card.Text className="label">New Arrival</Card.Text>
                    <Card.Title><h1>Discover Our New Collection</h1></Card.Title>
                    <Card.Text className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit 
                    tellus, luctus nec ullamcorper mattis.</Card.Text>
                </Container>
                <Button>Buy now</Button>
            </Card.Body>
        </Card>
    </Container>
  );
}