//Website project: Disney
document.getElementById("btn").addEventListener("click", btnClicked);

//Question 1
function btnClicked() {
  let answer1 = document.getElementById("ans1").value.toLowerCase();
  let answer2 = document.getElementById("ans2").value.toLowerCase();
  let answer3 = document.getElementById("ans3").value.toLowerCase();
  let answer4 = document.getElementById("ans4").value.toLowerCase();
  let scorenum = document.getElementById("score");
  // not a value bc not an input
  //use scorenum to output results
  // needs to be in function bc currently it would have no input
  //make scorenum a number?
  let score = 0;
  //can not make two variable with the same name
  //Important!!!!
  //First i did q1 for ids but it did not work
  console.log(answer1);
  if (
    answer1 === "snow white and the seven dwarfs" ||
    answer1 === "snow white and the 7 dwarfs"
  ) {
    document.getElementById("ans1").style.color = "green"; //I was confused as to what id to put/place in brackets
    score = score + 1;
    document.getElementById("feedbk1").innerHTML = "Correct!";
    document.getElementById("msg").innerHTML = "Good Job!";

    //when do we use innerhtml?
  } else {
    document.getElementById("ans1").style.color = "red";
    document.getElementById("feedbk1").innerHTML = "Incorrect,try again!";
    document.getElementById("msg").innerHTML =
      "ANSWER:SNOW WHITE AND THE SEVEN DWARFS";
  }

  //Question 2
  if (
    answer2 === "walter elias disney" ||
    answer2 === "walt disney" ||
    answer2 === "walter disney"
  ) {
    document.getElementById("ans2").style.color = "green";
    score = score + 1;
    document.getElementById("feedbk2").innerHTML = "correct!";
    document.getElementById("msg2").innerHTML = "Good Job!";
  } else {
    document.getElementById("ans2").style.color = "red";
    document.getElementById("feedbk2").innerHTML = "incorrect,try again!";
    document.getElementById("msg2").innerHTML = "ANSWER:WALTER ELIAS DISNEY";
  }
  //Question 3
  if (answer3 === "october 16,1923") {
    document.getElementById("ans3").style.color = "green";
    score = score + 1;
    document.getElementById("feedbk3").innerHTML = "correct!";
    document.getElementById("msg3").innerHTML = "Good Job!";
  } else {
    document.getElementById("ans3").style.color = "red";
    document.getElementById("feedbk3").innerHTML = "incorrect,try again!";
    document.getElementById("msg3").innerHTML = "ANSWER: OCTOBER 16,1923";
  }
  //Question 4
  if (answer4 === "dream, believe, dare, do") {
    document.getElementById("ans4").style.color = "green";
    score = score + 1;
    document.getElementById("feedbk4").innerHTML = "correct!";
    document.getElementById("msg4").innerHTML = "Good Job!";
  } else {
    document.getElementById("ans4").style.color = "red";
    document.getElementById("feedbk4").innerHTML = "incorrect,try again!";
    document.getElementById("msg4").innerHTML =
      "ANSWER:DREAM, BELIEVE, DARE, DO";
  }
  //do i do this??
  //do i add ""? bc when one number i did not have to
  if (score === 1) {
    scorenum.innerHTML = "1 / 4";
  } else if (score === 2) {
    scorenum.innerHTML = "2 / 4";
  } else if (score === 3) {
    scorenum.innerHTML = "3 / 4";
  } else if (score === 4) {
    scorenum.innerHTML = "4 / 4";
  } else {
    scorenum.innerHTML = "Please fill all questions in and answer them.";
  }
  //had to add last part of when i only filled some, it outputed 4 as the score
  //__________________
  if (score === 4) {
    document.getElementById("output").innerHTML = "100";
    //id is output!
  } else if (score === 3) {
    document.getElementById("output").innerHTML = "75";
  } else if (score === 2) {
    document.getElementById("output").innerHTML = "50";
  } else if (score === 1) {
    document.getElementById("output").innerHTML = "25";
  } else {
    document.getElementById("output").innerHTML = "0";
  }
  //thougt i should use scorenum but no, thats a output variable sorta
}
