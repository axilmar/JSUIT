import { isInstanceOfHTMLElement, setChildrenEnabled } from "./util.js";

/*
    All elements shall have border-box sizing, because it makes size calculations easier for the developer.
    
    Also, no scrolling is allowed by default for any element. Scrolling must be explicitly enabled.
    This makes it easier to control which area shall be scrollable.
 */
const css = '* { box-sizing: border-box; overflow: hidden; }';
var styleSheet = document.createElement("style");
styleSheet.textContent = css;
document.head.appendChild(styleSheet);

/*
    Both the html and body elements are made to cover the whole window/tab,
    in order to solve the following inconsistency: 
    
    if the width of an element under body is '100%', then the element width covers the whole window/tab, 
    but if the height of an element under body  is '100%', the element height covers only the height it renders,
    confusing developers.

    With this change, placing an element under body with height = '100%', 
    will make the element span the whole window/tab vertically, 
    just like it does horizontally.

    Also, both elements' margin/padding/border is set to 0, because on some browsers it is not zero by default.
 */

//setup the document
Object.defineProperty(document, 'focusedElement', {
    get: function () { return this.activeElement; },
    set: function (e) { 
        if (e) {
            e.focus();
        }
        else {
            this.activeElement.blur();
        }
    } 
})

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

//make theme inheritable
const observerCallback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (isInstanceOfHTMLElement(node)) {
                    node.theme = node.parentElement?.theme;
                }
            });
        }
        else if (mutation.attributeName === 'disabled') {
            mutation.target.updateStyle();
            setChildrenEnabled(mutation.target, !mutation.target.disabled);
        }
        else if (mutation.type === 'attributes') {
            if (mutation.attributeName !== 'style') {
                mutation.target.updateStyle();
            }
        }
    }
};
const observer = new MutationObserver(observerCallback);
observer.observe(document.body, { childList: true, subtree: true, attributes: true });

//monitor focus in to update the focused element
document.body.addEventListener('focusin', (event) => {
    event.target.updateStyle();
});

//monitor focus out to update the unfocused element
document.body.addEventListener('focusout', (event) => {
    event.target.updateStyle();
});
