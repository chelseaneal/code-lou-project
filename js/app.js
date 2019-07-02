// Hamburger menu is hidden //
$('.dropdown-content').hide();

// When user clicks on the hamburger menu, dropdown content shows, icon changes to exit icon //

$('#menu-icons').click(function () {
  $('.dropdown-content').toggle("slow");
  $(this).find('img').toggle();
});