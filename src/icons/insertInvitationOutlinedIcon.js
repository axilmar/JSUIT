import { initIcon } from "./icon.js";

//the url of the insert invitation outlined svg; resolved relative to this module
const URL_INSERTINVITATIONOUTLINED = new URL('../../assets/icons/insertInvitationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert invitation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertInvitationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertInvitationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertInvitationOutlinedIcon', url: URL_INSERTINVITATIONOUTLINED }, ...properties);
}

/**
 * Creates an insert invitation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertInvitationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertInvitationOutlinedIcon(element, ...properties);
    return element;
}
