import { initIcon } from "./icon.js";

//the url of the publish svg; resolved relative to this module
const URL_PUBLISH = new URL('../../assets/icons/publish.svg', import.meta.url).href;

/**
 * Initializes an icon element as a publish icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publish.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublishIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUBLISH }, ...properties);
}

/**
 * Creates a publish icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publishIcon = (...properties) => {
    const element = document.createElement('div');
    initPublishIcon(element, ...properties);
    return element;
}
