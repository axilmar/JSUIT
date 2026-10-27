import { initIcon } from "./icon.js";

//the url of the join full svg; resolved relative to this module
const URL_JOINFULL = new URL('../../assets/icons/joinFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'joinFullIcon', url: URL_JOINFULL }, ...properties);
}

/**
 * Creates a join full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinFullIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinFullIcon(element, ...properties);
    return element;
}
