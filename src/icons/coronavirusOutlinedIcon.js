import { initIcon } from "./icon.js";

//the url of the coronavirus outlined svg; resolved relative to this module
const URL_CORONAVIRUSOUTLINED = new URL('../../assets/icons/coronavirusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coronavirus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coronavirusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoronavirusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CORONAVIRUSOUTLINED }, ...properties);
}

/**
 * Creates a coronavirus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coronavirusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCoronavirusOutlinedIcon(element, ...properties);
    return element;
}
