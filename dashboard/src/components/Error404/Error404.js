import './Error404.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ImageError from '../../assets/images/image_error.png'

function Error404() {
  return (
    <main className="error_container">
    <div className='info_container'>
      <h1>Error 404</h1>
      <h2>Oops, el sitio al cual quiere acceder no se pudo encontrar :(</h2>
      <Button className="btn-cart" variant="success"><Link className="btn-error404" to="/"> Añadir al carrito</Link></Button>
    </div>
    <div className='image_container'>
      <img src={ImageError} alt="Image_Error" />
    </div>
    </main>
  );
}

export default Error404;