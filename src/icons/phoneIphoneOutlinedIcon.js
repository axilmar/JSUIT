import { initIcon } from "./icon.js";

//the url of the phone iphone outlined svg; resolved relative to this module
const URL_PHONEIPHONEOUTLINED = new URL('../../assets/icons/phoneIphoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone iphone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneIphoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneIphoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneIphoneOutlinedIcon', url: URL_PHONEIPHONEOUTLINED }, ...properties);
}

/**
 * Creates a phone iphone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneIphoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneIphoneOutlinedIcon(element, ...properties);
    return element;
}
