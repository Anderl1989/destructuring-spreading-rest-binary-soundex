// Array spreading
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekend = ['Saturday', 'Sunday'];
{ // Without spreading
    const week = weekdays.concat(weekend);
    console.log(week);
}
{ // With spreading
    const week = [...weekdays, ...weekend];
    console.log(week);
}
{ // Spreading can also be mixed with regular array entries
    const week = ['Sunday', ...weekdays, 'Saturday'];
    console.log(week);
}



// String spreading
const hello = 'Hello World!';
{ // without spreading
    const helloLetters = hello.split('');
    console.log(helloLetters);
}
{ // with spreading
    const helloLetters = [...hello];
    console.log(helloLetters);
}



// Spreading in function calls
const coordinates = [3, 5];
function printCoordinates(x, y) {
    console.log(`x: ${x}, y: ${y}`);
}
// without spreading
printCoordinates(coordinates[0], coordinates[1]);
// with spreading
printCoordinates(...coordinates);

// Note: you can spread arrays and strings everywhere, where you can enter multiple values comma separated (inside arrays or in function calls)



// Object spreading
const country = {
    name: 'Germany',
    continent: 'Europe',
};
const countryDetails = {
    capital: 'Berlin',
    language: 'German',
}
{ // without spreading
    const germany = {
        name: country.name,
        continent: country.continent,
        capital: countryDetails.capital,
        language: countryDetails.language,
    };
    console.log(germany);
}
{ // with spreading
    const germany = {
        ...country,
        ...countryDetails,
    };
    console.log(germany);
}
{ // Spreading can also be mixed with regular objct parameters
    const germany = {
        ...country,
        ...countryDetails,
        population: 83200000,
    };
    console.log(germany);
}
{ // Parameter that occur multiple times will overwrite each other
    const austria = {
        ...country,
        name: 'Austria',
    };
    console.log(austria);

    // The parameter order matters, when overwriting parameters
    const notAustria = {
        name: 'Austria',
        ...country,
    };
    console.log(notAustria);

    // Parameters can also be overwritten by spreading
    const switzerlandName = {
        name: 'Switzerland'
    };
    const switzerland = {
        ...country,
        ...switzerlandName,
    };
    console.log(switzerland);
}

// Note: You can spread objects everywhere, where you can have key-value pairs (inside objects and inside React Component-Properties, see example below)

// React example. We cannot run it in nodejs, thus I had to comment it:
/*
function MyComponent {
    const handlers = {
        onMouseDown: () => {
            // some code here
        },
        onMouseUp: () => {
            // some code here
        },
    };

    return (
        <div
            onClick={() => { // property without spreading
                // some code here
            }}
            {...handlers} // spreading object into Component Properties
        >
            <p>Hello World</p>
        </div>
    );
}
*/