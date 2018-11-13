var form = document.querySelector(".form");
var fields = form.querySelectorAll(".field");
var password = form.querySelector(".password");
var confirmPassword = form.querySelector(".confirm-password");
var birthday = form.querySelector(".birthday");
var email = form.querySelector('.email');
var gender = form.querySelectorAll('.gender');


var regBirthday = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
var regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

var createError = function(text) {
  var error = document.createElement("span");
  error.className = "error";
  error.innerHTML = text;
  return error;
};

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var errors = form.querySelectorAll(".error");

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].className += " errorBorder";
    } else {
      fields[i].classList.remove("errorBorder");
    }
  }
  for (var j = 0; j < errors.length; j++) {
    errors[j].remove();
  }
  
  if (password.value !== confirmPassword.value) {
    var error = createError("Password doesnt match");
    confirmPassword.parentElement.appendChild(error);
    password.className += " errorBorder";
    confirmPassword.className += " errorBorder";
  }
  if(birthday.value.match(regBirthday) == null) {
    var error = createError("Incorrect value. Example: 01/01/2018");
    birthday.parentElement.appendChild(error);
    birthday.className += " errorBorder";
  }
  if(email.value.match(regEmail) == null) {
    var error = createError("Incorrect value. Example: user@gmail.com");
    email.parentElement.appendChild(error);
    email.className += " errorBorder";
    
  }
});
