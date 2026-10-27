import { initIcon } from "./icon.js";

//the url of the seventeen mp svg; resolved relative to this module
const URL_SEVENTEENMP = new URL('../../assets/icons/seventeenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seventeen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/seventeenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSeventeenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'seventeenMpIcon', url: URL_SEVENTEENMP }, ...properties);
}

/**
 * Creates a seventeen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const seventeenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initSeventeenMpIcon(element, ...properties);
    return element;
}
