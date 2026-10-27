import { initIcon } from "./icon.js";

//the url of the merge outlined svg; resolved relative to this module
const URL_MERGEOUTLINED = new URL('../../assets/icons/mergeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a merge outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mergeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMergeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mergeOutlinedIcon', url: URL_MERGEOUTLINED }, ...properties);
}

/**
 * Creates a merge outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mergeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMergeOutlinedIcon(element, ...properties);
    return element;
}
