module.exports = function(app) {

	var controller = app.controllers.card;
	
	app.route('/cards')
		.get(controller.getAllCards)
		.post(controller.newCard);

	app.route('/cards/:id')
		.delete(controller.removerCard);

	app.get('/cards/:type', controller.getByType);
}