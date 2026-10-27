import { initIcon } from "./icon.js";

//the url of the light outlined svg; resolved relative to this module
const URL_LIGHTOUTLINED = new URL('../../assets/icons/lightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a light outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lightOutlinedIcon', url: URL_LIGHTOUTLINED }, ...properties);
}

/**
 * Creates a light outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLightOutlinedIcon(element, ...properties);
    return element;
}
