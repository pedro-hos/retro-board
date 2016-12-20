module.exports = function(app) {
	
	var Card = app.models.Card;
	
	var controller = {};

	controller.getAllCards = function(req, res) {
		Card.find().exec().then(

			function(cards){
				cards.length != 0 ? res.json(cards) : res.status(404).json('nunhum card cadastrado');
			}, 

			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			});

	};

	controller.removerCard = function(req, res) {

		Card.remove({"_id": req.params.id}).exec().then(

			function(){
				res.status(204).end();
			}, 

			function(error){
				console.log(error);
				res.status(500).json(error);
			});

	};

	controller.newCard = function(req, res) { 

		var _id = req.body._id;

		if(_id) {

			Card.findByIdAndUpdate(_id, req.body).exec().then(
				function(card) {
					res.json(card);
				},

				function(error) {
					res.status(500).json(error);
				}
			);

		} else {

			Card.create(req.body).then(
				function(card) {
					res.status(201).json(card);

				}, function(error) {
					res.status(500).json(error);
				}
			);

		}

	};

	controller.getByType = function(req, res) { 

		var type = req.params.type;
		Card.find({type: type}).exec().then(

			function(cards){
				cards.length != 0 ? res.json(cards) : res.status(404).json('nenhum card cadastrado');
			}, 

			function(erro){
				res.status(500).json(erro);
			});
	};

	return controller;
}