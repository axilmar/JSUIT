import { initIcon } from "./icon.js";

//the url of the view kanban outlined svg; resolved relative to this module
const URL_VIEWKANBANOUTLINED = new URL('../../assets/icons/viewKanbanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view kanban outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewKanbanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewKanbanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWKANBANOUTLINED }, ...properties);
}

/**
 * Creates a view kanban outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewKanbanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewKanbanOutlinedIcon(element, ...properties);
    return element;
}
