import { initIcon } from "./icon.js";

//the url of the stay current portrait outlined svg; resolved relative to this module
const URL_STAYCURRENTPORTRAITOUTLINED = new URL('../../assets/icons/stayCurrentPortraitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay current portrait outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayCurrentPortraitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayCurrentPortraitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stayCurrentPortraitOutlinedIcon', url: URL_STAYCURRENTPORTRAITOUTLINED }, ...properties);
}

/**
 * Creates a stay current portrait outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayCurrentPortraitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStayCurrentPortraitOutlinedIcon(element, ...properties);
    return element;
}
