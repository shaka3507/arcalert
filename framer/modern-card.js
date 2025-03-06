// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project adefc19e7e2b7202 "S Clark - ArcAlert", do not edit manually */
"use client";

// virtual:modern-card
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/4V9Pb8fmbzqxIuthLJb7/xsnmqad7f1vVs2wYBp8k/PrKtmyFln.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var cycleOrder = ["qrlIYtKCj", "xcJXBMlry"];
var serializationHash = "framer-LqdOI";
var variantClassNames = { qrlIYtKCj: "framer-v-1jvfci", xcJXBMlry: "framer-v-19zs667" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Variant 1": "qrlIYtKCj", "Variant 2": "xcJXBMlry" };
var getProps = ({ cardText, cardTitle, click, height, id, width, ...props }) => {
  return { ...props, IEKpitymz: cardText ?? props.IEKpitymz ?? "CardHeader", kgHOWBP1V: click ?? props.kgHOWBP1V, kiIPXVHOR: cardTitle ?? props.kiIPXVHOR ?? "CardHeader", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "qrlIYtKCj" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, IEKpitymz, kiIPXVHOR, kgHOWBP1V, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "qrlIYtKCj", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap1uqon4h = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (kgHOWBP1V) {
      const res = await kgHOWBP1V(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1jvfci", className, classNames), "data-border": true, "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "qrlIYtKCj", onTap: onTap1uqon4h, ref: ref ?? ref1, style: { "--border-bottom-width": "2px", "--border-color": "rgb(34, 34, 34)", "--border-left-width": "2px", "--border-right-width": "2px", "--border-style": "solid", "--border-top-width": "2px", backgroundColor: "var(--token-8a3dc925-cf3f-4305-931b-abd8bce0f792, rgb(255, 252, 252))", boxShadow: "10px 10px 0px 0px rgb(0, 0, 0)", ...style }, ...addPropertyOverrides({ xcJXBMlry: { "data-framer-name": "Variant 2" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "SW1wYWN0", "--framer-font-family": '"Impact", sans-serif', "--framer-font-size": "20px" }, children: "CardHeader" }) }), className: "framer-6n0ini", fonts: ["Impact"], layoutDependency, layoutId: "dA8UmVNBz", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: kiIPXVHOR, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R2VvcmdpYQ==", "--framer-font-family": '"Georgia", sans-serif', "--framer-font-size": "20px" }, children: "CardHeader" }) }), className: "framer-1xuodjm", fonts: ["Georgia"], layoutDependency, layoutId: "AJ8bbIGsU", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: IEKpitymz, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-LqdOI.framer-1gjarin, .framer-LqdOI .framer-1gjarin { display: block; }", ".framer-LqdOI.framer-1jvfci { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 255px; justify-content: center; overflow: visible; padding: 5px 5px 5px 10px; position: relative; width: 270px; }", ".framer-LqdOI .framer-6n0ini { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-LqdOI .framer-1xuodjm { flex: none; height: 33%; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-LqdOI.framer-1jvfci { gap: 0px; } .framer-LqdOI.framer-1jvfci > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-LqdOI.framer-1jvfci > :first-child { margin-top: 0px; } .framer-LqdOI.framer-1jvfci > :last-child { margin-bottom: 0px; } }", '.framer-LqdOI[data-border="true"]::after, .framer-LqdOI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerPrKtmyFln = withCSS(Component, css, "framer-LqdOI");
var stdin_default = FramerPrKtmyFln;
FramerPrKtmyFln.displayName = "ModernCard";
FramerPrKtmyFln.defaultProps = { height: 255, width: 270 };
addPropertyControls(FramerPrKtmyFln, { variant: { options: ["qrlIYtKCj", "xcJXBMlry"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType.Enum }, IEKpitymz: { defaultValue: "CardHeader", displayTextArea: false, title: "CardText", type: ControlType.String }, kiIPXVHOR: { defaultValue: "CardHeader", displayTextArea: false, title: "CardTitle", type: ControlType.String }, kgHOWBP1V: { title: "Click", type: ControlType.EventHandler } });
addFonts(FramerPrKtmyFln, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:modern-card
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
