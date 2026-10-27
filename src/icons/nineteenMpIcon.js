import { initIcon } from "./icon.js";

//the url of the nineteen mp svg; resolved relative to this module
const URL_NINETEENMP = new URL('../../assets/icons/nineteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nineteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nineteenMpIcon', url: URL_NINETEENMP }, ...properties);
}

/**
 * Creates a nineteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initNineteenMpIcon(element, ...properties);
    return element;
}
