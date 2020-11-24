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
        }

        var finalNum = compNum.toString();
        var bullCount = 0; //same position only
        var cowCount = 0; //different position only
        var totalCount = 0;

        function submitNumber(event) {
            event.preventDefault();
            var guess = $("#guess_number").val().toString();
            var wrong = 0;

            //make sure the guess doesn't have any repeated numbers
            for (var z = 0; z<=3; z++){
                if (guess[z] === guess[z+1]){
                    $("#result").show();
                    $("#result").text("Guess may not contain duplicate numbers. Try again.");
                    wrong = 1;
                }
            }
            //end repeat test.

            //runs only if the repeat tester didn't set wrong to 1.
            if (wrong === 0) {
                if (guess === finalNum){
                    totalCount++;
                    $("#result").show();
                    $("#result").text("You win! Guesses needed: " + totalCount);
                }

                else {
                    for (var y=0; y<=3; y++) {
                        if (guess[y] === finalNum[y]){
                            bullCount++;
                        }
                        else if (finalNum.includes(guess[y])){
                            cowCount++;
                        }
                    }
                    //end for loop
                    totalCount++;
                    $("#result").show();
                    $("#result").text("Guess # " + totalCount + ": " + guess + " . Bulls: " + bullCount + ", cows: "+cowCount);
                    //reset counters
                    bullCount = 0;
                    cowCount = 0;
                }
                //end if loop
            }
            //end matching loop
            }

        function showNumber(event) {
            event.preventDefault();
            $("#showNumber").show();
            $("#showNumber").text(finalNum);
        }
    });