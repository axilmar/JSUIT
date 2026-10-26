import { initIcon } from "./icon.js";

//the url of the trending flat outlined svg; resolved relative to this module
const URL_TRENDINGFLATOUTLINED = new URL('../../assets/icons/trendingFlatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trending flat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trendingFlatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrendingFlatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRENDINGFLATOUTLINED }, ...properties);
}

/**
 * Creates a trending flat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trendingFlatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTrendingFlatOutlinedIcon(element, ...properties);
    return element;
}
