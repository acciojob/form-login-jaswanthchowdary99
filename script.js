function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const form = document.getElementById("form1");
	const fname = form.elements["fname"].value; 
	const lname	=form.elements["lname"].value;
	alert(`${fname}`+` ${lname}`);
}
