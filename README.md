> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Experimenteren met ui events
Het is de bedoeling om met verschillende user interface events te experimenteren, zoals click, double-click, key-down, long-press en device-motion.

## Beschrijving
Met de website kan je kleuren van knoppen veranderen. De kleuren van de knoppen kan je veranderen door te klikken, dubbel klikken of lang te klikken. Ook kan je de kleuren herstarten met de 'z' toets van je toetsenbord. Als je niet weet wat je met de knoppen kan doen, heb ik ook een gebruikers handleiding gemaakt.

Om kleuren van knoppen te veranderen heb ik verschillende experimenten met event listeners gedaan. Device-motion was het enige event die niet was gelukt. Dus ik heb alleen de events click, double-click, key-down en long-press.

**Begin scherm**

![screencapture-127-0-0-1-5500-index-html-2022-02-26-16_26_46](https://user-images.githubusercontent.com/69635977/155848771-99f0dd69-0ae3-4a95-b597-8a43d3a44dca.png)

### Link van de website
[https://daphneuievents.student.fdnd.nl/](https://daphneuievents.student.fdnd.nl/)

## Experimenten
Hier zijn alle experimenten die ik heb gedaan voor de drie verschillende event listeners.

### Click
Je kan de kleur van een knop in paars veranderen wanneer je op een knop klikt.
```javascript
	// Single click event listener
	button.addEventListener('click', function() {
		button.classList.add('purple')
	})
  ```
![screencapture-127-0-0-1-5500-index-html-2022-02-26-17_39_54](https://user-images.githubusercontent.com/69635977/155851327-e2391c34-f3ea-468a-8a23-c194444dd6c4.png)

### Double-click
Je kan de kleur van een knop in groen veranderen wanneer je op een knop dubbel klikt.

![screencapture-127-0-0-1-5500-index-html-2022-02-26-17_55_00](https://user-images.githubusercontent.com/69635977/155851816-13417e7a-25ee-459d-82d8-79ac20e70726.png)

### Long-press
Je kan de kleur van de knop in oranje veranderen wanneer je langer dan 2 seconden op een knop klikt.

![screencapture-127-0-0-1-5500-index-html-2022-02-26-20_02_21](https://user-images.githubusercontent.com/69635977/155855837-c16fde89-bcc8-47c9-9303-51e232abda8d.png)

### Handleiding
Ik heb een handleiding gemaakt, zodat het duidelijker wordt wat de gebruiker met de knoppen kan doen.

![screencapture-127-0-0-1-5500-index-html-2022-02-26-16_27_01](https://user-images.githubusercontent.com/69635977/155848776-06884a11-5916-46e5-869d-f336ea62cd4f.png)

<!-- In de Experimenten beschrijf je wat je per experimnet hebt gedaan en documenteer je de code aan de hand van voorbeelden -->
<!-- Voeg een mooie poster visual toe 📸 per experiment -->


![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
