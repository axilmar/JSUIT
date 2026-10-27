import { initIcon } from "./icon.js";

//the url of the outlined flag outlined svg; resolved relative to this module
const URL_OUTLINEDFLAGOUTLINED = new URL('../../assets/icons/outlinedFlagOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outlined flag outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outlinedFlagOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutlinedFlagOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'outlinedFlagOutlinedIcon', url: URL_OUTLINEDFLAGOUTLINED }, ...properties);
}

/**
 * Creates an outlined flag outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outlinedFlagOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOutlinedFlagOutlinedIcon(element, ...properties);
    return element;
}
