import { initIcon } from "./icon.js";

//the url of the storm svg; resolved relative to this module
const URL_STORM = new URL('../../assets/icons/storm.svg', import.meta.url).href;

/**
 * Initializes an icon element as a storm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStormIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stormIcon', url: URL_STORM }, ...properties);
}

/**
 * Creates a storm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stormIcon = (...properties) => {
    const element = document.createElement('div');
    initStormIcon(element, ...properties);
    return element;
}
