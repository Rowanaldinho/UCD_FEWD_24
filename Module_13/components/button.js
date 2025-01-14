window.addEventListener("DOMContentLoaded",()=> {
  class ButtonHandler {
    constructor(buttonElementID) {
      this.buttonElement = document.getElementById(buttonElementID);
      this.buttonElement.addEventListener("click",this);
      document.getElementById("root").appendChild(this.buttonElement);
      }

      handleEvent(event) {
        //alert("Hello World");
        fetch(`http://localhost:3000/api/v1/`)
      }
  }
  const buttonHandler = new ButtonHandler("my-button");
});