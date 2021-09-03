var rez = 0;
var sum = 0;

function showQuestion () {
    var question = document.getElementsByClassName('question');

    for (let i = 0; i < question.length; i++) {
        question[i].style.display = 'block';
    }
}

function closeQuestion () {
    var question = document.getElementsByClassName('question');

    for (let i = 0; i < question.length; i++) {
        question[i].style.display = 'none';
    }
}

function hiddenElem (elem) {
    elem.style.display = 'none';
}

function visibilityElem (elem) {
    document.getElementById(elem).style.display = 'block';
}

function completeTest () {

}

function checkTest () {
    for (let i = 1; i <= 15; i++) {
        var asks = document.getElementsByName('question' + i);
        //console.log(i);

        if (checkingQuestionsForEmptiness(asks)) {
            sum+=1;
        }
        else {
            sum = 0;
            alert("Ответьте на все вопросы!");
            break;
        }
    }
    if(sum == 15){
        getCorrectAnswers();
    }
        
}

function checkingQuestionsForEmptiness(elem) {
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].checked) {
            return true;
        }
    }

    return false;
}

function getCorrectAnswers () {
    
    var arrTrueAnswers = {
        question1: [0, 'Мост'],
        question2: [2, 'Metropolitan Area Network'],
        question3: [0, 'Кольцо и шина'],
        question4: [4, 'Морской узел'],
        question5: [2, 'локальная сеть'],
        question6: [0, 'Модем'],
        question7: [3, 'Wide Area Network'],
        question8: [0, 'файловый сервер'],
        question9: [1, 'TCP/IP'],
        question10: [3, 'Local Area Network'],

        question11: [1, 'Снежинка и звезда'],
        question12: [2, 'Сетевой адаптер'],
        question13: [3, 'Все ответы верны'],
        question14: [3, 'шлюзы'],
        question15: [2, 'Одноранговыми']
    };

    for (let i = 1; i <= Object.keys(arrTrueAnswers).length; i++) {
        var elem = document.getElementsByName('question' + i);

        
        for (let k = 0; k < elem.length; k++) {
            if(elem[k].checked && elem[k].value == arrTrueAnswers['question' + i][1]) {
                //console.log(arrTrueAnswers['question' + i][1] + "\n");
                elem[k].parentElement.style.color = "green";
                rez+=1;
            }
            else if (elem[k].checked) {
                elem[k].parentElement.style.color = "red";
                elem[arrTrueAnswers['question' + i][0]].parentElement.style.color = "green";
                elem[k].parentElement.innerHTML = elem[k].parentElement.innerHTML + ' <span class="check">(ваш ответ)<span>';
                elem[arrTrueAnswers['question' + i][0]].parentElement.innerHTML = elem[arrTrueAnswers['question' + i][0]].parentElement.innerHTML + ' <span class="check">(правильный ответ)<span>';
            }   
        }
    }
    getRezult();
    visibilityElem('resetButton');
}


function getRezult () {
    var text;
    if(rez <=7) {
        text = "Плохой результат!";
    }
    else if(rez >=8 && rez <=12) {
        text = "Хороший результат";
    }
    else {
        text = "отличный результат";
    }

    visibilityElem('rezult');
    document.getElementById('finishButton').style.display = 'none';
    document.getElementById('rezNumber').innerHTML = rez + '. ' + text;

    
}

function resetButton()
{
    closeQuestion();
    visibilityElem('startButton');
    document.getElementById('rezult').style.display = 'none';
    
    var check = document.getElementsByClassName('check');
    for (let k = 0; k < check.length; k++) {
        check[k].innerHTML = '';
    }

    for (let i = 1; i < 16; i++) {
        var q = document.getElementsByName('question' + i);
        for (k = 0; k < q.length; k++) {
            q[k].checked = false;
            q[k].parentElement.style.color = 'black';
        }
    }
    sum = 0;
}