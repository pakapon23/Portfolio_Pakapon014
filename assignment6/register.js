window.onload = pageLoad;
function pageLoad(){
	document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Form = document.forms["myRegister"];
    var firstname = Form.firstname.value;
    var lastname = Form.lastname.value;
    var gender = Form.gender.value;;
    var birthday = Form.bday.value;
    var email = Form.email.value;
    var username = Form.username.value;
    var password = Form.password[0].value;
    var retypePassword = Form.password[1].value;
    var errorMessage = document.getElementById("errormsg");
    
    if (!firstname || !lastname || !gender || !birthday || !email || !username || !password || !retypePassword) {
        errorMessage.innerHTML = "Please fill in all required fields.";
        return false;
    }
    
    if (password !== retypePassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        return false;
    }
    alert("Register successful!");
    
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);
    
    return true;
}