import { initIcon } from "./icon.js";

//the url of the roller shades svg; resolved relative to this module
const URL_ROLLERSHADES = new URL('../../assets/icons/rollerShades.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller shades icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerShades.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerShadesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rollerShadesIcon', url: URL_ROLLERSHADES }, ...properties);
}

/**
 * Creates a roller shades icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerShadesIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerShadesIcon(element, ...properties);
    return element;
}
