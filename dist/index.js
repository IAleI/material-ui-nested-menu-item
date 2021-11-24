var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import clsx from 'clsx';
const TRANSPARENT = 'rgba(0,0,0,0)';
const useMenuItemStyles = makeStyles((theme) => ({
    root: (props) => ({
        backgroundColor: props.open ? theme.palette.action.hover : TRANSPARENT
    })
}));
/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
const NestedMenuItem = React.forwardRef(function NestedMenuItem(props, ref) {
    const { parentMenuOpen, component = 'div', label, rightIcon = _jsx(ArrowRight, {}, void 0), children, className, tabIndex: tabIndexProp, MenuProps = {}, ContainerProps: ContainerPropsProp = {} } = props, MenuItemProps = __rest(props, ["parentMenuOpen", "component", "label", "rightIcon", "children", "className", "tabIndex", "MenuProps", "ContainerProps"]);
    const { ref: containerRefProp } = ContainerPropsProp, ContainerProps = __rest(ContainerPropsProp, ["ref"]);
    const menuItemRef = useRef(null);
    useImperativeHandle(ref, () => menuItemRef.current);
    const containerRef = useRef(null);
    useImperativeHandle(containerRefProp, () => containerRef.current);
    const menuContainerRef = useRef(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const handleMouseEnter = (event) => {
        setIsSubMenuOpen(true);
        if (ContainerProps === null || ContainerProps === void 0 ? void 0 : ContainerProps.onMouseEnter) {
            ContainerProps.onMouseEnter(event);
        }
    };
    const handleMouseLeave = (event) => {
        setIsSubMenuOpen(false);
        if (ContainerProps === null || ContainerProps === void 0 ? void 0 : ContainerProps.onMouseLeave) {
            ContainerProps.onMouseLeave(event);
        }
    };
    // Check if any immediate children are active
    const isSubmenuFocused = () => {
        var _a, _b, _c, _d;
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        for (const child of (_d = (_c = menuContainerRef.current) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : []) {
            if (child === active) {
                return true;
            }
        }
        return false;
    };
    const handleFocus = (event) => {
        if (event.target === containerRef.current) {
            setIsSubMenuOpen(true);
        }
        if (ContainerProps === null || ContainerProps === void 0 ? void 0 : ContainerProps.onFocus) {
            ContainerProps.onFocus(event);
        }
    };
    const handleKeyDown = (event) => {
        var _a, _b, _c, _d;
        if (event.key === 'Escape') {
            return;
        }
        if (isSubmenuFocused()) {
            event.stopPropagation();
        }
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        if (event.key === 'ArrowLeft' && isSubmenuFocused()) {
            (_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        }
        if (event.key === 'ArrowRight' &&
            event.target === containerRef.current &&
            event.target === active) {
            const firstChild = (_d = menuContainerRef.current) === null || _d === void 0 ? void 0 : _d.children[0];
            firstChild === null || firstChild === void 0 ? void 0 : firstChild.focus();
        }
    };
    const open = isSubMenuOpen && parentMenuOpen;
    const menuItemClasses = useMenuItemStyles({ open });
    // Root element must have a `tabIndex` attribute for keyboard navigation
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return (_jsxs("div", Object.assign({}, ContainerProps, { ref: containerRef, onFocus: handleFocus, tabIndex: tabIndex, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onKeyDown: handleKeyDown }, { children: [_jsxs(MenuItem, Object.assign({}, MenuItemProps, { className: clsx(menuItemClasses.root, className), ref: menuItemRef }, { children: [label, rightIcon] }), void 0), _jsx(Menu
            // Set pointer events to 'none' to prevent the invisible Popover div
            // from capturing events for clicks and hovers
            , Object.assign({ 
                // Set pointer events to 'none' to prevent the invisible Popover div
                // from capturing events for clicks and hovers
                style: { pointerEvents: 'none' }, PaperProps: {
                    style: { pointerEvents: "auto" }
                }, anchorEl: menuItemRef.current, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                }, open: open, autoFocus: false, disableAutoFocus: true, disableEnforceFocus: true, onClose: () => {
                    setIsSubMenuOpen(false);
                } }, { children: _jsx("div", Object.assign({ ref: menuContainerRef }, { children: children }), void 0) }), void 0)] }), void 0));
});
export default NestedMenuItem;
