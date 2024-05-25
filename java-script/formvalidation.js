const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(name=="")  {
    isvalid=false;
    document.getElementById( "error_name" ).innerHTML="Please enter your Password";
    document.getElementById("name").style.border="1px solid red"
  }
  else {
    isvalid=true
    document.getElementById( "error_name" ).innerHTML="";
    document.getElementById("name").style.border="1px solid balck"
  }

  if(email=="") {
    isvalid=false;
    document.getElementById( "error_email" ).innerHTML="Please enter your Email";
    document.getElementById("email").style.border="1px solid red"
  }
  else {
    isvalid=true;
    document.getElementById( "error_email" ).innerHTML="";
    document.getElementById("email").style.border="1px solid balck"
  }

  if(password=="") {
    isvalid=false;
    document.getElementById( "error_password" ).innerHTML="Please enter your Password";
    document.getElementById("password").style.border="1px solid red"
    return;
  }
  else {
    isvalid=true;
    document.getElementById( "error_password").innerHTML="";
    document.getElementById("name").style.border="1px solid black"
  }

  const userData = JSON.parse(localStorage.getItem("userInfo")) || [];
  const existingUser = userData.find(user => user.email === email);
  if (existingUser) {
    alert("This email is already registered. Please sign in or use a different email.");
    signupForm.reset(); 
    return;
  }

  userData.push({ name, email, password });
  localStorage.setItem("userInfo", JSON.stringify(userData));

  Swal.fire({
    title: "Account Created",
    text: "You Account is SuccessFully created",
    icon: "success"
  });
  setInterval(() => {
    window.location.href = "sign-in.html";
    signupForm.reset();
  },1500);
});