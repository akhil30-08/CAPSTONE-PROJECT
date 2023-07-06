// A function to run on entering login in and password in login.html
function login(){
    let a = document.querySelector("#exampleInputEmail1").value;
    let b = document.querySelector("#exampleInputPassword1").value;
    if(a=="admin@admin.com" && b=="123456"){
        alert("Login Sucessful");
    }
    else{
        alert("Incorrect Email or Password");
    }
}
