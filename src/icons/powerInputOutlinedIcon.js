import { initIcon } from "./icon.js";

//the url of the power input outlined svg; resolved relative to this module
const URL_POWERINPUTOUTLINED = new URL('../../assets/icons/powerInputOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power input outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerInputOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerInputOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POWERINPUTOUTLINED }, ...properties);
}

/**
 * Creates a power input outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerInputOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerInputOutlinedIcon(element, ...properties);
    return element;
}
