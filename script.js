const input = document.querySelector("input");
const form = document.getElementById("form");
const errorElements = document.querySelectorAll(".error");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    console.log(input.value);
    if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        console.log("valid");
        errorElements.forEach(e => {
            e.classList.remove("show");
        })
        form.classList.remove("error-outline");
    }
    else {
        console.log(" invalid");
        errorElements.forEach(e => {
            e.classList.add("show");
        })
        form.classList.add("error-outline");
    }

});