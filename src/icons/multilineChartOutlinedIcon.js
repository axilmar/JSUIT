import { initIcon } from "./icon.js";

//the url of the multiline chart outlined svg; resolved relative to this module
const URL_MULTILINECHARTOUTLINED = new URL('../../assets/icons/multilineChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a multiline chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/multilineChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMultilineChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MULTILINECHARTOUTLINED }, ...properties);
}

/**
 * Creates a multiline chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const multilineChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMultilineChartOutlinedIcon(element, ...properties);
    return element;
}
