import { initIcon } from "./icon.js";

//the url of the twenty three mp svg; resolved relative to this module
const URL_TWENTYTHREEMP = new URL('../../assets/icons/twentyThreeMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty three mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyThreeMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyThreeMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWENTYTHREEMP }, ...properties);
}

/**
 * Creates a twenty three mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyThreeMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyThreeMpIcon(element, ...properties);
    return element;
}
