// ===============================
// HALB Register Form Script
// ===============================

const form = document.getElementById("registerForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirm");

// Password Match Validation
form.addEventListener("submit", function(e){

    e.preventDefault();

    if(password.value !== confirmPassword.value){

        alert("❌ Passwords do not match!");

        confirmPassword.focus();

        return;

    }

    if(password.value.length < 8){

        alert("⚠ Password must contain at least 8 characters.");

        password.focus();

        return;

    }

    showSuccess();

});

// ===============================
// Success Popup
// ===============================

function showSuccess(){

    const popup=document.createElement("div");

    popup.className="success-popup";

    popup.innerHTML=`
    <div class="success-box">

        <h2>✔ Registration Successful</h2>

        <p>Welcome to HALB DESIGN</p>

        <button onclick="closePopup()">Continue</button>

    </div>
    `;

    document.body.appendChild(popup);

}

function closePopup(){

    location.href="index.html";

}

// ===============================
// Floating Inputs
// ===============================

const inputs=document.querySelectorAll("input");

inputs.forEach(input=>{

input.addEventListener("keyup",()=>{

if(input.value!=""){

input.style.borderColor="gold";

}

else{

input.style.borderColor="rgba(255,204,0,.5)";

}

});

});

// ===============================
// Button Animation
// ===============================

const button=document.querySelector("button");

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});