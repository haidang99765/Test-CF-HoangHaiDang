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
    });

//em chưa làm được phần xử lí ạ, mới xong giao diện thôi ạ, có gì anh chị châm chước cho em với ạ :(
