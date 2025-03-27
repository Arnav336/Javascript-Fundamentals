let user = {
    name: "John Smith",
    age: 35
  };
const newuser= JSON.parse(JSON.stringify(user));
console.log(newuser)