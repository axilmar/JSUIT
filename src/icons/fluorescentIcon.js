import { initIcon } from "./icon.js";

//the url of the fluorescent svg; resolved relative to this module
const URL_FLUORESCENT = new URL('../../assets/icons/fluorescent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fluorescent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fluorescent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFluorescentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fluorescentIcon', url: URL_FLUORESCENT }, ...properties);
}

/**
 * Creates a fluorescent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fluorescentIcon = (...properties) => {
    const element = document.createElement('div');
    initFluorescentIcon(element, ...properties);
    return element;
}
