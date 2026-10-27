import { initIcon } from "./icon.js";

//the url of the nightlight round outlined svg; resolved relative to this module
const URL_NIGHTLIGHTROUNDOUTLINED = new URL('../../assets/icons/nightlightRoundOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlight round outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlightRoundOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlightRoundOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightlightRoundOutlinedIcon', url: URL_NIGHTLIGHTROUNDOUTLINED }, ...properties);
}

/**
 * Creates a nightlight round outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlightRoundOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlightRoundOutlinedIcon(element, ...properties);
    return element;
}
