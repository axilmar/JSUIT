import { initIcon } from "./icon.js";

//the url of the headphones outlined svg; resolved relative to this module
const URL_HEADPHONESOUTLINED = new URL('../../assets/icons/headphonesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headphones outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headphonesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadphonesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headphonesOutlinedIcon', url: URL_HEADPHONESOUTLINED }, ...properties);
}

/**
 * Creates a headphones outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headphonesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadphonesOutlinedIcon(element, ...properties);
    return element;
}
