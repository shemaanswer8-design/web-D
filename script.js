// THEME SWITCHER
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// FORM VALIDATION
const form = document.getElementById("signupForm");
const formMsg = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username === "" || email === "") {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
    } else {
        formMsg.textContent = "Form submitted successfully!";
        formMsg.style.color = "green";
    }
});

// CHANGE TEXT BUTTON
const changeBtn = document.getElementById("changeBtn");
const changeText = document.getElementById("changeText");

changeBtn.addEventListener("click", () => {
    changeText.textContent = "You clicked the button!";
});

// CHANGE IMAGE ON CLICK
const myImage = document.getElementById("myImage");
let toggle = true;

myImage.addEventListener("click", () => {
    if (toggle) {
        myImage.src = "img2.jpg";
    } else {
        myImage.src = "img1.jpg";
    }
    toggle = !toggle;
});
