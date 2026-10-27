import { initIcon } from "./icon.js";

//the url of the remove road svg; resolved relative to this module
const URL_REMOVEROAD = new URL('../../assets/icons/removeRoad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove road icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeRoad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveRoadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeRoadIcon', url: URL_REMOVEROAD }, ...properties);
}

/**
 * Creates a remove road icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeRoadIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveRoadIcon(element, ...properties);
    return element;
}
