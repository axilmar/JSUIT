import { initIcon } from "./icon.js";

//the url of the turn sharp right svg; resolved relative to this module
const URL_TURNSHARPRIGHT = new URL('../../assets/icons/turnSharpRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn sharp right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSharpRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSharpRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnSharpRightIcon', url: URL_TURNSHARPRIGHT }, ...properties);
}

/**
 * Creates a turn sharp right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSharpRightIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSharpRightIcon(element, ...properties);
    return element;
}
