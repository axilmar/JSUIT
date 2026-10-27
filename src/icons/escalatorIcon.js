import { initIcon } from "./icon.js";

//the url of the escalator svg; resolved relative to this module
const URL_ESCALATOR = new URL('../../assets/icons/escalator.svg', import.meta.url).href;

/**
 * Initializes an icon element as an escalator icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/escalator.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEscalatorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'escalatorIcon', url: URL_ESCALATOR }, ...properties);
}

/**
 * Creates an escalator icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const escalatorIcon = (...properties) => {
    const element = document.createElement('div');
    initEscalatorIcon(element, ...properties);
    return element;
}
