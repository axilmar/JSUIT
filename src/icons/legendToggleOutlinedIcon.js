import { initIcon } from "./icon.js";

//the url of the legend toggle outlined svg; resolved relative to this module
const URL_LEGENDTOGGLEOUTLINED = new URL('../../assets/icons/legendToggleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a legend toggle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/legendToggleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLegendToggleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'legendToggleOutlinedIcon', url: URL_LEGENDTOGGLEOUTLINED }, ...properties);
}

/**
 * Creates a legend toggle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const legendToggleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLegendToggleOutlinedIcon(element, ...properties);
    return element;
}
