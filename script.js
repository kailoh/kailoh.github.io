//returns true if the two parameters are anagrams of each other, else false
function isAnagram(string1, string2) {

	//checks if strings are equal length
	if (string1.length != string2.length) { 
		return false;
	}

	//create a JSON object
	var string1Store = {};

	//iterate through the 1st string, store each character in the JSON object as a key-value pair, where value is # of occurences
	for (var i=0; i<string1.length; i++) {
		if (string1Store.hasOwnProperty(string1.charAt(i))) {
			string1Store[string1.charAt(i)]++;
		} else {
			string1Store[string1.charAt(i)] = 1;
		}
	}

	//iterate through the 2nd string, subtracting from the value of the relevant key-value pair in the JSON object
	for (var j=0; j<string2.length; j++) {
		if (string1Store.hasOwnProperty(string2.charAt(j))) {
			string1Store[string2.charAt(j)]--;
			if (string1Store[string2.charAt(j)] < 0) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}


//checks if two strings are anagrams and toggles the relevant labels
function anagramChecker(string1, string2) {
	if (isAnagram(string1, string2)) {
		document.getElementById('successLabel').style.display="inline";
		document.getElementById('failureLabel').style.display="none";
	} else {
		document.getElementById('successLabel').style.display="none";
		document.getElementById('failureLabel').style.display="inline";
	}
}