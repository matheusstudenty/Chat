/* importar as configurações so servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(80, function() {
    console.log('Servidor ON');
})


//parei na pagin 13 aula 65