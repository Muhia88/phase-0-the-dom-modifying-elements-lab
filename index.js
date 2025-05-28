// Remove the main element with id 'main'
document.querySelector('main#main').remove();

// Create a new h1 element and assign it to newHeader
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Daniel is the champion'; 

// Append the new h1 element to the body
document.body.appendChild(newHeader);