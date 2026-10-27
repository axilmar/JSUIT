import { initIcon } from "./icon.js";

//the url of the thunderstorm outlined svg; resolved relative to this module
const URL_THUNDERSTORMOUTLINED = new URL('../../assets/icons/thunderstormOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thunderstorm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thunderstormOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThunderstormOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thunderstormOutlinedIcon', url: URL_THUNDERSTORMOUTLINED }, ...properties);
}

/**
 * Creates a thunderstorm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thunderstormOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThunderstormOutlinedIcon(element, ...properties);
    return element;
}
