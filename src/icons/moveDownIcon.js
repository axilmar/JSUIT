import { initIcon } from "./icon.js";

//the url of the move down svg; resolved relative to this module
const URL_MOVEDOWN = new URL('../../assets/icons/moveDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moveDownIcon', url: URL_MOVEDOWN }, ...properties);
}

/**
 * Creates a move down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveDownIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveDownIcon(element, ...properties);
    return element;
}
