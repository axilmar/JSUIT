import { initIcon } from "./icon.js";

//the url of the drag indicator outlined svg; resolved relative to this module
const URL_DRAGINDICATOROUTLINED = new URL('../../assets/icons/dragIndicatorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drag indicator outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dragIndicatorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDragIndicatorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dragIndicatorOutlinedIcon', url: URL_DRAGINDICATOROUTLINED }, ...properties);
}

/**
 * Creates a drag indicator outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dragIndicatorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDragIndicatorOutlinedIcon(element, ...properties);
    return element;
}
