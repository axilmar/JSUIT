import { initIcon } from "./icon.js";

//the url of the snippet folder outlined svg; resolved relative to this module
const URL_SNIPPETFOLDEROUTLINED = new URL('../../assets/icons/snippetFolderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snippet folder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snippetFolderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnippetFolderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SNIPPETFOLDEROUTLINED }, ...properties);
}

/**
 * Creates a snippet folder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snippetFolderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSnippetFolderOutlinedIcon(element, ...properties);
    return element;
}
