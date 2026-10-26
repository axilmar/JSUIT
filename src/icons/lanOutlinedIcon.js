import { initIcon } from "./icon.js";

//the url of the lan outlined svg; resolved relative to this module
const URL_LANOUTLINED = new URL('../../assets/icons/lanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lan outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LANOUTLINED }, ...properties);
}

/**
 * Creates a lan outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLanOutlinedIcon(element, ...properties);
    return element;
}
