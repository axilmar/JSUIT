import { initIcon } from "./icon.js";

//the url of the train svg; resolved relative to this module
const URL_TRAIN = new URL('../../assets/icons/train.svg', import.meta.url).href;

/**
 * Initializes an icon element as a train icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/train.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrainIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'trainIcon', url: URL_TRAIN }, ...properties);
}

/**
 * Creates a train icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trainIcon = (...properties) => {
    const element = document.createElement('div');
    initTrainIcon(element, ...properties);
    return element;
}
