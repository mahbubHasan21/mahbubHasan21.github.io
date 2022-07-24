// Mobile menu
const bars = document.getElementById("bars");
const xBars = document.getElementById("x-bars");
const nav = document.getElementById("nav");

bars.addEventListener("click", () => {
  bars.style.display = "none";
  xBars.style.display = "block";
  nav.style.display = "block";
});
xBars.addEventListener("click", () => {
  bars.style.display = "block";
  xBars.style.display = "none";
  nav.style.display = "none";
});

//email validation
const form = document.querySelector("form");
const btn = document.getElementById("contact-btn");

let fullName = form.querySelector("#fullName");
let emailId = form.querySelector("#email_id");
let message = form.querySelector("#message");
const myDiv = form.querySelector(".contact-btn");
const contBtn = myDiv.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (fullName && emailId && message) {
    var params = {
      from_name: fullName.value,
      email_id: emailId.value,
      message: message.value,
    };

    emailjs
      .send("service_kcw29ir", "template_g7qxy4w", params)
      .then(function (res) {
        let notif = document.createElement("p");
        let text = document.createTextNode("Message submitted successfully!");
        notif.appendChild(text);
        myDiv.insertBefore(notif, contBtn);
        setTimeout(() => {
          myDiv.removeChild(notif);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.text);
        let notif = document.createElement("p");
        let text = document.createTextNode(
          `Somthing wrong! ${err.text}. please try again.`
        );
        notif.style.color = "red";
        notif.appendChild(text);
        myDiv.insertBefore(notif, contBtn);
        setTimeout(() => {
          myDiv.removeChild(notif);
        }, 10000);
      });
    fullName.value = "";
    emailId.value = "";
    message.value = "";
  } else {
    let notif = document.createElement("p");
    let text = document.createTextNode("Please complete the form!");
    notif.appendChild(text);
    myDiv.insertBefore(notif, contBtn);
    setTimeout(() => {
      myDiv.removeChild(notif);
    }, 3000);
  }
});
