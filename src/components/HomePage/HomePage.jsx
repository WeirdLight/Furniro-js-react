import BannerComponent from './Banner/Banner';
import RageComponent from './Rage/Rage';
import ProductsComponent from './Products/Products';
import RoomsComponent from './Rooms/Rooms';

export default function HomePage() {
  return (
    <>
      <BannerComponent />
      <RageComponent />
      <ProductsComponent />
      <RoomsComponent />
    </>
  );
}