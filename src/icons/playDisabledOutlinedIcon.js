import { initIcon } from "./icon.js";

//the url of the play disabled outlined svg; resolved relative to this module
const URL_PLAYDISABLEDOUTLINED = new URL('../../assets/icons/playDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playDisabledOutlinedIcon', url: URL_PLAYDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a play disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayDisabledOutlinedIcon(element, ...properties);
    return element;
}
