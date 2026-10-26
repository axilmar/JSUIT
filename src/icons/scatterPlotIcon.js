import { initIcon } from "./icon.js";

//the url of the scatter plot svg; resolved relative to this module
const URL_SCATTERPLOT = new URL('../../assets/icons/scatterPlot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scatter plot icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scatterPlot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScatterPlotIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCATTERPLOT }, ...properties);
}

/**
 * Creates a scatter plot icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scatterPlotIcon = (...properties) => {
    const element = document.createElement('div');
    initScatterPlotIcon(element, ...properties);
    return element;
}
