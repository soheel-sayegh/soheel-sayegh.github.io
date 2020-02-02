$ (function () {
  $ ('.deu').click (function () {
    $ ('.nav-item')
      .find ($ ('.nav-link:contains("ABOUT ME")'))
      .html ('ÜBER MICH');

    $ ('.nav-item')
      .find ($ ('.nav-link:contains("SKILLS")'))
      .html ('FÄHIGKEITEN');
    $ ('section')
      .find ($ ('h1:contains("MY SKILLS")'))
      .html ('MEINE FÄHIGKEITEN');
    $ ('.nav-item')
      .find ($ ('.nav-link:contains("SERVICES")'))
      .html ('DIENSTLEISTUNGEN');
    $ ('section')
      .find ($ ('h1:contains("SERVICES")'))
      .html ('DIENSTLEISTUNGEN');
    $ ('.nav-item').find ($ ('.nav-link:contains("CONTACT")')).html ('KONTAKT');
    $ ('section').find ($ ('h1:contains("CONTACT")')).html ('KONTAKT');
    $ ('div')
      .find ($ ('h1:contains("Hi")'))
      .html ('Hi, ich bin<br /> <span class="spanColor">SOHEEL SAYEGH</span> ');
    $ ('div')
      .find ($ ('h4:contains("Web Designer and Web Developer")'))
      .html ('Webdesigner und Webentwickler');
    $ ('div')
      .find ($ ('p:contains("My name is SOHEEL SAYEGH. I am 27 years old")'))
      .html (
        'Ich heiße SOHEEL SAYEGH. Ich bin 27 Jahre alt. Ich lerne Webentwicklung bei der Digital Career Institute GmbH in Düsseldorf.'
      );
    $ ('button')
      .find ($ ('span:contains("Download CV")'))
      .html ('Lebenslauf <i class="fas fa-file-download"></i>');
    $ ('.skill-text')
      .find ($ ('h3:contains("WEB DEVELOPMENT SKILLS")'))
      .html ('FÄHIGKEITEN ZUR WEBENTWICKLUNG');
    $ ('.services-itme')
      .find ($ ('a:contains("Creative Design")'))
      .html ('Kreatives Design');
    $ ('.services-itme')
      .find ($ ('p:contains("From branding to graphic")'))
      .html (
        `Vom Branding über Grafikdesign bis zum Seitenlayout. Geben Sie mir Site's Purpose und ich kann Strategy finden, dass Ihre Website aussehen sollte.`
      );
    $ ('.services-itme')
      .find ($ ('a:contains("Mobile Apps Development")'))
      .html ('Mobile Apps Entwicklung');
    $ ('.services-itme')
      .find ($ ('p:contains("Every website that I develop")'))
      .html (
        `Jede Website, die ich entwickle, ist mobil ansprechbar. Die Bedeutung eines reaktionsschnellen Webdesigns liegt in einem optimierten Surferlebnis.`
      );
    $ ('.services-itme')
      .find ($ ('a:contains("Website Development")'))
      .html ('Webseitenentwicklung');
    $ ('.services-itme')
      .find ($ ('p:contains("dealing with browser inconsistencies")'))
      .html (
        `Umgang mit Inkonsistenzen im Browser, Front-End-Entwicklung für beliebig viele Bildschirmgrößen, Bildschirmorientierungen, Pixeldichten und Eingabetypen. Das Entwickeln einer gewaltigen Landschaft aus verschiedenen Bildschirmen, Browsern und Funktionen hängt von den meisten Front-End-Entwicklungen ab`
      );
    $ ('div')
      .find ($ ('h3:contains("My contact")'))
      .html ('Meine Kontaktdaten .');
    $ ('div')
      .find ($ ('h3:contains("You can contact me")'))
      .html ('Sie können mich kontaktieren <span>per.</span>');
    $ ('h5')
      .find ($ ('p:contains("©Design by Soheel Sayegh")'))
      .html ('©Design von Soheel Sayegh');
  });
});
