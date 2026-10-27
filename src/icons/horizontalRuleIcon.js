import { initIcon } from "./icon.js";

//the url of the horizontal rule svg; resolved relative to this module
const URL_HORIZONTALRULE = new URL('../../assets/icons/horizontalRule.svg', import.meta.url).href;

/**
 * Initializes an icon element as a horizontal rule icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/horizontalRule.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHorizontalRuleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'horizontalRuleIcon', url: URL_HORIZONTALRULE }, ...properties);
}

/**
 * Creates a horizontal rule icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const horizontalRuleIcon = (...properties) => {
    const element = document.createElement('div');
    initHorizontalRuleIcon(element, ...properties);
    return element;
}
