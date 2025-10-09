let user = { name: "John", age: 30 };
function greet(user) {
  console.log("Hello, " + user.name);
  if (user.age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a minor");
  }
}
greet(user);
