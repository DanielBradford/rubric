$(document).ready(function () {
  $("select").formSelect();
  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
  $("#logout").click(function () {
    if (confirm("Are you sure you want to logout?")) {
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });
  /*------Delete Button Confirmation-----*/
  $(".delete-btn").click(function () {
    if (confirm(
        "Are you sure you want to DELETE this recipe? This action cannot be undone!")
    ) {
      alert("RECIPE HAS BEEN SUCCESSFULLY DELETED");
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });

  //   back button for breadcrumb nav

  $("#back").click(function () {
    window.history.back();
  });
  //   remove button for saved recipes
  $(".remove-btn").click(function () {
    if (
      confirm(
        "Are you sure you want to REMOVE this recipe from the SAVED RECIPES? This action cannot be undone!"
      )
    ) {
      alert("RECIPE HAS BEEN SUCCESSFULLY REMOVED");
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });
  $("#save-btn").click(function () {
    alert("This recipe has been SAVED successfully!");
    $(".lever").addAttribute("selected");
    $("#save-text").text("SAVED");
  });

  $("#remove-btn").click(function(){
      $(".remove").toggle();
  })
});
