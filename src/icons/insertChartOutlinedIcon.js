import { initIcon } from "./icon.js";

//the url of the insert chart outlined svg; resolved relative to this module
const URL_INSERTCHARTOUTLINED = new URL('../../assets/icons/insertChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertChartOutlinedIcon', url: URL_INSERTCHARTOUTLINED }, ...properties);
}

/**
 * Creates an insert chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertChartOutlinedIcon(element, ...properties);
    return element;
}
