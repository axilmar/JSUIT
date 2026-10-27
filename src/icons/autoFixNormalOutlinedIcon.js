import { initIcon } from "./icon.js";

//the url of the auto fix normal outlined svg; resolved relative to this module
const URL_AUTOFIXNORMALOUTLINED = new URL('../../assets/icons/autoFixNormalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix normal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixNormalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixNormalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoFixNormalOutlinedIcon', url: URL_AUTOFIXNORMALOUTLINED }, ...properties);
}

/**
 * Creates an auto fix normal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixNormalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixNormalOutlinedIcon(element, ...properties);
    return element;
}
