const question = [
  {
    que: "which of them is hyper lauguage",
    a: "html",
    b: "java",
    c: "css",
    d: "python",
    correct: "a",
  },
  {
    que: "which year javascript was introduced ?",
    a: "1996",
    b: "1995",
    c: "1985",
    d: "1960",
    correct: "b",
  },
  {
    que: "what css stand for ?",
    a: "hypertext markup language",
    b: "cascading style sheet",
    c: "jason object native",
    d: "object oriented programming",
    correct: "b",
  },
];

let ques = document.getElementById("ques");
let option = document.querySelectorAll(".option");
let btn = document.getElementById("btn");

let tottal = question.length;
let right = 0;

let index = 0;
// if(index == total)
//     {
//         return end();
//     }
//     else
//     {

//     }
const quiz = () => {
  if (index === tottal) {
    return end();
  }
  else
  {
  let data = question[index];
  ques.innerHTML = `${index + 1}) ${data.que}`;
  option[0].nextElementSibling.innerHTML = data.a;
  option[1].nextElementSibling.innerHTML = data.b;
  option[2].nextElementSibling.innerHTML = data.c;
  option[3].nextElementSibling.innerHTML = data.d;
  }
};

function submitQuiz() {
  let data = question[index];
  let ans = check();
//   console.log(ans, data.correct);
  if (ans === data.correct) {
    ++right;
  }
  index++;
  reset();
  quiz();
}

function check() {
    let anwser;
  option.forEach((input) => {
    if (input.checked) {
        anwser = input.value;
    }
  });
  return anwser;
}

function reset() {
  option.forEach((input) => {
    input.checked = false;
  });
}
const end = () => {
  document.getElementById("box").innerHTML = `<h3>thanks for the Quiz.....</h3> <br> your score is ${right} / ${tottal} is correct`;
};
quiz();
