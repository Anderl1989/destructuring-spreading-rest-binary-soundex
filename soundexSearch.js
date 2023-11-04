import countries from './countries.js';

const searchTerm = 'Teudschlammt';
// const searchTerm = 'Wiednan';

// See https://de.wikipedia.org/wiki/Soundex
//
// In most implementations the first letter of each word is not converted, and spaces are not removed,
// which can lead to better results in some cases (less wrong results),
// however if you miss-spell the first letter, you will not get a result at all.
// Thus I don't keep first letters in my implementation, and remove spaces.
// As far as my experience goes, some more wrong results are better that not having a result at all.
// Also it handles words better that may be written with or without spaces inbetween,
// which especially occurs in the german language rather often.
//
// E.g.: Donau Schifffahrt vs. Donauschifffahrt
//
// Soundex with first letters and spaces would be:
//   Donau Schifffahrt: D5 S7163
//   Donauschifffahrt:  D527163
//
// As you can see, the soundexes would not match each other
//
// But if you convert the first letters as well, they would be equal (as spaces are omitted as well)
// Soundex with converted first letters and removed spaces:
//   Donau Schifffahrt: 3527163
//   Donauschifffahrt:  3527163
//
function createSoundex(input, language) {
    let output = input.replace(/[^a-zß]/gi, '');
    if (language === 'de') {
        output = output.replace(/ch/gi, '7');
        output = output.replace(/[bpfvw]/gi, '1');
        output = output.replace(/[cgkqxszß]/gi, '2');
        output = output.replace(/[dt]/gi, '3');
        output = output.replace(/[l]/gi, '4');
        output = output.replace(/[mn]/gi, '5');
        output = output.replace(/[r]/gi, '6');
    } else { // english
        output = output.replace(/[bfpv]/gi, '1');
        output = output.replace(/[cgjkqsxz]/gi, '2');
        output = output.replace(/[dt]/gi, '3');
        output = output.replace(/[l]/gi, '4');
        output = output.replace(/[mn]/gi, '5');
        output = output.replace(/[r]/gi, '6');
    }
    output = output.replace(/[a-zß]/gi, '');
    output = output.replace(/([0-9])(?=\1)/gi, '');
    return output;
}

countries.forEach((country) => {
    country.soundex = createSoundex(country.translations.deu.common, 'de');
});

const soundex = createSoundex(searchTerm, 'de');
console.log(`Soundex of ${searchTerm} is ${soundex}`);
const found = countries.filter(c => c.soundex.includes(soundex));
console.log('Found', found.map(c => ({ name: c.translations.deu.common, soundex: c.soundex })));