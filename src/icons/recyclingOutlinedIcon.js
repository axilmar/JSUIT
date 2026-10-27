import { initIcon } from "./icon.js";

//the url of the recycling outlined svg; resolved relative to this module
const URL_RECYCLINGOUTLINED = new URL('../../assets/icons/recyclingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recycling outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recyclingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecyclingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'recyclingOutlinedIcon', url: URL_RECYCLINGOUTLINED }, ...properties);
}

/**
 * Creates a recycling outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recyclingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRecyclingOutlinedIcon(element, ...properties);
    return element;
}
