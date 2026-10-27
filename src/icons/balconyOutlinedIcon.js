import { initIcon } from "./icon.js";

//the url of the balcony outlined svg; resolved relative to this module
const URL_BALCONYOUTLINED = new URL('../../assets/icons/balconyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a balcony outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/balconyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBalconyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'balconyOutlinedIcon', url: URL_BALCONYOUTLINED }, ...properties);
}

/**
 * Creates a balcony outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const balconyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBalconyOutlinedIcon(element, ...properties);
    return element;
}
