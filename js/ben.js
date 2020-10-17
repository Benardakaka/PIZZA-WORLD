let size, email;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;

function subscribe() {
    alert("Hello " + name +  "Thank for reaching out");
    console.log(name);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}