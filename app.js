const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// The first search function covers the initial typing in the search box
function search(str) {
	let results = [];
    const word = str.toLowerCase(); // put to lower case to avoid case sensitivity

    for (i = 0; i < fruit.length; i++) { // i starts out at 0. Characters match up with fruit array length. If characters go past length, fruit suggestions dissappear
        if (fruit[i].toLowerCase().indexOf(word) > -1) { //indexOf searches inside of array
            results.push(fruit[i]); // Generates fruit results. If results meets above criteria, the selected fruit value is pushed to the results array
        }
    }
	return results;
}
// searchHandler looks for the event, typing the words in. Goal is to generate showSuggestions.
function searchHandler(e) {
    const inputVal = e.currentTarget.value;
    let results = [];
    if (inputVal.length > 0) { // match up the inputValue with the search.
        results = search(inputVal);
    }
	showSuggestions(results);
}
// showSuggestions generates the fruit results.
function showSuggestions(results) {
    suggestions.innerHTML = '';

    if (results.length > 0) {
        for (i = 0; i < results.length; i++) {
            suggestions.innerHTML += `<ul>${results[i]}</ul>`;
        }
        suggestions.classList.add('has-suggestions'); // To generate further suggestions as it matches up
    } else {
        results = [];
        suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions'); // To remove suggestuins once they don't match up
    }
}

// useSuggestion gives the ability to click on suggestion and add it to search bar
function useSuggestion(e) {
	input.value = e.target.innerText;
    input.focus();
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');

}

input.addEventListener('keyup', searchHandler); // Check if key was released
suggestions.addEventListener('click', useSuggestion); // Looks for the click to add to the search bar