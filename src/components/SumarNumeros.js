import batman from './../assets/images/batman.jpg';
import './SumarNumeros.css';

function SumarNumeros() {
    const realizarSuma = (num1, num2) => {
        var suma = num1 + num2;
        console.log("Suma " + suma);
    }

    return (<div>
        <h1>Sumar números Component</h1>
        <button onClick={ () => realizarSuma(5,6)}>
            Sumar 5 + 6
        </button>
        <button onClick={ () => realizarSuma(7,7)}>
            Sumar 7 + 7
        </button>
        <img src={batman}/>
    </div>)
}

export default SumarNumeros;