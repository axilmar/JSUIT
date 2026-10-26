import { initIcon } from "./icon.js";

//the url of the ten mp outlined svg; resolved relative to this module
const URL_TENMPOUTLINED = new URL('../../assets/icons/tenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ten mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TENMPOUTLINED }, ...properties);
}

/**
 * Creates a ten mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTenMpOutlinedIcon(element, ...properties);
    return element;
}
