import { initIcon } from "./icon.js";

//the url of the sentiment very satisfied svg; resolved relative to this module
const URL_SENTIMENTVERYSATISFIED = new URL('../../assets/icons/sentimentVerySatisfied.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment very satisfied icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentVerySatisfied.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentVerySatisfiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentVerySatisfiedIcon', url: URL_SENTIMENTVERYSATISFIED }, ...properties);
}

/**
 * Creates a sentiment very satisfied icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentVerySatisfiedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentVerySatisfiedIcon(element, ...properties);
    return element;
}
