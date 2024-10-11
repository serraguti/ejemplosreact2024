import batman from './../assets/images/batman.jpg';
import './SumarNumeros.css';

function SumarNumeros(props) {
    const realizarSuma = (num1, num2) => {
        //var suma = num1 + num2;
        var suma = 
        parseInt(props.numero1) + parseInt(props.numero2);
        console.log("Suma " + suma);
    }

    return (<div>
        <h1>Sumar números Component</h1>
        <button onClick={ () => realizarSuma(5,6)}>
            Sumar {props.numero1} + {props.numero2}
        </button>
        <button onClick={ () => realizarSuma(7,7)}>
        Sumar {props.numero1} + {props.numero2}
        </button>
        <img src={batman}/>
    </div>)
}

export default SumarNumeros;