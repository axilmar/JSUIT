import { initIcon } from "./icon.js";

//the url of the pivot table chart svg; resolved relative to this module
const URL_PIVOTTABLECHART = new URL('../../assets/icons/pivotTableChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pivot table chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pivotTableChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPivotTableChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIVOTTABLECHART }, ...properties);
}

/**
 * Creates a pivot table chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pivotTableChartIcon = (...properties) => {
    const element = document.createElement('div');
    initPivotTableChartIcon(element, ...properties);
    return element;
}
