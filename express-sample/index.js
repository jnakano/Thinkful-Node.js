var express = require('express'),
	port = 9000;


var app = express();
var expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs({ extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/:name',function(req,res){
	res.render('greetings', {title:'Simple greeting app', name:req.params.name});
})
app.post('/', function(req, res){ res.send('post request'); });
app.put('/', function(req, res){ res.send('put request'); });
app.patch('/', function(req, res){ res.send('patch request'); });
app.delete('/', function(req, res){ res.send('delete request'); });

app.listen(port,function(){
	console.log('listening on port' + port);
})