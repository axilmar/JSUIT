import { initIcon } from "./icon.js";

//the url of the stadium outlined svg; resolved relative to this module
const URL_STADIUMOUTLINED = new URL('../../assets/icons/stadiumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stadium outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stadiumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStadiumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stadiumOutlinedIcon', url: URL_STADIUMOUTLINED }, ...properties);
}

/**
 * Creates a stadium outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stadiumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStadiumOutlinedIcon(element, ...properties);
    return element;
}
