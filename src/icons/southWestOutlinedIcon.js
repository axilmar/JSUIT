import { initIcon } from "./icon.js";

//the url of the south west outlined svg; resolved relative to this module
const URL_SOUTHWESTOUTLINED = new URL('../../assets/icons/southWestOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south west outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southWestOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthWestOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHWESTOUTLINED }, ...properties);
}

/**
 * Creates a south west outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southWestOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthWestOutlinedIcon(element, ...properties);
    return element;
}
