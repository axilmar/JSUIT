import { initIcon } from "./icon.js";

//the url of the help svg; resolved relative to this module
const URL_HELP = new URL('../../assets/icons/help.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/help.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'helpIcon', url: URL_HELP }, ...properties);
}

/**
 * Creates a help icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpIcon(element, ...properties);
    return element;
}
