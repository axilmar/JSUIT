import { initIcon } from "./icon.js";

//the url of the leak add outlined svg; resolved relative to this module
const URL_LEAKADDOUTLINED = new URL('../../assets/icons/leakAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leak add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leakAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeakAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'leakAddOutlinedIcon', url: URL_LEAKADDOUTLINED }, ...properties);
}

/**
 * Creates a leak add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leakAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLeakAddOutlinedIcon(element, ...properties);
    return element;
}
