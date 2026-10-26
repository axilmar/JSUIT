import { initIcon } from "./icon.js";

//the url of the stay current landscape svg; resolved relative to this module
const URL_STAYCURRENTLANDSCAPE = new URL('../../assets/icons/stayCurrentLandscape.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay current landscape icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayCurrentLandscape.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayCurrentLandscapeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYCURRENTLANDSCAPE }, ...properties);
}

/**
 * Creates a stay current landscape icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayCurrentLandscapeIcon = (...properties) => {
    const element = document.createElement('div');
    initStayCurrentLandscapeIcon(element, ...properties);
    return element;
}
