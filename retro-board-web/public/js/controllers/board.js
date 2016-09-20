angular.module('retro-board')
    .controller('BoardController', function ($scope, cardService) {

    	$scope.card  		 = new cardService();
    	$scope.negativeCards = [];
		$scope.positiveCards = [];
        $scope.card.type = "Positive";
    	
    	positiveCards();
		negativeCards();
        
        function positiveCards() {
        	cardService.query({params: "Positive"}, 

        		function(cards) {
        			$scope.positiveCards = cards;

        		}, function(error) {
        			console.log(error);
        		}

        	); 
        };

         function negativeCards() {
        	cardService.query({params: "Negative"}, 

        		function(cards) {
        			$scope.negativeCards = cards;
                    console.log(cards);

        		}, function(error) {
        			console.log(error);
        		}

        	);
        };

        $scope.newCard = function() {
            var cardsList = $scope.card.comment.split("|"),
                type = $scope.card.type;

            try{
                cardsList.map(function(_comment){
                    $scope.card.comment = _comment;
                    $scope.card.$save();
                    $scope.card = new cardService();
                    $scope.card.type = type;
                });
                positiveCards();
                negativeCards();  
            }catch(error){
                console.log(error);
            }
        };

        $scope.deleteCard = function(card){
            var continuar = confirm("Tem certeza que deseja deletar o card?");
            if(continuar){
                card.$remove({params : card._id}).then(
                    function() {
                        positiveCards();
                        negativeCards();
                    },
                        function(error){
                        console.log(error)
                    }
                )  
            }
            
        }
    });