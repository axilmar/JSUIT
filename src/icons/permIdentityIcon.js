import { initIcon } from "./icon.js";

//the url of the perm identity svg; resolved relative to this module
const URL_PERMIDENTITY = new URL('../../assets/icons/permIdentity.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm identity icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permIdentity.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermIdentityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permIdentityIcon', url: URL_PERMIDENTITY }, ...properties);
}

/**
 * Creates a perm identity icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permIdentityIcon = (...properties) => {
    const element = document.createElement('div');
    initPermIdentityIcon(element, ...properties);
    return element;
}
