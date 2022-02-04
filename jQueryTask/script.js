$(document).ready(function () {

    $("#content").hide();

    var optionsDiv = document.getElementById("optionsDiv");
    let queIndex;
    let result ;


    $("#next").click(function() {
        queIndex++;
        setNextQuestion();
    });

    $("#result").click(function() {
        resetArea();
        $("#result").hide();
        $("#start").text("Restart");
        $("#start").show();
        var resultText = "Your Score is " +result+ "/5"; 
        $("#question").text(resultText);
    });

    $("#result").hide();

    $("#start").click(function () {
        $("#start").hide();
        $("#content").show();
        $("#next").show();
        queIndex = 0;
        result = 0;
        setNextQuestion();
    });

    function setNextQuestion() {
        resetArea();
        showQuestion(questions[queIndex]);
    }

    function showQuestion(question) {
        const queText = question.que;
        $("#question").text(queText);

        question.answer.forEach(answer => {
            var optionButton = document.createElement("button");
            optionButton.classList.add("btn", "btn-secondary", "m-3", "p-1", "d-block");

            optionButton.innerText = answer.text;

            if (answer.correct) {
                optionButton.dataset.correct = answer.correct;
            }
            optionButton.addEventListener('click', selectAnswer);
            document.getElementById("optionsDiv").appendChild(optionButton);
        });

    }

    function selectAnswer(e) {
        e.target.classList.add('border', 'border-dark', 'border-3');
        Array.from(optionsDiv.children).forEach(option => {
            setOptionColor(option, option.dataset.correct);
        });
        if(e.target.dataset.correct) {
            result++;
        }
        if(queIndex >= questions.length-1) {
            $("#next").hide();
            $("#result").show();
            
        }

    }

    function setOptionColor(element, correct) {
        if (correct) {
            element.classList.add('btn-success');
        } else {
            element.classList.add('btn-danger');
        }
        Array.from(optionsDiv.children).forEach(option => {
            option.classList.add('disabled');
        });
        $("#next").removeClass("disabled");
    }


    function resetArea() {
        $("#next").addClass("disabled");

        while (optionsDiv.firstChild) {
            optionsDiv.removeChild(optionsDiv.firstChild);
        }
    }


    const questions = [
        {
            que: '1) Which of the following option leads to the portability and security of Java?',
            answer: [
                { text: 'Bytecode is executed by JVM', correct: true },
                { text: 'The applet makes the Java code secure and portable', correct: false },
                { text: 'Use of exception handling', correct: false },
                { text: 'Dynamic binding between objects', correct: false }
            ]
        },
        {
            que: '2) Which of the following is not a Java features?',
            answer: [
                { text: 'Dynamic', correct: false },
                { text: 'Architecture Neutral', correct: false },
                { text: 'Use of pointers', correct: true },
                { text: 'Object-oriented', correct: false }
            ]
        },
        {
            que: 'What should be the execution order, if a class has a method, static block, instance block, and constructor, as shown below?',
            answer: [
                { text: 'Instance block, method, static block, and constructor', correct: false },
                { text: 'Method, constructor, instance block, and static block', correct: false },
                { text: 'Static block, method, instance block, and constructor', correct: false },
                { text: 'Static block, instance block, constructor, and method', correct: true }
            ]
        },
        {
            que: '4) What will be the output of the following program?',
            answer: [
                { text: '10, 5, 0, 20, 0', correct: false },
                { text: '10, 30, 20', correct: false },
                { text: '60, 5, 0, 20   ', correct: false },
                { text: '60, 30, 0, 20, 0', correct: true }
            ]
        },
        {
            que: '5) Which option is false about the final keyword?',
            answer: [
                { text: 'A final method cannot be overridden in its subclasses.', correct: false },
                { text: 'A final class cannot be extended.', correct: false },
                { text: 'A final class cannot extend other classes.', correct: true },
                { text: 'A final method can be inherited.', correct: false }
            ]
        }
    ]



});