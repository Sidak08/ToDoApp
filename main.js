let numberDiv = 1;

function generateDiv() {
  console.log(numberDiv);

  const textHolder = document.createElement("input");
  textHolder.setAttribute('placeholder', `This is your ${numberDiv} idea`);
  textHolder.setAttribute("id", `idea${numberDiv}`)

  document.body.appendChild(textHolder);

  numberNumDiv = numberDiv + 1;
  //saveUserInput()

}

// function saveUserInput() {

//   const userInput = document.getElementById('userInput').value;
//   localStorage.setItem('savedInput', userInput);
//   console.log('User input saved to local storage.');
// }
