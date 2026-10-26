import { initIcon } from "./icon.js";

//the url of the history edu outlined svg; resolved relative to this module
const URL_HISTORYEDUOUTLINED = new URL('../../assets/icons/historyEduOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history edu outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/historyEduOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryEduOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HISTORYEDUOUTLINED }, ...properties);
}

/**
 * Creates a history edu outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyEduOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryEduOutlinedIcon(element, ...properties);
    return element;
}
