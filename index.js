// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const copyCats = [...cats];
    copyCats.push(name);
    return copyCats;
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}