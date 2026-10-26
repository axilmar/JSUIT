const SPACER_CLASS = 'listBox-spacer';
const VIRTUAL_CLASS = 'listBox-virtual';
const DEFAULT_NON_VIRTUAL_COUNT = 32;
const DEFAULT_ITEM_HEIGHT = 40;     //the height of an item that was never rendered, until the average height of the rendered ones is known
const OVERSCAN = 200;               //the pixels above and below the visible part of the list for which items are rendered, too

/**
 * Defines the property 'nonVirtualCount' on a list element (a ul or an ol), and the virtualized drawing that it controls.
 *
 * While the element has at most `nonVirtualCount` children (the default is 32), it is an ordinary list. When it has more, it switches to virtualized
 * drawing: only the children that are in the visible part of the list (and a few pixels around it) are in the document; the others are kept by the
 * list, and are put in the document when they are scrolled to. Two spacer items (list items of class 'listBox-spacer', with the role 'presentation')
 * take the height of the items that are not rendered, so that the scroll bar of the list is the one of the whole list. The list is scrolled
 * vertically, and has a maximum height of 400px (the css class 'listBox-virtual'), which a style of the element can change; without a limit,
 * all the items would be visible, and rendered.
 *
 * The list follows its children: appending, inserting or removing a child (with the DOM functions) while it is virtualized is supported, and when
 * the count goes back to `nonVirtualCount` or less, all the children are in the document again. The children can have different heights; the height
 * of an item that was not rendered yet is the average height of the ones that were. The items get 'aria-setsize' and 'aria-posinset' while they
 * are rendered, and the css property '--orderedListBox-offset' of the element is the number of the items (the dividers, which have the class
 * 'divider', are not counted) before the first rendered one, for the numbering of the ordered list.
 *
 * The property 'nonVirtualCount' accepts a non-negative integer, or Infinity (the list is never virtualized).
 *
 * @param {*} element the list element.
 */
export const defineNonVirtualCountProperty = (element) => {
    let nonVirtualCount = DEFAULT_NON_VIRTUAL_COUNT;
    let virtual = false;
    let items = [];                         //all the children, while virtual
    let first = 0;                          //the rendered items are items[first] to items[last - 1]
    let last = 0;
    let estimate = DEFAULT_ITEM_HEIGHT;
    let resizeObserver = null;
    const heights = new Map();              //item -> its measured height

    const createSpacer = () => {
        const spacer = document.createElement('li');
        spacer.classList.add(SPACER_CLASS);
        spacer.setAttribute('role', 'presentation');
        spacer.setAttribute('aria-hidden', 'true');
        return spacer;
    };
    const top = createSpacer();
    const bottom = createSpacer();

    const heightOf = (item) => heights.get(item) ?? estimate;
    const isDivider = (item) => item.classList.contains('divider');

    //runs a function that changes the children of the element, without the list taking the changes for the ones of the user
    const silently = (change) => {
        flush();
        change();
        observer.takeRecords();
    };

    //puts the items of the window [start, end) in the document, and removes the other rendered ones
    const updateDocument = (start, end) => {
        if (last <= first || last <= start || first >= end) {
            element.replaceChildren(top, ...items.slice(start, end), bottom);
            return;
        }
        for (let i = first; i < last; i++) {
            if (i < start || i >= end) {
                items[i].remove();
            }
        }
        if (start < first) {
            top.after(...items.slice(start, Math.min(first, end)));
        }
        if (end > last) {
            bottom.before(...items.slice(Math.max(last, start), end));
        }
    };

    //renders the items that are in the visible part of the list
    const render = () => {
        if (!virtual) {
            return;
        }
        const paddingTop = parseFloat(getComputedStyle(element).paddingTop) || 0;
        const low = element.scrollTop - paddingTop - OVERSCAN;
        const high = element.scrollTop + element.clientHeight - paddingTop + OVERSCAN;
        let accumulated = 0;
        let start = -1;
        let end = items.length;
        let startOffset = 0;
        let endOffset = null;
        let count = 0;                  //the items that are not dividers, before the current one
        let startCount = 0;
        for (let i = 0; i < items.length; i++) {
            const height = heightOf(items[i]);
            if (start < 0 && accumulated + height > low) {
                start = i;
                startOffset = accumulated;
                startCount = count;
            }
            if (start >= 0 && i > start && endOffset === null && accumulated >= high) {
                end = i;
                endOffset = accumulated;
            }
            accumulated += height;
            if (!isDivider(items[i])) {
                count++;
            }
        }
        if (start < 0) {
            start = items.length;
            startOffset = accumulated;
            startCount = count;
        }
        endOffset ??= accumulated;

        silently(() => {
            updateDocument(start, end);
            top.style.height = startOffset + 'px';
            bottom.style.height = (accumulated - endOffset) + 'px';
            element.style.setProperty('--orderedListBox-offset', startCount);
            for (let i = start; i < end; i++) {
                items[i].setAttribute('aria-setsize', items.length);
                items[i].setAttribute('aria-posinset', i + 1);
            }
        });
        first = start;
        last = end;

        //measures the rendered items; if the heights are not the ones that were used, the window and the spacers are computed again
        let changed = false;
        let sum = 0;
        for (let i = start; i < end; i++) {
            const height = items[i].getBoundingClientRect().height;
            sum += height;
            if (Math.abs(height - (heights.get(items[i]) ?? -1)) > 0.5) {
                heights.set(items[i], height);
                changed = true;
            }
        }
        if (end > start) {
            const newEstimate = sum / (end - start);
            if (Math.abs(newEstimate - estimate) > 0.5) {
                changed = true;
            }
            estimate = newEstimate;
        }
        if (changed) {
            requestAnimationFrame(render);
        }
    };

    const enterVirtual = () => {
        items = [...element.children];
        first = 0;
        last = 0;
        virtual = true;
        silently(() => {
            element.replaceChildren(top, bottom);
            element.classList.add(VIRTUAL_CLASS);
        });
        resizeObserver = new ResizeObserver(render);
        resizeObserver.observe(element);
        render();
    };

    const leaveVirtual = () => {
        virtual = false;
        resizeObserver.disconnect();
        resizeObserver = null;
        silently(() => {
            element.replaceChildren(...items);
            element.classList.remove(VIRTUAL_CLASS);
            element.style.removeProperty('--orderedListBox-offset');
            for (const item of items) {
                item.removeAttribute('aria-setsize');
                item.removeAttribute('aria-posinset');
            }
        });
        items = [];
        heights.clear();
        estimate = DEFAULT_ITEM_HEIGHT;
    };

    //the user changed the children of a virtual list: the items are the ones that were not rendered, before and after the window, and the
    //children that are in the document now
    const resync = () => {
        const children = [...element.children].filter(child => child !== top && child !== bottom);
        if (top.parentNode !== element || bottom.parentNode !== element) {
            items = children;      //the list was cleared and filled again
            first = 0;
        }
        else {
            items = [...items.slice(0, first), ...children, ...items.slice(last)];
        }
        last = first = Math.min(first, items.length);
        silently(() => element.replaceChildren(top, bottom));
        render();
    };

    //switches between the ordinary and the virtualized drawing, according to the number of children
    const evaluate = () => {
        const count = virtual ? items.length : element.children.length;
        if (!virtual && count > nonVirtualCount) {
            enterVirtual();
        }
        else if (virtual && count <= nonVirtualCount) {
            leaveVirtual();
        }
    };

    const handleMutations = () => {
        if (virtual) {
            resync();
        }
        evaluate();
    };

    const observer = new MutationObserver(handleMutations);

    //handles the changes of the children that wait for the observer
    function flush() {
        if (observer.takeRecords().length > 0) {
            handleMutations();
        }
    }

    observer.observe(element, { childList: true });
    element.addEventListener('scroll', render, { passive: true });

    Object.defineProperty(element, 'nonVirtualCount', {
        configurable: true,
        enumerable: true,
        get: () => nonVirtualCount,
        set: (value) => {
            console.assert(value === Infinity || (Number.isInteger(value) && value >= 0));
            flush();
            nonVirtualCount = value;
            evaluate();
        }
    });
};
