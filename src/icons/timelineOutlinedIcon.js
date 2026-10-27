import { initIcon } from "./icon.js";

//the url of the timeline outlined svg; resolved relative to this module
const URL_TIMELINEOUTLINED = new URL('../../assets/icons/timelineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timeline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timelineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimelineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timelineOutlinedIcon', url: URL_TIMELINEOUTLINED }, ...properties);
}

/**
 * Creates a timeline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timelineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimelineOutlinedIcon(element, ...properties);
    return element;
}
