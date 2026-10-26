import { initIcon } from "./icon.js";

//the url of the transit enterexit svg; resolved relative to this module
const URL_TRANSITENTEREXIT = new URL('../../assets/icons/transitEnterexit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transit enterexit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transitEnterexit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransitEnterexitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRANSITENTEREXIT }, ...properties);
}

/**
 * Creates a transit enterexit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transitEnterexitIcon = (...properties) => {
    const element = document.createElement('div');
    initTransitEnterexitIcon(element, ...properties);
    return element;
}
