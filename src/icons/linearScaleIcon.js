import { initIcon } from "./icon.js";

//the url of the linear scale svg; resolved relative to this module
const URL_LINEARSCALE = new URL('../../assets/icons/linearScale.svg', import.meta.url).href;

/**
 * Initializes an icon element as a linear scale icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linearScale.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinearScaleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linearScaleIcon', url: URL_LINEARSCALE }, ...properties);
}

/**
 * Creates a linear scale icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linearScaleIcon = (...properties) => {
    const element = document.createElement('div');
    initLinearScaleIcon(element, ...properties);
    return element;
}
