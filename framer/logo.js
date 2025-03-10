// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project adefc19e7e2b7202 "S Clark - ArcAlert", do not edit manually */
"use client";

// virtual:logo
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/3wtmEPbVMFwQxX3DtJsw/a5WxnjpVeYgop0B4oyhO/bJQ0ppsyL.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, cx, getLoadingLazyAtYPosition, Image, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var serializationHash = "framer-IWYpO";
var variantClassNames = { OfFWwnHQ6: "framer-v-1p4wmve" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "OfFWwnHQ6", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Image, { ...restProps, ...gestureHandlers, background: { alt: "", fit: "fill", intrinsicHeight: 320.46666666666664, intrinsicWidth: 320.46666666666664, loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 506, pixelWidth: 506, src: "https://framerusercontent.com/images/eHcwI3PGjpSvvk508TDA9bp5U.png" }, className: cx(scopingClassNames, "framer-1p4wmve", className, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "OfFWwnHQ6", ref: ref ?? ref1, style: { ...style } }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-IWYpO.framer-1x8lblm, .framer-IWYpO .framer-1x8lblm { display: block; }", ".framer-IWYpO.framer-1p4wmve { height: 320px; overflow: visible; position: relative; width: 320px; }"];
var FramerbJQ0ppsyL = withCSS(Component, css, "framer-IWYpO");
var stdin_default = FramerbJQ0ppsyL;
FramerbJQ0ppsyL.displayName = "Logo";
FramerbJQ0ppsyL.defaultProps = { height: 320.467, width: 320.467 };
addFonts(FramerbJQ0ppsyL, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:logo
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
