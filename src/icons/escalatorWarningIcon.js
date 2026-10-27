import { initIcon } from "./icon.js";

//the url of the escalator warning svg; resolved relative to this module
const URL_ESCALATORWARNING = new URL('../../assets/icons/escalatorWarning.svg', import.meta.url).href;

/**
 * Initializes an icon element as an escalator warning icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/escalatorWarning.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEscalatorWarningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'escalatorWarningIcon', url: URL_ESCALATORWARNING }, ...properties);
}

/**
 * Creates an escalator warning icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const escalatorWarningIcon = (...properties) => {
    const element = document.createElement('div');
    initEscalatorWarningIcon(element, ...properties);
    return element;
}
