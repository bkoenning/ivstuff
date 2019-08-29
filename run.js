


let inputField = document.getElementById("inputtext");
let divText = document.getElementById("output");
let inputString = "";
inputField.addEventListener('blur', evt => {
	evt.preventDefault();
	divText.textContent = "";
	let fluidString = inputField.value.toLowerCase();
	let regExpFluid = RegExp(fluidString.trim(), "i");
	let resultsArray = new Array();
	inputString = fluidString.toUpperCase();

	for (let i = 0; i < fluids.length; i++) {
		for (let j = 0; j < fluids[i].possibleNames.length; j++) {
			if (regExpFluid.test(fluids[i].possibleNames[j])) {
				resultsArray.push(fluids[i].name);
				break;
			}

		}

	}

	let newUL = document.createElement('ul');
	for (let i = 0; i < resultsArray.length; i++) {
		let newOL = document.createElement('li');
		let newText = document.createTextNode(resultsArray[i]);

		newOL.appendChild(newText);
		newUL.appendChild(newOL);
		newOL.addEventListener('mouseover', evt => {
			console.log(newOL.textContent);
		});
	}
	divText.appendChild(newUL);
});
