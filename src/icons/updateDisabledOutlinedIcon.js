import { initIcon } from "./icon.js";

//the url of the update disabled outlined svg; resolved relative to this module
const URL_UPDATEDISABLEDOUTLINED = new URL('../../assets/icons/updateDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an update disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/updateDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpdateDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UPDATEDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates an update disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const updateDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUpdateDisabledOutlinedIcon(element, ...properties);
    return element;
}
