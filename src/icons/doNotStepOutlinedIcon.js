import { initIcon } from "./icon.js";

//the url of the do not step outlined svg; resolved relative to this module
const URL_DONOTSTEPOUTLINED = new URL('../../assets/icons/doNotStepOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not step outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotStepOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotStepOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotStepOutlinedIcon', url: URL_DONOTSTEPOUTLINED }, ...properties);
}

/**
 * Creates a do not step outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotStepOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotStepOutlinedIcon(element, ...properties);
    return element;
}
