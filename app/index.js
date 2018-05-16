const arrayOfObjects = [
  {
    name: "Sean",
    age: "28"
  },
  {
    name: "Adrian",
    age: "33"
  },
  {
    name: "Alex",
    age: "19"
  }
];

const array = [2,4,6];

function sum(array) {
  return array.reduce((acc, curr) => acc + curr)
}

