import { initIcon } from "./icon.js";

//the url of the rule outlined svg; resolved relative to this module
const URL_RULEOUTLINED = new URL('../../assets/icons/ruleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rule outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ruleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRuleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ruleOutlinedIcon', url: URL_RULEOUTLINED }, ...properties);
}

/**
 * Creates a rule outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ruleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRuleOutlinedIcon(element, ...properties);
    return element;
}
