import { initIcon } from "./icon.js";

//the url of the label off outlined svg; resolved relative to this module
const URL_LABELOFFOUTLINED = new URL('../../assets/icons/labelOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/labelOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LABELOFFOUTLINED }, ...properties);
}

/**
 * Creates a label off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelOffOutlinedIcon(element, ...properties);
    return element;
}
