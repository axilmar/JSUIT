import { initIcon } from "./icon.js";

//the url of the call to action svg; resolved relative to this module
const URL_CALLTOACTION = new URL('../../assets/icons/callToAction.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call to action icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callToAction.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallToActionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callToActionIcon', url: URL_CALLTOACTION }, ...properties);
}

/**
 * Creates a call to action icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callToActionIcon = (...properties) => {
    const element = document.createElement('div');
    initCallToActionIcon(element, ...properties);
    return element;
}
