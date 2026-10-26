import { initIcon } from "./icon.js";

//the url of the closed caption disabled svg; resolved relative to this module
const URL_CLOSEDCAPTIONDISABLED = new URL('../../assets/icons/closedCaptionDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaptionDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOSEDCAPTIONDISABLED }, ...properties);
}

/**
 * Creates a closed caption disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionDisabledIcon(element, ...properties);
    return element;
}
