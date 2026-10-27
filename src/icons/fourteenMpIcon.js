import { initIcon } from "./icon.js";

//the url of the fourteen mp svg; resolved relative to this module
const URL_FOURTEENMP = new URL('../../assets/icons/fourteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fourteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourteenMpIcon', url: URL_FOURTEENMP }, ...properties);
}

/**
 * Creates a fourteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initFourteenMpIcon(element, ...properties);
    return element;
}
