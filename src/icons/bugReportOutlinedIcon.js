import { initIcon } from "./icon.js";

//the url of the bug report outlined svg; resolved relative to this module
const URL_BUGREPORTOUTLINED = new URL('../../assets/icons/bugReportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bug report outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bugReportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBugReportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bugReportOutlinedIcon', url: URL_BUGREPORTOUTLINED }, ...properties);
}

/**
 * Creates a bug report outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bugReportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBugReportOutlinedIcon(element, ...properties);
    return element;
}
