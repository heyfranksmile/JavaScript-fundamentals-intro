let oldFamily = {
  status: {
    name: "frank",
    age: 20,
  },
  getFamily: function () {
    this.status.age--;
    return this.status.age;
  },
};

oldFamily.getFamily(); // 19

// ====== Destructuring + new syntax ======

let newFamily = {
  status: {
    name: "frank",
    age: 20,
  },
  getFamily() {
    this.status.age--;
    return this.status.age;
  },
};

const {
  getFamily,
  status: { name, age },
} = newFamily;

var A = { name: "frank" };
var B = { name: "andrea" };

var { name: nameA } = A;
var { name: nameB } = B;

console.log(nameA);
// frank
console.log(nameB);
// andrea

"Frank Kim".split(" "); // (2) ["Frank", "Kim"]

let [firstName, surname] = "Frank Kim".split(" ");
console.log(firstName); // Frank
console.log(surname); // Kim

let [first, second, third, fourth, fifth, ...last] = "Frank Kim";

console.log(first); // F
console.log(second); // r
console.log(third); // a
console.log(fourth); // n
console.log(fifth); // k
console.log(last); // [" ", "K", "i", "m"]
