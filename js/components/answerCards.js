angular.module('CardsAgainstAssembly')
.component('answerCards', {
  templateUrl: "js/components/views/answerCards.html",
  controller: ["$scope", "AnswersFactory", AnswerCardsController],
  controllerAs: "ac",
  scope: true
});

function AnswerCardsController($scope, AnswersFactory){
  var ac = this;
  var CARDS_PER_PLAYER = 2;
  ac.playerCards = [];

  for(var i = 0; i < $scope.$parent.numPlayers; i++){
    ac.playerCards.push(shuffleArray(AnswersFactory.getCards(), CARDS_PER_PLAYER));
  }

  console.log(ac.playerCards);
  // ac.aCards = shuffleArray(AnswersFactory.getCards(), $scope.$parent.numPlayers);

  $scope.$parent.reset = function(num){
    if(num >= 0 && num <= 10){

      ac.playerCards = [];
      for(var i = 0; i < num; i++){
        ac.playerCards.push(shuffleArray(AnswersFactory.getCards(), CARDS_PER_PLAYER));
      }
      console.log(ac.playerCards);

      // ac.aCards = shuffleArray(AnswersFactory.getCards(), num);
      $scope.$parent.displayCard = $scope.$parent.qCards[pickCardIndex($scope.$parent.qCards.length)];
    }
  };
}

function shuffleArray(arr, limit){
  if(limit > arr.length){
    limit = arr.length;
  }
  var shuffled = arr.sort(function(){
    return 0.5 - Math.random(); //not actually random, but whatevs
  });

  return shuffled.slice(0, limit);
}
