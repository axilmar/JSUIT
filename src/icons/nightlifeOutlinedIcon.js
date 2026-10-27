import { initIcon } from "./icon.js";

//the url of the nightlife outlined svg; resolved relative to this module
const URL_NIGHTLIFEOUTLINED = new URL('../../assets/icons/nightlifeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlife outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlifeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlifeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightlifeOutlinedIcon', url: URL_NIGHTLIFEOUTLINED }, ...properties);
}

/**
 * Creates a nightlife outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlifeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlifeOutlinedIcon(element, ...properties);
    return element;
}
