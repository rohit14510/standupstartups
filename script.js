$(document).ready(function(){
  $(".mobile-menuicon").click(function(){
      $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
  });

  $(".close-menu").click(function(){
      $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
  });

  // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
  $(document).click(function(event) {
      if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
          $(".mobile-menu").css("left", "-100%");
      }
  });
});