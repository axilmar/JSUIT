import { initIcon } from "./icon.js";

//the url of the attractions outlined svg; resolved relative to this module
const URL_ATTRACTIONSOUTLINED = new URL('../../assets/icons/attractionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attractions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attractionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttractionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attractionsOutlinedIcon', url: URL_ATTRACTIONSOUTLINED }, ...properties);
}

/**
 * Creates an attractions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attractionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAttractionsOutlinedIcon(element, ...properties);
    return element;
}
