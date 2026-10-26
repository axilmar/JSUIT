import { initIcon } from "./icon.js";

//the url of the rule folder svg; resolved relative to this module
const URL_RULEFOLDER = new URL('../../assets/icons/ruleFolder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rule folder icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ruleFolder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRuleFolderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RULEFOLDER }, ...properties);
}

/**
 * Creates a rule folder icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ruleFolderIcon = (...properties) => {
    const element = document.createElement('div');
    initRuleFolderIcon(element, ...properties);
    return element;
}
