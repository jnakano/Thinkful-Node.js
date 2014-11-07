var items = [{name:'Couch', description:'Ikea this is comfotable! Although oddly small and modular it may be the most 
wonderful couch of my life. Oh and so modern!', {name: 'Laptop', description:'Beep boop, goes the laptop as I create node awesomeness
all day long', {name:'foobar', description:'This is a test of the inventory description system'}}}];

exports.list = function(req,res){
	res.render('index',{items:items});
}