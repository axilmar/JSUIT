import { initIcon } from "./icon.js";

//the url of the ballot svg; resolved relative to this module
const URL_BALLOT = new URL('../../assets/icons/ballot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ballot icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ballot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBallotIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ballotIcon', url: URL_BALLOT }, ...properties);
}

/**
 * Creates a ballot icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ballotIcon = (...properties) => {
    const element = document.createElement('div');
    initBallotIcon(element, ...properties);
    return element;
}
