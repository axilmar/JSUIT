import { initIcon } from "./icon.js";

//the url of the phone outlined svg; resolved relative to this module
const URL_PHONEOUTLINED = new URL('../../assets/icons/phoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneOutlinedIcon', url: URL_PHONEOUTLINED }, ...properties);
}

/**
 * Creates a phone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneOutlinedIcon(element, ...properties);
    return element;
}
