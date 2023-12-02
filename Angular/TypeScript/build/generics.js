"use strict";
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['Lucas', 'Goku'], ['Vegeta']);
console.log(numArray);
console.log(stgArray);
