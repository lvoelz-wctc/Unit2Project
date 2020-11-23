$(document).ready(
    function () {
        $("#submit_number").click(submitNumber);
        $("#show_number").click(showNumber);

        var compNum = Math.floor((Math.random() * 10)).toString();
        for (var x = 0; x <= 2; x++) {
            var testNum = Math.floor((Math.random() * 10)).toString();
            if (compNum.includes(testNum) === false) {
                compNum += testNum;
            } else {
                x--;
            }
            var finalNum = parseInt(compNum);

            //iterable numbers need to stay outside function since we will probably call it multiple times
            //since this is only on page load, they won't reset to 0?
            //pull guess number from html
            var guess = parseInt($("#guess_number").val());

            var bullCount = 0; //same position only
            var cowCount = 0; //different position only
            var totalCount = 0;

    function submitNumber(event) {
        event.preventDefault();
        //if loop runs every time function is called, so we probably don't need a do while loop?
        if (guess === finalNum){
            totalCount++;
            $("#result").text("You win! Guesses needed: " + totalcount);
        }

        else {
            //test against each number
            for (var x=0; x<=3; x++){
                if (guess[x] === finalNum[x]){
                    bullCount++;
                }
                else if (guess[x] === finalNum[x+1]){
                    cowCount++;
                }
                else if (guessNum1 === finalNum[x+2]){
                    cowCount++;
                }
                else if (guessNum1 === finalNum[x+3]){
                    cowCount++;
                }
            }
            //end for loop
            totalCount++;
            $("#result").show();
            $("#result").text("Guess # "+totalCount+": "+guess+" . Bulls: "+bullCount+", cows: "+cowCount);
        }
        //end if loop

    }

    function showNumber(event) {
        event.preventDefault();
        $("#showNumber").show();
        $("#showNumber").text(finalNum);
    }
    }});