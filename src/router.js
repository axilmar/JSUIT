import { isString, isFunction, isDOMNode } from "./utility.js";

const PARAMETER_PREFIX = ':';
const OUTLET_CLASS = '.outlet';

let routes = [];

//match a path against a route path
const matchPath = (routePath, path, currentParameters) => {
    const routePathSegments = routePath.split('/');
    const pathSegments = path.split('/');
    const parameters = { ...currentParameters };

    //route path must have less than or equal to path segments
    if (routePathSegments.length <= pathSegments.length) {
        let segmentIndex = 0;
        let success = true;
        for(; segmentIndex < routePathSegments.length; ++segmentIndex) {
            const routeSegment = routePathSegments[segmentIndex];
            const pathSegment = pathSegments[segmentIndex];
            if (routeSegment.startsWith(PARAMETER_PREFIX)) {
                const parameterName = routeSegment.substring(PARAMETER_PREFIX.length);
                parameters[parameterName] = pathSegment;
            }
            else if (routeSegment.toLowerCase() !== pathSegment.toLowerCase()) {
                success = false;
                break;
            }
        }

        //success
        if (success) {
            return { 
                success: true, 
                remainingPath: '/' + pathSegments.slice(segmentIndex, pathSegments.length).join('/'), 
                parameters
            };
        }
    }

    //failure
    return { success: false };
}

//show element
const showElement = (parent, child) => {
    if (child.parentElement !== parent) {
        parent.replaceChildren(child);
    }
    const result = child.querySelector(OUTLET_CLASS);
    return result;
}

//get element to render or a redirect
const getElementOrRedirect = (render, parameters) => {
    if (isFunction(render)) {
        return render(parameters);
    }
    return render;
}

//internal navigation
const navigateLocally = (path, routes, parentParameters = {}, parentElement = document.body) => {
    for(const route of routes) {
        //conditional failed,proceed with next route
        if (route.conditional && !route.conditional(path)) {
            continue;
        }

        //match the path
        const { success, remainingPath, parameters } = matchPath(route.path, path, parentParameters);

        //did not match, proceed with next route
        if (!success) {
            continue;
        }

        //get the element to show or the redirection string
        const elementOrRedirect = getElementOrRedirect(route.render, parameters);

        //if it is a string, then redirect
        if (isString(elementOrRedirect)) {
            if (path.indexOf(elementOrRedirect) < 0) {
                path = elementOrRedirect;
            }
            continue;
        }

        //show the element
        if (isDOMNode(elementOrRedirect)) {
            parentElement = showElement(parentElement, elementOrRedirect);
        }

        //process children for the remaining path
        if (remainingPath.length > 1 && route.children) {
            if (!parentElement) {
                throw new OutletNotFoundError(path);
            }
            navigateLocally(remainingPath, route.children, parameters, parentElement);
        }

        //end of routing
        return;
    }

    //route not found
    throw new RouteNotFoundError(path);
}

/**
 * Navigates to a url.
 * If the url given has no origin or it has the same origin as the current location,
 * navigation is done without loading, using the current routing table, otherwise the new page is loaded normally.
 * @param {*} url the target url; can be a path without origin.
 */
const navigateInternal = (url, saveState) => {
    //must have routes
    if (routes?.length > 0) {
        //get url with own origin or with window location origin
        const urlObject = new URL(url, window.location.origin);

        //if same origin, do internal navigation
        if (urlObject.origin === window.location.origin) {
            navigateLocally(urlObject.pathname, routes);
            if (saveState) {
                history.pushState(null, null, url);
            }
            return;
        }
    }

    //no routes or different origin, load new page
    window.location.href = urlObject.href;
}

//override click in anchors to navigate internally;
//do initial navigation
document.addEventListener("DOMContentLoaded", () => {
    //override links
    document.body.addEventListener("click", (event) => {
        if (event.target.href) {
            event.preventDefault();
            navigate(event.target.href);
        }
    });

    //do initial navigation
    navigate(window.location.href);
})

//catch pop state event to do local navigation
window.addEventListener("popstate", (event) => {
    navigateInternal(window.location.href, false);
})

/**
 * Route not found error.
 * Thrown when no route is found for a path.
 */
export class RouteNotFoundError extends Error {
    /**
     * The constructor.
     * @param {*} path the path for which a route was not found.
     */
    constructor(path) {
        super(`Route not found for path '${path}'`);
    }
}

/**
 * Outlet not found error.
 * Thrown when no outlet element exists for a route.
 */
export class OutletNotFoundError extends Error {
    /**
     * The constructor.
     * @param {*} path the path for which an outlet was not found.
     */
    constructor(path) {
        super(`Outlet not found for path '${path}'`);
    }
}

/**
 * Sets up the internal routes table.
 * 
 * @param {*} newRoutes the new routes to set. It must be an array of route entries.
 * 
 *  Each route entry can have the following fields:
 *      - conditional: optional function that accepts a path and returns true or false.
 *          If it returns false, then the route entry is ignored.
 * 
 *      - path: string of path to follow; it can contain parameters like ':id'.
 * 
 *      - render: either a function, an html element, a string, or null/undefined.
 * 
 *          If it is a function, then it accepts the current parameters and can return:
 *              - an html element to render in the closest outlet.
 *              - a redirection path string.
 *              - undefined/null; in this case, nothing new is rendered, and the algorithm continues with children routes.
 * 
 *          If it is an html element, then it is rendered to the closest outlet.
 *          If it is a string, then it is a redirect.
 *          If it is null or undefined, then nothing happens and rendering continues with children routes.
 * 
 *      - children: optional array of children routes.
 * 
 * Outlet elements are those with an 'outlet' class.
 * 
 * @exception RouteNotFoundError thrown if a route is not found.
 */
export const router = (newRoutes) => {
    routes = newRoutes ?? [];
}

/**
 * Navigates to a url.
 * If the url given has no origin or it has the same origin as the current location,
 * navigation is done without loading, using the current routing table, otherwise the new page is loaded normally.
 * @param {*} url the target url; can be a path without origin.
 */
export const navigate = (url) => {
    navigateInternal(url, true);
}
