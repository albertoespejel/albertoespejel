document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let comentarios = document.getElementById('comentarios').value.trim();

    // Validación de nombre (no debe estar vacío)
    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return;
    }

    // Validación de correo electrónico (utilizando expresión regular)
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Validación de número telefónico (puedes ajustar la expresión regular según el formato deseado)
    let telefonoRegex = /^\d{10}$/; // Asume un número de 10 dígitos
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, ingrese un número telefónico válido de 10 dígitos.');
        return;
    }

    // Validación de comentarios (opcional, dependiendo de tus requerimientos)
    if (comentarios === '') {
        alert('Por favor, ingrese sus preguntas o comentarios.');
        return;
    }

    // Si todas las validaciones son correctas, puedes proceder con el envío del formulario o mostrar un mensaje
    alert('Formulario enviado correctamente.');
    // Aquí podrías enviar el formulario con AJAX o realizar alguna otra acción
});