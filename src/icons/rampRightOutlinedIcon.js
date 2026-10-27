import { initIcon } from "./icon.js";

//the url of the ramp right outlined svg; resolved relative to this module
const URL_RAMPRIGHTOUTLINED = new URL('../../assets/icons/rampRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramp right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rampRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRampRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rampRightOutlinedIcon', url: URL_RAMPRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a ramp right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rampRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRampRightOutlinedIcon(element, ...properties);
    return element;
}
