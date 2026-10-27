import { initIcon } from "./icon.js";

//the url of the play circle filled white outlined svg; resolved relative to this module
const URL_PLAYCIRCLEFILLEDWHITEOUTLINED = new URL('../../assets/icons/playCircleFilledWhiteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle filled white outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleFilledWhiteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleFilledWhiteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playCircleFilledWhiteOutlinedIcon', url: URL_PLAYCIRCLEFILLEDWHITEOUTLINED }, ...properties);
}

/**
 * Creates a play circle filled white outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleFilledWhiteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleFilledWhiteOutlinedIcon(element, ...properties);
    return element;
}
