import { initIcon } from "./icon.js";

//the url of the add circle outline outlined svg; resolved relative to this module
const URL_ADDCIRCLEOUTLINEOUTLINED = new URL('../../assets/icons/addCircleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add circle outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCircleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCircleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDCIRCLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates an add circle outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCircleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCircleOutlineOutlinedIcon(element, ...properties);
    return element;
}
