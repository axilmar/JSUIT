import { initIcon } from "./icon.js";

//the url of the verified user outlined svg; resolved relative to this module
const URL_VERIFIEDUSEROUTLINED = new URL('../../assets/icons/verifiedUserOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a verified user outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verifiedUserOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerifiedUserOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verifiedUserOutlinedIcon', url: URL_VERIFIEDUSEROUTLINED }, ...properties);
}

/**
 * Creates a verified user outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verifiedUserOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerifiedUserOutlinedIcon(element, ...properties);
    return element;
}
