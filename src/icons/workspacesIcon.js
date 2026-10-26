import { initIcon } from "./icon.js";

//the url of the workspaces svg; resolved relative to this module
const URL_WORKSPACES = new URL('../../assets/icons/workspaces.svg', import.meta.url).href;

/**
 * Initializes an icon element as a workspaces icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workspaces.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkspacesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WORKSPACES }, ...properties);
}

/**
 * Creates a workspaces icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workspacesIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkspacesIcon(element, ...properties);
    return element;
}
