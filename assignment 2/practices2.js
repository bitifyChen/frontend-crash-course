//Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person.
const person = { name: "Chenchen", age: 25, gender: "Male" };
console.log("Name: " + person.name);
console.log("Age: " + person.age);

//Add a method to the person object created in the previous assignment called greet.
//The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.
person.greet = () => {
  console.log("Hello");
};
person.greet();

//Add a properties called friends to the person which contains several names and print it.
person.friends = ["A", "B", "C"];
person.friends.forEach((e) => {
  console.log(e);
});
