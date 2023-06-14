let numberDiv = 1;
let idea = [];
let savedIdeaArray = [];

function generateDiv() {
  console.log(numberDiv);

  let textHolder = document.createElement("input");
  textHolder.setAttribute('placeholder', `This is your ${numberDiv} idea`);
  textHolder.setAttribute("id", `idea${numberDiv}`)

  document.body.appendChild(textHolder);
  numberDiv = numberDiv + 1;
}

function pushIdea() {
  idea = [];
  for (let i = 1; i < numberDiv; i++) {
    let inputValue = document.getElementById(`idea${i}`).value;
    idea.push(inputValue);
  }
  console.log(idea);
  saveUserInput();
}

function saveUserInput() {
  localStorage.setItem('savedInput', JSON.stringify(idea));
  console.log('User input saved to local storage.');
}

function retrieveUserInput() {
  const savedInput = localStorage.getItem('savedInput');
  savedIdeaArray = JSON.parse(savedInput);
  console.log('Retrieved user input:', savedIdeaArray);
  displayInfo();
}

function displayInfo() {
  numberDiv = savedIdeaArray.length + 1;
  retrivediv();
  
}

function retrivediv() {
  for (let i = 0; i < 3; i++) {
    let textHolder = document.createElement("input");
    textHolder.setAttribute('placeholder', `This is your ${i + 1} idea`);
    textHolder.setAttribute("id", `idea${i + 1}`);
    textHolder.value = savedIdeaArray[i]
   

    document.body.appendChild(textHolder);
  }
}
