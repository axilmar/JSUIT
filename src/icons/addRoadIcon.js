import { initIcon } from "./icon.js";

//the url of the add road svg; resolved relative to this module
const URL_ADDROAD = new URL('../../assets/icons/addRoad.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add road icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addRoad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddRoadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addRoadIcon', url: URL_ADDROAD }, ...properties);
}

/**
 * Creates an add road icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addRoadIcon = (...properties) => {
    const element = document.createElement('div');
    initAddRoadIcon(element, ...properties);
    return element;
}
