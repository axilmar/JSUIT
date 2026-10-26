import { initIcon } from "./icon.js";

//the url of the qr code scanner outlined svg; resolved relative to this module
const URL_QRCODESCANNEROUTLINED = new URL('../../assets/icons/qrCodeScannerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a qr code scanner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/qrCodeScannerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQrCodeScannerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QRCODESCANNEROUTLINED }, ...properties);
}

/**
 * Creates a qr code scanner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const qrCodeScannerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQrCodeScannerOutlinedIcon(element, ...properties);
    return element;
}
