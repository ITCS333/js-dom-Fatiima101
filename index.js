const { createElement } = require("react");

/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  let box = document.getElementById('box-to-modify');
    box.style.backgroundColor = 'lightblue';
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  let li = document.createElement('li');
  li.textContent = 'New Item';
  let ul = document.getElementById('item-list');
  ul.appendChild(li);
}

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  let p = document.querySelector('.content-para');
  p.classList.add('highlight');
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  let remove = document.getElementById('to-be-removed');
  remove.remove();
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

