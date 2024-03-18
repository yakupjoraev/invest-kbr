function tabs() {
  // Get all services items
  let tabtems = document.querySelectorAll('[data-tab-item]');
  let tabsContents = document.querySelectorAll('[data-tab-content]');

  // Add click event listener to each services item
  tabtems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Remove "active" class from all services items
      tabtems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Add "active" class to the clicked services item
      item.classList.add('active');

      // Get the corresponding services content
      const contentId = item.getAttribute('data-tab-item');
      const content = document.querySelector('[data-tab-content="' + contentId + '"]');

      // Remove "active" class from all services content
      tabsContents.forEach(function (content) {
        content.classList.remove('active');
      });

      // Add "active" class to the corresponding services content
      content.classList.add('active');
    });

  });

};

export default tabs;