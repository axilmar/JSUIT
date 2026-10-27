import { initIcon } from "./icon.js";

//the url of the add road outlined svg; resolved relative to this module
const URL_ADDROADOUTLINED = new URL('../../assets/icons/addRoadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add road outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addRoadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddRoadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addRoadOutlinedIcon', url: URL_ADDROADOUTLINED }, ...properties);
}

/**
 * Creates an add road outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addRoadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddRoadOutlinedIcon(element, ...properties);
    return element;
}
