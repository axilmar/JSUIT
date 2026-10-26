import { initIcon } from "./icon.js";

//the url of the scatter plot outlined svg; resolved relative to this module
const URL_SCATTERPLOTOUTLINED = new URL('../../assets/icons/scatterPlotOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scatter plot outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scatterPlotOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScatterPlotOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCATTERPLOTOUTLINED }, ...properties);
}

/**
 * Creates a scatter plot outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scatterPlotOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScatterPlotOutlinedIcon(element, ...properties);
    return element;
}
