import { initIcon } from "./icon.js";

//the url of the rule svg; resolved relative to this module
const URL_RULE = new URL('../../assets/icons/rule.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rule icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rule.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRuleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ruleIcon', url: URL_RULE }, ...properties);
}

/**
 * Creates a rule icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ruleIcon = (...properties) => {
    const element = document.createElement('div');
    initRuleIcon(element, ...properties);
    return element;
}
