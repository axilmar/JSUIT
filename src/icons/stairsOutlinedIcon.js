import { initIcon } from "./icon.js";

//the url of the stairs outlined svg; resolved relative to this module
const URL_STAIRSOUTLINED = new URL('../../assets/icons/stairsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stairs outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stairsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStairsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stairsOutlinedIcon', url: URL_STAIRSOUTLINED }, ...properties);
}

/**
 * Creates a stairs outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stairsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStairsOutlinedIcon(element, ...properties);
    return element;
}
