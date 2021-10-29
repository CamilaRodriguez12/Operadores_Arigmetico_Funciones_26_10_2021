let myStyle = `font-family:monospace;
                color:#fff;
                font-weight: 500;
                border-radius:10px;
                background:#00A7AF;
                padding: 5px;`;

function Suma (numero1, numero2, myStyle){
    let resultado = numero1 + numero2;
    console.group("Funcion SUMA");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado de la suma es: ${resultado}`, myStyle);
    console.groupEnd();
    
}

function Resta (numero1, numero2, myStyle){
    let resultado = numero1 - numero2;
    console.group("Funcion RESTA");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado de la resta es: ${resultado}`, myStyle);
    console.groupEnd();
    
}

function Multiplicar (numero1, numero2, myStyle){
    let resultado = numero1 * numero2;
    console.group("Funcion MÚLTIPLICAR");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado de la multiplicación es: ${resultado}`, myStyle);
    console.groupEnd();
    
}

function Division (numero1, numero2, myStyle){ // Moduulo es ell reciduo de una división
    let division = numero1 / numero2;  
    console.group("Funcion DIVISIÓN");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado de la  división es: ${division}`, myStyle);
    console.groupEnd();
    
}

function Elevar (numero1, numero2, myStyle){
    let resultado = numero1 ** numero2;
    console.group("Funcion ELEVAR");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado al elevar es: ${resultado}`, myStyle);
    console.groupEnd();
    
}

function Modulo (numero1, numero2, myStyle){ // Moduulo es ell reciduo de una división
    let division = numero1 / numero2;
    let modulo = numero1 % numero2;

    console.group("Funcion MODULO");
        console.log(`%cEl primer número es: ${numero1}`, myStyle);
        console.log(`%cEl segundo número es: ${numero2}`, myStyle);
        console.log(`%cEl resultado de la  división es: ${division}`, myStyle);
        console.log(`%cEl resultado del modulo (residuo) es: ${modulo}`, myStyle);
    console.groupEnd();
    
}

Suma(10,5,myStyle);
Resta(10,5,myStyle);
Multiplicar(10,5,myStyle);
Division(10,5,myStyle);
Elevar(10,5,myStyle);
Modulo(10,5,myStyle);