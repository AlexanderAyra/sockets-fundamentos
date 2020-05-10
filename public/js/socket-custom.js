let socket = io();

socket.on('connect', () => {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

socket.emit('EnviarMensaje', {
    usuario: 'Alexander',
    mensaje: 'Hola a Todos'
}, (resp) => {
    console.log('Servidor: ', resp);
});

socket.on('EnviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
})