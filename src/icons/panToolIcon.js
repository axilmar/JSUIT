import { initIcon } from "./icon.js";

//the url of the pan tool svg; resolved relative to this module
const URL_PANTOOL = new URL('../../assets/icons/panTool.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pan tool icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panTool.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanToolIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANTOOL }, ...properties);
}

/**
 * Creates a pan tool icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panToolIcon = (...properties) => {
    const element = document.createElement('div');
    initPanToolIcon(element, ...properties);
    return element;
}
