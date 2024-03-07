import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="d-flex flex-column align-items-start">
              <a className="navbar-brand" href="/">CarAccesories</a>
              <div className="navbar-nav">
                <Link to={"/category/Performance"} className="nav-link ml-2" >Performance</Link>
                <Link to={"/category/BodyKits"} className="nav-link ml-2" >BodyKits</Link>
                <Link to={"/category/Accesorios"} className="nav-link ml-2" >Accesorios</Link>
                <Link to={"/category/Llantas"} className="nav-link ml-2" >Llantas</Link>
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
      );
    }

export default NavBar;
