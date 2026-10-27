import { initIcon } from "./icon.js";

//the url of the spoke outlined svg; resolved relative to this module
const URL_SPOKEOUTLINED = new URL('../../assets/icons/spokeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spoke outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spokeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpokeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spokeOutlinedIcon', url: URL_SPOKEOUTLINED }, ...properties);
}

/**
 * Creates a spoke outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spokeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpokeOutlinedIcon(element, ...properties);
    return element;
}
