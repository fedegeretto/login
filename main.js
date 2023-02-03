// Obtenemos del DOM el botón de Inciar Sesión

iniciarSesion = document.getElementById('iniciar-sesion');


// Creamos un Evento Click y una Función

iniciarSesion.addEventListener('click', function(event){

    // Para que no recargue la página al hacer click en el botón
    event.preventDefault();

    // Variables que vamos a necesitar para la validación
    let usuario = document.getElementById('nombre-de-usuario').value;
    let contraseña = document.getElementById('password').value;

    // Validación
    if (usuario == "demo" && contraseña == "demo1234") {
        window.location.replace("bienvenidos.html");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
})


