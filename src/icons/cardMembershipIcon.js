import { initIcon } from "./icon.js";

//the url of the card membership svg; resolved relative to this module
const URL_CARDMEMBERSHIP = new URL('../../assets/icons/cardMembership.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card membership icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardMembership.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardMembershipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cardMembershipIcon', url: URL_CARDMEMBERSHIP }, ...properties);
}

/**
 * Creates a card membership icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardMembershipIcon = (...properties) => {
    const element = document.createElement('div');
    initCardMembershipIcon(element, ...properties);
    return element;
}
