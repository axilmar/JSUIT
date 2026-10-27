import { initIcon } from "./icon.js";

//the url of the quickreply outlined svg; resolved relative to this module
const URL_QUICKREPLYOUTLINED = new URL('../../assets/icons/quickreplyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a quickreply outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/quickreplyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuickreplyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'quickreplyOutlinedIcon', url: URL_QUICKREPLYOUTLINED }, ...properties);
}

/**
 * Creates a quickreply outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const quickreplyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQuickreplyOutlinedIcon(element, ...properties);
    return element;
}
