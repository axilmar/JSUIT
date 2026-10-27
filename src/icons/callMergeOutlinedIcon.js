import { initIcon } from "./icon.js";

//the url of the call merge outlined svg; resolved relative to this module
const URL_CALLMERGEOUTLINED = new URL('../../assets/icons/callMergeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call merge outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMergeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMergeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callMergeOutlinedIcon', url: URL_CALLMERGEOUTLINED }, ...properties);
}

/**
 * Creates a call merge outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMergeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMergeOutlinedIcon(element, ...properties);
    return element;
}
