import { initIcon } from "./icon.js";

//the url of the house siding outlined svg; resolved relative to this module
const URL_HOUSESIDINGOUTLINED = new URL('../../assets/icons/houseSidingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a house siding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/houseSidingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHouseSidingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'houseSidingOutlinedIcon', url: URL_HOUSESIDINGOUTLINED }, ...properties);
}

/**
 * Creates a house siding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const houseSidingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHouseSidingOutlinedIcon(element, ...properties);
    return element;
}
