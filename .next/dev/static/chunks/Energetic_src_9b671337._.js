(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Energetic/src/components/AnalyticsProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsProvider",
    ()=>AnalyticsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Energetic/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/posthog-js/react/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
let didInit = false;
function PostHogInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostHogInit.useEffect": ()=>{
            if (didInit) return;
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_KEY;
            const host = __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_HOST;
            if (!key || !host) {
                if ("TURBOPACK compile-time truthy", 1) {
                    // eslint-disable-next-line no-console
                    console.warn("[PostHog] Missing NEXT_PUBLIC_POSTHOG_KEY or NEXT_PUBLIC_POSTHOG_HOST. Analytics disabled.");
                }
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(key, {
                api_host: host,
                person_profiles: "identified_only",
                // App Router: we capture pageviews on navigation ourselves.
                capture_pageview: false,
                session_recording: {
                    captureCanvas: {
                        recordCanvas: true,
                        canvasFps: 4,
                        canvasQuality: "0.4"
                    }
                },
                debug: ("TURBOPACK compile-time value", "development") === "development"
            });
            // Ensure recording is running (project settings still control what is stored).
            __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].startSessionRecording();
            didInit = true;
        }
    }["PostHogInit.useEffect"], []);
    return null;
}
_s(PostHogInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PostHogInit;
function PostHogPageView() {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostHogPageView.useEffect": ()=>{
            if (!didInit) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capture("$pageview", {
                $current_url: window.location.href
            });
        }
    }["PostHogPageView.useEffect"], [
        pathname
    ]);
    return null;
}
_s1(PostHogPageView, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = PostHogPageView;
function AnalyticsProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostHogProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostHogInit, {}, void 0, false, {
                fileName: "[project]/Energetic/src/components/AnalyticsProvider.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostHogPageView, {}, void 0, false, {
                fileName: "[project]/Energetic/src/components/AnalyticsProvider.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Energetic/src/components/AnalyticsProvider.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c2 = AnalyticsProvider;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PostHogInit");
__turbopack_context__.k.register(_c1, "PostHogPageView");
__turbopack_context__.k.register(_c2, "AnalyticsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Energetic/src/components/ConsoleSignature.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleSignature",
    ()=>ConsoleSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function isExternalIframeLoad() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const isIframed = window.self !== window.top;
    if (!isIframed) return false;
    const referrer = document.referrer;
    if (!referrer) return true;
    try {
        const refOrigin = new URL(referrer).origin;
        return refOrigin !== window.location.origin;
    } catch  {
        return true;
    }
}
function ConsoleSignature() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsoleSignature.useEffect": ()=>{
            if (!isExternalIframeLoad()) return;
            // Keep this side-effect lightweight and non-blocking.
            const art = String.raw`
  _____                       _   _      
 | ____|_ __   ___ _ __ __ _| |_(_) ___  
 |  _| | '_ \ / _ \ '__/ _\` | __| |/ __| 
 | |___| | | |  __/ | | (_| | |_| | (__  
 |_____|_| |_|\___|_|  \__,_|\__|_|\___| 
`;
            // eslint-disable-next-line no-console
            console.log(`${art}\nCreated by Energetic (Matches Between Energetic and the Real World)\n`);
        }
    }["ConsoleSignature.useEffect"], []);
    return null;
}
_s(ConsoleSignature, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ConsoleSignature;
var _c;
__turbopack_context__.k.register(_c, "ConsoleSignature");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Energetic/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$src$2f$components$2f$AnalyticsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/src/components/AnalyticsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$src$2f$components$2f$ConsoleSignature$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Energetic/src/components/ConsoleSignature.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$src$2f$components$2f$AnalyticsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalyticsProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Energetic$2f$src$2f$components$2f$ConsoleSignature$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleSignature"], {}, void 0, false, {
                fileName: "[project]/Energetic/src/app/providers.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Energetic/src/app/providers.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Energetic_src_9b671337._.js.map