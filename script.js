// Live Date & Time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Contact Form Validation with Success Message
function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    document.getElementById("success-message").innerText = "Message Sent Successfully!";
    document.getElementById("success-message").style.display = "block";

    setTimeout(() => {
        document.getElementById("success-message").style.display = "none";
    }, 3000);

    document.querySelector(".contact-form").reset();
    return false;
}