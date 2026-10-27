import { initIcon } from "./icon.js";

//the url of the label off svg; resolved relative to this module
const URL_LABELOFF = new URL('../../assets/icons/labelOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/labelOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'labelOffIcon', url: URL_LABELOFF }, ...properties);
}

/**
 * Creates a label off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelOffIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelOffIcon(element, ...properties);
    return element;
}
