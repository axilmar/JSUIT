import { initIcon } from "./icon.js";

//the url of the sentiment satisfied svg; resolved relative to this module
const URL_SENTIMENTSATISFIED = new URL('../../assets/icons/sentimentSatisfied.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment satisfied icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentSatisfied.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentSatisfiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentSatisfiedIcon', url: URL_SENTIMENTSATISFIED }, ...properties);
}

/**
 * Creates a sentiment satisfied icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentSatisfiedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentSatisfiedIcon(element, ...properties);
    return element;
}
