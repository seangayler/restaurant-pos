// Add click event listeners to the add menu item buttons
const addButtons = document.getElementsByClassName('menu-list-container__item__button');
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', () => {
    addToCart(addButtons[i]);
  });
}

// Takes button as object as argument, temporarily styles button and adds item to cart
function addToCart(button) {
  // Temporary visual changes
  toggleActivatedButton(button);
  window.setTimeout(() => {
    toggleActivatedButton(button);
  }, 500);
  // Add menu item id to cookies
  let indexCookie;
  if (document.cookie == "") {
    indexCookie = 0;
  }
  else {
    indexCookie = document.cookie.split(";").length;
  }
  document.cookie = `${indexCookie}=${button.id}`;
}

// Toggle between activated visual state of button and deactivated
function toggleActivatedButton(button) {
    button.classList.toggle('menu-list-container__item__button');
    button.classList.toggle('menu-list-container__item__button--activated');
    const addedMessage = 'Added to cart! &#10003;';
    const normalMessage = 'Add to order';
    if (button.textContent == normalMessage) {
      button.innerHTML = addedMessage;
      button.disabled = true;
    }
    else {
      button.textContent = normalMessage;
      button.disabled = false;
    }
}