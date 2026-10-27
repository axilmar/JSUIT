import { initIcon } from "./icon.js";

//the url of the transgender outlined svg; resolved relative to this module
const URL_TRANSGENDEROUTLINED = new URL('../../assets/icons/transgenderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transgender outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transgenderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransgenderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transgenderOutlinedIcon', url: URL_TRANSGENDEROUTLINED }, ...properties);
}

/**
 * Creates a transgender outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transgenderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTransgenderOutlinedIcon(element, ...properties);
    return element;
}
