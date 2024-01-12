# Pagination Component with Active Page Highlighting

## [Live Preview](https://elliotalien.github.io/PaginationRelated/)


This repository provides a simple and customizable pagination component with the ability to highlight the active page. The component includes previous and next page buttons, and you can click on individual page numbers to navigate through the pages.

## Usage

Include the HTML structure in your project:

```html
<div class="paginationSction">
  <ul class="paginationbtn" id="paginationList">
    <li class="previousPage"><i class="fa-solid fa-angle-left"></i></li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="nextPage"><i class="fa-solid fa-angle-right"></i></li>
  </ul>
</div>

```


Customize the styles in your CSS file (styles.css) according to your design preferences.

```css

.paginationSction {
  padding: 25px;
}

.paginationbtn {
  display: flex;
  gap: 10px;
}

.paginationbtn li {
  border-radius: 8px;
  border: 1px solid #F1F1F1;
  background: #FFF;
  color: #333333;
  padding: 6px 12px;
  color: #000;
  font-weight: 600;
}

.paginationbtn li.active {
  background-color: #4318FF;
  color: #fff;
}

.nextPage:hover {
  background-color: #4318FF;
  color: #fff;
}

.previousPage:hover {
  background-color: #4318FF;
  color: #fff;
}

```

Include the provided JavaScript code (Script.js) to enable the pagination functionality.

```javascript

var paginationList = document.getElementById("paginationList");
var listItems = paginationList.getElementsByTagName("li");
var currentPageIndex = 1; 

// Function to update the active page
function updateActivePage() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }

  listItems[currentPageIndex].classList.add("active");
}

// Set the second page as the default active item
updateActivePage();

// Click event for individual page numbers
for (var i = 1; i < listItems.length - 1; i++) {
  listItems[i].addEventListener("click", function () {
    currentPageIndex = Array.from(listItems).indexOf(this);
    updateActivePage();
  });
}

// Click event for previous page
listItems[0].addEventListener("click", function () {
  if (currentPageIndex > 1) {
    currentPageIndex--;
    updateActivePage();
  }
});

// Click event for next page
listItems[listItems.length - 1].addEventListener("click", function () {
  if (currentPageIndex < listItems.length - 2) {
    currentPageIndex++;
    updateActivePage();
  }
});

```

Make sure to load the necessary Font Awesome icons in your HTML document or update the icon classes as needed.

## Features
- Click on individual page numbers to navigate to the corresponding page.
- Use the previous and next page buttons to navigate through the pages.
- The active page is visually highlighted with a different background color

