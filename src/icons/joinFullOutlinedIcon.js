import { initIcon } from "./icon.js";

//the url of the join full outlined svg; resolved relative to this module
const URL_JOINFULLOUTLINED = new URL('../../assets/icons/joinFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'joinFullOutlinedIcon', url: URL_JOINFULLOUTLINED }, ...properties);
}

/**
 * Creates a join full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinFullOutlinedIcon(element, ...properties);
    return element;
}
