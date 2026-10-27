import { initIcon } from "./icon.js";

//the url of the hide source outlined svg; resolved relative to this module
const URL_HIDESOURCEOUTLINED = new URL('../../assets/icons/hideSourceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hide source outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hideSourceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHideSourceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hideSourceOutlinedIcon', url: URL_HIDESOURCEOUTLINED }, ...properties);
}

/**
 * Creates a hide source outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hideSourceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHideSourceOutlinedIcon(element, ...properties);
    return element;
}
