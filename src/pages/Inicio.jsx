import { Link } from 'react-router-dom';
import './inicio.scss';

function Inicio() {
  return (
    <div>
      <h1>Sthella Bottari dos Santos</h1>
      <p className='subtitulo'>Informática A</p>
      <Link className='link' to="/multiplicar">Multiplicar</Link>
      <Link className='link' to="/dividir">Dividir</Link>
    </div>
  );
}

export default Inicio;
