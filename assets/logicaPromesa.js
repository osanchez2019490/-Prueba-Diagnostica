function enviarDatos(){
    const nombre = document.getElementById('nombre').value;

    enviarDatosAlServidor(nombre)
        .then(monstrarMensajaBienvenida)
        .catch(monstrarMensajeError)
}

function enviarDatosAlServidor (nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const autorizado = (nombre.toLowerCase() == 'papavictor');
            if(autorizado){
                resolve('Bienvenido al sistema');

            }else{
                reject('Ustede no está autorizado');
            };
        }, 2000);
    });
}

function monstrarMensajaBienvenida(mensaje){
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}


function monstrarMensajeError(mensaje){
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}