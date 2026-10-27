import { initIcon } from "./icon.js";

//the url of the turn slight left svg; resolved relative to this module
const URL_TURNSLIGHTLEFT = new URL('../../assets/icons/turnSlightLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn slight left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSlightLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSlightLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnSlightLeftIcon', url: URL_TURNSLIGHTLEFT }, ...properties);
}

/**
 * Creates a turn slight left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSlightLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSlightLeftIcon(element, ...properties);
    return element;
}
