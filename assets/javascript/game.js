$(document).ready(function() {
    var computerChoice;

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    var imgOne = $('<img>', {
        src: 'assets/images/crystal-one.jpg',
        class: 'buttonImg'
    });

    var imgTwo = $('<img>', {
        src: 'assets/images/crystal-two.png',
        class: 'buttonImg'
    });

    var imgThree = $('<img>', {
        src: 'assets/images/crystal-three.png',
        class: 'buttonImg'
    });

    var imgFour = $('<img>', {
        src: 'assets/images/crystal-four.jpg',
        class: 'buttonImg'
    });

    var buttonOne = $('<div>').addClass('col-md-3').append(imgOne);
    var buttonTwo = $('<div>').addClass('col-md-3').append(imgTwo);
    var buttonThree = $('<div>').addClass('col-md-3').append(imgThree);
    var buttonFour = $('<div>').addClass('col-md-3').append(imgFour);

    var buttonRow = $('<div>').addClass('row').attr('id', 'button-row').append(buttonOne, buttonTwo, buttonThree, buttonFour);

    
    $('#crystal-box').append(buttonRow);

    initialize = () => {
        totalScore = 0;

        $(buttonOne).attr('data-value', Math.floor((Math.random() *11) + 1));
        $(buttonTwo).attr('data-value', Math.floor((Math.random() *11) + 1));
        $(buttonThree).attr('data-value', Math.floor((Math.random() *11) + 1));
        $(buttonFour).attr('data-value', Math.floor((Math.random() *11) + 1));

        computerChoice = Math.floor((Math.random() * 101) + 19);
        $('#score-box').html('<h5>' + totalScore + '</h5>');
        $('#win-loss-box').html('<p>Wins: ' + wins + '</p><br><p>Losses: ' + losses + '</p>')
        $('#random-number-box').html('<h1>' + computerChoice + '</h1>');
    }

    initialize();

    function score(buttonObject) {
        totalScore += parseInt($(buttonObject).attr('data-value'));
        $('#score-box').html('<h5>' + totalScore + '</h5>');

        if (totalScore == computerChoice) {
            alert('You Win!');
            wins++;
            initialize();
        }
        else if (totalScore > computerChoice) {
            alert('You Lose!');
            losses++;
            initialize();
        }
    };

    buttonOne.click(function() {
       score(this)
    });
    
    buttonTwo.click(function() {
        score(this)
     });
     
    buttonThree.click(function() {
        score(this)
     });
     
    buttonFour.click(function() {
        score(this)
     });
})