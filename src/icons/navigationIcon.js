import { initIcon } from "./icon.js";

//the url of the navigation svg; resolved relative to this module
const URL_NAVIGATION = new URL('../../assets/icons/navigation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a navigation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/navigation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNavigationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'navigationIcon', url: URL_NAVIGATION }, ...properties);
}

/**
 * Creates a navigation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const navigationIcon = (...properties) => {
    const element = document.createElement('div');
    initNavigationIcon(element, ...properties);
    return element;
}
