//intialising email
emailjs.init("SRqL99_JQE-ZTOF8T");

// Get data from URL
const params = new URLSearchParams(window.location.search);
const reciever = params.get("reciever");
const message = params.get("message");
const occasion = params.get("occassion");
const email = params.get("email");




// Fill your HTML card
document.getElementById("wish-card").innerHTML = `
  <div class="card">
    <h1>Special Wishes</h1>
    <h2>Dear ${reciever}</h2>
    <p>${message}</p>
    <p>With lots of love 💖</p>
  </div>
`;

// Send to EmailJS
document.getElementById("sendbutton").addEventListener("click", function () {
  emailjs.send("service_aqdgrfk", "template_be4tib3", {
    name: reciever,
    message: message,
    occasion: occasion,
    email: email,
    sender :"Secret Well Wisher"

  })
  .then(function(response) {
    alert("Wish sent successfully!");
    console.log("Email sent!", response);
  })
  .catch(function(error) {
    alert("Sending failed!");
    console.error("Error:", error);
  });
});


