// Enter the number.
a1 = 13;
let m1 = document.getElementById("m1");
let submit = document.getElementById("submit");
let hint = document.getElementById("hint")
// console.log(m1);

// display the number of chances taken by the user and show their score.
let count = 1;
let count1 = document.getElementById("score3");
submit.onclick = function () {
  count1.innerHTML = 0;
  count1.innerHTML = count++
  console.log(count);
  // if (count.value < 3) {
  //   return alert("You are bad at guessing!!!")
  // }
}
hint.addEventListener("click",hinty)
function hinty(){
  alert("It is a two digit Prime Number...")
}



// Add EventListener on button, if the number matches the stored number then give alert otherwise give some alert. 
submit.addEventListener("click", checker)

// create one function to check the number.
function checker() {
  // console.log("clicked");
  if (a1 == m1.value) {

    alert("WOOOO !! you got it.........");
    console.log("clicked");

  }
  else if (m1.value > a1) {
    alert(m1.value + " is greater than the actual number !");
    console.log("clicked");

  } else if (m1.value < 0 || m1.value == 0) {
    alert("Dude!! Enter the  positive value please !");
    console.log("clicked");
  }
  else {
    alert(m1.value + " is smaller than the actual number !")
    console.log("clicked");
  }
}
