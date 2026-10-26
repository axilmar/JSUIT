import { initIcon } from "./icon.js";

//the url of the rule folder outlined svg; resolved relative to this module
const URL_RULEFOLDEROUTLINED = new URL('../../assets/icons/ruleFolderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rule folder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ruleFolderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRuleFolderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RULEFOLDEROUTLINED }, ...properties);
}

/**
 * Creates a rule folder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ruleFolderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRuleFolderOutlinedIcon(element, ...properties);
    return element;
}
