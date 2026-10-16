import { initButton } from "./button.js";
import { icon as createIcon } from "./icon.js";
import { loadCSS } from "./utility.js";

loadCSS(new URL('./iconButton.css', import.meta.url).href);

const ICON_CLASS = 'iconButton-icon';

/**
 * Initializes an instance of HTMLButtonElement as an icon button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'iconButton' by default; a `className` property overrides it.
 * 
 * The button contains an internal icon element, and gets the following properties:
 *  - `icon`: returns or replaces the internal icon element.
 *  - `url`: returns or sets the url of the internal icon.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIconButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);

    let internalIcon = createIcon({ className: ICON_CLASS, stretch: true });
    element.append(internalIcon);

    Object.defineProperty(element, 'icon', {
        configurable: true,
        enumerable: true,
        get: () => internalIcon,
        set: (newIcon) => {
            console.assert(newIcon instanceof HTMLDivElement);
            if (newIcon === internalIcon) {
                return;
            }
            newIcon.classList.add(ICON_CLASS);
            newIcon.stretch = true;
            internalIcon.replaceWith(newIcon);
            internalIcon = newIcon;
        }
    });

    Object.defineProperty(element, 'url', {
        configurable: true,
        enumerable: true,
        get: () => internalIcon.url,
        set: (url) => { internalIcon.url = url; }
    });

    initButton(element, { className: 'iconButton' }, ...properties);
}

/**
 * Creates an icon button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const iconButton = (...properties) => {
    const element = document.createElement('button');
    initIconButton(element, ...properties);
    return element;
}
