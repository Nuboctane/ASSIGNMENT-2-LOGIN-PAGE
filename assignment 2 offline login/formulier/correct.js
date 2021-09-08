const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

var errors = 0;
var submited = false;
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	
});

form.addEventListener('submit', f => {
	f.preventDefault();

	// next();
});



function checkInputs() {
	const username2 = username.value.trim();
	const password2 = password.value.trim();

    if (username2 === '') {
		setErrorFor(username2, 'choose a username');
		errors ++;

	} else {
		setSuccessFor(username2);
    }
    
    if(password2 === '') {
		setErrorFor(password2, 'create a password');
		errors ++;

	} else {
		setSuccessFor(password2);
    }
	if (errors > 0){
		document.getElementById("form").style.backgroundColor = "orange";
		alert(errors + " fields have not been filled correctly")
		errors = 0;
	 }else{
		document.getElementById("form").style.backgroundColor = "green";
		
	 }
		

}





function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
    document.getElementById("form").style.backgroundColor = "orange";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;

    // formControl.className = 'form-control success';

}

