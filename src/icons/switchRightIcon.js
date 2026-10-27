import { initIcon } from "./icon.js";

//the url of the switch right svg; resolved relative to this module
const URL_SWITCHRIGHT = new URL('../../assets/icons/switchRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchRightIcon', url: URL_SWITCHRIGHT }, ...properties);
}

/**
 * Creates a switch right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchRightIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchRightIcon(element, ...properties);
    return element;
}
