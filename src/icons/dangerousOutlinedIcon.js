import { initIcon } from "./icon.js";

//the url of the dangerous outlined svg; resolved relative to this module
const URL_DANGEROUSOUTLINED = new URL('../../assets/icons/dangerousOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dangerous outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dangerousOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDangerousOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DANGEROUSOUTLINED }, ...properties);
}

/**
 * Creates a dangerous outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dangerousOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDangerousOutlinedIcon(element, ...properties);
    return element;
}
