import { initIcon } from "./icon.js";

//the url of the topic outlined svg; resolved relative to this module
const URL_TOPICOUTLINED = new URL('../../assets/icons/topicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a topic outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/topicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTopicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'topicOutlinedIcon', url: URL_TOPICOUTLINED }, ...properties);
}

/**
 * Creates a topic outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const topicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTopicOutlinedIcon(element, ...properties);
    return element;
}
