import { initIcon } from "./icon.js";

//the url of the sentiment very satisfied outlined svg; resolved relative to this module
const URL_SENTIMENTVERYSATISFIEDOUTLINED = new URL('../../assets/icons/sentimentVerySatisfiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment very satisfied outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentVerySatisfiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentVerySatisfiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentVerySatisfiedOutlinedIcon', url: URL_SENTIMENTVERYSATISFIEDOUTLINED }, ...properties);
}

/**
 * Creates a sentiment very satisfied outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentVerySatisfiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentVerySatisfiedOutlinedIcon(element, ...properties);
    return element;
}
