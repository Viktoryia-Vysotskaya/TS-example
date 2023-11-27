var per = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
function showParam(param) {
  return per[param];
}
var age = showParam("age");
var firstName = showParam("firstName");
