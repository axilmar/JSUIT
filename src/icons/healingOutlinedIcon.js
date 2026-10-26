import { initIcon } from "./icon.js";

//the url of the healing outlined svg; resolved relative to this module
const URL_HEALINGOUTLINED = new URL('../../assets/icons/healingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a healing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/healingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHealingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEALINGOUTLINED }, ...properties);
}

/**
 * Creates a healing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const healingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHealingOutlinedIcon(element, ...properties);
    return element;
}
