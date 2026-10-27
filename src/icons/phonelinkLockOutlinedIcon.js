import { initIcon } from "./icon.js";

//the url of the phonelink lock outlined svg; resolved relative to this module
const URL_PHONELINKLOCKOUTLINED = new URL('../../assets/icons/phonelinkLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkLockOutlinedIcon', url: URL_PHONELINKLOCKOUTLINED }, ...properties);
}

/**
 * Creates a phonelink lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkLockOutlinedIcon(element, ...properties);
    return element;
}
