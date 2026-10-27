import { initIcon } from "./icon.js";

//the url of the view agenda outlined svg; resolved relative to this module
const URL_VIEWAGENDAOUTLINED = new URL('../../assets/icons/viewAgendaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view agenda outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewAgendaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewAgendaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewAgendaOutlinedIcon', url: URL_VIEWAGENDAOUTLINED }, ...properties);
}

/**
 * Creates a view agenda outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewAgendaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewAgendaOutlinedIcon(element, ...properties);
    return element;
}
