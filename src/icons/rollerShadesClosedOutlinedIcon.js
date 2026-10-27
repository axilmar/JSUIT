import { initIcon } from "./icon.js";

//the url of the roller shades closed outlined svg; resolved relative to this module
const URL_ROLLERSHADESCLOSEDOUTLINED = new URL('../../assets/icons/rollerShadesClosedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller shades closed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerShadesClosedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerShadesClosedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rollerShadesClosedOutlinedIcon', url: URL_ROLLERSHADESCLOSEDOUTLINED }, ...properties);
}

/**
 * Creates a roller shades closed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerShadesClosedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerShadesClosedOutlinedIcon(element, ...properties);
    return element;
}
