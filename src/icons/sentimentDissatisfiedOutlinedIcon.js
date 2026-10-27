import { initIcon } from "./icon.js";

//the url of the sentiment dissatisfied outlined svg; resolved relative to this module
const URL_SENTIMENTDISSATISFIEDOUTLINED = new URL('../../assets/icons/sentimentDissatisfiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment dissatisfied outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentDissatisfiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentDissatisfiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentDissatisfiedOutlinedIcon', url: URL_SENTIMENTDISSATISFIEDOUTLINED }, ...properties);
}

/**
 * Creates a sentiment dissatisfied outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentDissatisfiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentDissatisfiedOutlinedIcon(element, ...properties);
    return element;
}
