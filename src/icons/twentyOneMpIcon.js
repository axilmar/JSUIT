import { initIcon } from "./icon.js";

//the url of the twenty one mp svg; resolved relative to this module
const URL_TWENTYONEMP = new URL('../../assets/icons/twentyOneMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty one mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyOneMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyOneMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyOneMpIcon', url: URL_TWENTYONEMP }, ...properties);
}

/**
 * Creates a twenty one mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyOneMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyOneMpIcon(element, ...properties);
    return element;
}
