import { initIcon } from "./icon.js";

//the url of the remove done outlined svg; resolved relative to this module
const URL_REMOVEDONEOUTLINED = new URL('../../assets/icons/removeDoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove done outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeDoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveDoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeDoneOutlinedIcon', url: URL_REMOVEDONEOUTLINED }, ...properties);
}

/**
 * Creates a remove done outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeDoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveDoneOutlinedIcon(element, ...properties);
    return element;
}
