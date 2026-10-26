import { initIcon } from "./icon.js";

//the url of the sentiment satisfied alt outlined svg; resolved relative to this module
const URL_SENTIMENTSATISFIEDALTOUTLINED = new URL('../../assets/icons/sentimentSatisfiedAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment satisfied alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentSatisfiedAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentSatisfiedAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENTIMENTSATISFIEDALTOUTLINED }, ...properties);
}

/**
 * Creates a sentiment satisfied alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentSatisfiedAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentSatisfiedAltOutlinedIcon(element, ...properties);
    return element;
}
