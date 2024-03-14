alert("Hola este es mi Javascript");    
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nav-toggle').addEventListener('click', function () {
        var navMenu = document.getElementById('nav-menu');
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formulario-contacto');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío predeterminado para mostrar las validaciones

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        if(nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Todos los campos son obligatorios');
            return; // Detiene la función si hay campos vacíos
        }

        if(!email.includes('@')) {
            alert('Ingresa un email válido');
            return; // Detiene la función si el email no es válido
        }

        alert('Formulario enviado con éxito');
        formulario.reset(); // Reinicia el formulario tras la validación exitosa
    });
});
