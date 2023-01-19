
  $(document).ready(function() {
    $('.btn-primary').click(function() {
      $('html, body').animate({
        scrollTop: $("#banner").offset().top
      }, 1000);
    });
  });

  $(document).ready(function() {
    $('#login-button').click(function() {
      $('#login-modal').modal();
    });
    $('#signup-button').click(function() {
      $('#signup-modal').modal();
    });
  });

const cardColumns = document.querySelector('.card-columns');

window.addEventListener('scroll', function() {
  if (window.scrollY > cardColumns.offsetTop) {
    cardColumns.classList.add('scroll');
  } else {
    cardColumns.classList.remove('scroll');
  }
});

//Add a pop-up modal for the "Log In" button//
  $(document).ready(function() {
    $(document).ready(function() {
    $('#login-modal').modal();
  });
  });

  $(document).ready(function() {
  $("#signup-button").click(function() {
    $("#signup-modal").modal("show");
  });
});



  