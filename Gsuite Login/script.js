function form(){
	var uname= document.login.uname.value;
	var pwd= document.login.pwd.value;
	var phn= document.login.phn.value;
	var email= document.login.email.value;

	if(uname==""){
		document.getElementById('demo').innerHTML="Please Enter Username!!";
		return false;
	}else if(pwd==""){
	document.getElementById('demo').innerHTML="Please Enter Password!!";
	return false;
}else if(pwd.length<10){
		document.getElementById('demo').innerHTML="Your Password must be upto 10!!";
		return false;
	}
   //Check Mobile NUmber
   if(phn==""){
	document.getElementById('demo').innerHTML="Please Enter Your Phone Number";
	return false; 
}if(isNaN(phn)){
	document.getElementById('demo').innerHTML="Please Enter Number Only!";
	return false; 
}
//Email
if(email==""){
	document.getElementById('demo').innerHTML="Please Enter Your Email!";
	return false; 
}
if(email.indexOf('@')<=0){
     document.getElementById('demo').innerHTML="Invalid Options : '@' !!";
	return false; 
}
if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
     document.getElementById('demo').innerHTML="Invalid Options : '.' !!";
	return false; 
}

//Passed Formalities
/*document.getElementById('demo').innerHTML="You are Logged In!";
	return false; */
}