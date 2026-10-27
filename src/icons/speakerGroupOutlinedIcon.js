import { initIcon } from "./icon.js";

//the url of the speaker group outlined svg; resolved relative to this module
const URL_SPEAKERGROUPOUTLINED = new URL('../../assets/icons/speakerGroupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker group outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerGroupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerGroupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speakerGroupOutlinedIcon', url: URL_SPEAKERGROUPOUTLINED }, ...properties);
}

/**
 * Creates a speaker group outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerGroupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerGroupOutlinedIcon(element, ...properties);
    return element;
}
