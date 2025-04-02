// Merging Objects 
// Diff properties
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
Object.assign(o1, o2, o3); // Merges o2 and o3 with o1
console.log(o1);

// Same properties
const o4 = { a: 1, b: 1, c: 1 };
const o5 = { b: 2, c: 2 };
const o6 = { c: 3 };
Object.assign(o4, o5, o6);
console.log(o4);

let property = Object.getOwnPropertyDescriptor(o4, 'a');
console.log(property);

const obj = {};

// Define a non-configurable property
Object.defineProperty(obj, 'locked', {
  value: 'Cannot be deleted or reconfigured',
  configurable: false
});

// Define a configurable property "flexible"
Object.defineProperty(obj, 'flexible', {
  value: 'Can be modified',
  configurable: true,
});

// Define another configurable property "number"
Object.defineProperty(obj, 'number', {
  value: "902929999221",
  configurable: true
});

// non-configurable property
delete obj.locked;     
console.log(obj.locked); 

// Configurable property 
delete obj.flexible;    
console.log(obj.flexible);

console.log(obj.number);

const obj1 = {
  //name: "John",
  age: 30,
  hello: function() {
    let name = "Jake";
    console.log("Hello");
    console.log(this.name);
  }
};

obj1.hello();
console.log(obj1.name);
