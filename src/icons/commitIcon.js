import { initIcon } from "./icon.js";

//the url of the commit svg; resolved relative to this module
const URL_COMMIT = new URL('../../assets/icons/commit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a commit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'commitIcon', url: URL_COMMIT }, ...properties);
}

/**
 * Creates a commit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commitIcon = (...properties) => {
    const element = document.createElement('div');
    initCommitIcon(element, ...properties);
    return element;
}
