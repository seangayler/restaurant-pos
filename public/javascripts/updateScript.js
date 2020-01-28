// set onclick event listener to create button to display form when clicked
const createButton = document.getElementsByClassName('update-create')[0];
createButton.addEventListener('click', () => {
  const createForm = createCreateForm();
  const formBackground = createFormBackground();
  document.body.appendChild(formBackground);
  document.body.appendChild(createForm);
})

// Creates and returns the form to create a new menu item.
function createCreateForm() {
  // form element
  const form = document.createElement('form');
  form.classList.add('update-create-form');
  form.setAttribute('action', '/update/create');
  form.setAttribute('method', 'post');
  // exit button
  const buttonExit = document.createElement('button');
  buttonExit.classList.add('update-create-form__exit');
  buttonExit.textContent = 'Exit form';
  buttonExit.addEventListener('click', () => {
    document.body.removeChild(document.getElementsByClassName('update-create-form')[0]);
    document.body.removeChild(document.getElementsByClassName('update-create-form-background')[0]);
  });
  // name input element
  const inputName = document.createElement('input');
  inputName.classList.add('update-create-form__name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.placeholder = 'Name (required)';
  inputName.required = true;
  inputName.maxLength = 50;
  inputName.onkeydown = (e) => {if (e.keyCode == 13) {return false}};
  // description input element
  const inputDescription = document.createElement('input');
  inputDescription.classList.add('update-create-form__description');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('name', 'description');
  inputDescription.placeholder = 'Description';
  inputDescription.maxLength = 150;
  inputDescription.onkeydown = (e) => {if (e.keyCode == 13) {return false}};
  // price input element
  const inputPrice = document.createElement('input');
  inputPrice.classList.add('update-create-form__price');
  inputPrice.setAttribute('type', 'number');
  inputPrice.setAttribute('name', 'price');
  inputPrice.min = 0;
  inputPrice.step = 0.01;
  inputPrice.placeholder = 'Price (required)';
  inputPrice.required = true;
  inputPrice.onkeydown = (e) => {if (e.keyCode == 13) {return false}};
  // submit button
  const buttonSubmit = document.createElement('input');
  buttonSubmit.classList.add('update-create-form__submit');
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.setAttribute('value', 'Create menu item');
  // hierarchy of html attributes
  form.appendChild(buttonExit);
  form.appendChild(inputName);
  form.appendChild(inputDescription);
  form.appendChild(inputPrice);
  form.appendChild(buttonSubmit);
  return form;
}

// Creates and returns the background to place behind the form
function createFormBackground() {
  const formBackground = document.createElement('div');
  formBackground.classList.add('update-create-form-background');
  return formBackground;
}