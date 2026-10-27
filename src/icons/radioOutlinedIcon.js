import { initIcon } from "./icon.js";

//the url of the radio outlined svg; resolved relative to this module
const URL_RADIOOUTLINED = new URL('../../assets/icons/radioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'radioOutlinedIcon', url: URL_RADIOOUTLINED }, ...properties);
}

/**
 * Creates a radio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioOutlinedIcon(element, ...properties);
    return element;
}
