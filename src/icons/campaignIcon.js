import { initIcon } from "./icon.js";

//the url of the campaign svg; resolved relative to this module
const URL_CAMPAIGN = new URL('../../assets/icons/campaign.svg', import.meta.url).href;

/**
 * Initializes an icon element as a campaign icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/campaign.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCampaignIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'campaignIcon', url: URL_CAMPAIGN }, ...properties);
}

/**
 * Creates a campaign icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const campaignIcon = (...properties) => {
    const element = document.createElement('div');
    initCampaignIcon(element, ...properties);
    return element;
}
