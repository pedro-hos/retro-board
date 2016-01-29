angular.module('retro-board')
    .controller('BoardController', function ($scope, cardService) {

    	$scope.card  		 = new cardService();
    	$scope.negativeCards = [];
		$scope.positiveCards = [];
    	
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
        }

         function negativeCards() {
        	cardService.query({params: "Negative"}, 

        		function(cards) {
        			$scope.negativeCards = cards;

        		}, function(error) {
        			console.log(error);
        		}

        	);
        }

        $scope.newCard = function(type) {
        	console.log(type);
        }

    });