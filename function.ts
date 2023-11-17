function numerosPares(numeros:Number[]){
    const filtroYSuma = numeros.filter(num => num.valueOf() % 2 === 0)
    .reduce((acc, curr) => {
        let suma = acc.valueOf() + curr.valueOf() 
          console.log(`${acc} + ${curr} = ${suma}`)    
        return suma 
    }, 0);

    return filtroYSuma

}

// Ejemplo de uso:
const listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumaPares: Number = numerosPares(listaNumeros);
console.log("La suma de los números pares es:", sumaPares);