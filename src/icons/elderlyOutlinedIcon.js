import { initIcon } from "./icon.js";

//the url of the elderly outlined svg; resolved relative to this module
const URL_ELDERLYOUTLINED = new URL('../../assets/icons/elderlyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elderly outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elderlyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElderlyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'elderlyOutlinedIcon', url: URL_ELDERLYOUTLINED }, ...properties);
}

/**
 * Creates an elderly outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elderlyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElderlyOutlinedIcon(element, ...properties);
    return element;
}
