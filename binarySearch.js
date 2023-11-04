import countries from './countries.js';

const countryToSearch = 'Vietnam';

// sort by german country name
countries.sort((a, b) => a.translations.deu.common.localeCompare(b.translations.deu.common));

// find entry using normal find function
let iterations = 0;
let found = countries.find((c) => {
    iterations += 1;
    return c.translations.deu.common === countryToSearch;
});
console.log(`Normal: Found country after ${iterations} iterations`, found && found.capital);

// reset iterations counter
iterations = 0;

// find entry using binary search
function findCountry(country, countriesList) {
    iterations += 1;
    if (countriesList.length === 0) return null; // country not found
    const idx = Math.floor(countriesList.length / 2);
    const indicator = country.localeCompare(countriesList[idx].translations.deu.common);
    switch (indicator) {
        case -1:
            return findCountry(country, countriesList.slice(0, idx));
        case 1:
            return findCountry(country, countriesList.slice(idx + 1));
        case 0:
            return countriesList[idx];
        default:
            console.log('Something unexpected happened', indicator);
            return null;
    }
}
found = findCountry(countryToSearch, countries);
console.log(`Binary: Found country after ${iterations} iterations`, found && found.capital);