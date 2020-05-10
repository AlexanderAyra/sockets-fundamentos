const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('EnviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    client.on('EnviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('EnviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!'
        //     });
        // }

    });

});