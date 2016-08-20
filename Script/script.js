
/**
 * FileName: script.js
 *
 * @author Jagdeep Virk
 * @date August 20, 2016
 *
 * StudentID: 300869382
 *
 * @description This file is the main javascript file for the web site
 */

(function(){
"use strict";
 


    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the form fields
     var firstName = document.getElementById("firstName");
     var lastName = document.getElementById("lastName");
     var email = document.getElementById("email");
     var contactNumber = document.getElementById("contactNumber");
     var message = document.getElementById("message");
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /*This function shows the input from each form field 
     * on the console
     */
    function showFormInput() {
       
        console.log("First Name: " + firstName.value);
        
        console.log("Last Name: " + lastName.value);
       
        console.log("Email: " + email.value);
        
        console.log("Contact Number: " + contactNumber.value);
        
        console.log("Message: " + message.value);
      
    }
     var getData;
    /**
     * This function reads data from the paragraphs.json file and aligns them with their 
     * respective ID's with the innerHTML using the if statement 
     * 
     * @method readData
     * @return void
     */
    function readData() {
        if ((getData.readyState === 4) && (getData.status === 200)) {

            var MyData = JSON.parse(getData.responseText);
            var paragraphs = MyData.paragraphs;
            paragraphs.forEach(function (paragraph) {
                var paragraphElement = document.getElementById(paragraph.id);
                //looks for the element id and aligns it with the paragraphs in the html
                if(paragraphElement) {
                     paragraphElement.innerHTML = paragraph.content;
                }
               
            }, this);
        }
    }
    /*
    This functions loads data from the paragraph.json file to the html file
    @method loadData
    @return void
    */
    function loadData(){
        getData = new XMLHttpRequest();
        getData.open("GET","Scripts/paragraphs.json",true);
        getData.send(null);
        getData.addEventListener("readystatechange",readData);
    }
    function init() { 
     //calls the loadData function 
        loadData();
     };
     //loads the init function after loading all the html functions 
    window.addEventListener("load",init);
    })();
  
    
