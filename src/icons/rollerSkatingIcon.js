import { initIcon } from "./icon.js";

//the url of the roller skating svg; resolved relative to this module
const URL_ROLLERSKATING = new URL('../../assets/icons/rollerSkating.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller skating icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerSkating.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerSkatingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROLLERSKATING }, ...properties);
}

/**
 * Creates a roller skating icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerSkatingIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerSkatingIcon(element, ...properties);
    return element;
}
