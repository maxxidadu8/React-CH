import 'bootstrap/dist/css/bootstrap.min.css'; 
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h1>{greeting}</h1>
    </div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
