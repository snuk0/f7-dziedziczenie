import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      $$(document).on('page:init', '.page[data-name="kalkulator"]', function (e) {
        $$('button[id="dodaj"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) + Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik dodawania to: ' + wynik + '<br>';
        });

        $$('button[id="odejmij"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) - Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik odejmowania to: ' + wynik + '<br>';
        });

        $$('button[id="pomnoz"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) * Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik mnożenia to: ' + wynik + '<br>';
        });

        $$('button[id="podziel"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) / Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik dzielenia to: ' + wynik + '<br>';
        });
      })

      $$(document).on('page:init', '.page[data-name="regex"]', function (e) {
        
      })

      $$(document).on('page:init', '.page[data-name="dziedziczenie"]', function (e) {
        $$("input").keyup(function() {
          var imie_n = document.getElementById('imie_n').value;
          var nazwisko_n = document.getElementById('nazwisko_n').value;
          var klasa_n = document.getElementById('klasa_n').value;
          var przedmiot_n = document.getElementById('przedmiot_n').value;
          var imie_u = document.getElementById('imie_u').value;
          var nazwisko_u = document.getElementById('nazwisko_u').value;
          var klasa_u = document.getElementById('klasa_u').value;
          var nr_dziennik_u = document.getElementById('nr_dziennik_u').value;
          
          class Osoba {
            constructor(imie, nazwisko){
                this.imie = imie;
                this.nazwisko = nazwisko;
            }
        }
        
        class Nauczyciel extends Osoba {
            constructor(imie, nazwisko, nauczyciel_klasa, przedmiot){
                super(imie, nazwisko);
                this.nauczyciel_klasa = nauczyciel_klasa;
                this.przedmiot = przedmiot;
            }
        }
        
        class Uczen extends Osoba {
            constructor(imie, nazwisko, klasa, nr_dziennik){
                super(imie, nazwisko);
                this.klasa = klasa;
                this.nr_dziennik = nr_dziennik;
            }
        }
        
        var nauczyciel = new Nauczyciel(imie_n, nazwisko_n, klasa_n, przedmiot_n);
        var uczen = new Uczen(imie_u, nazwisko_u, klasa_u, nr_dziennik_u);
        document.getElementById('nauczyciel').innerHTML = "Imie nauczyciela: " + nauczyciel.imie + "<br> Nazwisko nauczyciela: " + nauczyciel.nazwisko + "<br> Klasa nauczyciela: " + nauczyciel.nauczyciel_klasa + "<br> Przedmiot nauczyciela: " + nauczyciel.przedmiot;
        document.getElementById('uczen').innerHTML = "Imie ucznia: " + uczen.imie + "<br> Nazwisko ucznia: " + uczen.nazwisko + "<br> Klasa ucznia: " + uczen.klasa + "<br> Numer w dzienniku: " + uczen.nr_dziennik;
        })
      })
    },
  },
});