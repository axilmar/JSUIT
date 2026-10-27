import { initIcon } from "./icon.js";

//the url of the vertical split outlined svg; resolved relative to this module
const URL_VERTICALSPLITOUTLINED = new URL('../../assets/icons/verticalSplitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical split outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalSplitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalSplitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verticalSplitOutlinedIcon', url: URL_VERTICALSPLITOUTLINED }, ...properties);
}

/**
 * Creates a vertical split outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalSplitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalSplitOutlinedIcon(element, ...properties);
    return element;
}
