import { initIcon } from "./icon.js";

//the url of the show chart outlined svg; resolved relative to this module
const URL_SHOWCHARTOUTLINED = new URL('../../assets/icons/showChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a show chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/showChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShowChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOWCHARTOUTLINED }, ...properties);
}

/**
 * Creates a show chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const showChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShowChartOutlinedIcon(element, ...properties);
    return element;
}
