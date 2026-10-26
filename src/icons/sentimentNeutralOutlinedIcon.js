import { initIcon } from "./icon.js";

//the url of the sentiment neutral outlined svg; resolved relative to this module
const URL_SENTIMENTNEUTRALOUTLINED = new URL('../../assets/icons/sentimentNeutralOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sentiment neutral outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sentimentNeutralOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSentimentNeutralOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENTIMENTNEUTRALOUTLINED }, ...properties);
}

/**
 * Creates a sentiment neutral outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sentimentNeutralOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSentimentNeutralOutlinedIcon(element, ...properties);
    return element;
}
