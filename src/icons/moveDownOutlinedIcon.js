import { initIcon } from "./icon.js";

//the url of the move down outlined svg; resolved relative to this module
const URL_MOVEDOWNOUTLINED = new URL('../../assets/icons/moveDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moveDownOutlinedIcon', url: URL_MOVEDOWNOUTLINED }, ...properties);
}

/**
 * Creates a move down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveDownOutlinedIcon(element, ...properties);
    return element;
}
