const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world! H1';

function printHelloWorld() {
  console.log('printHelloWorld is called');
  console.log('try to call testFunction');
  testFunction();
  console.log('testFunction called');
  
  return "Hello World";
}

