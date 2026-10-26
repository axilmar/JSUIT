import { initIcon } from "./icon.js";

//the url of the stacked line chart outlined svg; resolved relative to this module
const URL_STACKEDLINECHARTOUTLINED = new URL('../../assets/icons/stackedLineChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stacked line chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stackedLineChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStackedLineChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STACKEDLINECHARTOUTLINED }, ...properties);
}

/**
 * Creates a stacked line chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stackedLineChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStackedLineChartOutlinedIcon(element, ...properties);
    return element;
}
