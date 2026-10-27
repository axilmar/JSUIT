import { initIcon } from "./icon.js";

//the url of the label outlined svg; resolved relative to this module
const URL_LABELOUTLINED = new URL('../../assets/icons/labelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/labelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'labelOutlinedIcon', url: URL_LABELOUTLINED }, ...properties);
}

/**
 * Creates a label outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelOutlinedIcon(element, ...properties);
    return element;
}
