import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="d-flex flex-column align-items-start">
              <a className="navbar-brand" href="/">CarAccesories</a>
              <div className="navbar-nav">
                <button className="nav-item nav-link">Performance</button>
                <button className="nav-item nav-link">BodyKits</button>
                <button className="nav-item nav-link">Accesorios</button>
                <button className="nav-item nav-link">Llantas</button>
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
      );
    }

export default NavBar;
