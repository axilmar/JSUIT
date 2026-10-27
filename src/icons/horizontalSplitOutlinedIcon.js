import { initIcon } from "./icon.js";

//the url of the horizontal split outlined svg; resolved relative to this module
const URL_HORIZONTALSPLITOUTLINED = new URL('../../assets/icons/horizontalSplitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a horizontal split outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/horizontalSplitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHorizontalSplitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'horizontalSplitOutlinedIcon', url: URL_HORIZONTALSPLITOUTLINED }, ...properties);
}

/**
 * Creates a horizontal split outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const horizontalSplitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHorizontalSplitOutlinedIcon(element, ...properties);
    return element;
}
