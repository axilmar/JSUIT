import { initIcon } from "./icon.js";

//the url of the insert chart svg; resolved relative to this module
const URL_INSERTCHART = new URL('../../assets/icons/insertChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertChartIcon', url: URL_INSERTCHART }, ...properties);
}

/**
 * Creates an insert chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertChartIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertChartIcon(element, ...properties);
    return element;
}
