const input = document.querySelector(".email__content--field--input");
const inputLabel = document.querySelector(".email__content--field--label");
const done = document.querySelector(".email__content--field--btn");

done.addEventListener("click", function () {
    if (input.value === "" || !input.value.includes("@")) {
        input.style.outline = "red 2px solid";
        input.style.borderRight = "2px solid red";

        inputLabel.innerText = "Wrong e-mail!, Please try again";
        inputLabel.style.color = "red";
        input.value = "";
    } else {
        input.style.outline = "green 2px solid";
        input.style.borderRight = "2px solid green";

        inputLabel.innerText = "Thanks and see you soon!";
        inputLabel.style.color = "green";
        input.value = "";
    }
});
