import { initIcon } from "./icon.js";

//the url of the play disabled svg; resolved relative to this module
const URL_PLAYDISABLED = new URL('../../assets/icons/playDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playDisabledIcon', url: URL_PLAYDISABLED }, ...properties);
}

/**
 * Creates a play disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayDisabledIcon(element, ...properties);
    return element;
}
