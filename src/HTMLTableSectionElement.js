import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableSectionElement.
 * 
 * The element get the class 'HTMLTableSectionElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableSectionElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableSectionElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableSectionElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'thead'.
 * 
 * The element gets the class 'thead'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const thead = (props, ...children) => {
    props ??= {};
    props.className = `thead ${props?.className ?? ''}`;
    const element = document.createElement('thead');
    return initHTMLTableSectionElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'tbody'.
 * 
 * The element gets the class 'tbody'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const tbody = (props, ...children) => {
    props ??= {};
    props.className = `tbody ${props?.className ?? ''}`;
    const element = document.createElement('tbody');
    return initHTMLTableSectionElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'tfoot'.
 * 
 * The element gets the class 'tfoot'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const tfoot = (props, ...children) => {
    props ??= {};
    props.className = `tfoot ${props?.className ?? ''}`;
    const element = document.createElement('tfoot');
    return initHTMLTableSectionElement(element, props, ...children);
}

