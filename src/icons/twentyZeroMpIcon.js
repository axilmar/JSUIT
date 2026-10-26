import { initIcon } from "./icon.js";

//the url of the twenty zero mp svg; resolved relative to this module
const URL_TWENTYZEROMP = new URL('../../assets/icons/twentyZeroMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty zero mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyZeroMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyZeroMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWENTYZEROMP }, ...properties);
}

/**
 * Creates a twenty zero mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyZeroMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyZeroMpIcon(element, ...properties);
    return element;
}
