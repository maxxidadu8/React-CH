import 'bootstrap/dist/css/bootstrap.min.css'; 
import cart from './assets/carrito1.svg';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={cart} alt="cart" className="mr-2"/>
      <span className="badge badge-primary text-dark">0</span>
    </div>
  );
}

export default CartWidget;
