//This will open the default email app to send me an email
document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.getElementById("email-button");
    emailButton.addEventListener("click", function () {
        const email = "hbhinh1@hotmail.com";
        const subject = "Subject";
        const body = "Message Placeholder";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});
