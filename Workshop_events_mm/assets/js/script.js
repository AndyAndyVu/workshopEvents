/*1. Anvende javascript til at skifte farven i de sociale elementer til en mere passende farve (jeres vurdering) */
h1El = document.querySelector('h1').style.color = 'blue';

navEl = document.querySelectorAll ('nav a');
navEl[0].style.color = 'purple';
navEl[1].style.color = 'cyan';
navEl[2].style.color = 'pink';
navEl[3].style.color = 'green';
navEl[4].style.color = 'blue';

articleP = document.querySelectorAll('article p');
console.log(articleP)
articleP[0].style.color = 'purple';
articleP[1].style.color = 'cyan';
articleP[2].style.color = 'pink';
articleP[3].style.color = 'green';
articleP[4].style.color = 'blue';

articleH4 = document.querySelectorAll('article h4');
articleH4[0].style.color = 'cyan';
articleH4[1].style.color = 'purple';
articleH4[2].style.color = 'green';
articleH4[3].style.color = 'blue';
articleH4[4].style.color = 'pink';

footerEl = document.querySelectorAll('.footer1 ul li');
footerEl[2].style.color = 'red';


/*2. Se den lidt skæve h1 i header - sørg for den ved hover "shaker"/ryster sig lidt. I bedes anvende javascript til at løse denne opgave - måske i kombination med css. Der findes endda js libraries/biblioteker I kan se på til formålet, f.eks. anime.js */
h1El = document.querySelector("h1")
h1El.addEventListener("mouseenter", () => {
    h1El.classList.add("h1HoverShake")
})
h1El.addEventListener("mouseleave", () => {
    h1El.classList.remove("h1HoverShake")
})

/*3. Brug javascript til at skifte billedet ud i .bigPicture-boksen, brug dette eller noget helt andet: https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg */
const elNamedBigPic = document.querySelector(".bigPicture");
elNamedBigPic.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg")`;

/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */
const elNewFav = document.createElement("link");
elNewFav.setAttribute("rel", "icon");
elNewFav.setAttribute("type", "image/x-icon");
elNewFav.setAttribute("href", "http://hearthstoneapi.com/favicon.ico");
document.head.append(elNewFav);

/*5.1 Brug javascript til at gemme teksterne væk i artiklerne <p>-tags. Indsæt istedet link med "Læs mere..." */
/* let pArrays = document.querySelectorAll("article p");
for (let i = 0; i < pArrays.length; i++) {
	pArrays[i].id = `pEl${i}`;
	pArrays[i].classList.add("pHider");
	const pButton = document.createElement("button");
	pButton.id = `pButton${i}`;
	pButton.textContent = "Læs mere...";
	pArrays[i].after(pButton);
}*/

const pArrays = document.querySelectorAll("article p");
pArrays.forEach((pEl, num) => {
	pEl.classList.add("pHider");
	const pbutton = document.createElement("button");
	pbutton.textContent = "Læs mere...";
	pbutton.dataset.target = num;
	pEl.id = `pEl${num}`;
	pEl.after(pbutton);
});

/*const elButtonListener = document.addEventListener("click", (event) => {
	if (event.target && event.target.id.match("pButton") == "pButton") {
		if (event.target.textContent == "Læs mere...")
			event.target.textContent = "Læs mindre...";
		else event.target.textContent = "Læs mere...";
		let targetP = event.target.id;
		targetP = `#pEl${targetP.slice(7)}`;
		const elToTarget = document.querySelector(targetP);
		elToTarget.classList.toggle("pHider");
	}
}); */

document.addEventListener("click", (event) => {
	if (event.target.matches("button[data-target]")) {
		const targetP = event.target.dataset.target;
		const pEl = document.getElementById(`pEl${targetP}`);
		if (pEl) {
			pEl.classList.toggle("pHider");
			event.target.textContent = pEl.classList.contains("pHider")
				? "Læs mere..."
				: "Læs mindre...";
		}
	}
});

/*5.2. Sørg for at når man trykker på "Læs mere..." vises den oprindelige tekst ovenover "Læs mere..."  */

/*5.3. Sørg for at "Læs mere..." bliver lavet om til "Læs mindre..." */

/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body (se i css...prøv f.eks. at ændre property "right" til value -200 og 0). Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  - lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */
const elHeader = document.querySelector("header");
const elCrazyPopup = document.querySelector(".crazyPopup");
/*Kunne havde brugt en document.addEventListener("scroll"---, men den larmer ved AL scrolling*/
const seeCrazyPopup = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				elCrazyPopup.style.right = "-400px";
			} else {
				elCrazyPopup.style.right = "0";
			}
		});
	},
	{ threshold: 0.35 }
);

seeCrazyPopup.observe(elHeader);
