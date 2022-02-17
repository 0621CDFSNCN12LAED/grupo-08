import './Error404.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ImageError from '../../assets/images/image_error.png'

function Error404() {
  /* Falta implementar el mediaquery */
  return (
    <main className="error_container">
      <div className='info_container'>
        <h1 className='titleError'>Error 404</h1>
        <h2 className='subtitleError'>Oops, el sitio al cual quiere acceder no se pudo encontrar :(</h2>
          <Link className="btn-error404" to="/"><Button className="btn-cart" variant="success"> Volver al inicio</Button></Link>
      </div>
        <img className='image_error' src={ImageError} alt="Image_Error" />
    </main>
  );
}

export default Error404;