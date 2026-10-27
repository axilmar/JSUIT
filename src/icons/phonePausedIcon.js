import { initIcon } from "./icon.js";

//the url of the phone paused svg; resolved relative to this module
const URL_PHONEPAUSED = new URL('../../assets/icons/phonePaused.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone paused icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonePaused.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonePausedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonePausedIcon', url: URL_PHONEPAUSED }, ...properties);
}

/**
 * Creates a phone paused icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonePausedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonePausedIcon(element, ...properties);
    return element;
}
