module.exports = function(application){
    application.post('/', function(req, res){
        res.render('chat');
    });

    application.get('/', function(req, res){
        res.render('chat');
    });
}