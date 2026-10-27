import { initIcon } from "./icon.js";

//the url of the sentiment satisfied alt svg; resolved relative to this module
const URL_SENTIMENTSATISFIEDALT = new URL('../../assets/icons/sentimentSatisfiedAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment satisfied alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentSatisfiedAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentSatisfiedAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentSatisfiedAltIcon', url: URL_SENTIMENTSATISFIEDALT }, ...properties);
}

/**
 * Creates a sentiment satisfied alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentSatisfiedAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentSatisfiedAltIcon(element, ...properties);
    return element;
}
