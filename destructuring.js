// Array destructuring
const coordinates = [3, 5];
{ // without destructuring
    const x = coordinates[0];
    const y = coordinates[1];
    console.log(`The coordinates are x: ${x}, y: ${y}`);
}
{ // with destructuring
    // when destructuring an array, make sure to use the square brackets: [ ... ]
    // Attention: Variable order must match the order in the array
    const [x, y] = coordinates;
    console.log(`The coordinates are x: ${x}, y: ${y}`);

    // when destructuring an array, variable names can be anything you want:
    const [a, b] = coordinates;
    console.log(`The coordinates are a: ${a}, b: ${b}`);
}
{ // you don't have to assign every value, here are examples if you want only one of them
    const [x] = coordinates;
    console.log(`The x coordinate is: ${x}`);

    // note the leading comma to tell it to igonore the first value
    const [, y] = coordinates;
    console.log(`The y coordinate is: ${y}`);
}



// Object destructuring
const coordinatesObj = { x: 3, y: 5 };
{ // without destructuring
    const x = coordinatesObj.x;
    const y = coordinatesObj.y;
    console.log(`The coordinates are x: ${x}, y: ${y}`);
}
{ // with destructuring
    // when destructuring an object, make sure to use the curly brackets: { ... }
    // Attention: Variable names matter, you have to use the same name as the object property that you want to get
    // However, variable order is not important as it is assigned by name
    const { x, y } = coordinatesObj;
    console.log(`The coordinates are x: ${x}, y: ${y}`);

    // However, if you want different variable names, you can remane them
    const { x: a, y: b } = coordinatesObj;
    console.log(`The coordinates are a: ${a}, b: ${b}`);
}
{ // you don't have to assign every value, here are examples if you want only one of them
    const { x } = coordinatesObj;
    console.log(`The x coordinate is: ${x}`);

    const { y } = coordinatesObj;
    console.log(`The y coordinate is: ${y}`);
}