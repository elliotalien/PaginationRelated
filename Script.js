
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
