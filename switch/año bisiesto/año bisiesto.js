let numero = parseInt(prompt("ingrese año"))
let divisible = numero  % 400 == 0 
switch (true) {
    case 1:
        console.log("año bisiesto");
        break;
        default:
            console.log("no es un año bisiesto");
        break;
}