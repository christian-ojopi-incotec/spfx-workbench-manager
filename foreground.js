//Add style to enforce max-width to 1920px;
var editCSS = document.createElement('style')
editCSS.innerHTML = ".CanvasComponent.LCS .CanvasZone { max-width: 1920px; }";
document.body.appendChild(editCSS);
//Clear styling on workbenchPageContent element which restricts max-width to 924px
var workbenchPageContentCustom = document.getElementById("workbenchPageContent");
//Remove workBenchPage Content Styling - has no impact on view
if (workbenchPageContentCustom != null) {
    workbenchPageContentCustom.classList.forEach((className) => {
        workbenchPageContentCustom.classList.remove(className);
    });
}

var spPageChromeAppDivCustom = document.getElementById('spPageChromeAppDiv');
if (spPageChromeAppDivCustom) {
    spPageChromeAppDivCustom.style.display = "block";
}

var spAppBarCustom = document.getElementById('sp-appBar');
if (spAppBarCustom) {
    spAppBarCustom.style.display = "none";
}

var spAppBarCustom = document.getElementById('sp-appBar');
if (spAppBarCustom) {
    spAppBarCustom.style.display = "none";
}

if (workbenchPageContentCustom) {
	var paddedWorkbenchPageContent = workbenchPageContentCustom.children[0].children[0].children[0];
	paddedWorkbenchPageContent.style.padding = "0px";
}