import { initIcon } from "./icon.js";

//the url of the local bar outlined svg; resolved relative to this module
const URL_LOCALBAROUTLINED = new URL('../../assets/icons/localBarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localBarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalBarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localBarOutlinedIcon', url: URL_LOCALBAROUTLINED }, ...properties);
}

/**
 * Creates a local bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localBarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalBarOutlinedIcon(element, ...properties);
    return element;
}
