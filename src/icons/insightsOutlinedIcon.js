import { initIcon } from "./icon.js";

//the url of the insights outlined svg; resolved relative to this module
const URL_INSIGHTSOUTLINED = new URL('../../assets/icons/insightsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insights outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insightsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsightsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSIGHTSOUTLINED }, ...properties);
}

/**
 * Creates an insights outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insightsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsightsOutlinedIcon(element, ...properties);
    return element;
}
