$(document).ready(
    function () {
        $("#show_number").click(showNumber);

        //generate computer number
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
        var bullImage = ""; //will store 🐂
        var cowCount = 0; //different position only
        var cowImage = ""; //will store 🐄
        var totalCount = 0;

        function testGuessNumber() {
            var guess = $("#guess_number").val().toString();
            var wrong = 0;

            //make sure the guess doesn't have any repeated numbers
            for (var z = 0; z<=3; z++){
                if (guess[z] === guess[z+1]){
                    $("#result").show();
                    $("#result").text("Guess may not contain duplicate numbers. Try again.");
                    $("#resultImage").hide(); //hides the emojis if present from a previous guess.
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
                    $("#resultImage").text("Result: 🐂🐂🐂🐂");
                }

                else {
                    for (var y=0; y<=3; y++) {
                        if (guess[y] === finalNum[y]){
                            bullCount++;
                            bullImage += "🐂";
                        }
                        else if (finalNum.includes(guess[y])){
                            cowCount++;
                            cowImage += cowImage = "🐄";
                        }
                    }
                    //end for loop
                    totalCount++;
                    $("#result").show();
                    $("#result").text("Guess #" + totalCount + ": " + guess);
                    $("#resultImage").text("Result: " + bullImage+cowImage);

                    //reset counters
                    bullCount = 0;
                    cowCount = 0;
                    bullImage = "";
                    cowImage = "";
                }
                //end if loop
            }
            //end matching loop
            }

        //shows the computer's generated number
        function showNumber(event) {
            event.preventDefault();
            $("#showNumber").show();
            $("#showNumber").text(finalNum);
        }

        //validations
        var myRules = {
            guess_number:
                {
                    required: true,
                    digits: true,
                    minlength: 4,
                    maxlength: 4
                }
        }

        var myMessages = {
            guess_number:
                {
                    required: "Enter a four digit number.",
                    digits: "Entry must be a number.",
                    minlength: "Must be exactly four digits.",
                    maxlength: "Must be exactly four digits."
                }
        }

        $("form").validate(
            {
                submitHandler: testGuessNumber,
                rules: myRules,
                messages: myMessages
            }
        );

    });