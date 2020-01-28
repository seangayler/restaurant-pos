// Add click event listeners to the remove item buttons
const removeButtons = document.getElementsByClassName('cart-list-container__item__button');
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', () => {
    removeFromCart(removeButtons[i]);
  });
};

// Takes button as argument and removes its associated item from the cart
function removeFromCart(button) {
  // Remove element
  const menuItem = button.parentNode;
  button.parentNode.parentNode.removeChild(menuItem);
  // Remove cookie
  removeCookie(button)
}

// Removes a cookie by creating a new document.cookie object with all but the removed cookie
function removeCookie(button) {
  document.cookie = `${button.id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
}
  