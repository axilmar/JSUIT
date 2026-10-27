import { initIcon } from "./icon.js";

//the url of the insert invitation svg; resolved relative to this module
const URL_INSERTINVITATION = new URL('../../assets/icons/insertInvitation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert invitation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertInvitation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertInvitationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertInvitationIcon', url: URL_INSERTINVITATION }, ...properties);
}

/**
 * Creates an insert invitation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertInvitationIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertInvitationIcon(element, ...properties);
    return element;
}
