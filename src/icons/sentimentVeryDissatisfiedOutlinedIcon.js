import { initIcon } from "./icon.js";

//the url of the sentiment very dissatisfied outlined svg; resolved relative to this module
const URL_SENTIMENTVERYDISSATISFIEDOUTLINED = new URL('../../assets/icons/sentimentVeryDissatisfiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment very dissatisfied outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentVeryDissatisfiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentVeryDissatisfiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sentimentVeryDissatisfiedOutlinedIcon', url: URL_SENTIMENTVERYDISSATISFIEDOUTLINED }, ...properties);
}

/**
 * Creates a sentiment very dissatisfied outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentVeryDissatisfiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentVeryDissatisfiedOutlinedIcon(element, ...properties);
    return element;
}
