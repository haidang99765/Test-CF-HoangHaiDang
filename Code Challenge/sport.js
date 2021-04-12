const listAPI = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";

var app = fetch(listAPI).then((response) => response.json()).then((data) => {
        for (var i = 0; i < data.results.length; i++) {
            var questions = `<div style ="text-align: center">
            -------------------------------------------------
        <h2 style = "color: coral">Question ${i + 1}</h2>
        <div class="question">${data.results[i].question}</div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].correct_answer}">
        A. <span>${data.results[i].correct_answer}</span>
        </div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[0]}">
        B. <span>${data.results[i].incorrect_answers[0]}</span>
        </div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[1]}">
        C. <span>${data.results[i].incorrect_answers[1]}</span>
        </div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[2]}">
        D. <span>${data.results[i].incorrect_answers[2]}</span>
        </div>
        
        <div class="error${i}"></div>
    </div>`;
            document.querySelector(".quiz").insertAdjacentHTML("beforeend", questions);
        }

        var answers = document.querySelector(".form");
        document.querySelector(".submit").addEventListener("click", (event) => {
            event.preventDefault();
            var count = 0;
            for (var i = 0; i < data.results.length; i++) {
                var a = "answers.answers" + i + ".value";
                answer = eval(a);
                var showQuestionsInConsole  = data.results[i].correct_answer;
                console.log ("The correct answer of question " + `${i + 1}` + ':' , showQuestionsInConsole);
                if (answer == data.results[i].correct_answer) {
                    count++;
                    document.querySelector(".error" + i).innerHTML =
                        "<p style='color: green;'>Correct</p>";
                } else {
                    document.querySelector(".error" + i).innerHTML =
                        "<p style='color: red;'>Incorrect</p>";
                }
            }
            alert("Correct answers: " + count);
            document.querySelector(".result").textContent =
                "Correct" + "    " + count + "/" + data.results.length;
        });
    });