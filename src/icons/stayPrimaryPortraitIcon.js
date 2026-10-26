import { initIcon } from "./icon.js";

//the url of the stay primary portrait svg; resolved relative to this module
const URL_STAYPRIMARYPORTRAIT = new URL('../../assets/icons/stayPrimaryPortrait.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay primary portrait icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayPrimaryPortrait.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayPrimaryPortraitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYPRIMARYPORTRAIT }, ...properties);
}

/**
 * Creates a stay primary portrait icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayPrimaryPortraitIcon = (...properties) => {
    const element = document.createElement('div');
    initStayPrimaryPortraitIcon(element, ...properties);
    return element;
}
