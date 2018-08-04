function formCheck() {
	var messages = [];

	if (document.getElementById("FirstName").value.length < 1) { messages.push("First name is missing!"); }
	if (document.getElementById("LastName").value.length < 1) { messages.push("Last name is missing!"); }
	if (document.getElementById("CallSign").value.length < 1) { messages.push("Call sign is missing!"); }
	if (document.getElementById("Street").value.length < 1) { messages.push("Street address is missing!"); }
	if (document.getElementById("City").value.length < 1) { messages.push("City name is missing!"); }
	if (document.getElementById("Province").value.length < 1) { messages.push("Province is missing!"); }
	if (document.getElementById("Postcode").value.length < 1) { messages.push("Postal code is missing!"); }
	if (document.getElementById("Telephone").value.length < 1) { messages.push("Phone number is missing!"); }
	if (document.getElementById("Cellphone").value.length < 1) { messages.push("Cellphone number is missing!"); }
	if (document.getElementById("Email").value.length < 1) { messages.push("Email address is missing!"); }

	if (messages.length > 0) {
		alert(messages.join("\n"));
		return false;
	} else {
		return true;
	}
}

document.getElementById("appform").onsubmit = formCheck;
