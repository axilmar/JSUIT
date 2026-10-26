import { initIcon } from "./icon.js";

//the url of the group work outlined svg; resolved relative to this module
const URL_GROUPWORKOUTLINED = new URL('../../assets/icons/groupWorkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group work outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupWorkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupWorkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GROUPWORKOUTLINED }, ...properties);
}

/**
 * Creates a group work outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupWorkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupWorkOutlinedIcon(element, ...properties);
    return element;
}
