var currentPage = 1;
goToPage(currentPage);

var pageLinks = document.getElementsByClassName("page-link");

for (var i = 0; i < pageLinks.length; i++) {
	pageLinks[i].addEventListener("click", function() {
		var linkNumber = this.getAttribute("data-page-to");
		goToPage(linkNumber);
	});
}

function goToPage(pageNumber) {
	getPageByNumber(currentPage).style.display = "none";
	currentPage = pageNumber;
	getPageByNumber(currentPage).style.display = "block";
	window.scrollTo(0, 0);
}

function getPageByNumber(pageNumber) {
	return document.querySelector(".page[data-page-number='" + pageNumber + "']");
}
