import { initIcon } from "./icon.js";

//the url of the stay current portrait svg; resolved relative to this module
const URL_STAYCURRENTPORTRAIT = new URL('../../assets/icons/stayCurrentPortrait.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay current portrait icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayCurrentPortrait.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayCurrentPortraitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYCURRENTPORTRAIT }, ...properties);
}

/**
 * Creates a stay current portrait icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayCurrentPortraitIcon = (...properties) => {
    const element = document.createElement('div');
    initStayCurrentPortraitIcon(element, ...properties);
    return element;
}
