import { initIcon } from "./icon.js";

//the url of the fire hydrant alt svg; resolved relative to this module
const URL_FIREHYDRANTALT = new URL('../../assets/icons/fireHydrantAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fire hydrant alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireHydrantAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireHydrantAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fireHydrantAltIcon', url: URL_FIREHYDRANTALT }, ...properties);
}

/**
 * Creates a fire hydrant alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireHydrantAltIcon = (...properties) => {
    const element = document.createElement('div');
    initFireHydrantAltIcon(element, ...properties);
    return element;
}
