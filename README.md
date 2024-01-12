# Pagination Component with Active Page Highlighting

This repository provides a simple and customizable pagination component with the ability to highlight the active page. The component includes previous and next page buttons, and you can click on individual page numbers to navigate through the pages.

## Usage

Include the HTML structure in your project:

```html
<div class="paginationeSction">
  <ul class="paginationbtn" id="paginationList">
    <li class="previousPage"><i class="fa-solid fa-angle-left"></i></li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="nextPage"><i class="fa-solid fa-angle-right"></i></li>
  </ul>
</div>

````


Customize the styles in your CSS file (styles.css) according to your design preferences.

```css

.paginationeSction {
  padding: 25px;
}

.paginationbtn {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
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
