import { initIcon } from "./icon.js";

//the url of the snowmobile svg; resolved relative to this module
const URL_SNOWMOBILE = new URL('../../assets/icons/snowmobile.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snowmobile icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snowmobile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnowmobileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'snowmobileIcon', url: URL_SNOWMOBILE }, ...properties);
}

/**
 * Creates a snowmobile icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snowmobileIcon = (...properties) => {
    const element = document.createElement('div');
    initSnowmobileIcon(element, ...properties);
    return element;
}
