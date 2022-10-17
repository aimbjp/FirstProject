// show password function

const password = document.querySelector("#password");
const show = document.querySelector("#show");


show.addEventListener('click', () => {
    if (show.classList.contains('show-pass')){
        password.setAttribute("type", "text");
        show.innerHTML = "hide";
        // show.classList.add('unshow-pass');
        // show.classList.remove('show-pass');
        show.classList.replace('show-pass', 'unshow-pass');
    } else if (show.classList.contains('unshow-pass')){
        show.innerHTML = "show";
        // show.classList.add('show-pass');
        // show.classList.remove('unshow-pass');
        show.classList.replace('unshow-pass', 'show-pass');
        password.setAttribute("type", "password");
    }
})



// login registration forget password form

const loginSec = document.querySelector("#form-login");
const passwordSec = document.querySelector("#forget-password");
const registrationSec = document.querySelector("#registration");
const passwordLost = document.querySelector("#lost_password");
const registrationLink = document.querySelector("#signup");
const closeReg = document.querySelector("#closeReg");
const closePassword = document.querySelector("#close");

registrationLink.addEventListener("click", () => {
    loginSec.style.display = "none";
    registrationSec.classList.remove('hide');
});

closeReg.addEventListener("click", () => {
    loginSec.style.display= "grid";
    registrationSec.classList.add('hide');
});

passwordLost.addEventListener("click", () => {
    loginSec.style.display= "none";
    passwordSec.classList.remove('hide');
});

closePassword.addEventListener("click", () => {
    loginSec.style.display= "grid";
    passwordSec.classList.add('hide');
});



const password2 = document.querySelector("#password2");
const show2 = document.querySelector("#show2");

show2.addEventListener('click', () => {
    if (show2.classList.contains('show-pass')){
        password2.setAttribute("type", "text");
        show2.innerHTML = "hide";
        // show.classList.add('unshow-pass');
        // show.classList.remove('show-pass');
        show2.classList.replace('show-pass', 'unshow-pass');
    } else if (show2.classList.contains('unshow-pass')){
        show2.innerHTML = "show";
        // show.classList.add('show-pass');
        // show.classList.remove('unshow-pass');
        show2.classList.replace('unshow-pass', 'show-pass');
        password2.setAttribute("type", "password");
    }
})
const password3 = document.querySelector("#password3");




// regexp match for email and password

const email = document.getElementById('email');

registrationSec.addEventListener('submit', e => {
    e.preventDefault();
    if (checkInputs()) {
        alert('Регистрация прошла успешно');
    }

});


function checkInputs () {
    const emailValue = email.value.trim();
	const passwordValue = password2.value.trim();
	const password2Value = password3.value.trim();
    
    if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else {
		setSuccessFor(password2);
	}
	
    if(password2Value === '') {
		setErrorFor(password3, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password3, 'Passwords does not match');
	} else{
		setSuccessFor(password3);
	}

    if(passwordValue == password2Value && isEmail(emailValue)) {
        return true;
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
    return true;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}