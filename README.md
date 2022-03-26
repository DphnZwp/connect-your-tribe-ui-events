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

### Voordat ik aan de event listeners kon beginnen
Eerst heb ik een const gemaakt genaamd: ```const buttons = document.querySelectorAll('a')```, zodat ik alle knoppen kon aanroepen. Daarna heb ik een ```buttons.forEach(button => {...})```, zodat ik elke button apart kon aanroepen.

### Click
Je kan de kleur van een knop in paars veranderen wanneer je op een knop klikt.

#### Javascript code
Voor de javascript heb ik de method ```addEventListener()``` gebruikt met het type click. Met deze event listener voeg ik de class purple toe wanneer je op een knop klikt.
```javascript
	// Single click event listener
	button.addEventListener('click', function() {
		button.classList.add('purple')
	})
  ```
![screencapture-127-0-0-1-5500-index-html-2022-02-26-17_39_54](https://user-images.githubusercontent.com/69635977/155851327-e2391c34-f3ea-468a-8a23-c194444dd6c4.png)

### Double-click
Je kan de kleuren weghalen .

#### Javascript code
Voor de javascript heb ik de method ```addEventListener()``` gebruikt met het type dblclick. Met deze event listener voeg ik de class green toe wanneer je dubbel klikt op een knop.
```javascript
	// Double click event listener
	button.addEventListener('dblclick', function() { 
		button.classList.add('green')
	})
  ```
![screencapture-127-0-0-1-5500-index-html-2022-02-26-17_55_00](https://user-images.githubusercontent.com/69635977/155851816-13417e7a-25ee-459d-82d8-79ac20e70726.png)

### Key-down
Je kan de kleuren van alle kleuren terug veranderen naar de orginele kleur wanneer je op de 'z' toets van je toetsenbord drukt.

#### Javascript code
Voor de javascript heb ik de method ```addEventListener()``` gebruikt met het type keydown. Met deze event listener verwijder ik de classes purple, green en orange wanneer je op de 'z' toets van je toetsenbord drukt.
```javascript
	// Keydown event listener
	window.addEventListener('keydown', function(event) { 
		if (event.key === 'z') {
			button.classList.remove('purple')
			button.classList.remove('green')
			button.classList.remove('orange')
		}
	})
  ```
  
### Long-press
Je kan de kleur van de knop in oranje veranderen wanneer je langer dan 2 seconden op een knop klikt.

#### Mouseup
Voor de javascript heb ik de method ```addEventListener()``` gemaakt met het type mouseup zodat de button geen kleur krijgt wanneer je niet langer dan 2 seconden drukt. Deze event listener heeft een clearTimeout met de parameter timer (```clearTimeout(timer)``` in de code), zodat ik timer kan gebruiken voor de event listener van mousedown. 

#### Mousedown
In de event listener met het type mousedown voeg ik de class orange toe wanneer je langer dan 2 seconden drukt. ```const self = this``` verwijst naar de button. Dan kan je de self variabel in een timer zetten. De timer heeft een setTimeout van 2 seconden, zodat de class orange na 2 seconden toegevoegd wordt. 

#### Javascript code
```javascript
	// Long press
	// Mousedown event listener
	button.addEventListener('mousedown', function() {
		const self = this
		timer = setTimeout(()=>{
			self.classList.add('orange')
		}, 2000)
	})
	
	// Mouseup event listener
	button.addEventListener('mouseup', function() {
		clearTimeout(timer)
	})
  ```
![screencapture-127-0-0-1-5500-index-html-2022-02-26-20_02_21](https://user-images.githubusercontent.com/69635977/155855837-c16fde89-bcc8-47c9-9303-51e232abda8d.png)

### Handleiding
Ik heb een handleiding gemaakt, zodat het duidelijker wordt wat de gebruiker met de knoppen kan doen.

![screencapture-127-0-0-1-5500-index-html-2022-02-26-16_27_01](https://user-images.githubusercontent.com/69635977/155848776-06884a11-5916-46e5-869d-f336ea62cd4f.png)

<!-- In de Experimenten beschrijf je wat je per experimnet hebt gedaan en documenteer je de code aan de hand van voorbeelden -->
<!-- Voeg een mooie poster visual toe 📸 per experiment -->


![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
