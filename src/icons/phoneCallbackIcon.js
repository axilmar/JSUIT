import { initIcon } from "./icon.js";

//the url of the phone callback svg; resolved relative to this module
const URL_PHONECALLBACK = new URL('../../assets/icons/phoneCallback.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone callback icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneCallback.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneCallbackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneCallbackIcon', url: URL_PHONECALLBACK }, ...properties);
}

/**
 * Creates a phone callback icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneCallbackIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneCallbackIcon(element, ...properties);
    return element;
}
