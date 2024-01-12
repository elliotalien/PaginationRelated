

// // ...................my first code...................

//   var paginationList = document.getElementById("paginationList");
//   var listItems = paginationList.getElementsByTagName("li");
//   var currentPageIndex = 1; 

// // Function to update the active page

//   function updateActivePage() {
//     for (var i = 0; i < listItems.length; i++) {
//       listItems[i].classList.remove("active");
//     }

//     listItems[currentPageIndex].classList.add("active");
//   }

//  // Click event for individual page numbers

//   for (var i = 1; i < listItems.length - 1; i++) {
//     listItems[i].addEventListener("click", function () {
//       currentPageIndex = Array.from(listItems).indexOf(this);
//       updateActivePage();
//     });
//   }

//  // Click event for previous page
//   listItems[0].addEventListener("click", function () {
//     if (currentPageIndex > 1) {
//       currentPageIndex--;
//       updateActivePage();
//     }
//   });

// //   // Click event for next page
//   listItems[listItems.length - 1].addEventListener("click", function () {
//     if (currentPageIndex < listItems.length - 2) {
//       currentPageIndex++;
//       updateActivePage();
//     }
//   });


// // ...................updated code...................



//   var paginationList = document.getElementById("paginationList");
//   var listItems = paginationList.getElementsByTagName("li");
//   var currentPageIndex = 0; // Set the default active page to the first page

// //   // Function to update the active page
//   function updateActivePage() {
//     for (var i = 0; i < listItems.length; i++) {
//       listItems[i].classList.remove("active");
//     }

//     listItems[currentPageIndex].classList.add("active");
//   }

// //   // Click event for individual page numbers
//   for (var i = 1; i < listItems.length - 1; i++) {
//     listItems[i].addEventListener("click", function () {
//       currentPageIndex = Array.from(listItems).indexOf(this);
//       updateActivePage();
//     });
//   }

// //   // Click event for previous page
//   listItems[0].addEventListener("click", function () {
//     if (currentPageIndex > 0) {
//       currentPageIndex--;
//       updateActivePage();
//     }
//   });

// //   // Click event for next page
//   listItems[listItems.length - 1].addEventListener("click", function () {
//     if (currentPageIndex < listItems.length - 2) {
//       currentPageIndex++;
//       updateActivePage();
//     }
//   });

// //   // Set the default active page on page load
//   updateActivePage();



// ...................final update ...................


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
