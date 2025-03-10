// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project adefc19e7e2b7202 "S Clark - ArcAlert", do not edit manually */
"use client";

// virtual:bottom-nav
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/80XUea8CfJm5k7nFzkJR/PmiLVlzQWqEQcsREEWpk/rarbAMPHs.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, SVG, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-ENCfv";
var variantClassNames = { S3DJd4giZ: "framer-v-12jwsgp" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ alertClick, checkClick, height, homeClick, id, width, ...props }) => {
  return { ...props, e_rNr6Phs: homeClick ?? props.e_rNr6Phs, irz1ZVfRn: checkClick ?? props.irz1ZVfRn, poTfpoqeg: alertClick ?? props.poTfpoqeg };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, e_rNr6Phs, irz1ZVfRn, poTfpoqeg, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "S3DJd4giZ", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap1y9okjl = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (irz1ZVfRn) {
      const res = await irz1ZVfRn(...args);
      if (res === false) return false;
    }
  });
  const onTap14297kw = activeVariantCallback(async (...args) => {
    if (poTfpoqeg) {
      const res = await poTfpoqeg(...args);
      if (res === false) return false;
    }
  });
  const onTap19tn3pc = activeVariantCallback(async (...args) => {
    if (e_rNr6Phs) {
      const res = await e_rNr6Phs(...args);
      if (res === false) return false;
    }
  });
  const onTap12z2kz3 = activeVariantCallback(async (...args) => {
    if (irz1ZVfRn) {
      const res = await irz1ZVfRn(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-12jwsgp", className, classNames), "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "S3DJd4giZ", onTap: onTap1y9okjl, ref: refBinding, style: { backgroundColor: "rgb(54, 54, 54)", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, boxShadow: "0.39809593676181976px 0.39809593676181976px 0.5629926728941875px -0.9375px rgba(0, 0, 0, 0.32124), 1.207253071552259px 1.207253071552259px 1.7073136670057811px -1.875px rgba(0, 0, 0, 0.30344), 3.1913267607422307px 3.1913267607422307px 4.51321758700586px -2.8125px rgba(0, 0, 0, 0.25979), 10px 10px 14.142135623730951px -3.75px rgba(0, 0, 0, 0.11)", ...style }, children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-c0l0mp", "data-highlight": true, layoutDependency, layoutId: "t4mFRwFwD", onTap: onTap14297kw, style: { backgroundColor: "var(--token-6697c2fc-2765-4df0-bc61-27f3291a6d24, rgb(28, 48, 54))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, children: /* @__PURE__ */ _jsx(SVG, { className: "framer-1wx794p", "data-framer-name": "Graphic", fill: "black", intrinsicHeight: 64, intrinsicWidth: 64, layoutDependency, layoutId: "FUy7VJjm1", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#fff" stroke-width="4"><path d="M32 8 8 56h48Zm0 16v14"/><circle cx="32" cy="46" r="2" fill="#fff" stroke="none"/></svg>', withExternalLayout: true }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-16hc133", "data-highlight": true, layoutDependency, layoutId: "bnE1CThmu", onTap: onTap19tn3pc, style: { backgroundColor: "var(--token-6697c2fc-2765-4df0-bc61-27f3291a6d24, rgb(28, 48, 54))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, children: /* @__PURE__ */ _jsx(SVG, { className: "framer-1voi855", "data-framer-name": "Graphic", fill: "black", intrinsicHeight: 64, intrinsicWidth: 64, layoutDependency, layoutId: "bYXg1a1Cc", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#fff" stroke-width="4"><path d="M8 28 32 8l24 20m-40 0h32v28H16z"/><path d="M28 42h8v14h-8z"/></svg>', withExternalLayout: true }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-us6a7b", "data-highlight": true, layoutDependency, layoutId: "tjfR5aKRV", onTap: onTap12z2kz3, style: { backgroundColor: "var(--token-6697c2fc-2765-4df0-bc61-27f3291a6d24, rgb(28, 48, 54))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, children: /* @__PURE__ */ _jsx(SVG, { className: "framer-1wp1afp", "data-framer-name": "Graphic", fill: "black", intrinsicHeight: 64, intrinsicWidth: 64, layoutDependency, layoutId: "fSHk9cuvo", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#fff" stroke-width="4"><rect x="10" y="8" width="44" height="48" rx="4" ry="4"/><path d="M16 18h10v10H16Zm0 14h10v10H16Zm0 14h10v10H16Z"/><path d="m16 23 4 4 4-8m-8 18 4 4 4-8m-8 18 4 4 4-8m6-24h20M30 37h20M30 51h20"/></svg>', withExternalLayout: true }) })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ENCfv.framer-ipcp43, .framer-ENCfv .framer-ipcp43 { display: block; }", ".framer-ENCfv.framer-12jwsgp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px 0px 10px 0px; position: relative; width: 285px; }", ".framer-ENCfv .framer-c0l0mp, .framer-ENCfv .framer-16hc133, .framer-ENCfv .framer-us6a7b { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60px; }", ".framer-ENCfv .framer-1wx794p, .framer-ENCfv .framer-1voi855, .framer-ENCfv .framer-1wp1afp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ENCfv.framer-12jwsgp, .framer-ENCfv .framer-c0l0mp, .framer-ENCfv .framer-16hc133, .framer-ENCfv .framer-us6a7b { gap: 0px; } .framer-ENCfv.framer-12jwsgp > *, .framer-ENCfv .framer-c0l0mp > *, .framer-ENCfv .framer-16hc133 > *, .framer-ENCfv .framer-us6a7b > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ENCfv.framer-12jwsgp > :first-child, .framer-ENCfv .framer-c0l0mp > :first-child, .framer-ENCfv .framer-16hc133 > :first-child, .framer-ENCfv .framer-us6a7b > :first-child { margin-left: 0px; } .framer-ENCfv.framer-12jwsgp > :last-child, .framer-ENCfv .framer-c0l0mp > :last-child, .framer-ENCfv .framer-16hc133 > :last-child, .framer-ENCfv .framer-us6a7b > :last-child { margin-right: 0px; } }"];
var FramerrarbAMPHs = withCSS(Component, css, "framer-ENCfv");
var stdin_default = FramerrarbAMPHs;
FramerrarbAMPHs.displayName = "bottomNav";
FramerrarbAMPHs.defaultProps = { height: 80, width: 285 };
addPropertyControls(FramerrarbAMPHs, { e_rNr6Phs: { title: "Home Click", type: ControlType.EventHandler }, irz1ZVfRn: { title: "Check Click", type: ControlType.EventHandler }, poTfpoqeg: { title: "Alert Click", type: ControlType.EventHandler } });
addFonts(FramerrarbAMPHs, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:bottom-nav
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "augiA20Il": { "path": "/" }, "iraOLFFrB": { "path": "/page" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "adefc19e7e2b72020fbf521cecd912ab5637e568e46b1420e141bd14e0cd2ee5",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "augiA20Il": {
          "path": "/"
        },
        "iraOLFFrB": {
          "path": "/page"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "adefc19e7e2b72020fbf521cecd912ab5637e568e46b1420e141bd14e0cd2ee5",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
