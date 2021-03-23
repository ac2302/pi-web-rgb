const selectors = document.querySelectorAll(".color-selector");

for (let i = 0; i < selectors.length; i++) {
	selectors[i].addEventListener("click", (e) => {
        document.getElementById("selected-color").value = e.target.innerText;
        document.getElementById("change-color-form").submit();
	});
}
