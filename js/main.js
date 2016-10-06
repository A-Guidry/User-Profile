$(document).ready(function() {

function submitForm() {
// Variables with user values
var nameFirst = document.getElementById('firstName').value
var nameLast = document.getElementById('lastName').value
var userEmail = document.getElementById('email').value
var userId = document.getElementById('userName').value
var passWord = document.getElementById('password').value
// Variables with provided values
var gender = document.getElementsByName("optradio")
var country = document.getElementsByClassName("country")
// Creates variable for id
var results = document.getElementById("results")

// Create empty variables
var	userGender, userCountry

// If the first name field is blank, give error messsage
if (nameFirst == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// If the last name field is blank, give error messsage
if (nameLast == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// If the email field is blank, give error messsage
if (userEmail == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// If the userId field is blank, give error messsage
if (userId == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// If the password value is blank, give error messsage
if (passWord == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// Cycle through array to find the selected value
for (var i = 0; i < gender.length; i++) {
	if(gender[i].checked){
		userGender = gender[i].value
	}
	console.log(userGender)
}
// If the gender value is blank or not selected, give error messsage
if (userGender == undefined) {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// Cycle through array to find the selected value
for (var i = 0; i < country.length; i++) {
	if(country[i].selected){
		userCountry = country[i].value
	}
}
// If the county value is blank, give error messsage
if (country == "") {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// If both country and gender are selected, the statement is true
if (!userCountry || !userGender) {
	results.innerHTML = "*Please fill in all feilds"
	results.className = "noInput"
	return
}
// Display profile on screen

// Creates varaible with the profile input
var userProfile ={
	name: nameFirst,
	last: nameLast,
	gender: userGender,
	username: userId,
	email: userEmail,
	country: userCountry

}
// Delays the user profile input from being displayed for 1 second
setTimeout(function(){
	newProfile(userProfile)
	document.getElementById("myProfile").className = "myProfile"
	document.getElementById("myProfileTitle").className ="profileHeader"
},1000)


} // end submitForm

// Creates a function for new profile and pushes user data to newProfile div
function newProfile(userProfile) {
	var newFirstName = document.getElementById('newFirstName')
	var newLastName = document.getElementById('newLastName')
	var newUserGender = document.getElementById('newUserGender')
	var newUserEmail = document.getElementById("newUserEmail")
	var newUserId = document.getElementById("newUserId")
	var newUserCountry = document.getElementById("newUserCountry")

	// Creates H1 tag and displays heading text to elemet
	var h1 = document.createElement("H1")
	var welText = document.createTextNode("Your Profile")
	var profileImg = document.createElement("IMG")
	profileImg.src = "img/profile.png"
	profileImg.className = "pencil"
	var welcome = document.getElementById("myProfileTitle")
	welcome.appendChild(h1)
	h1.appendChild(welText)
	document.getElementById("image").appendChild(profileImg)

	// Display user info on new profile screen
	newFirstName.innerHTML = "Name: "+ "<br>"  + userProfile.name + " " + userProfile.last
	console.log(newFirstName)
	newUserId.innerHTML = "Username: " + "<br>"  + userProfile.username
	console.log(newUserId)
	newUserGender.innerHTML = "Gender: " + "<br>" + userProfile.gender
	newUserEmail.innerHTML = "Email: "+ "<br>"  + userProfile.email
	console.log(newUserEmail)
	newUserCountry.innerHTML = "Country: "+ "<br>"  + userProfile.country
	console.log(newUserCountry)

// Hides form and display user profile
	document.getElementById("form").style.display = "none"
	document.getElementById("results").style.display = "none"
	document.getElementById("myProfile").style.display = "block"

}
// Submit the form when clicking the button
document.getElementById("submitBtn").addEventListener("click",submitForm)

}) //end .ready




