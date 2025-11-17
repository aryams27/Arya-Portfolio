

  // Handle tab switching
  const buttons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-pane-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.getAttribute("data-tab");
      tabs.forEach(tab => tab.classList.add("d-none"));
      document.getElementById(target).classList.remove("d-none");
    });
  });

  // Open certificate image
  function openCert(image) {
    window.open(image, "_blank");
  }


  
/* JQuery*/
  
 $(document).ready(function () {
  $(".skill-btn").click(function () {
    // remove active from all buttons
    $(".skill-btn").removeClass("active");

    // add active to clicked one
    $(this).addClass("active");

    // hide all tab contents
    $(".skill-pane-content").addClass("d-none");

    // show the clicked tab content
    const target = $(this).data("skill");
    $("#" + target).removeClass("d-none");
  });
});

  
