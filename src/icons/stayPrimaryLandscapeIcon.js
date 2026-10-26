import { initIcon } from "./icon.js";

//the url of the stay primary landscape svg; resolved relative to this module
const URL_STAYPRIMARYLANDSCAPE = new URL('../../assets/icons/stayPrimaryLandscape.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay primary landscape icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayPrimaryLandscape.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayPrimaryLandscapeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYPRIMARYLANDSCAPE }, ...properties);
}

/**
 * Creates a stay primary landscape icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayPrimaryLandscapeIcon = (...properties) => {
    const element = document.createElement('div');
    initStayPrimaryLandscapeIcon(element, ...properties);
    return element;
}
