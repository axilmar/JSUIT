import { initIcon } from "./icon.js";

//the url of the label svg; resolved relative to this module
const URL_LABEL = new URL('../../assets/icons/label.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/label.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'labelIcon', url: URL_LABEL }, ...properties);
}

/**
 * Creates a label icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelIcon(element, ...properties);
    return element;
}
