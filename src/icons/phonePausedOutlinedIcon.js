import { initIcon } from "./icon.js";

//the url of the phone paused outlined svg; resolved relative to this module
const URL_PHONEPAUSEDOUTLINED = new URL('../../assets/icons/phonePausedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone paused outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonePausedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonePausedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonePausedOutlinedIcon', url: URL_PHONEPAUSEDOUTLINED }, ...properties);
}

/**
 * Creates a phone paused outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonePausedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonePausedOutlinedIcon(element, ...properties);
    return element;
}
