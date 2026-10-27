import { initIcon } from "./icon.js";

//the url of the push pin outlined svg; resolved relative to this module
const URL_PUSHPINOUTLINED = new URL('../../assets/icons/pushPinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a push pin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pushPinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPushPinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pushPinOutlinedIcon', url: URL_PUSHPINOUTLINED }, ...properties);
}

/**
 * Creates a push pin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pushPinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPushPinOutlinedIcon(element, ...properties);
    return element;
}
