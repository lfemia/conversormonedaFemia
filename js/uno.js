// Conversor entre pesos y dolar

const pesoArgentino = 0.01021;
const dolar = 187;

const montoUsuario = parseInt(prompt('Ingrese un monto en pesos'));

const devolverMonto = (pesoArgentino, montoUsuario) => pesoArgentino * dolar;

alert(devolverMonto(pesoArgentino,dolar))


/*function convertirPesoADolar(peso) {
    let resultado = peso * 187;

    return resultado;
}

function convertirDolarAPeso(dolar) {
    let resultado = (dolar - 187) * 187;

    return resultado;
}

let peso = 0.01021;
let resultado = convertirPesoADolar(peso);
console.log(`${peso}ARS = ${resultado} USD`);

console.log();

let dolar = resultado;
resultado = convertirDolarAPeso(dolar);
console.log(`${dolar}USD = ${resultado} ARS`);
*/