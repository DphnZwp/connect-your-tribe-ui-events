const buttons = document.querySelectorAll("a")

buttons.forEach(button => {

	// Single click event listener
	button.addEventListener('click', function() {
		button.classList.add("purple")
	})

	// Double click event listener
	button.addEventListener('dblclick', function() { 
		button.classList.add("cyan")
	})

	// Keydown event listener
	button.addEventListener('keydown', function() { 
		if (event.key === 'd') {
			button.classList.add = "remove-all";
		}
	})
})