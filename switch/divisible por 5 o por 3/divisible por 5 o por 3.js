let numero = parseInt(prompt("ingrese numero"))
let divisible = numero  % 5 == 0 && 3 == 0
switch (true) {
    case 1:
        console.log("numero divisible por 3 y 5");
        break;
        default:
            console.log("no es diviisble por 3 ni por 5");
        break;
}