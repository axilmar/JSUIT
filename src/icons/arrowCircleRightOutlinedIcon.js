import { initIcon } from "./icon.js";

//the url of the arrow circle right outlined svg; resolved relative to this module
const URL_ARROWCIRCLERIGHTOUTLINED = new URL('../../assets/icons/arrowCircleRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowCircleRightOutlinedIcon', url: URL_ARROWCIRCLERIGHTOUTLINED }, ...properties);
}

/**
 * Creates an arrow circle right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleRightOutlinedIcon(element, ...properties);
    return element;
}
