// ===============================
// HALB DESIGN LOGIN
// ===============================

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Create Show/Hide Password Button
const passInput = document.getElementById("password");

const eye = document.createElement("span");
eye.innerHTML = "👁";
eye.style.cursor = "pointer";
eye.style.position = "absolute";
eye.style.right = "15px";
eye.style.top = "15px";
eye.style.color = "gold";

passInput.parentElement.appendChild(eye);

eye.onclick = () => {

    if(passInput.type === "password"){

        passInput.type = "text";
        eye.innerHTML = "🙈";

    }else{

        passInput.type = "password";
        eye.innerHTML = "👁";

    }

};

// Login

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(username.value.trim()===""){

        alert("Please enter Username");
        return;

    }

    if(password.value.trim()===""){

        alert("Please enter Password");
        return;

    }

    const btn=document.querySelector("button");

    btn.innerHTML="Logging in...";

    btn.disabled=true;

    setTimeout(()=>{

        showSuccess();

    },1500);

});

// Success Popup

function showSuccess(){

const popup=document.createElement("div");

popup.className="success-popup";

popup.innerHTML=`

<div class="success-box">

<h2>WELCOME</h2>

<p>Login Successful</p>

<button id="continueBtn">

Continue

</button>

</div>

`;

document.body.appendChild(popup);

document.getElementById("continueBtn").onclick=function(){

window.location.href = "index.html";

}

}