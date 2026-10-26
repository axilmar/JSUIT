import { initIcon } from "./icon.js";

//the url of the space bar outlined svg; resolved relative to this module
const URL_SPACEBAROUTLINED = new URL('../../assets/icons/spaceBarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a space bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spaceBarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaceBarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPACEBAROUTLINED }, ...properties);
}

/**
 * Creates a space bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaceBarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaceBarOutlinedIcon(element, ...properties);
    return element;
}
