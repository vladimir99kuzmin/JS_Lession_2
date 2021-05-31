function execute_ex1() {
    let ans = document.getElementById("ex1_ans");
    ans.innerHTML = "Example: <br>";
    let a = 1, b = 1, c, d;
    ans.innerHTML += "a = " + a + ", b = " + b + " // инициализация переменных<br>";
    c = ++a;
    ans.innerHTML += "c = " + c + ", a = " + a + " // c = ++a;<br> ";
    d = b++;
    ans.innerHTML += "d = " + d + ", b = " + b + " // d = b++;<br>";
    c = (2 + ++a);
    ans.innerHTML += "c = " + c + ", a = " + a + " // c = (2 + ++a);<br>";
    d = (2 + b++);
    ans.innerHTML += "d = " + d + ", b = " + b + " // c = (2 + ++a);<br>";
    ans.innerHTML += "Итого: a = " + a + ", b = " + b + "<br>";
}

function execute_ex2() {
    let ans = document.getElementById("ex2_ans");
    ans.innerHTML = "Example: <br>";
    let a = 2;
    ans.innerHTML = "a = " + a + " // инициализация переменной А <br>";
    ans.innerHTML += "x = 1 + (a*=2(a=" + (a * 2) + ")) // присваеваем А значение А*2 и прибавляем 1, полученное присваевается к Х<br>";
    let x = 1 + (a *= 2);
    ans.innerHTML += "x = " + x + "<br>";
}

function execute_ex3() {
    let input1 = document.getElementById("ex3_input1");
    let input2 = document.getElementById("ex3_input2");
    let answer = document.getElementById("ex3_ans");
    if (input1.validity.valid && input2.validity.valid) {
        answer.innerHTML = "<br><br>Ответ: <br>";
        let charkey = /[^0-9]/;
        let a = input1.value, b = input2.value;
        if (a >= 0 && b >= 0) {
            answer.innerHTML += "a - b = " + (a - b) + "<br>";
        }
        else if (a < 0 && b < 0) {
            answer.innerHTML += "a * b = " + (a * b) + "<br>";
        }
        else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
            answer.innerHTML += "a + b = " + (a - (-b)) + "<br>";
        }
        else {
            throwError();
        }
    }
    else {
        throwError();
    }
}
function throwError() {
    alert("Ошибка.");
}