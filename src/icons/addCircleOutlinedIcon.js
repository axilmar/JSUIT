import { initIcon } from "./icon.js";

//the url of the add circle outlined svg; resolved relative to this module
const URL_ADDCIRCLEOUTLINED = new URL('../../assets/icons/addCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addCircleOutlinedIcon', url: URL_ADDCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates an add circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCircleOutlinedIcon(element, ...properties);
    return element;
}
