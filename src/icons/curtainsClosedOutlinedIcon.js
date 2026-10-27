import { initIcon } from "./icon.js";

//the url of the curtains closed outlined svg; resolved relative to this module
const URL_CURTAINSCLOSEDOUTLINED = new URL('../../assets/icons/curtainsClosedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a curtains closed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/curtainsClosedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurtainsClosedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'curtainsClosedOutlinedIcon', url: URL_CURTAINSCLOSEDOUTLINED }, ...properties);
}

/**
 * Creates a curtains closed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const curtainsClosedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurtainsClosedOutlinedIcon(element, ...properties);
    return element;
}
