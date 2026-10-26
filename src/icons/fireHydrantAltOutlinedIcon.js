import { initIcon } from "./icon.js";

//the url of the fire hydrant alt outlined svg; resolved relative to this module
const URL_FIREHYDRANTALTOUTLINED = new URL('../../assets/icons/fireHydrantAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fire hydrant alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireHydrantAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireHydrantAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIREHYDRANTALTOUTLINED }, ...properties);
}

/**
 * Creates a fire hydrant alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireHydrantAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFireHydrantAltOutlinedIcon(element, ...properties);
    return element;
}
