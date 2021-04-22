/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "How do you initialize an array in C?",  ///// Write the question inside double quotes
      answers: {
        a: "int arr[3] = (1,2,3);",                  ///// Write the option 1 inside double quotes
        b: "int arr(3) = {1,2,3};",                  ///// Write the option 2 inside double quotes
        c: "int arr[3] = {1,2,3};",                  ///// Write the option 3 inside double quotes
        d: "int arr(3) = (1,2,3);"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which of these best describes an array?",  ///// Write the question inside double quotes
      answers: {
        a: "A data structure that shows a hierarchical behaviour",                  ///// Write the option 1 inside double quotes
        b: "Container of objects of similar types",                  ///// Write the option 2 inside double quotes
        c: "Arrays are immutable once initialised",                  ///// Write the option 3 inside double quotes
        d: " Array is not a data structure"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    {
      question: "What are the disadvantages of arrays?",
      answers: {
        a: "Data structure like queue or stack cannot be implemented",
        b: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        c: "Index value of an array can be negative",
        d: "Elements are sequentially accessed"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following real world scenarios would you associate with a stack data structure?",
      answers: {
        a: "piling up of chairs one above the other",
        b: "people standing in a line to be serviced at a counter",
        c: "offer services based on the priority of the customer",
        d: "tatkal Ticket Booking in IRCTC"
      },
      correctAnswer: "d"
    },
    
    {
      question: `What does the following function check for? (all necessary headers to be included and function is called from main)

                #define MAX 10

                typedef struct stack
                {
                int top;
                int item[MAX];
                }stack;

                int function(stack *s)
                {
                if(s->top == -1)
                return 1;
                else return 0;
                }`,
      answers: {
        a: "full stack",
        b: "invalid index",
        c: "empty stack",
        d: "infinite stack"
      },
      correctAnswer: "c"
    },


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
