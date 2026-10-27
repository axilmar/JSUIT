import { initIcon } from "./icon.js";

//the url of the transit enterexit outlined svg; resolved relative to this module
const URL_TRANSITENTEREXITOUTLINED = new URL('../../assets/icons/transitEnterexitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transit enterexit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transitEnterexitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransitEnterexitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transitEnterexitOutlinedIcon', url: URL_TRANSITENTEREXITOUTLINED }, ...properties);
}

/**
 * Creates a transit enterexit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transitEnterexitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTransitEnterexitOutlinedIcon(element, ...properties);
    return element;
}
