// Write your solution here!
// 1. Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 2. Write a function to add a cat to the end (destructively)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 3. Write a function to add a cat to the beginning (destructively)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 4. Write a function to remove the last cat (destructively)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 5. Write a function to remove the first cat (destructively)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 6. Write a function to add a cat to the end (non-destructively)
function appendCat(name) {
  return [...cats, name];
}

// 7. Write a function to add a cat to the beginning (non-destructively)
function prependCat(name) {
  return [name, ...cats];
}

// 8. Write a function to remove the last cat (non-destructively)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// 9. Write a function to remove the first cat (non-destructively)
function removeFirstCat() {
  return cats.slice(1);
}  