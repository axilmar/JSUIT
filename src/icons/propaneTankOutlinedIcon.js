import { initIcon } from "./icon.js";

//the url of the propane tank outlined svg; resolved relative to this module
const URL_PROPANETANKOUTLINED = new URL('../../assets/icons/propaneTankOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a propane tank outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/propaneTankOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPropaneTankOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'propaneTankOutlinedIcon', url: URL_PROPANETANKOUTLINED }, ...properties);
}

/**
 * Creates a propane tank outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const propaneTankOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPropaneTankOutlinedIcon(element, ...properties);
    return element;
}
