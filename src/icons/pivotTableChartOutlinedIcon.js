import { initIcon } from "./icon.js";

//the url of the pivot table chart outlined svg; resolved relative to this module
const URL_PIVOTTABLECHARTOUTLINED = new URL('../../assets/icons/pivotTableChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pivot table chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pivotTableChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPivotTableChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIVOTTABLECHARTOUTLINED }, ...properties);
}

/**
 * Creates a pivot table chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pivotTableChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPivotTableChartOutlinedIcon(element, ...properties);
    return element;
}
