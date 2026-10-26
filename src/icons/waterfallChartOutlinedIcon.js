import { initIcon } from "./icon.js";

//the url of the waterfall chart outlined svg; resolved relative to this module
const URL_WATERFALLCHARTOUTLINED = new URL('../../assets/icons/waterfallChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a waterfall chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterfallChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterfallChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATERFALLCHARTOUTLINED }, ...properties);
}

/**
 * Creates a waterfall chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterfallChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterfallChartOutlinedIcon(element, ...properties);
    return element;
}
