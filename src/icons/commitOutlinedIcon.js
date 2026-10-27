import { initIcon } from "./icon.js";

//the url of the commit outlined svg; resolved relative to this module
const URL_COMMITOUTLINED = new URL('../../assets/icons/commitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a commit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'commitOutlinedIcon', url: URL_COMMITOUTLINED }, ...properties);
}

/**
 * Creates a commit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCommitOutlinedIcon(element, ...properties);
    return element;
}
