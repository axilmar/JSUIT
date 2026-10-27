import { initIcon } from "./icon.js";

//the url of the power outlined svg; resolved relative to this module
const URL_POWEROUTLINED = new URL('../../assets/icons/powerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'powerOutlinedIcon', url: URL_POWEROUTLINED }, ...properties);
}

/**
 * Creates a power outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerOutlinedIcon(element, ...properties);
    return element;
}
