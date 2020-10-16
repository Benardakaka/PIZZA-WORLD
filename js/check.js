let size, email;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;
email = document.getElementById('#name').value;

function subscribe() {
    alert("Hello " + name + + email +" Thank for reaching out ");
    console.log(name);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size ");
    }
}