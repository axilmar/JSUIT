import { initIcon } from "./icon.js";

//the url of the child friendly outlined svg; resolved relative to this module
const URL_CHILDFRIENDLYOUTLINED = new URL('../../assets/icons/childFriendlyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a child friendly outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/childFriendlyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChildFriendlyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'childFriendlyOutlinedIcon', url: URL_CHILDFRIENDLYOUTLINED }, ...properties);
}

/**
 * Creates a child friendly outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const childFriendlyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChildFriendlyOutlinedIcon(element, ...properties);
    return element;
}
