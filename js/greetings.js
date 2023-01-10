const loginForm = document.querySelector("div.div-login");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    const currentHour = parseInt(new Date().getHours());
    let greetingMsg = "";
    if (5 <= currentHour && currentHour < 12) {
        greetingMsg = "Good Morning, ";
    } else if (12 <= currentHour && currentHour < 17) {
        greetingMsg = "Good Afternoon, ";
    } else if (17 <= currentHour && currentHour < 21) {
        greetingMsg = "Good Evening, ";
    } else {
        greetingMsg = "Good night, ";
    }
    greeting.innerText = `${greetingMsg}${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
