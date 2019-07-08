

// Variables for different value possibilites


var givenArr = [36, 28, 41, 33, 22, 27, 38, 65, 52, 19];

var circArr = [ 7, 2, 3, 19, 9, 6, 3];

var sqrArr = [ 3, 5, 8, 13, 1, 7, 2, 9];

var dmdArr = [ 5, 8, 10, 3, 7, 1, 6, 17,];

var hrglassArr = [ 4, 15, 11, 9, 1, 16, 8, 3];

var winExclaimArr = ["Sick!", "Superb!", "Amazing.", "Amaze-balls.", "Marvelous!"];

var circNum;

var sqrNum;

var dmdNum;

var hrglassNum;

var givenNum;

var score = 0;

var wins = 0;

var losses = 0;




function init() {

givenNum = givenArr[Math.floor(Math.random() * givenArr.length)];
console.log(givenNum);

$('#givenNum').text(givenNum);
score = 0;
circNum = circArr[Math.floor(Math.random() * circArr.length)];
sqrNum = sqrArr[Math.floor(Math.random() * sqrArr.length)];
dmdNum = sqrArr[Math.floor(Math.random() * dmdArr.length)];
hrglassNum = sqrArr[Math.floor(Math.random() * hrglassArr.length)];




    
}
    $("#circBadge").on('click', function() {
        
        console.log(circNum);
    
        updateScore(circNum);
        $('#userScore').fadeIn().text(score);
        
        
    });
    
    $("#sqrBadge").on('click', function() {
       
        console.log(sqrNum);
        updateScore(sqrNum);
        $('#userScore').text(score);
    
    
    });
    
    $("#diamondBadge").on('click', function() {
        
        console.log(dmdNum);
        updateScore(dmdNum);
        $('#userScore').text(score);
    
    
    });
    
    $("#hourglassBadge").on('click', function() {
        
        console.log(hrglassNum);
        updateScore(hrglassNum);
        $('#userScore').text(score);
    
        
    });
    
    function updateScore(value) {
    score+= value
    
    if (score > givenNum) {
       console.log("loss");
       losses++
       $('#lossNum').text("Losses: " + losses);
       init();
      
       
       
       
    } else if (score === givenNum) {
        console.log("win");
        wins++
        $('#winNum').text("Wins: " + wins);
        winNotif =  winExclaimArr[Math.floor(Math.random() *  winExclaimArr.length)];
        $('#winExc').text(winNotif);
        setTimeout(function(){
            document.getElementById("winExc").innerHTML = '';
        }, 2000);
        init();
        
    } 
    
}

init();






//function updateScore () {

   // var updatedScore = [currentScore += updatedScore]
   // $('crystal-count').text('Current Score:  ' + updatedScore)
//};




