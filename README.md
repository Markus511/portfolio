# **Dokumentaatio**

## **Frontend** src/

### index.js

- Määritellään sovelluksen juurielementti (root)
- Renderöidään pääkomponentti App

### App.js

- Käytetään react-router-dom-kirjastoa reititykseen
- Määritellään reitit
  
### Layout/index.js

Käytetään react-router-dom-kirjaston Outlet-komponenttia, johon App.js-tiedoston reitit renderöidään.
LeftSide-komponenttiin renderöidään sivun navigaatiopalkki.

## components/
- About
- Contact
- Projects
- Projects/BookArchiveProject
- Projects/ListAppProject
- Layout
- LeftSide
  
Jokaiselle kansiolle on oma index.js ja index.scss -tiedosto eli index.js sisältää React-komponentin JSX-syntaksilla ja index.scss -tiedosto sisältää tyylimäärittelyn kyseiselle komponentille.


## **Backend** backend/

### server.js
- Express-sovelluksen päämoduuli, joka käynnistää palvelimen ja määrittelee tarvittavat middlewaret ja reitit
  
## controllers/

### mailController.js

- Sisältää sähköpostin lähetykseen liittyvän logiikan
- Käytetään Nodemailer-kirjastoa sähköpostin lähetykseen
- Luodaan Nodemailer-kuljetin, jossa määritellään SMTP-palvelimen osoite, turvallinen portti, SSL-yhteys ja autentikointi Gmail-tilille pääsyyn
- Säilytetään sähköpostiosoitetta ja salasanaa turvallisesti ympäristömuuttujissa (tiedot lisätään .gitignoreen)
  
## routes/

### mailRoutes.js
- Määrittelee Express-reitit ja käyttää mailController-tiedostosta tuotua logiikkaa
- router.route('/api/contact').post(ctrl.fetch) määritellään reitti ja POST-pyyntö mailControllerin fetch-metodiin.
