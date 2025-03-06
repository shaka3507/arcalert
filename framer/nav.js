// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project adefc19e7e2b7202 "S Clark - ArcAlert", do not edit manually */
"use client";

// virtual:nav
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/8j7oBJJdKIXuwWayezsB/nA1uvbXuoap4kMMDOGFw/Sqt_dt7rY.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var serializationHash = "framer-faRZm";
var variantClassNames = { n8BNtdKNf: "framer-v-1socrq4" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ click, height, id, width, ...props }) => {
  return { ...props, MjM8BHkXw: click ?? props.MjM8BHkXw };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, MjM8BHkXw, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "n8BNtdKNf", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap147vrpj = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (MjM8BHkXw) {
      const res = await MjM8BHkXw(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1socrq4", className, classNames), "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "n8BNtdKNf", onTap: onTap147vrpj, ref: ref ?? ref1, style: { ...style }, children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-87y3ii", layoutDependency, layoutId: "QyR2W5q2S", style: { backgroundColor: "var(--token-805b626f-2081-48a3-9772-b35985201e4d, rgb(255, 250, 250))", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 } }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1s0sdwk", layoutDependency, layoutId: "dlhOcdZo2", style: { backgroundColor: "var(--token-805b626f-2081-48a3-9772-b35985201e4d, rgb(255, 250, 250))", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 } }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1iked84", layoutDependency, layoutId: "EAuwGrXmq", style: { backgroundColor: "var(--token-805b626f-2081-48a3-9772-b35985201e4d, rgb(255, 250, 250))", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 } })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-faRZm.framer-1km89qa, .framer-faRZm .framer-1km89qa { display: block; }", ".framer-faRZm.framer-1socrq4 { cursor: pointer; height: 50px; position: relative; width: 390px; }", ".framer-faRZm .framer-87y3ii { bottom: 17px; flex: none; height: 4px; overflow: visible; position: absolute; right: 14px; width: 36px; }", ".framer-faRZm .framer-1s0sdwk { flex: none; height: 4px; overflow: visible; position: absolute; right: 14px; top: calc(46.00000000000002% - 4px / 2); width: 36px; }", ".framer-faRZm .framer-1iked84 { flex: none; height: 4px; overflow: visible; position: absolute; right: 14px; top: 13px; width: 36px; }"];
var FramerSqt_dt7rY = withCSS(Component, css, "framer-faRZm");
var stdin_default = FramerSqt_dt7rY;
FramerSqt_dt7rY.displayName = "Nav";
FramerSqt_dt7rY.defaultProps = { height: 50, width: 390 };
addPropertyControls(FramerSqt_dt7rY, { MjM8BHkXw: { title: "Click", type: ControlType.EventHandler } });
addFonts(FramerSqt_dt7rY, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:nav
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
