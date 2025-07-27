import { Container, Button } from 'react-bootstrap';
import ShopintItemsComponent from './ShopingItems';
import './index.scss';

export default function ProductsComponent() {
    return(
        <Container className="products-container">
            <h2 className='title'>Our Products</h2>
            <ShopintItemsComponent />
            <Button className='btn-products'>Show more</Button>
        </Container>
    )
}