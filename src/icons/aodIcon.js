import { initIcon } from "./icon.js";

//the url of the aod svg; resolved relative to this module
const URL_AOD = new URL('../../assets/icons/aod.svg', import.meta.url).href;

/**
 * Initializes an icon element as an aod icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/aod.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'aodIcon', url: URL_AOD }, ...properties);
}

/**
 * Creates an aod icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const aodIcon = (...properties) => {
    const element = document.createElement('div');
    initAodIcon(element, ...properties);
    return element;
}
