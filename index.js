// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
// Destructive last
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
// Destructive first
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
// No change append
function appendCat(name) {
    return [...cats, name];
}
// prepend no change 
function prependCat(name) {
    return [name, ...cats]
}
// Remove last cat unchanged
function removeLastCat(name) {
   return cats.slice(0, cats.length - 1)
}

// Removes first unchanged 

function removeFirstCat(name) {
   return cats.slice(1)
}