import { initIcon } from "./icon.js";

//the url of the north east outlined svg; resolved relative to this module
const URL_NORTHEASTOUTLINED = new URL('../../assets/icons/northEastOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a north east outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/northEastOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNorthEastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NORTHEASTOUTLINED }, ...properties);
}

/**
 * Creates a north east outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const northEastOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNorthEastOutlinedIcon(element, ...properties);
    return element;
}
