import { initIcon } from "./icon.js";

//the url of the aod outlined svg; resolved relative to this module
const URL_AODOUTLINED = new URL('../../assets/icons/aodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an aod outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/aodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'aodOutlinedIcon', url: URL_AODOUTLINED }, ...properties);
}

/**
 * Creates an aod outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const aodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAodOutlinedIcon(element, ...properties);
    return element;
}
