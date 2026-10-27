import { initIcon } from "./icon.js";

//the url of the turn sharp right outlined svg; resolved relative to this module
const URL_TURNSHARPRIGHTOUTLINED = new URL('../../assets/icons/turnSharpRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn sharp right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSharpRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSharpRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnSharpRightOutlinedIcon', url: URL_TURNSHARPRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a turn sharp right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSharpRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSharpRightOutlinedIcon(element, ...properties);
    return element;
}
