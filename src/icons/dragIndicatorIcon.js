import { initIcon } from "./icon.js";

//the url of the drag indicator svg; resolved relative to this module
const URL_DRAGINDICATOR = new URL('../../assets/icons/dragIndicator.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drag indicator icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dragIndicator.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDragIndicatorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dragIndicatorIcon', url: URL_DRAGINDICATOR }, ...properties);
}

/**
 * Creates a drag indicator icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dragIndicatorIcon = (...properties) => {
    const element = document.createElement('div');
    initDragIndicatorIcon(element, ...properties);
    return element;
}
