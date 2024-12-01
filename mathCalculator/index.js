class Calculator {
    add({ a, b }) {
        const result = a + b;
        console.log(`wynik: ${a} + ${b} = ${result}`);
    }

    subtract({ a, b }) {
        const result = a - b;
        console.log(`wynik: ${a} - ${b} = ${result}`);
    }

    multiply({ a, b }) {
        const result = a * b;
        console.log(`wynik: ${a} * ${b} = ${result}`);
    }

    divide({ a, b }) {
        if (b === 0) {
            console.log(`blad wyniku: jedna z liczb wynosi zero`); 
        }else{
            const result = a / b;
            console.log(`wynik: ${a} / ${b} = ${result}`);
        }

    }
}

const calc = new Calculator();
calc.add({ a: 2, b: 3 });
calc.subtract({a: 10, b: 5});
calc.multiply({a: 6, b: 6});
calc.divide({a: 4, b: 0});

