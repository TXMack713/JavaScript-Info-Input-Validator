// Import stylesheets
import './style.css';

// Write Javascript code!
let entry = prompt('Please enter a number greater than 100');
while (!(parseInt(entry) > 100)) {
  alert('Invalid entry');
  entry = prompt('Please enter a number greater than 100');
}
if (parseInt(entry) > 100) {
  alert('You entered: ' + entry);
}
