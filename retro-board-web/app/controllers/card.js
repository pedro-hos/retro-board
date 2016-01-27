module.exports = function() {

	var controller = {};
	var cards      = [ { _id: 1, type: "Negative", message: "João não está colocando mensagens no commit"}, 
					   { _id: 2, type: "Positive", message: "Pedro esta usando coisas novas"},
					   { _id: 3, type: "Positive", message: "Mais uma positva do Pedro, o rapaz é fera"} ];

	controller.getAllCards = function(req, res) {
		res.json(cards);
	};

	controller.newCard = function(req, res) {

		var card = { _id: req.body._id, type: req.body.type, message: req.body.message };
		cards.push(card);

		res.status(201).send("Card criado com sucesso");
	};

	controller.getByType = function(req, res) {
		var type = req.params.type;

		var card = cards.filter(function(card){
			return card.type.toUpperCase() == type.toUpperCase();
		});

		card.length != 0 ? res.json(card) : res.status(404).send("Nenhum card encontrado");

	};

	return controller;
}