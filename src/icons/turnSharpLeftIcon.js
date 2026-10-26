import { initIcon } from "./icon.js";

//the url of the turn sharp left svg; resolved relative to this module
const URL_TURNSHARPLEFT = new URL('../../assets/icons/turnSharpLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn sharp left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSharpLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSharpLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNSHARPLEFT }, ...properties);
}

/**
 * Creates a turn sharp left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSharpLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSharpLeftIcon(element, ...properties);
    return element;
}
