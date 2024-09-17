function fatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log("Fatorial de 5: " + fatorial(5));

console.log("Fatorial de 10: " + fatorial(10));

console.log("Fatorial de 0: " + fatorial(0));

console.log("Fatorial de 1: " + fatorial(1));


//Fibonacci utilizando recursividade

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Fibonacci de 5: " + fibonacci(5));

