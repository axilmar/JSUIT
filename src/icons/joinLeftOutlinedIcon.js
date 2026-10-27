import { initIcon } from "./icon.js";

//the url of the join left outlined svg; resolved relative to this module
const URL_JOINLEFTOUTLINED = new URL('../../assets/icons/joinLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'joinLeftOutlinedIcon', url: URL_JOINLEFTOUTLINED }, ...properties);
}

/**
 * Creates a join left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinLeftOutlinedIcon(element, ...properties);
    return element;
}
