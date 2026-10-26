import { initIcon } from "./icon.js";

//the url of the view agenda svg; resolved relative to this module
const URL_VIEWAGENDA = new URL('../../assets/icons/viewAgenda.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view agenda icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewAgenda.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewAgendaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWAGENDA }, ...properties);
}

/**
 * Creates a view agenda icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewAgendaIcon = (...properties) => {
    const element = document.createElement('div');
    initViewAgendaIcon(element, ...properties);
    return element;
}
