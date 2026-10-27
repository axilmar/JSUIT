import { initIcon } from "./icon.js";

//the url of the horizontal rule outlined svg; resolved relative to this module
const URL_HORIZONTALRULEOUTLINED = new URL('../../assets/icons/horizontalRuleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a horizontal rule outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/horizontalRuleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHorizontalRuleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'horizontalRuleOutlinedIcon', url: URL_HORIZONTALRULEOUTLINED }, ...properties);
}

/**
 * Creates a horizontal rule outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const horizontalRuleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHorizontalRuleOutlinedIcon(element, ...properties);
    return element;
}
