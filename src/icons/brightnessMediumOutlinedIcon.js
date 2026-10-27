import { initIcon } from "./icon.js";

//the url of the brightness medium outlined svg; resolved relative to this module
const URL_BRIGHTNESSMEDIUMOUTLINED = new URL('../../assets/icons/brightnessMediumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness medium outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessMediumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessMediumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightnessMediumOutlinedIcon', url: URL_BRIGHTNESSMEDIUMOUTLINED }, ...properties);
}

/**
 * Creates a brightness medium outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessMediumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessMediumOutlinedIcon(element, ...properties);
    return element;
}
