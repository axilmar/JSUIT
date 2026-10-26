import { initIcon } from "./icon.js";

//the url of the qr code2 svg; resolved relative to this module
const URL_QRCODE2 = new URL('../../assets/icons/qrCode2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a qr code2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/qrCode2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQrCode2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QRCODE2 }, ...properties);
}

/**
 * Creates a qr code2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const qrCode2Icon = (...properties) => {
    const element = document.createElement('div');
    initQrCode2Icon(element, ...properties);
    return element;
}
