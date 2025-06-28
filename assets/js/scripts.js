
window.onload = function(){
    let users = JSON.parse(localStorage.getItem("users")) || {};
    let correo = JSON.parse(localStorage.getItem("usuarios")) || {};
    
}
function auth(){
    let email = document.getElementById('email').value.toLowerCase();
    let password = document.getElementById('password');
    let users = JSON.parse(localStorage.getItem("users")) || {};
    let inventario = JSON.parse(localStorage.getItem("inventario")) || {};
    
    if (users[email]){
        let user = users[email]
        if (user.password == password.value) {
            if (!inventario[email]){
                inventario[email] = {}
            }
            localStorage.setItem("inventario", JSON.stringify(inventario));
            alert("Bienvenido a inventario");
            sessionStorage.setItem("auth", true)
            window.location = "../other/home.html"
        } else {
          alert("Datos incorrectos");
        }
    }
    else{
        alert("Este Correo no existe");
    }
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    console.log(users)
}


function register(){
    let email = document.getElementById('email').value.toLowerCase();
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    email.innerHTML = "";
    let users =JSON.parse(localStorage.getItem("users")) || {};
    if(users[email]){
        alert("Este Correo ya se encuentra registrado, Inicia sesion");
        window.location = "../login.html"
    }
    else if (!email || !password || !name || !lastname){
        alert("campos vacios");
    }
    else
    {
        users[email] = {"name": name, "lastname":lastname, "password": password}
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario creado satisfactoriamente")
        window.location = "../login.html"
    }
    console.log(users)
     
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    
}

