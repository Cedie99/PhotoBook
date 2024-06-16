const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function showFullImage(img) {
  // Create a modal element
  var modal = document.createElement('div');
  modal.classList.add('modal');

  // Create an image element for the full image
  var fullImage = document.createElement('img');
  fullImage.src = img.src;
  fullImage.alt = img.alt;

  // Append the full image to the modal
  modal.appendChild(fullImage);

  // Append the modal to the body
  document.body.appendChild(modal);

  // Close the modal when clicked outside the image
  modal.addEventListener('click', function() {
    modal.remove();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const showFormLink1 = document.getElementById('showFormLink1');
  const showFormLink2 = document.getElementById('showFormLink2');
  const showFormLink3 = document.getElementById('showFormLink3');
  const showFormLink4 = document.getElementById('showFormLink4');
  const formContainer = document.getElementById('formContainer');
  const formContainer2 = document.getElementById('formContainer2');
  const itemList = document.createElement('ul');
  itemList.id = 'itemList';

  const itemList2 = document.createElement('ul');
  itemList2.id = 'itemList2';

  showFormLink1.addEventListener('click', function(event) {
    event.preventDefault();
    showForm();
  });

  showFormLink2.addEventListener('click', function(event) {
    event.preventDefault();
    showForm();
  });
  
  showFormLink3.addEventListener('click', function(event) {
    event.preventDefault();
    showFormDTR();
  });

  showFormLink4.addEventListener('click', function(event) {
    event.preventDefault();
    showFormDTR();
  });

  function showForm() {
    // Hide the other form container
    formContainer2.style.display = 'none';
    // Clear the form container
    formContainer.innerHTML = '';

    // Create a form element
    const form = document.createElement('form');
    form.classList.add('form-section');

    // Add form fields
    const foodLabel = document.createElement('label');
    foodLabel.setAttribute('for', 'food');
    foodLabel.textContent = 'Favorite food:';
    form.appendChild(foodLabel);

    const foodText = document.createElement('span');
    foodText.textContent = 'Strawberry'; // Example fixed text
    form.appendChild(foodText);

    const foodText2 = document.createElement('span');
    foodText2.textContent = 'Sinigang'; // Example fixed text
    form.appendChild(foodText2);

    const foodText3 = document.createElement('span');
    foodText3.textContent = 'Takoyaki'; // Example fixed text
    form.appendChild(foodText3);

    const colorLabel = document.createElement('label');
    colorLabel.setAttribute('for', 'color');
    colorLabel.textContent = 'Color:';
    form.appendChild(colorLabel);

    const colorText = document.createElement('span');
    colorText.textContent = 'Lavender'; // Example fixed text
    form.appendChild(colorText);

    const colorText2 = document.createElement('span');
    colorText2.textContent = 'Green'; // Example fixed text
    form.appendChild(colorText2);




    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.textContent = "Close";
    closeButton.addEventListener('click', function(event) {
      event.preventDefault();
      formContainer.style.display = 'none';
    });
    form.appendChild(closeButton);



    // Append the form to the form container
    formContainer.appendChild(form);

    // Show the form container
    formContainer.style.display = 'block';
  }


  function showFormDTR() {

    // Hide the other form container
    formContainer.style.display = 'none';

    // Clear the form container
    formContainer2.innerHTML = ''; // Use formContainer2 for form-section2

    // Create a form element
    const form = document.createElement('form');
    form.classList.add('form-section2');

    // Add form fields
    const dateLabel = document.createElement('label'); // Corrected variable name
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date:';
    form.appendChild(dateLabel);

    const dateText = document.createElement('span');
    dateText.textContent = 'November 4, 2023 - She said YES to me!!'; // Example fixed text
    form.appendChild(dateText);

    const dateText2 = document.createElement('span');
    dateText2.textContent = 'September 14, 2023 - Her Birthday!'; // Example fixed text
    form.appendChild(dateText2);

    const dateText3 = document.createElement('span');
    dateText3.textContent = 'June 18, 2023 - The Beginning'; // Example fixed text
    form.appendChild(dateText3);

   

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.textContent = "Close";
    closeButton.addEventListener('click', function(event) {
      event.preventDefault();
      formContainer2.style.display = 'none'; // Use formContainer2
    });
    form.appendChild(closeButton);


    



    // Append the form to the form container
    formContainer2.appendChild(form);

    // Show the form container
    formContainer2.style.display = 'block';
  }



});
