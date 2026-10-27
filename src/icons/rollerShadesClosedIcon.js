import { initIcon } from "./icon.js";

//the url of the roller shades closed svg; resolved relative to this module
const URL_ROLLERSHADESCLOSED = new URL('../../assets/icons/rollerShadesClosed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller shades closed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerShadesClosed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerShadesClosedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rollerShadesClosedIcon', url: URL_ROLLERSHADESCLOSED }, ...properties);
}

/**
 * Creates a roller shades closed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerShadesClosedIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerShadesClosedIcon(element, ...properties);
    return element;
}
