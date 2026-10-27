import { initIcon } from "./icon.js";

//the url of the space bar svg; resolved relative to this module
const URL_SPACEBAR = new URL('../../assets/icons/spaceBar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a space bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spaceBar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaceBarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spaceBarIcon', url: URL_SPACEBAR }, ...properties);
}

/**
 * Creates a space bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaceBarIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaceBarIcon(element, ...properties);
    return element;
}
