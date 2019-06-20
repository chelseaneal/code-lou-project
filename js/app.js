/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  window.onload = function() {
    document.querySelector("#hamburger-menu").addEventListener("click", function() {
      document.getElementById("myDropdown").classList.toggle("show");  
    });
  };
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#hamburger-menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }