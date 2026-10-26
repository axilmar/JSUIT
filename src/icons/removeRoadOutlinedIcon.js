import { initIcon } from "./icon.js";

//the url of the remove road outlined svg; resolved relative to this module
const URL_REMOVEROADOUTLINED = new URL('../../assets/icons/removeRoadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove road outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeRoadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveRoadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVEROADOUTLINED }, ...properties);
}

/**
 * Creates a remove road outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeRoadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveRoadOutlinedIcon(element, ...properties);
    return element;
}
