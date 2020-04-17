$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.HTML-CSS, .BOOTSTRAB')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 95) clearInterval (interval);
  }, 30);
});

$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.JAVASCRIPT, .REACT, .MongoDB ')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 85) clearInterval (interval);
  }, 30);
});
$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.w-L')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 80) clearInterval (interval);
  }, 30);
});

$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.MYSQL ')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 70) clearInterval (interval);
  }, 30);
});
$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.handlebars , .Redux')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 50) clearInterval (interval);
  }, 30);
});

$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.NODEJS ')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 70) clearInterval (interval);
  }, 30);
});

$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.JQUERY')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 85) clearInterval (interval);
  }, 30);
});
$ (function () {
  var current_progress = 0;
  var interval = setInterval (function () {
    current_progress += 1;
    $ ('.EXPRESS')
      .css ('width', current_progress + '%')
      .attr ('aria-valuenow', current_progress)
      .text (current_progress + '%');
    if (current_progress >= 70) clearInterval (interval);
  }, 30);
});
$ (document).ready (function () {
  $ ('.navbar .navbar-nav a').on ('click', function () {
    $ ('.navbar .navbar-nav').find ('li.active').removeClass ('active');
    $ (this).parent ('li').addClass ('active');
  });
  $ ('.ChangeColor').click (function () {
    var color = $ (this).val ();
    $ ('.list-inline li').css ({
      border: '3px solid' + color,
    });

    $ (
      ' .navbar,.nav-pills,.dropdown .dropdown-toggle, .person_details .btn, .progress-bar, .SERVICES, .contact-detial .media .media-left i'
    ).css ({
      background: color,
    });

    if (color == '#23272b' || color == '#007bff' || color == '#6c757d') {
      $ (
        '.navbar,.navbar .nav-link,.dropdown .dropdown-toggle, .navbar-brand, .person_details .btn,.progress-bar, .SERVICES,.services-itme a,.services-itme p, .contact-detial .media .media-left i'
      ).css ({
        color: 'white',
      });
    } else {
      $ (
        '.navbar,.navbar .nav-link,.navbar-brand,.dropdown .dropdown-toggle, .progress-bar, .SERVICES,.services-itme a,.services-itme p, .contact-detial .media .media-left '
      ).css ({
        color: 'black',
      });
    }
    if (color == '#23272b') {
      $ ('.progress-bar').css ({
        background: 'white',
        color: 'black',
      });
    }

    $ (
      '.person_details h1 span, .footer-link .h5 p span,.h4-color span, .contact h3 span, .footer h1'
    ).css ({
      color: color,
    });

    $ ('.person_details .btn').mouseover (function () {
      $ (this).css ({
        background: 'white',
        color: 'black',
      });
    });
    $ ('.person_details .btn').mouseout (function () {
      $ (this).css ({
        background: color,
        color: 'white',
      });
    });
  });

  $ ('.dropdown-toggle').click (function () {
    $ (' .dropdown-menu').slideToggle (1000);
  });
  $ ('.navbar .navbar-nav .nav-item a').click (function () {
    $ ('html, body').animate (
      {
        scrollTop: $ ('#' + $ (this).data ('value')).offset ().top,
      },
      1000
    );
  });
});
AOS.init ();
