let totalScore = 0;

function addScore(score, questionId) {
    totalScore += score;
    document.getElementById('totalScore').textContent = totalScore;

    // Disable all buttons for this question after one is clicked
    let buttons = document.getElementById(questionId).getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }
}

window.onscroll = function() {makeSticky()};

var header = document.getElementById("mainHeader");
var sticky = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

    function showNext(questionId) {
            var current = document.querySelector('.hidden:not(.hidden)');
            if (current) {
                current.classList.add('hidden');
            }
            var next = document.getElementById(questionId);
            if (next) {
                next.classList.remove('hidden');
            }
        }

        function openWebsite() {
          // Prompt user to enter a number
          var userNumber = prompt("Please enter Your Score !:");

          // Check if the entered value is a number
          if (userNumber !== null && !isNaN(userNumber)) {
              // Convert the string to a number
              var number = Number(userNumber);

              // Open different websites based on the number
              if (number <= 75 && number >5) {
                  // Open Google if the number is less than 75
                  window.location.href = 'page.html';
              } if (number > 75 && number <= 150) {
                  // Open Facebook if the number is 75 or greater
                  window.location.href = 'next.html';
              }
              if (number > 150 ) {
                // Open Facebook if the number is 75 or greater
               alert('You cross the score Limit !');
            }
          } else {
              alert("Please enter a valid number.");
          }
      }