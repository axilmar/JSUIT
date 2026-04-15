/**********************************************************************************************************************
    1. initialize common style properties.
        1.1. make all elements have 'border-box' as 'box-sizing' (easier size calculations).
        1.2. make all elements not display a scroll bar (easier specification of scrollable areas).
 **********************************************************************************************************************/

//create the style sheet
var styleSheet = document.createElement("style");

//set the style sheet
styleSheet.textContent = '* { box-sizing: border-box; overflow: hidden; }';

//append the style to the document
document.head.appendChild(styleSheet);

/**********************************************************************************************************************
    2. initialize the existing elements.
        2.1. make the html element take the whole window, without any padding/margin/border (easier application of layout algorithms).
        2.2. make the body element take the whole window, without any padding/margin/border (easier application of layout algorithms).
 **********************************************************************************************************************/

//setup the html element
document.documentElement.style.width = "100%";
document.documentElement.style.minWidth = "100%";
document.documentElement.style.maxWidth = "100%";
document.documentElement.style.height = "100%";
document.documentElement.style.minHeight = "100%";
document.documentElement.style.maxHeight = "100%";
document.documentElement.style.padding = 0;
document.documentElement.style.margin = 0;
document.documentElement.style.border = 0;

//setup the body element
document.body.style.width = "100%";
document.body.style.minWidth = "100%";
document.body.style.maxWidth = "100%";
document.body.style.height = "100%";
document.body.style.minHeight = "100%";
document.body.style.maxHeight = "100%";
document.body.style.padding = 0;
document.body.style.margin = 0;
document.body.style.border = 0;

/**********************************************************************************************************************
    3. make the 'theme' property inheritable:
        When an element is added to another element as a child,
        then the child gets the theme of the parent.
 **********************************************************************************************************************/

//create the observer callback
const observerCallback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (node instanceof HTMLElement) {
                    node.theme = node.parentElement.theme;
                }
            });
        }
    }
};

//create an observer 
const observer = new MutationObserver(observerCallback);

//observe children changes
observer.observe(document.body, { childList: true, subtree: true });
