const selectors = document.querySelectorAll(".color-selector");

for (let i = 0; i < selectors.length; i++) {
	selectors[i].addEventListener("click", (e) => {
		console.log(e.target.innerText);
	});
}
