
function greetUser() {
    let name = document.getElementById("nameInput").value.trim()
    if (name !== "") {
        document.getElementById("greeting").innerText =
            "Hello, " + name;
    } else {
        alert("Please enter your name.");
    }
}
function changeColor(box, color) {
    box.style.backgroundColor = color
   
    if (color === "blue" || color === "green" || color === "red") {
        box.style.color = "white";
    } else {
        box.style.color = "black";
    }
} 