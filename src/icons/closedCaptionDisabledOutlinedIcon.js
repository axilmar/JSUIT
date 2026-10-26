import { initIcon } from "./icon.js";

//the url of the closed caption disabled outlined svg; resolved relative to this module
const URL_CLOSEDCAPTIONDISABLEDOUTLINED = new URL('../../assets/icons/closedCaptionDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaptionDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOSEDCAPTIONDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a closed caption disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionDisabledOutlinedIcon(element, ...properties);
    return element;
}
