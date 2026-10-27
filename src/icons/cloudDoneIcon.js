import { initIcon } from "./icon.js";

//the url of the cloud done svg; resolved relative to this module
const URL_CLOUDDONE = new URL('../../assets/icons/cloudDone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud done icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudDone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudDoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudDoneIcon', url: URL_CLOUDDONE }, ...properties);
}

/**
 * Creates a cloud done icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudDoneIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudDoneIcon(element, ...properties);
    return element;
}
