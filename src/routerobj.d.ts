import type { RouteObject } from 'react-router-dom';

declare module 'react-router' {
    interface NonIndexRouteObject {
        meta?: {
            title?: string;
            authority?: string;
        };
    }
    interface IndexRouteObject {
        meta?: {
            title: string;
            authority?: string;
        };
    }
}

export default RouteObject;
