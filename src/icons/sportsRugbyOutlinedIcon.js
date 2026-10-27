import { initIcon } from "./icon.js";

//the url of the sports rugby outlined svg; resolved relative to this module
const URL_SPORTSRUGBYOUTLINED = new URL('../../assets/icons/sportsRugbyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports rugby outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsRugbyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsRugbyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsRugbyOutlinedIcon', url: URL_SPORTSRUGBYOUTLINED }, ...properties);
}

/**
 * Creates a sports rugby outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsRugbyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsRugbyOutlinedIcon(element, ...properties);
    return element;
}
