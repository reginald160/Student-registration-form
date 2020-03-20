const FName= document.querySelector("#FName");
const LName = document.querySelector ("#LName");
const Gender1 = document.querySelector("#Gender");
const DOB1= document.querySelector("#DOB");
const txtEmail  = document.querySelector("#txtEmail");
const  PhoneNum1= document.querySelector("#PhoneNum");
const Password= document.querySelector("#Password");
const  btn1= document.querySelector("#btn");
const emailInfo = document.querySelector("#emailInfo");
const PasswordInfo = document.querySelector("#PasswordInfo") 

Password.addEventListener('blur', ValidatePassword);
FName.addEventListener('blur', ValidateFirstName);
LName.addEventListener('blur', ValidateSecondName);
btn1.addEventListener('click', buttonMessage);
txtEmail.addEventListener('blur', validateEmail);
PhoneNum.addEventListener('blur', validaPhoneNumber);


function validateEmail() {
	let userEmail = txtEmail.value;
	let emailPattern = /^\w+@\w+\.[a-z]{2,6}$/i;

	if (emailPattern.test(userEmail) == true) {
		txtEmail.style.border = "2px solid seagreen";
	} else {
		emailInfo.innerHTML = "Invalid email entered";
		txtEmail.style.color = "red";
	}

}

function buttonMessage(){
	alert("Thank You! Your form was successfuly been submited");
}


function ValidateFirstName () {
	let UserFirstname = FName.value;
	let textFirstname = /^[a-zA-Z]+$/i;

	if (textFirstname.test(UserFirstname) == true) {
        FName.style.border = "2px solid seagreen";
    }
    else{
       FName.style.color = "red";
    }
}

function ValidateSecondName () {
	let UserSecondname = LName.value;
	let textSecondname = /^[a-zA-Z]+$/i;

	if (textSecondname.test(UserSecondname) == true) {
        LName.style.border = "2px solid seagreen";
    }
    else{
       LName.style.color = "red";

    }
}


function ValidatePassword(){
   	let UserPassword = Password.value;
   	textPassword =/^[\d\w@-]{8,20}$i/;

   	if (UserPassword.test(textPassword)==true) {

   		Password.style.color = "2px solid blue";

   	}
       else{
        PasswordInfo.innerHTML = "Invalid Password pattern entered";
       	Password.style.color = " 2px solid red";
       }
   }
	

function validatePhoneNumber() {
  let UserNumber = PhoneNum1.value;
  let NumberPattern = /^(\+234)?\d{10}$/;

  if (NumberPattern.test(userEmail) == true) {
    PhoneNum1.style.border = "2px solid seagreen";
  } else {
    NumberInfo.innerHTML = "Invalid email entered";
    PhoneNum1.style.color = "red";
  }

}



// }   sdsd2020(0)

// function ValidateFirstName () {
// 	let UserLastname = LName.value;
// 	let textLasttname = /^[a-zA-Z]+$/;
// 	if (textLastname.test(UserLastName)) {
//         LName.style.border = " 2px solid blue";
//     }
//     else{
    	
// 		LName.style.color = "red";
//     }
	
//}
   



// function Validateform (){
// 	 let Fnameregex = new RegExp (/^[a-zA-Z]+$/);
//   if (Fnameregex.test(Fname1.value)){
// //   	}
//     else{
//     	Fname1.style.border= " blue 2px solid"

//     }

//     let Lnameregex = new RegExp (/^[a-zA-Z]+$/);
//   if (Fnameregex.test(Lname1.value)){
//   	}
//     else{
//     	alert("input letters only");

//     }

//     let Emailregex = new RegExp (/^[a-zA-Z0-9_]+@[a-zA-Z]\.[a-zA-Z]{3,6}$/);

//   	  	if (Emailregex.test(Email1.value)){
  	  		
//   	  	}
//   	  	else{
//   	  		alert("Invalid email")
//   	  	}

//   	  	let PhoneNumregex = /^(+234)-[1-9]{10}$/;
//   	  		 if (PhoneNumregex.test(PhoneNum1.value)) {
  	  		 		
//   	  		 }
//   	  		 else{
//   	  		 	alert("invalid date format");
//   	  		 }

//   	  		 let Passwordregex =/^[a-zA-Z]\w{3,10}$/;
//   	   	 	 if (Passwordregex.test(Password1.value)) {
  	   	 	 
//   	   	 	 }
//               else {
//               	alert("your passport must consist of Uppercase,lowercase, numbers and spacial character");
              	
//               }


  
  
  