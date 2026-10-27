import { initIcon } from "./icon.js";

//the url of the garage outlined svg; resolved relative to this module
const URL_GARAGEOUTLINED = new URL('../../assets/icons/garageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a garage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/garageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGarageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'garageOutlinedIcon', url: URL_GARAGEOUTLINED }, ...properties);
}

/**
 * Creates a garage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const garageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGarageOutlinedIcon(element, ...properties);
    return element;
}
