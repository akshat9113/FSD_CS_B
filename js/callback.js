function register() {
  console.log("register end");
}
function login() {
  setTimeout(() => {
    console.log("Login end");
  }, 3000);
}
function display() {
  console.log("Display end");
}
function waitfor() {
  const ms = 5000 + new Date().getTime();
  while (ms > new Date()) {}
}
register();
login();
display();