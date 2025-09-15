import { useState } from "react";
import { Link } from "react-router-dom";
import "./dividir.scss";

function Dividir() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (num1 === "" || num2 === "") {
      setResult("Preencha ambos os campos");
      return;
    }
    const n2 = parseFloat(num2);
    if (n2 === 0) {
      setResult("Não é possível dividr um número por zero");
    } else {
      const res = parseFloat(num1) / n2;
      setResult(res.toString());
    }
  };

  return (
    <div className="container-divisao">
      <h1>Exercício B - Divisão</h1>
      <p>Informe os valores nos campos abaixo para calcular a divisão deles</p>
      <label>Número 1 :</label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <label>Número 2 :</label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={calculate}>Calcular</button>
      <div className="result">
        <p className="result">Resultado: {result}</p>
      </div>
      <Link className="link" to="/">
        Inicio
      </Link>
      <Link className="link" to="/multiplicar">
        Multiplicar
      </Link>
    </div>
  );
}

export default Dividir;
