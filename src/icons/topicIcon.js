import { initIcon } from "./icon.js";

//the url of the topic svg; resolved relative to this module
const URL_TOPIC = new URL('../../assets/icons/topic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a topic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/topic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTopicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'topicIcon', url: URL_TOPIC }, ...properties);
}

/**
 * Creates a topic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const topicIcon = (...properties) => {
    const element = document.createElement('div');
    initTopicIcon(element, ...properties);
    return element;
}
