import { initIcon } from "./icon.js";

//the url of the candlestick chart outlined svg; resolved relative to this module
const URL_CANDLESTICKCHARTOUTLINED = new URL('../../assets/icons/candlestickChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a candlestick chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/candlestickChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCandlestickChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'candlestickChartOutlinedIcon', url: URL_CANDLESTICKCHARTOUTLINED }, ...properties);
}

/**
 * Creates a candlestick chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const candlestickChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCandlestickChartOutlinedIcon(element, ...properties);
    return element;
}
