/* importar as configurações so servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(80, function() {
    console.log('Servidor ON');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexao por websocket */
io.on('connection', socket => {
    
    console.log('Usuario conectou');
    
    socket.on('disconnect', () =>{
        console.log('Usuario desconectou');
    })

    socket.on('msgParaServidor', data => {
        
        /* dialogo */
        socket.emit(
            'msgParaCliente', 
            { apelido: data.apelido, mensagem: data.mensagem } 
        );

        socket.broadcast.emit(
            'msgParaCliente', 
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        /* participante */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente', 
                { apelido: data.apelido } 
            );

            socket.broadcast.emit(
                'participantesParaCliente', 
                { apelido: data.apelido }
            );
        }
    })
})
//parei na pagin 13 aula 70