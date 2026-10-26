import { initIcon } from "./icon.js";

//the url of the turn slight right svg; resolved relative to this module
const URL_TURNSLIGHTRIGHT = new URL('../../assets/icons/turnSlightRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn slight right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSlightRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSlightRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNSLIGHTRIGHT }, ...properties);
}

/**
 * Creates a turn slight right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSlightRightIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSlightRightIcon(element, ...properties);
    return element;
}
