import { initIcon } from "./icon.js";

//the url of the edit road outlined svg; resolved relative to this module
const URL_EDITROADOUTLINED = new URL('../../assets/icons/editRoadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit road outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editRoadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditRoadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITROADOUTLINED }, ...properties);
}

/**
 * Creates an edit road outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editRoadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditRoadOutlinedIcon(element, ...properties);
    return element;
}
