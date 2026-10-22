import { adoptStyleSheet } from "./utility.js";

import tooltipStyleSheet from './tooltip.css' with { type: 'css' };

adoptStyleSheet(tooltipStyleSheet);

const TOOLTIP_CLASS = 'tooltip';
const VISIBLE_CLASS = 'tooltip-visible';
const DISTANCE = 14;        //MUI's distance between the tooltip and what it is for; here, the mouse cursor
const EDGE = 4;             //the minimum distance between the tooltip and the edge of the window

const shownTooltips = new Map();    //element -> function that hides its tooltip; for the tooltips that are in the body
const handledEvents = new WeakSet();//the pointer events that have been handled by the tooltip of an element
let observing = false;

//removes the tooltips of the elements that have been removed from the page
const onMutation = () => {
    for (const [element, hide] of shownTooltips) {
        if (!element.isConnected) {
            hide();
        }
    }
};

//starts watching the page for removed elements, once
const observe = () => {
    if (!observing) {
        observing = true;
        new MutationObserver(onMutation).observe(document.documentElement, { childList: true, subtree: true });
    }
};

/**
 * Defines the property 'tooltip' on an element.
 * 
 * The property is empty by default. It accepts an element, which is shown inside the tooltip, or any other value, whose
 * string is shown. Setting it to null, undefined or an empty string removes the tooltip.
 * 
 * Each element has its own tooltip element, created when it is first shown. While the mouse cursor is inside the element, the
 * tooltip is added to the body, above the cursor, and follows the cursor; it looks like MUI's Tooltip, without the arrow.
 * When the cursor leaves the element, or the element is removed from the page, the tooltip is removed from the body.
 * If an element inside this one has a tooltip, then that one is shown while the cursor is inside the inner element.
 * 
 * @param {*} element the element to define the property on.
 */
export const defineTooltipProperty = (element) => {
    let content = '';
    let tooltipElement = null;      //created on demand
    let shown = false;              //true while the tooltip element is in the body
    let listening = false;

    //puts the content in the tooltip element
    const fill = () => {
        tooltipElement.replaceChildren(content instanceof Element ? content : String(content));
    };

    //removes the tooltip from the body
    const hide = () => {
        if (shown) {
            shown = false;
            tooltipElement.remove();
            shownTooltips.delete(element);
        }
    };

    //places the tooltip above the point, or below it if there is no room above
    const place = (x, y) => {
        const { width, height } = tooltipElement.getBoundingClientRect();
        const maxLeft = Math.max(document.documentElement.clientWidth - width - EDGE, EDGE);
        const left = Math.min(Math.max(x - width / 2, EDGE), maxLeft);
        let top = y - height - DISTANCE;
        if (top < EDGE) {
            top = y + DISTANCE + 10;        //the cursor itself is about 20px high
        }
        tooltipElement.style.left = left + 'px';
        tooltipElement.style.top = top + 'px';
    };

    //adds the tooltip to the body, if it is not there yet, above the point
    const show = (x, y) => {
        if (!tooltipElement) {
            tooltipElement = document.createElement('div');
            tooltipElement.classList.add(TOOLTIP_CLASS);
            fill();
        }
        if (!shown) {
            shown = true;
            tooltipElement.classList.remove(VISIBLE_CLASS);
            document.body.append(tooltipElement);
            shownTooltips.set(element, hide);
            observe();
            tooltipElement.offsetWidth;     //so that the fade in starts from the hidden state
        }
        place(x, y);
        tooltipElement.classList.add(VISIBLE_CLASS);
    };

    //follows the mouse; an element inside this one that has a tooltip handles the event first, and then this tooltip is hidden
    const onPointerMove = (event) => {
        if (event.pointerType === 'touch') {
            return;
        }
        if (handledEvents.has(event)) {
            hide();
        }
        else if (content !== '') {
            handledEvents.add(event);
            show(event.clientX, event.clientY);
        }
    };

    //adds the listeners, once
    const listen = () => {
        if (!listening) {
            listening = true;
            element.addEventListener('pointermove', onPointerMove);
            element.addEventListener('pointerleave', hide);
        }
    };

    Object.defineProperty(element, 'tooltip', {
        configurable: true,
        enumerable: true,
        get: () => content,
        set: (value) => {
            content = value === null || value === undefined ? '' : value;
            if (content === '') {
                hide();
            }
            else {
                listen();
                if (tooltipElement) {
                    fill();
                }
            }
        }
    });
};
