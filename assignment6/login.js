window.onload = loginLoad;
function loginLoad(){
	document.getElementById("myLogin").onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    var Form = document.forms["myLogin"];
    var usernameInput = Form.username.value;
    var passwordInput = Form.password.value;

    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");

    if (usernameInput === registeredUsername && passwordInput === registeredPassword) {
        alert("Login successful!");
        return true;
    } else {
        alert("Username or password is incorrect. Please try again.");
        return false;
    }
}

			