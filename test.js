
// select or choose quiz
const chooseQuiz = (index, givenAns) => {
    const isExist = answers.find((ans) => ans.id === quizData[index].id);
    if (isExist) {
      let serial = 0;
      for (let quiz of answers) {
        if (isExist.id === quiz.id) {
          answers.splice(serial, 1, { ...quizData[index], givenAns });
          break;
        }
        serial++;
      }
    } else {
      answers.push({ ...quizData[index], givenAns });
    }
    displayAnswers(answers);
  };
  
  const displayAnswers = (data) => {
    // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
    answersContainer.innerHTML = "";
    data = data.sort((a, b) => a.id - b.id);
    data.forEach((answer, idx) => {
      answersContainer.innerHTML += `<div class="text-left">
          <h1 class="mt-4 mb-3 text-sm">${idx + 1 + ". " + answer.question}</h1>
          <div class="flex justify-around">
            <p class="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 0
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              1
            </p>
            <p class="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 1
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              2
            </p>
            <p class="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 2
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              3
            </p>
            <p class="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 3
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              4
            </p>
          </div>
        </div>`;
    });
  };
  
  // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
  
  const showAnswers = (data) => {
    // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
    const quizContainer = document.querySelector("#quizContainer");
    quizContainer.innerHTML = "";
    data = data.sort((a, b) => a.id - b.id);
    data.forEach((answer, idx) => {
      quizContainer.innerHTML += `<div class="text-left">
            <h1 class="mt-4 mb-3 text-md">${idx + 1 + ". " + answer.question}</h1>
            <div>
            <h1 class="text-sm">Given Answer: <span class="text-orange-600">${
              answer.givenAns
            }</span></h1>
            <h1 class="text-sm">Correct Answer: <span class="text-green-600">${
              answer.answer
            }</span></h1>
            <p class="text-[10px] mt-5"><span class="font-medium mr-1">Description:</span>${
              answer.description
            }</p>
            </div>
          </div>`;
    });
  };