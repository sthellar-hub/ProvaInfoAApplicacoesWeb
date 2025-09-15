import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Multiplicar from './pages/Multiplicar';
import Dividir from './pages/Dividir';

function Navegacao() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/multiplicar" element={<Multiplicar />} />
      <Route path="/dividir" element={<Dividir />} />
    </Routes>
  );
}

export default Navegacao;
