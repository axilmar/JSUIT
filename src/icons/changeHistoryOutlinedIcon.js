import { initIcon } from "./icon.js";

//the url of the change history outlined svg; resolved relative to this module
const URL_CHANGEHISTORYOUTLINED = new URL('../../assets/icons/changeHistoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a change history outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/changeHistoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChangeHistoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'changeHistoryOutlinedIcon', url: URL_CHANGEHISTORYOUTLINED }, ...properties);
}

/**
 * Creates a change history outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const changeHistoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChangeHistoryOutlinedIcon(element, ...properties);
    return element;
}
