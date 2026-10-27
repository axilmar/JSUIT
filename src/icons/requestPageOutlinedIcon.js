import { initIcon } from "./icon.js";

//the url of the request page outlined svg; resolved relative to this module
const URL_REQUESTPAGEOUTLINED = new URL('../../assets/icons/requestPageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a request page outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/requestPageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRequestPageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'requestPageOutlinedIcon', url: URL_REQUESTPAGEOUTLINED }, ...properties);
}

/**
 * Creates a request page outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const requestPageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRequestPageOutlinedIcon(element, ...properties);
    return element;
}
