// a regular function has a limited number of parameters
{
    function add(a, b) {
        return a + b;
    }
    const sum = add(1, 2);
    console.log(sum);

    // a third parameter would be ignored:
    const sum2 = add(1, 2, 3);
    console.log(sum2);
}

// but what if we want a function, that can have any number of parameters?

{ // Solution A: using an array parameter
    function add(values) {
        let sum = 0;
        values.forEach((number) => {
            sum += number;
        });
        return sum;
    }

    const sum = add([1, 2]);
    console.log(sum);

    const sum2 = add([1, 2, 3]);
    console.log(sum2);
}
{ // Solution B: using the `arguments` Object (The "oldschool" way)
    function add() {
        let sum = 0;
        // arguments is not an Array! thus we can not use the forEach Function. However it is an Iterable, so a regular for-loop works
        for (let i = 0; i < arguments.length; i += 1) {
            sum += arguments[i];
        }
        return sum;
    }

    const sum = add(1, 2);
    console.log(sum);

    const sum2 = add(1, 2, 3);
    console.log(sum2);
}
{ // Solution B2: using the `arguments` Object (The "oldschool" way), but utilizing a spread operator to convert the Iterable to a real Array
    function add() {
        let sum = 0;
        const values = [...arguments]; // spread operators work on Iterables as well
        values.forEach((number) => {
            sum += number;
        });
        return sum;
    }

    const sum = add(1, 2);
    console.log(sum);

    const sum2 = add(1, 2, 3);
    console.log(sum2);
}
{ // Solution C: The modern approach using the rest-parameters
    // the rest-parameters look like a spread operator, but does exactly the inverse. The function parameters are combined into an Array
    function add(...values) {
        let sum = 0;
        values.forEach((number) => {
            sum += number;
        });
        return sum;
    }

    const sum = add(1, 2);
    console.log(sum);

    const sum2 = add(1, 2, 3);
    console.log(sum2);

    // of course we can also combine it with a spread operator in the function call
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sum3 = add(...numbers);
    console.log(sum3);
}

// Note: `arguments` and rest-parameters are not the same!
// Not only is `arguments` just an iterable and rest-parameters a real array
// but also they differ, when having other function parameters as well:
function calculate(operator, ...numbers) { // rest parameter must always be the last parameter!
    console.log('Operator parameter:', operator);
    console.log('Arguments:', arguments);
    console.log('Arguments as array:', [...arguments]);
    console.log('Rest parameter:', numbers);
    // As you can see from this logs, arguments contains all named parameters as well
    // While rest-parameter only contains remaining parameters

    // here goes some more code to calculate...
}
calculate('add', 1, 2, 3, 4, 5);