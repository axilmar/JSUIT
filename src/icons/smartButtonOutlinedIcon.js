import { initIcon } from "./icon.js";

//the url of the smart button outlined svg; resolved relative to this module
const URL_SMARTBUTTONOUTLINED = new URL('../../assets/icons/smartButtonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart button outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartButtonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartButtonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smartButtonOutlinedIcon', url: URL_SMARTBUTTONOUTLINED }, ...properties);
}

/**
 * Creates a smart button outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartButtonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartButtonOutlinedIcon(element, ...properties);
    return element;
}
