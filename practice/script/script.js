const wrapper =document.querySelector('.wrapper'), // variable for wrapper class
qrInput = wrapper.querySelector('.form input'); // variable for input class inside the wrapper class
generateBtn = wrapper.querySelector('.form button'); // variable for button class inside the wrapper class
qrImg = wrapper.querySelector('.qr-code img'); // variable for img class inside the wrapper class


generateBtn.addEventListener("click",  () => { // function for generating qr code
    let qrValue = qrInput.value; // will generate QR based on the input value
    if(!qrValue) return; //will return the value  if the input is false
    generateBtn.innerText = "Generating QR Code..."; // will change the button text if the QR code is generating.
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`; //the qrValue variable were concatinated with the API URL.
    // The API will generate the QR code based on the input value on qrValue Variable.
    qrImg.addEventListener("load", () =>{   // this function will be executed if the QR code is loaded in the qrValue variable.
        wrapper.classList.add("active"); // will add the active class to the wrapper class  if the QR code is generated.
        generateBtn.innerText = "Generate QR Code"; // this will change the button text after the QR code is generated.

    });

});
qrInput.addEventListener("keyup", () => {// this function will be executed if the user press the enter key.
    if(!qrInput.value){ //inpuut value will be false
        wrapper.classList.remove("active");// will remove the active class from the wrapper class if the input value is false.
    }
});

