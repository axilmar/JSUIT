import { initIcon } from "./icon.js";

//the url of the view kanban svg; resolved relative to this module
const URL_VIEWKANBAN = new URL('../../assets/icons/viewKanban.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view kanban icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewKanban.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewKanbanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWKANBAN }, ...properties);
}

/**
 * Creates a view kanban icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewKanbanIcon = (...properties) => {
    const element = document.createElement('div');
    initViewKanbanIcon(element, ...properties);
    return element;
}
