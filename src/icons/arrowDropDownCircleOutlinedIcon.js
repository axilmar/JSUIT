import { initIcon } from "./icon.js";

//the url of the arrow drop down circle outlined svg; resolved relative to this module
const URL_ARROWDROPDOWNCIRCLEOUTLINED = new URL('../../assets/icons/arrowDropDownCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow drop down circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDropDownCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDropDownCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowDropDownCircleOutlinedIcon', url: URL_ARROWDROPDOWNCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates an arrow drop down circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDropDownCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDropDownCircleOutlinedIcon(element, ...properties);
    return element;
}
