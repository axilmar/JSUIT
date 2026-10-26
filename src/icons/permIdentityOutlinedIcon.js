import { initIcon } from "./icon.js";

//the url of the perm identity outlined svg; resolved relative to this module
const URL_PERMIDENTITYOUTLINED = new URL('../../assets/icons/permIdentityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm identity outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permIdentityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermIdentityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMIDENTITYOUTLINED }, ...properties);
}

/**
 * Creates a perm identity outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permIdentityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermIdentityOutlinedIcon(element, ...properties);
    return element;
}
