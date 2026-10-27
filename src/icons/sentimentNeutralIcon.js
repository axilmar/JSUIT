import { initIcon } from "./icon.js";

//the url of the sentiment neutral svg; resolved relative to this module
const URL_SENTIMENTNEUTRAL = new URL('../../assets/icons/sentimentNeutral.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment neutral icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentNeutral.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentNeutralIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentNeutralIcon', url: URL_SENTIMENTNEUTRAL }, ...properties);
}

/**
 * Creates a sentiment neutral icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentNeutralIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentNeutralIcon(element, ...properties);
    return element;
}
