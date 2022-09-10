let a = +prompt("מה המספר  הראשון שלך");
let b = +prompt("מה המספר השני שלך?");
let c = prompt("מה התרגיל? נא להשתמש ב: + או - או * או /");

if (c == "+") {
  alert(a + b);
} else if (c == "-") {
  alert(a - b);
} else if (c == "*") {
  alert(a * b);
} else if (c == "/") {
  alert(a / b);
}
