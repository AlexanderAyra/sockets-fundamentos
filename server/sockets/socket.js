const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la Aplicacion'
    });

    client.on('disconnect', () => {

        console.log('Usuario Desconectado');

    });

    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {
        //     callback('TODO SALIO BIEN');
        // } else {
        //     callback('TODO SALIO MAL!!!!!');
        // }

    });

});