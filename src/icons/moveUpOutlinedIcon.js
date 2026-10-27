import { initIcon } from "./icon.js";

//the url of the move up outlined svg; resolved relative to this module
const URL_MOVEUPOUTLINED = new URL('../../assets/icons/moveUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moveUpOutlinedIcon', url: URL_MOVEUPOUTLINED }, ...properties);
}

/**
 * Creates a move up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveUpOutlinedIcon(element, ...properties);
    return element;
}
