import { initIcon } from "./icon.js";

//the url of the candlestick chart svg; resolved relative to this module
const URL_CANDLESTICKCHART = new URL('../../assets/icons/candlestickChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a candlestick chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/candlestickChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCandlestickChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'candlestickChartIcon', url: URL_CANDLESTICKCHART }, ...properties);
}

/**
 * Creates a candlestick chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const candlestickChartIcon = (...properties) => {
    const element = document.createElement('div');
    initCandlestickChartIcon(element, ...properties);
    return element;
}
