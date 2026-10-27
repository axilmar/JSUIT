import { initIcon } from "./icon.js";

//the url of the sentiment very dissatisfied svg; resolved relative to this module
const URL_SENTIMENTVERYDISSATISFIED = new URL('../../assets/icons/sentimentVeryDissatisfied.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment very dissatisfied icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentVeryDissatisfied.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentVeryDissatisfiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentVeryDissatisfiedIcon', url: URL_SENTIMENTVERYDISSATISFIED }, ...properties);
}

/**
 * Creates a sentiment very dissatisfied icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentVeryDissatisfiedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentVeryDissatisfiedIcon(element, ...properties);
    return element;
}
