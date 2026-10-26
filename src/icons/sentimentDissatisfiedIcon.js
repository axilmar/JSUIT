import { initIcon } from "./icon.js";

//the url of the sentiment dissatisfied svg; resolved relative to this module
const URL_SENTIMENTDISSATISFIED = new URL('../../assets/icons/sentimentDissatisfied.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment dissatisfied icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentDissatisfied.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentDissatisfiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENTIMENTDISSATISFIED }, ...properties);
}

/**
 * Creates a sentiment dissatisfied icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentDissatisfiedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentDissatisfiedIcon(element, ...properties);
    return element;
}
