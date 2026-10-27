import { initIcon } from "./icon.js";

//the url of the tsunami outlined svg; resolved relative to this module
const URL_TSUNAMIOUTLINED = new URL('../../assets/icons/tsunamiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tsunami outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tsunamiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTsunamiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tsunamiOutlinedIcon', url: URL_TSUNAMIOUTLINED }, ...properties);
}

/**
 * Creates a tsunami outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tsunamiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTsunamiOutlinedIcon(element, ...properties);
    return element;
}
