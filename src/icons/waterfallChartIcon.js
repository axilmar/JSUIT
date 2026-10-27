import { initIcon } from "./icon.js";

//the url of the waterfall chart svg; resolved relative to this module
const URL_WATERFALLCHART = new URL('../../assets/icons/waterfallChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a waterfall chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterfallChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterfallChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'waterfallChartIcon', url: URL_WATERFALLCHART }, ...properties);
}

/**
 * Creates a waterfall chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterfallChartIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterfallChartIcon(element, ...properties);
    return element;
}
