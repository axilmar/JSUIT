import { initIcon } from "./icon.js";

//the url of the view timeline svg; resolved relative to this module
const URL_VIEWTIMELINE = new URL('../../assets/icons/viewTimeline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view timeline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewTimeline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewTimelineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWTIMELINE }, ...properties);
}

/**
 * Creates a view timeline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewTimelineIcon = (...properties) => {
    const element = document.createElement('div');
    initViewTimelineIcon(element, ...properties);
    return element;
}
