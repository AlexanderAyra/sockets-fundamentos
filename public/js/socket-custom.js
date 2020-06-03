let socket = io();

socket.on('connect', () => {
    console.log('Servidor Conectado');
});

socket.on('disconnect', () => {

    console.log('Perdimos conexion con el servidor');

});

socket.emit('enviarMensaje', {
    usuario: 'Alexander',
    mensaje: 'Hola a todos'
}, (resp) => {
    console.log(resp);
});

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});