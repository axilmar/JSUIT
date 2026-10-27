import { initIcon } from "./icon.js";

//the url of the local shipping outlined svg; resolved relative to this module
const URL_LOCALSHIPPINGOUTLINED = new URL('../../assets/icons/localShippingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local shipping outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localShippingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalShippingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localShippingOutlinedIcon', url: URL_LOCALSHIPPINGOUTLINED }, ...properties);
}

/**
 * Creates a local shipping outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localShippingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalShippingOutlinedIcon(element, ...properties);
    return element;
}
