module.exports = function(application){
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, res, req);
    });

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, res, req);
    });
}