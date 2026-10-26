import { initIcon } from "./icon.js";

//the url of the campaign outlined svg; resolved relative to this module
const URL_CAMPAIGNOUTLINED = new URL('../../assets/icons/campaignOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a campaign outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/campaignOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCampaignOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMPAIGNOUTLINED }, ...properties);
}

/**
 * Creates a campaign outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const campaignOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCampaignOutlinedIcon(element, ...properties);
    return element;
}
