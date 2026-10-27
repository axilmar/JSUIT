import { initIcon } from "./icon.js";

//the url of the sentiment satisfied outlined svg; resolved relative to this module
const URL_SENTIMENTSATISFIEDOUTLINED = new URL('../../assets/icons/sentimentSatisfiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment satisfied outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentSatisfiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentSatisfiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentSatisfiedOutlinedIcon', url: URL_SENTIMENTSATISFIEDOUTLINED }, ...properties);
}

/**
 * Creates a sentiment satisfied outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentSatisfiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentSatisfiedOutlinedIcon(element, ...properties);
    return element;
}
