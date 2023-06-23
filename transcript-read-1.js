
  
    // Optional: Adjust scroll speed
    const scrollSpeed = 10;

    // Scroll container left or right on arrow click
    function scrollContainer(direction) {
      const menuContainer = document.querySelector('.menu-container');
      menuContainer.scrollLeft += scrollSpeed * direction;
    }

    // Add event listeners to scroll left and right
    const leftArrow = document.createElement('div');
    leftArrow.innerHTML = '&#9664;';
    leftArrow.className = 'menu-arrow left-arrow';
    leftArrow.addEventListener('click', () => scrollContainer(-1));

    const rightArrow = document.createElement('div');
    rightArrow.innerHTML = '&#9654;';
    rightArrow.className = 'menu-arrow right-arrow';
    rightArrow.addEventListener('click', () => scrollContainer(1));

    const menuContainer = document.querySelector('.menu-container');
    menuContainer.parentElement.insertBefore(leftArrow, menuContainer);
    menuContainer.parentElement.appendChild(rightArrow);
