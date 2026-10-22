import { adoptStyleSheet } from "./utility.js";

import tooltipStyleSheet from './tooltip.css' with { type: 'css' };

adoptStyleSheet(tooltipStyleSheet);

const TOOLTIP_CLASS = 'tooltip';
const VISIBLE_CLASS = 'tooltip-visible';
const BELOW_CLASS = 'tooltip-below';
const ARROW_EDGE = 10;      //the minimum distance between the arrow and the sides of the tooltip
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
 * The property 'tooltipClassName' (null by default) holds space-delimited class names that are added to the tooltip element,
 * in addition to its own class, when it is created; if it is set after the tooltip element was created, the class names
 * it held before are replaced with the new ones.
 * 
 * Each element has its own tooltip element, created when it is first shown. While the mouse cursor is inside the element, the
 * tooltip is added to the body, above the cursor, and follows the cursor; it looks like MUI's Tooltip, with the arrow.
 * The arrow points at the cursor: it is at the bottom of the tooltip, or at the top if the tooltip is below the cursor because there is no room above.
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
    let className = null;           //the class names to add to the tooltip element, or null
    let appliedClassNames = [];     //the class names that were added to the tooltip element

    //adds the class names of the property 'tooltipClassName' to the tooltip element, replacing the ones added before
    const applyClassNames = () => {
        tooltipElement.classList.remove(...appliedClassNames);
        appliedClassNames = className ? className.split(/\s+/).filter(name => name.length > 0) : [];
        tooltipElement.classList.add(...appliedClassNames);
    };

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
        //the size is measured at the left of the window, where the tooltip has all the room that it can have; at the right it could be narrower
        tooltipElement.style.left = '0px';
        const { width, height } = tooltipElement.getBoundingClientRect();
        const maxLeft = Math.max(document.documentElement.clientWidth - width - EDGE, EDGE);
        const left = Math.min(Math.max(x - width / 2, EDGE), maxLeft);
        let top = y - height - DISTANCE;
        const below = top < EDGE;
        if (below) {
            top = y + DISTANCE + 10;        //the cursor itself is about 20px high
        }
        tooltipElement.style.left = left + 'px';
        tooltipElement.style.top = top + 'px';

        //the arrow points at the cursor, also when the tooltip is moved to keep it inside the window; it is on the top edge if the tooltip is below the cursor
        tooltipElement.style.setProperty('--tooltip-arrow-x', Math.min(Math.max(x - left, ARROW_EDGE), Math.max(width - ARROW_EDGE, ARROW_EDGE)) + 'px');
        tooltipElement.classList.toggle(BELOW_CLASS, below);
    };

    //adds the tooltip to the body, if it is not there yet, above the point
    const show = (x, y) => {
        if (!tooltipElement) {
            tooltipElement = document.createElement('div');
            tooltipElement.classList.add(TOOLTIP_CLASS);
            applyClassNames();
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

    Object.defineProperty(element, 'tooltipClassName', {
        configurable: true,
        enumerable: true,
        get: () => className,
        set: (value) => {
            console.assert(value === null || value === undefined || typeof value === 'string');
            className = value ?? null;
            if (tooltipElement) {
                applyClassNames();
            }
        }
    });

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
