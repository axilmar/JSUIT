import { initIcon } from "./icon.js";

//the url of the stay primary portrait outlined svg; resolved relative to this module
const URL_STAYPRIMARYPORTRAITOUTLINED = new URL('../../assets/icons/stayPrimaryPortraitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay primary portrait outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayPrimaryPortraitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayPrimaryPortraitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stayPrimaryPortraitOutlinedIcon', url: URL_STAYPRIMARYPORTRAITOUTLINED }, ...properties);
}

/**
 * Creates a stay primary portrait outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayPrimaryPortraitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStayPrimaryPortraitOutlinedIcon(element, ...properties);
    return element;
}
