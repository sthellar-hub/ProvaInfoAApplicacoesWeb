import { useState } from 'react';
import { Link } from 'react-router-dom';
import './multiplicar.scss';

function Multiplicar() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    if (num1 === '' || num2 === '') {
      setResult('Preencha ambos os campos');
      return;
    }
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  return (
    <div className='conteiner-multiplicacao'>
      <h1>Exercício A - Multiplicar</h1>
      <p>Informe os valores nos campos abaixo para calcular a multiplicação deles</p>
      <label>Número 1 :</label>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <label>Número 2 :</label>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={calculate}>Calcular</button>
      <div className='result'>
      <p className="result">Resultado: {result}</p>
      </div>
      <Link className='link' to="/">Inicio</Link>
      <Link className='link' to="/dividir">Dividir</Link>
    </div>
  );
}

export default Multiplicar;
