const letterTime = 15;
const lineBreakTime = 250;
const optionTime = 500;

let currentPage = 1;
goToPage(currentPage);

let pageLinks = document.getElementsByClassName("page-link");

for (let i = 0; i < pageLinks.length; i++) {
	pageLinks[i].addEventListener("click", function() {
		let linkNumber = this.getAttribute("data-page-to");
		goToPage(linkNumber);
	});
}

function goToPage(pageNumber) {
	let oldPage = getPageByNumber(currentPage);
	let newPage = getPageByNumber(pageNumber);

	oldPage.style.display = "none";
	newPage.style.display = "block";

	currentPage = pageNumber;

	window.scrollTo(0, 0);

	let textBlock = newPage.children[0];
	let text = textBlock.innerHTML;
	let options = newPage.children[1];

	if (options) {
		options.style.display = "none";
	}

	textBlock.innerHTML = "";

	let delay = 0;

	for (let i = 0; i < text.length; i++) {
		if (text.substr(i, 4) === "<br>") {
			delay += lineBreakTime;
			setTimeout(function() {
				textBlock.innerHTML += "<br>";
			}, i * letterTime + delay);

			i += 3;
		} else {
			setTimeout(function() {
				textBlock.innerHTML += text.charAt(i);

				if (i === text.length - 1) {
					if (options) {
						setTimeout(function() {
							options.style.display = "block";
						}, optionTime);
					}
				}
			}, i * letterTime + delay);
		}
	}
}

function getPageByNumber(pageNumber) {
	return document.querySelector(".page[data-page-number='" + pageNumber + "']");
}
