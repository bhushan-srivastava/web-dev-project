function calculateScore() {

    var score = 0;//keeps score

    //storing the names of radio button
    //each element of the array is a name of 4 radio buttons (4 options for each question)
    //optionsq1 means 4 options of question 1
    var questionsArr = ['optionsq1', 'optionsq2', 'optionsq3', 'optionsq4', 'optionsq5', 'optionsq6', 'optionsq7', 'optionsq8', 'optionsq9', 'optionsq10'];




    var k = 0;//check if all the questions are answered. If all questions are answered then print score or else give alert to answer all questions


    var correctSubmittedAnswersArr = [];//to store the question numbers of correctly answered questions


    var wrongSubmittedAnswersArr = [];//to store the question numbers of incorrectly answered questions


    var correctSubmittedIndex = 0;//travel through the correctSubmittedAnswerArr[] using this index


    var wrongSubmittedIndex = 0;//travel through the wronnSubmittedAnswerArr[] using this index



    //for each element of questionarr perform the following loop
    //syntax:- array.forEach(element index)
    //element= optionsq1, options q2, etc.
    questionsArr.forEach((element, index) => {

        var e = document.getElementsByName(element);//returns an array of 4 elements because each question has 4 radio buttons with the same name


        for (var j = 0; j < e.length; j++) {

            if (e[j].checked) {

                //store the id of the selected radio button i.e. op1, op2, etc.

                //processing

                k = k + 1;//checking if all 10 questions are answered if not then give alert

                //checking if selected answer is correct or not
                //id of correct answer is = correctofq1, correctofq2, etc. 
                if (e[j].id == ("correctofq" + (index + 1))) {

                    //if selected answer is the correrct answer

                    //corect radio button has id="correctof<question number>"
                    score++;

                    //Storing the question numbers of correctly answered questions
                    correctSubmittedAnswersArr[correctSubmittedIndex] = (index + 1);

                    correctSubmittedIndex++;//increament the index of correctSubmittedAnswersArr[] only when a value gets stored in it
                }
                else {
                    //if selected answer is the incorrerct answer

                    //incorrect radio buttons have no id attribute

                    //Storing the question numbers of incorrectly answered questions
                    wrongSubmittedAnswersArr[wrongSubmittedIndex] = (index + 1);

                    wrongSubmittedIndex++;//increament the index of wrongSubmittedAnswersArr[] only when a value gets stored in it
                }
            }
        }
    });

    //Displaying message to the user
    if (k == 10) {
        //if all the 10 questions are answered

        alert("Quizly : \nAnswers submitted successfully");
        if (score > 0 && score < 10) {
            //if score is in between 0 and 10
            //print which questions were correct and incorrect
            //print result in <p id="result1"></p> tag

            //print-statement for score which is later joined with correctly answered question numbers
            var displayResult = "Quizly : \nYour score is : " + score + " \n \n You answered correctly for the following questions : \n ";


            correctSubmittedAnswersArr.forEach(element => {

                //concat print-statement with correctly answered question numbers (stored in correctSubmittedAnswersArr[])
                displayResult = displayResult.concat("Question number : " + element + "\n");

            });

            //print-statement for incorrectly answered questions
            displayResult = displayResult.concat(" \n You answered incorrectly for the following questions : \n ");


            wrongSubmittedAnswersArr.forEach(element => {

                //concat print-statement with correctly answered question numbers (stored in wrongSubmittedAnswersArr[])
                displayResult = displayResult.concat("Question number : " + element + "\n");

            });

            //print result in empty p tag <p id="result1"><p/> (print-statement is stored in displayResult variable as a string)

            document.getElementById("result1").innerText = displayResult;

            //change the "submit button" to "go to homepage button"
            displayHomePageButton();

        }
        else {
            //if score is 0 or 10
            //not printing which question is correct or incorrect because all questions arre either incorrect (score=0) or all questions are corect (score=10)

            //print result in empty p tag <p id="result1"></p> tag
            document.getElementById("result1").innerText = ("Quizly : \nYour score is : " + score);

            //change the "submit button" to "go to homepage button"
            displayHomePageButton();

        }

    }
    else {
        //if any question(s) is unattempted 
        alert("Quizly : \nPlease answer all the unattempted questions and click on \n \"Submit Quiz\" again ");
    }

}

function goToHomePage() {
    //go to homepage when this function is called i.e. when the "go to homepage button" is clicked
    window.location.assign("index.html");//navigate to the given url
}

function displayHomePageButton() {
    //find the button with id="hp" and change the inner text from "submit button" to "go to homepage" 
    //id of submit button is hp
    document.getElementById("hp").innerText = "Go to Homepage";

    //change the value of onClick attribute from "calculateScore()" to "goToHomePage()"
    //id of submit button is hp
    document.getElementById('hp').setAttribute("onClick", "goToHomePage()");
}