import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import NestedMenuItem from '..';
export default {
    title: 'Nested Menu Item'
};
export const NestedMenu = () => {
    const [menuPosition, setMenuPosition] = useState({ top: 10, left: 10 });
    const menuItemRef = useRef(null);
    const handleRightClick = (event) => {
        if (menuPosition) {
            return;
        }
        event.preventDefault();
        setMenuPosition({
            top: event.pageY,
            left: event.pageX
        });
    };
    const handleItemClick = (event) => {
        setMenuPosition(null);
    };
    return (_jsxs("div", Object.assign({ onContextMenu: handleRightClick }, { children: [_jsx(Typography, { children: "Right click to open menu" }, void 0), _jsxs(Menu, Object.assign({ open: !!menuPosition, onClose: () => setMenuPosition(null), anchorReference: 'anchorPosition', anchorPosition: menuPosition }, { children: [_jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Button 1" }), void 0), _jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Button 2" }), void 0), _jsxs(NestedMenuItem, Object.assign({ ref: menuItemRef, label: 'Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick }, { children: [_jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Sub-Button 1" }), void 0), _jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Sub-Button 2" }), void 0), _jsxs(NestedMenuItem, Object.assign({ label: 'Sub-Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick }, { children: [_jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Sub-Sub-Button 1" }), void 0), _jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Sub-Sub-Button 2" }), void 0)] }), void 0)] }), void 0), _jsx(MenuItem, Object.assign({ onClick: handleItemClick }, { children: "Button 4" }), void 0)] }), void 0)] }), void 0));
};
