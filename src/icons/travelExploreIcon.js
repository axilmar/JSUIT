import { initIcon } from "./icon.js";

//the url of the travel explore svg; resolved relative to this module
const URL_TRAVELEXPLORE = new URL('../../assets/icons/travelExplore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a travel explore icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/travelExplore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTravelExploreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRAVELEXPLORE }, ...properties);
}

/**
 * Creates a travel explore icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const travelExploreIcon = (...properties) => {
    const element = document.createElement('div');
    initTravelExploreIcon(element, ...properties);
    return element;
}
