// Ques 1

// function greet(grertings){
//     alert(greetings);
// }
// Qywa2

// const elementToHide = document.getElementById('elementToHide');
// const triggerElement = document.getElementById('triggerElement');
// triggerElement.addEventListener('click', function() {
//     elementToHide.style.display = 'none';
// });

// Ques4
// document.getElementById('scrollToTop').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
// Ques5
// document.getElementById('playSoundLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     const audio = document.getElementById('myAudio');
//     audio.play();
// });
// Ques6
// document.getElementById('openWindowLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.open('https://www.example.com', '_blank');
// });
// Ques7
// document.getElementById('alertButton').addEventListener('click', function() {
//     alert('Button clicked!');
// });
// Ques8
// const colorButton = document.getElementById('colorButton');

// colorButton.addEventListener('mouseover', function() {
//     colorButton.classList.add('button-hover');
// });

// colorButton.addEventListener('mouseout', function() {
//     colorButton.classList.remove('button-hover');
// });

// Ques10
// const myElement = document.getElementById('myElement');

// myElement.addEventListener('mouseover', function() {
//     alert('Mouse over event triggered!');
// });
// Ques 11
// const myElement = document.getElementById('myElement');

// myElement.addEventListener('mouseout', function() {
//     myElement.style.display = 'none';
// });


// Ques 12
// document.getElementById('openWindowLink').addEventListener('click', function(event) {
//     event.preventDefault();

    // Get mouse position
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     // Calculate window dimensions
//     const windowWidth = Math.min(800, window.innerWidth - mouseX - 10);
//     const windowHeight = Math.min(600, window.innerHeight - mouseY - 10);

//     // Open a new window
//     const newWindow = window.open('', '', width=${windowWidth},height=${windowHeight});

//     // Populate new window with content
//     newWindow.document.write(`
//         <html>
//         <head>
//             <title>New Window</title>
//             <script>
//                 function closeWindow() {
//                     window.close();
//                 }
//             </script>
//         </head>
//         <body>
//             <h1>New Window Content</h1>
//             <button onclick="closeWindow()">Close Window</button>
//         </body>
//         </html>
//     `);
// });


// Chapter 49, 50 (Reading and Setting  field values)

// QQQyes 1
// document.getElementById('submitButton').addEventListener('click', function() {
//     const userInput = document.getElementById('userInput').value;
//     console.log('User Input:', userInput);
// });
// Ques 2
// document.getElementById('submitButton').addEventListener('click', function() {
//     const checkbox = document.getElementById('myCheckbox');
//     const isChecked = checkbox.checked;
//     console.log('Checkbox is checked:', isChecked);
// });


// Ques 3
// document.getElementById('submitButton').addEventListener('click', function() {
//     const selectBox = document.getElementById('mySelect');
//     const selectedValue = selectBox.value;
//     console.log('Selected Value:', selectedValue);
// });

// Q5
// document.getElementById('maritalStatus').addEventListener('change', function() {
//     const married = this.value === 'true';
//     const statusField = document.getElementById('status');

//     if (!married) {
//         statusField.value = 'available';
//     } else {
//         statusField.value = '';
//     }
// });