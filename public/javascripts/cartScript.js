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
  menuItem.style.display = 'none';
  // Remove cookie
  removeCookie(button)
  // Deduct price from total price
  deductPrice(button);
  // Check if cart is empty and clear screen if so
  if (document.cookie == "") {
    clearScreen();
  }
}

// Removes a cookie by creating a new document.cookie object with all but the removed cookie
function removeCookie(button) {
  const targetId = button.id;
  const cookies = document.cookie;
  const cookieList = cookies.split(';');
  const numCookies = cookieList.length;
  const newCookieList = new Array();
  // Expire all the cookies
  removeAllCookies(cookieList);
  if (cookieList.length == 1) {
    return;
  }
  // Create new cookies
  let foundRemovedCookie = false;
  let i = 0;
  cookieList.forEach((cookie) => {
    let id = cookie.slice(cookie.indexOf('=') + 1);
    if (id != targetId || (id == targetId && foundRemovedCookie)) {
      document.cookie = `${i}=${id}`;
      i++;
    }
    else {
      foundRemovedCookie = true;
    }
  });  
}

// Deducts the price of the menu item the button refers to from the total price
function deductPrice(button) {
  const totalPriceElement = document.getElementById('totalPrice');
  let totalPrice = totalPriceElement.textContent.slice(totalPriceElement.textContent.indexOf('$') + 1)
  let deduction = 0;
  const siblingNodes = button.parentNode.childNodes;
  siblingNodes.forEach((sibling) => {
    if (sibling.classList.contains('cart-list-container__item__price')) {
      deduction = sibling.textContent.slice(sibling.textContent.indexOf('$') + 1);
    }
  });
  totalPrice -= parseFloat(deduction);
  totalPrice = totalPrice.toFixed(2);
  totalPriceElement.textContent = `Total price: $${totalPrice}`; 
}

// Clear the screen if the cart is empty
function clearScreen() {
  const elementToRemove = document.getElementsByClassName('place-order-container')[0];
  document.body.removeChild(elementToRemove);
  const emptyMessage = document.createElement('p');
  emptyMessage.textContent = 'The cart is empty.';
  emptyMessage.setAttribute('Style', 'text-align: center; font-size: 1.75rem;');
  document.body.appendChild(emptyMessage);
}

// Take cookieList as argument in form of cookies split by semicolon
function removeAllCookies(cookieList) {
  cookieList.forEach((cookie) => {
    document.cookie = cookie + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  });
}