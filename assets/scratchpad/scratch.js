const user = {
    firstname: "john",
    lastname: "smith",
    age: 25,
};
// storing data into local localStorage
localStorage.setItem("userData", JSON.stringify(user));
