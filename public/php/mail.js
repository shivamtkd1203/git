const firebaseConfig = {
    
  apiKey: "AIzaSyBDAyhVItrYNPZABTUeR3RGCn8G6GmoMAo",
  authDomain: "newform-bda92.firebaseapp.com",
  databaseURL: "https://newform-bda92-default-rtdb.firebaseio.com",
  projectId: "newform-bda92",
  storageBucket: "newform-bda92.appspot.com",
  messagingSenderId: "293799771535",
  appId: "1:293799771535:web:e081eb522db0caeb9f9ffa"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var address = getElementVal("address");
var number = getElementVal("number");
var emailid = getElementVal("emailid");
var destination = getElementVal("destination");

saveMessages(name,address,number , emailid, destination);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("conactForm").reset();
}

const saveMessages = (name, address, number , emailid, destination) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
name: name,
address : address,
number : number,
emailid: emailid,
destination : destination,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};