import { initIcon } from "./icon.js";

//the url of the av timer svg; resolved relative to this module
const URL_AVTIMER = new URL('../../assets/icons/avTimer.svg', import.meta.url).href;

/**
 * Initializes an icon element as an av timer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/avTimer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAvTimerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'avTimerIcon', url: URL_AVTIMER }, ...properties);
}

/**
 * Creates an av timer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const avTimerIcon = (...properties) => {
    const element = document.createElement('div');
    initAvTimerIcon(element, ...properties);
    return element;
}
