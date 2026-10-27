import { initIcon } from "./icon.js";

//the url of the pest control rodent outlined svg; resolved relative to this module
const URL_PESTCONTROLRODENTOUTLINED = new URL('../../assets/icons/pestControlRodentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pest control rodent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pestControlRodentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPestControlRodentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pestControlRodentOutlinedIcon', url: URL_PESTCONTROLRODENTOUTLINED }, ...properties);
}

/**
 * Creates a pest control rodent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pestControlRodentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPestControlRodentOutlinedIcon(element, ...properties);
    return element;
}
