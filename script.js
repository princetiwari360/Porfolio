document.getElementById("contact-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseElement = document.getElementById("response");

    const templateParams = {
        from_name: name,
        from_email: email,
        to_email: "tiwariprince340@gmail.com",
        message: message
    };

    emailjs
        .send(
            "service_djl9k4k",
            "template_fwq8azi",
            templateParams
        )
        .then(function () {

            responseElement.textContent =
                "Message sent successfully!";

            responseElement.classList.remove("hidden");

            responseElement.style.color = "green";

            document.getElementById("contact-form").reset();

        })
        .catch(function (error) {

            responseElement.textContent =
                "Failed to send the message. Please try again.";

            responseElement.classList.remove("hidden");

            responseElement.style.color = "red";

            console.error("Error:", error);
        });
});
