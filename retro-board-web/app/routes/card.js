module.exports = function(app) {

	var controller = app.controllers.card;
	
	app.route('/cards')
		.get(controller.getAllCards)
		.post(controller.newCard);

	app.get('/cards/:type', controller.getByType);
}