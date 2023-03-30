let numero1 = parseInt(prompt("ingrese el primer numero"))
let numero2 = parseInt(prompt("ingrese el segundo numero"))
 let mayor = numero1 > numero2
 let menor = numero1> numero2
 let igual = numero1 == numero2
 switch (mayor) {
    case 1: 
     console.log("primer numero mayor que el segundo")
         break;
    case 2:
        console.log("segundo numero mayor que el primero");
          break;
    case 3:
        console.log("son iguales")
           break;
     default:
        console.log("invalida");
         break;
 }