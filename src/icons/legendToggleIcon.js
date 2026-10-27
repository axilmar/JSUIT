import { initIcon } from "./icon.js";

//the url of the legend toggle svg; resolved relative to this module
const URL_LEGENDTOGGLE = new URL('../../assets/icons/legendToggle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a legend toggle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/legendToggle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLegendToggleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'legendToggleIcon', url: URL_LEGENDTOGGLE }, ...properties);
}

/**
 * Creates a legend toggle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const legendToggleIcon = (...properties) => {
    const element = document.createElement('div');
    initLegendToggleIcon(element, ...properties);
    return element;
}
