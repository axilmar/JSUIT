import { initIcon } from "./icon.js";

//the url of the call to action outlined svg; resolved relative to this module
const URL_CALLTOACTIONOUTLINED = new URL('../../assets/icons/callToActionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call to action outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callToActionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallToActionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callToActionOutlinedIcon', url: URL_CALLTOACTIONOUTLINED }, ...properties);
}

/**
 * Creates a call to action outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callToActionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallToActionOutlinedIcon(element, ...properties);
    return element;
}
