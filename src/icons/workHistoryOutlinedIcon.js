import { initIcon } from "./icon.js";

//the url of the work history outlined svg; resolved relative to this module
const URL_WORKHISTORYOUTLINED = new URL('../../assets/icons/workHistoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work history outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workHistoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkHistoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workHistoryOutlinedIcon', url: URL_WORKHISTORYOUTLINED }, ...properties);
}

/**
 * Creates a work history outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workHistoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkHistoryOutlinedIcon(element, ...properties);
    return element;
}
