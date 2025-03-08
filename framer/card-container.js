// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project adefc19e7e2b7202 "S Clark - ArcAlert", do not edit manually */
"use client";

// virtual:card-container
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/bxuqfpUzVQRD66xHdK0O/CzAZ6efQjpeKhokR2sNB/FAeTPMjOU.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-c3qCa";
var variantClassNames = { fDeZ8Kkze: "framer-v-jcmf6y" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ background, click, description, fontColor, height, id, title, width, ...props }) => {
  return { ...props, oSmoZbzZa: title ?? props.oSmoZbzZa ?? "Title", pbyxBTNit: fontColor ?? props.pbyxBTNit ?? "rgb(0, 0, 0)", sIi_d_UjB: background ?? props.sIi_d_UjB ?? "rgba(54, 50, 50, 0.34)", umhHoJBKO: click ?? props.umhHoJBKO, vOuCxmWte: description ?? props.vOuCxmWte ?? "ffff" };
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
  const { style, className, layoutId, variant, oSmoZbzZa, sIi_d_UjB, pbyxBTNit, vOuCxmWte, umhHoJBKO, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "fDeZ8Kkze", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap3coml0 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (umhHoJBKO) {
      const res = await umhHoJBKO(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-jcmf6y", className, classNames), "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "fDeZ8Kkze", onTap: onTap3coml0, ref: refBinding, style: { backgroundColor: sIi_d_UjB, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.17997), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.15889), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625)", ...style }, children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R2VvcmdpYQ==", "--framer-font-family": '"Georgia", sans-serif', "--framer-font-size": "24px", "--framer-line-height": "28px", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-pbyxBTNit-FAeTPMjOU))" }, children: "Title" }) }), className: "framer-1hzw1he", fonts: ["Georgia"], layoutDependency, layoutId: "VUsKUfS99", style: { "--extracted-r6o4lv": "var(--variable-reference-pbyxBTNit-FAeTPMjOU)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-pbyxBTNit-FAeTPMjOU": pbyxBTNit }, text: oSmoZbzZa, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7RnVzdGF0LXJlZ3VsYXI=", "--framer-font-family": '"Fustat", "Fustat Placeholder", sans-serif', "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-pbyxBTNit-FAeTPMjOU))" }, children: "ffff" }) }), className: "framer-1r0wz7x", fonts: ["GF;Fustat-regular"], layoutDependency, layoutId: "Q61Uya4K8", style: { "--extracted-r6o4lv": "var(--variable-reference-pbyxBTNit-FAeTPMjOU)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-pbyxBTNit-FAeTPMjOU": pbyxBTNit }, text: vOuCxmWte, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-c3qCa.framer-1y8fe3g, .framer-c3qCa .framer-1y8fe3g { display: block; }", ".framer-c3qCa.framer-jcmf6y { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 400px; }", ".framer-c3qCa .framer-1hzw1he { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-c3qCa .framer-1r0wz7x { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 235px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-c3qCa.framer-jcmf6y { gap: 0px; } .framer-c3qCa.framer-jcmf6y > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-c3qCa.framer-jcmf6y > :first-child { margin-top: 0px; } .framer-c3qCa.framer-jcmf6y > :last-child { margin-bottom: 0px; } }"];
var FramerFAeTPMjOU = withCSS(Component, css, "framer-c3qCa");
var stdin_default = FramerFAeTPMjOU;
FramerFAeTPMjOU.displayName = "CardContainer";
FramerFAeTPMjOU.defaultProps = { height: 97.2, width: 400 };
addPropertyControls(FramerFAeTPMjOU, { oSmoZbzZa: { defaultValue: "Title", displayTextArea: false, title: "Title", type: ControlType.String }, sIi_d_UjB: { defaultValue: "rgba(54, 50, 50, 0.34)", title: "Background", type: ControlType.Color }, pbyxBTNit: { defaultValue: "rgb(0, 0, 0)", title: "FontColor", type: ControlType.Color }, vOuCxmWte: { defaultValue: "ffff", displayTextArea: false, title: "Description", type: ControlType.String }, umhHoJBKO: { title: "Click", type: ControlType.EventHandler } });
addFonts(FramerFAeTPMjOU, [{ explicitInter: true, fonts: [{ family: "Fustat", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/fustat/v1/NaPEcZ_aHO9Iy5thRNqze7YGY9HGCEQQRrmztWo_3fk.woff2", weight: "400" }] }], { supportsExplicitInterCodegen: true });

// virtual:card-container
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
