exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 2738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-123f2c3d8296081531a1.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/gVyFFqydsHLvukezBbiOD/_buildManifest.js","static/gVyFFqydsHLvukezBbiOD/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/chunks/pages/index-961e5558056453aff9d6.js"],"/404":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/chunks/pages/404-e89addd40d38019c3f60.js"],"/_app":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/css/a8f5a0f45942986ec7a4.css","static/chunks/pages/_app-f7a2017c2bb78ec630e3.js"],"/_error":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/chunks/pages/_error-0e0727c2473f74f3ec04.js"],"/blog/[...id]":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/css/5738f1cae48fb85e21fe.css","static/chunks/pages/blog/[...id]-8a089d3258b54534e320.js"],"/posts":["static/chunks/webpack-8c7b127185ee0fd51e6c.js","static/chunks/framework-36108c35f8845d0a954c.js","static/chunks/main-ae744b8ada32ecf8eb7b.js","static/chunks/pages/posts-593974829091c55ce735.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 5706:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"Dg":[{"source":"/blog","destination":"/","regex":"^/blog$"}]}');

/***/ }),

/***/ 6890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NotFoundPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2010);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6696);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9600);




function NotFoundPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
      children: "404 Not Found"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      children: "Go to homepage"
    })]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.div */ .ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 10rem 1.6rem;

  > a {
    margin-top: 0.8rem;
    text-decoration: underline;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.h1 */ .ZP.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  text-shadow: #007fd440 0.3rem 0.3rem;
`;

/***/ }),

/***/ 6813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2010);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-77d0572bfd/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/head.js
var head = __webpack_require__(5913);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-77d0572bfd/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/router.js
var next_router = __webpack_require__(5021);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
;// CONCATENATED MODULE: ./src/contexts/theme/context.ts

const ThemeContext = /*#__PURE__*/(0,react.createContext)(undefined);
const useThemeContext = () => (0,react.useContext)(ThemeContext);
// EXTERNAL MODULE: ./.yarn/unplugged/styled-components-virtual-4118695063/node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9600);
// EXTERNAL MODULE: ./src/constants/palette.ts
var palette = __webpack_require__(5700);
;// CONCATENATED MODULE: ./src/themes/light.ts

const light = Object.freeze({
  scheme: {
    $white: palette/* GRAY_600 */.eD,
    $gray100: palette/* GRAY_100 */.Pg,
    $gray200: palette/* LIGHT_GRAY_400 */.au,
    $gray300: palette/* LIGHT_GRAY_300 */.LT,
    $gray400: palette/* LIGHT_GRAY_200 */.NK,
    $gray500: palette/* LIGHT_GRAY_100 */.bE,
    $gray600: palette/* WHITE */.Cj,
    $tagFontColor: palette/* PURPLE_DARK */.t4
  },
  semanticScheme: {
    sideBarBg: palette/* LIGHT_GRAY_100 */.bE,
    mainBg: palette/* WHITE */.Cj
  }
});
;// CONCATENATED MODULE: ./src/themes/dark.ts

const dark = Object.freeze({
  scheme: {
    $white: palette/* WHITE */.Cj,
    $gray100: palette/* GRAY_100 */.Pg,
    $gray200: palette/* GRAY_200 */.tc,
    $gray300: palette/* GRAY_300 */.BD,
    $gray400: palette/* GRAY_400 */.tL,
    $gray500: palette/* GRAY_500 */.pX,
    $gray600: palette/* GRAY_600 */.eD,
    $tagFontColor: palette/* GREEN */.ZA
  },
  semanticScheme: {
    sideBarBg: palette/* PURPLE_DARK */.t4,
    mainBg: palette/* DRACULAR_BACKGROUND_DEEP_DARK */.Bc
  }
});
;// CONCATENATED MODULE: ./src/themes/index.ts


;// CONCATENATED MODULE: ./src/contexts/theme/provider.tsx





function ThemeContextProvider({
  defaultTheme,
  children
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,react.useState)(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStore = {
    state: {
      theme
    },
    action: {
      toggleTheme
    }
  };
  return /*#__PURE__*/jsx_runtime.jsx(styled_components_cjs/* ThemeProvider */.f6, {
    theme: {
      colors: theme === "light" ? light : dark
    },
    children: /*#__PURE__*/jsx_runtime.jsx(ThemeContext.Provider, {
      value: themeStore,
      children: children
    })
  });
}
;// CONCATENATED MODULE: ./src/contexts/theme/index.ts


// EXTERNAL MODULE: ./src/contexts/app/index.tsx
var app = __webpack_require__(2837);
// EXTERNAL MODULE: ./src/helpers/gtag.ts
var gtag = __webpack_require__(916);
// EXTERNAL MODULE: ./src/services/post.service.ts + 2 modules
var post_service = __webpack_require__(7896);
// EXTERNAL MODULE: ./src/assets/icons/index.ts + 14 modules
var icons = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/components/common/theme-switcher/index.tsx





function ThemeSwitcher() {
  const {
    state: {
      theme
    },
    action: {
      toggleTheme
    }
  } = useThemeContext();

  const handleClick = () => {
    toggleTheme();
  };

  const handleKeyDown = e => {
    if (["Enter", " "].includes(e.key)) {
      handleClick();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
      children: "\uD83C\uDF1D"
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      children: "\uD83C\uDF1E"
    }), /*#__PURE__*/jsx_runtime.jsx(Circle, {
      mode: theme
    })]
  });
}
const Wrapper = styled_components_cjs/* default.div */.ZP.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 1.2rem;
  height: 2.8rem;
  border-radius: 0.6rem;

  background-color: ${palette/* BLACK */.E5};

  outline: 2px solid ${palette/* BLACK */.E5};

  &:focus {
    outline: 2px solid ${palette/* WHITE */.Cj};
  }
`;
const Circle = styled_components_cjs/* default.div */.ZP.div`
  position: absolute;
  ${({
  mode
}) => mode === "light" ? "top: 0;" : "bottom: 0;"};

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 50%;

  background-color: ${palette/* WHITE */.Cj};

  transition: all 0.2s;

  user-select: auto;
`;
;// CONCATENATED MODULE: ./src/components/common/accordion-section/index.tsx






function AccordionSection({
  title,
  children,
  defaultExpanded,
  hasLine,
  height,
  maxHeight
}) {
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,react.useState)(!!defaultExpanded);

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  const ChevronIcon = isExpanded ? icons/* ChevronDownIcon */.v4 : icons/* ChevronRightIcon */.XC;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Header, {
      onClick: handleHeaderClick,
      hasLine: hasLine,
      children: [/*#__PURE__*/jsx_runtime.jsx(ChevronIcon, {
        style: {
          width: "1rem",
          height: "1rem"
        }
      }), /*#__PURE__*/jsx_runtime.jsx(Title, {
        children: title
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(Content, {
      isExpanded: isExpanded,
      height: height,
      maxHeight: maxHeight,
      children: children
    })]
  });
}
const Header = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.4rem 0.2rem;
  ${({
  hasLine
}) => hasLine && "border-top:1px solid rgba(204, 204, 204, 0.2);"}
`;
const Title = styled_components_cjs/* default.b */.ZP.b`
  font-size: 0.8rem;
  font-weight: 700;

  padding-left: 0.4rem;
`;
const hideScrollbar = styled_components_cjs/* css */.iv`
  &::-webkit-scrollbar {
    /* Chrome, Safari and Opera */
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const Content = styled_components_cjs/* default.div */.ZP.div`
  overflow-x: hidden;
  overflow-y: auto;

  ${({
  isExpanded,
  height
}) => height ? `height:${isExpanded ? height : 0};` : `flex:${isExpanded ? 1 : 0};`}
  ${({
  maxHeight
}) => maxHeight ? `max-height: ${maxHeight};` : ""};

  transition: all 0.3s ease-out;

  ${hideScrollbar}
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/open-post-list/open-post-list-item/index.tsx





const OPEN_POST_LIST_ITEM_HEIGHT = "2rem";
function OpenPostListItem({
  emoji = "📝",
  title,
  isSelected = false,
  onClick = () => null,
  onClose = () => null,
  showCloseButton = false
}) {
  const {
    0: isHovered,
    1: setIsHovered
  } = (0,react.useState)(false);
  const isCloseVisible = showCloseButton && (isSelected || isHovered);

  const handleCloseClick = e => {
    e.stopPropagation();
    onClose();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(open_post_list_item_Wrapper, {
    height: OPEN_POST_LIST_ITEM_HEIGHT,
    isSelected: isSelected,
    onClick: onClick,
    onMouseOver: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: [/*#__PURE__*/jsx_runtime.jsx(icons/* CloseIcon */.Tw, {
      style: {
        minWidth: "1rem",
        width: "1rem",
        height: "1rem",
        visibility: isCloseVisible ? "visible" : "hidden"
      },
      onClick: handleCloseClick
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(open_post_list_item_Title, {
      children: [emoji, " ", title]
    })]
  });
}
const open_post_list_item_Wrapper = styled_components_cjs/* default.li */.ZP.li`
  ${({
  height,
  isSelected,
  theme
}) => `
    display: flex;
    flex-direction: Row;
    align-items: center;

    height: ${height};
    padding: 0 1.2rem;

    ${isSelected ? `background-color: ${theme.colors.scheme.$gray200};` : `&:hover { 
              background-color: ${theme.colors.scheme.$gray300};
          }`}
  `}
  &:hover {
    cursor: pointer;
  }
`;
const open_post_list_item_Title = styled_components_cjs/* default.p */.ZP.p`
  padding-left: 0.4rem;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/open-post-list/index.tsx


function OpenPostList(props) {
  const {
    openPosts,
    currentPostId,
    selectPost,
    closePost
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx("ul", {
    style: {
      whiteSpace: "nowrap"
    },
    children: openPosts.map(({
      id,
      meta
    }) => /*#__PURE__*/jsx_runtime.jsx(OpenPostListItem, {
      title: meta.title,
      isSelected: currentPostId === id,
      onClick: () => selectPost(id),
      onClose: () => closePost(id),
      showCloseButton: true
    }, id))
  });
}
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/file-tree/file-tree-item/index.tsx





function FileTreeItem({
  title,
  children,
  isSelected,
  defaultExpanded,
  onClick
}) {
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,react.useState)(!!defaultExpanded);

  if (!children) {
    return /*#__PURE__*/jsx_runtime.jsx(Li, {
      isSelected: isSelected,
      onClick: onClick,
      isFile: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(file_tree_item_Title, {
        children: ["\uD83D\uDCDD ", title]
      })
    });
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const ChevronIcon = isExpanded ? icons/* ChevronDownIcon */.v4 : icons/* ChevronRightIcon */.XC;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(file_tree_item_Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Li, {
      onClick: toggleExpand,
      children: [/*#__PURE__*/jsx_runtime.jsx(ChevronIcon, {
        style: {
          width: "1rem",
          height: "1rem"
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(file_tree_item_Title, {
        children: ["\uD83D\uDCC2 ", title]
      })]
    }), isExpanded && /*#__PURE__*/jsx_runtime.jsx(Ul, {
      children: children
    })]
  });
}
const file_tree_item_Wrapper = styled_components_cjs/* default.li */.ZP.li`
  display: flex;
  flex-direction: column;
`;
const Li = styled_components_cjs/* default.li */.ZP.li`
  display: flex;
  align-items: center;

  padding: 0.4rem 0.2rem;
  ${({
  isFile
}) => isFile ? "padding-left: 1.4rem;" : ""};

  ${({
  theme
}) => `&:hover { 
          background-color: ${theme.colors.scheme.$gray300};
       }`}
  ${({
  isSelected,
  theme
}) => isSelected ? `background-color: ${theme.colors.scheme.$gray200};` : ``};

  &:hover {
    cursor: pointer;
  }
`;
const file_tree_item_Title = styled_components_cjs/* default.p */.ZP.p`
  font-size: 0.8rem;
  font-weight: 700;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Ul = styled_components_cjs/* default.ul */.ZP.ul`
  margin-left: 0.6rem;
  ${({
  theme
}) => `border-left: 0.4px solid ${theme.colors.scheme.$gray200}`};
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/file-tree/classes/TreeItem.class.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TreeItem {
  constructor(_path = "", _data) {
    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_path", void 0);

    _defineProperty(this, "_data", void 0);

    this._name = _path.split("/").reverse()[0];
    this._path = _path;
    this._data = _data;
  }

  get name() {
    return this._name;
  }

  get path() {
    return this._path;
  }

  get data() {
    return this._data;
  }

}
class File extends TreeItem {}
class Folder extends TreeItem {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_children", []);
  }

  add(treeItem) {
    this._children.push(treeItem);

    return this;
  }

  find(path) {
    return this._children.find(v => v.path === path);
  }

  get children() {
    return this._children;
  }

}
const isFolder = item => {
  return item.children !== undefined;
};
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/file-tree/classes/TreeView.class.ts
function TreeView_class_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TreeView {
  constructor(data, mapFilePath) {
    TreeView_class_defineProperty(this, "root", new Folder("root"));

    TreeView_class_defineProperty(this, "mapFilePath", void 0);

    this.mapFilePath = mapFilePath;
    this.createTree(data);
  }

  createTree(data) {
    data.map(v => this.mapFilePath ? this.addFile(this.mapFilePath(v), v) : this.addFile(v));
  }

  splitPath(path) {
    return path.split("/").filter(v => !!v);
  }

  addFile(path, data) {
    const paths = this.splitPath(path);
    const leafFolderPath = paths.slice(0, paths.length - 1).join("/");
    this.accessToFolder(leafFolderPath).add(new File(path, data));
    return this;
  }

  accessToFolder(path) {
    if (!path || path === "/") {
      return this.root;
    }

    const paths = this.splitPath(path);
    return paths.reduce((currentRoot, _, i) => {
      const currentPath = paths.slice(0, i + 1).join("/");
      const currentFoler = currentRoot.find(currentPath);
      return currentFoler == null ? currentRoot.add(new Folder(currentPath)).find(currentPath) : currentFoler;
    }, this.root);
  }

}
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/file-tree/index.tsx




function FileTree({
  posts,
  currentPostId = null,
  selectPost
}) {
  const root = new TreeView(posts, post => post.id).root;

  const sortChildren = children => {
    return children.sort((a, b) => isFolder(a) && !isFolder(b) ? -1 : 0);
  };

  const renderChildren = children => sortChildren(children).map(item => {
    var _item$data$meta$title, _item$data;

    if (isFolder(item)) {
      return /*#__PURE__*/jsx_runtime.jsx(FileTreeItem, {
        title: item.name,
        children: renderChildren(item.children)
      }, item.name);
    }

    return /*#__PURE__*/jsx_runtime.jsx(FileTreeItem, {
      title: (_item$data$meta$title = (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data.meta.title) !== null && _item$data$meta$title !== void 0 ? _item$data$meta$title : "",
      isSelected: item.path === currentPostId,
      onClick: () => selectPost(item.path)
    }, item.name);
  });

  return /*#__PURE__*/jsx_runtime.jsx(file_tree_Wrapper, {
    children: renderChildren(root.children)
  });
}
const file_tree_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  margin-left: 0.6rem;
  ${({
  theme
}) => `border-left: 0.4px solid ${theme.colors.scheme.$gray200}`};
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/explorer-section/index.tsx








const MAX_VISIBLE_ITEM = 4;
function ExplorerSection() {
  const {
    state: {
      posts,
      openPosts,
      currentPostId
    },
    action: {
      selectPost,
      closePost
    }
  } = (0,app/* useAppContext */.b)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(explorer_section_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(AccordionSection, {
      title: "OPEN POSTS",
      height: `calc(${OPEN_POST_LIST_ITEM_HEIGHT} * ${openPosts.length})`,
      maxHeight: `calc(${OPEN_POST_LIST_ITEM_HEIGHT} * ${MAX_VISIBLE_ITEM})`,
      defaultExpanded: true,
      children: /*#__PURE__*/jsx_runtime.jsx(OpenPostList, {
        openPosts: openPosts,
        currentPostId: currentPostId,
        selectPost: selectPost,
        closePost: closePost
      })
    }), /*#__PURE__*/jsx_runtime.jsx(AccordionSection, {
      title: "BLOG POSTS",
      defaultExpanded: true,
      children: /*#__PURE__*/jsx_runtime.jsx(FileTree, {
        posts: posts,
        currentPostId: currentPostId,
        selectPost: selectPost
      })
    })]
  });
}
const explorer_section_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
// EXTERNAL MODULE: ./src/components/common/scroll-pagenation/index.tsx
var scroll_pagenation = __webpack_require__(9289);
;// CONCATENATED MODULE: ./src/layouts/blog-layout/log-section/log-item.tsx






function LogItem({
  currPost,
  prevPost
}) {
  const currDate = new Date(currPost.meta.date);
  const prevDate = prevPost ? new Date(prevPost.meta.date) : null;
  const showYear = (prevDate === null || prevDate === void 0 ? void 0 : prevDate.getFullYear()) !== currDate.getFullYear();
  const showMonth = (prevDate === null || prevDate === void 0 ? void 0 : prevDate.getMonth()) !== currDate.getMonth();
  const showDate = (prevDate === null || prevDate === void 0 ? void 0 : prevDate.getDate()) !== currDate.getDate();

  const getMonthText = () => {
    return currDate.toLocaleString("default", {
      month: "short"
    });
  };

  const renderYear = () => /*#__PURE__*/jsx_runtime.jsx(YearWrapper, {
    isFirst: !prevPost,
    children: /*#__PURE__*/jsx_runtime.jsx(Year, {
      children: currDate.getFullYear()
    })
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [showYear && renderYear(), /*#__PURE__*/(0,jsx_runtime.jsxs)(log_item_Wrapper, {
      className: "logItem",
      "data-id": currPost.id,
      children: [/*#__PURE__*/jsx_runtime.jsx(Month, {
        children: showMonth ? getMonthText() : ""
      }), /*#__PURE__*/jsx_runtime.jsx(_Date, {
        children: showDate ? currDate.getDate() : ""
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Pin, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Line, {}), /*#__PURE__*/jsx_runtime.jsx(Dot, {})]
      }), /*#__PURE__*/jsx_runtime.jsx(log_item_Title, {
        children: currPost.meta.title
      })]
    })]
  });
}

/* harmony default export */ var log_item = (LogItem);
const YearWrapper = styled_components_cjs/* default.li */.ZP.li`
  flex-shrink: 0;

  width: 100%;

  padding: 0 0.8rem;
  margin-bottom: 0.4rem;

  ${({
  isFirst
}) => !isFirst && `margin-top: 0.8rem;`};
`;
const Year = styled_components_cjs/* default.b */.ZP.b`
  font-size: 1.4rem;
  font-weight: bold;
`;
const log_item_Wrapper = styled_components_cjs/* default.li */.ZP.li`
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 2rem;

  padding: 0 0.8rem;

  &:hover {
    background-color: ${({
  theme
}) => `${theme.colors.scheme.$gray300}`};
  }
`;
const Month = styled_components_cjs/* default.b */.ZP.b`
  flex-shrink: 0;
  width: 3rem;

  font-size: 1.2rem;
  font-weight: bold;
`;

const _Date = styled_components_cjs/* default.span */.ZP.span`
  flex-shrink: 0;
  width: 1.4rem;

  font-size: 0.8rem;
`;

const log_item_Title = styled_components_cjs/* default.span */.ZP.span`
  flex: 1;

  margin-left: 0.8rem;

  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Pin = styled_components_cjs/* default.div */.ZP.div`
  position: relative;

  flex-shrink: 0;
  width: 1.6rem;
  height: 100%;
`;
const Line = styled_components_cjs/* default.div */.ZP.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 0.1rem;
  height: 100%;

  background-color: ${palette/* GREEN */.ZA};
`;
const Dot = styled_components_cjs/* default.div */.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;

  background-color: ${palette/* GREEN */.ZA};
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/log-section/index.tsx






function LogSection() {
  const {
    state: {
      posts
    },
    action: {
      selectPost
    }
  } = (0,app/* useAppContext */.b)();
  const sortedPosts = (0,react.useMemo)(() => {
    // 최신순 정렬
    return [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  }, [posts]);

  const handleClick = e => {
    const itemElem = e.target.closest(".logItem");

    if (itemElem && itemElem.dataset.id) {
      selectPost(itemElem.dataset.id);
    }
  };

  return /*#__PURE__*/jsx_runtime.jsx(scroll_pagenation/* default */.Z, {
    data: sortedPosts,
    renderItem: (curr, prev) => /*#__PURE__*/jsx_runtime.jsx(log_item, {
      currPost: curr,
      prevPost: prev
    }, curr.id),
    onClick: handleClick
  });
}

/* harmony default export */ var log_section = (LogSection);
// EXTERNAL MODULE: ./src/components/common/tag/index.tsx
var tag = __webpack_require__(3047);
;// CONCATENATED MODULE: ./src/layouts/blog-layout/search-section/tags/index.tsx






function TagsSection() {
  const {
    state: {
      posts
    }
  } = (0,app/* useAppContext */.b)();
  const tags = (0,react.useMemo)(() => {
    return posts.reduce((acc, {
      meta: {
        tags
      }
    }) => {
      tags === null || tags === void 0 ? void 0 : tags.forEach(tag => {
        if (acc[tag] == null) {
          acc[tag] = 0;
        }

        acc[tag] += 1;
      });
      return acc;
    }, {});
  }, [posts]);
  return /*#__PURE__*/jsx_runtime.jsx(AccordionSection, {
    title: "Tags",
    defaultExpanded: true,
    children: /*#__PURE__*/jsx_runtime.jsx(tags_Wrapper, {
      children: Object.entries(tags).map(([key, value]) => /*#__PURE__*/jsx_runtime.jsx(tag/* default */.Z, {
        count: value,
        href: `/posts?tag=${key}`,
        children: key
      }, key))
    })
  });
}
const tags_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.8rem;
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/search-section/index.tsx



function SearchSection() {
  return /*#__PURE__*/jsx_runtime.jsx(search_section_Wrapper, {
    children: /*#__PURE__*/jsx_runtime.jsx(TagsSection, {})
  });
}
const search_section_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/activity-bar/action-item/index.tsx




const ActionItem = /*#__PURE__*/react.forwardRef(({
  Icon,
  isSelected = false,
  onClick,
  onKeyDown = () => null
}, ref) => {
  return /*#__PURE__*/jsx_runtime.jsx(action_item_Wrapper, {
    ref: ref,
    tabIndex: 0,
    onClick: onClick,
    onKeyDown: onKeyDown,
    isSelected: isSelected,
    children: /*#__PURE__*/jsx_runtime.jsx(Icon, {
      style: {
        width: "1.4rem",
        heigth: "1.4rem"
      },
      fill: isSelected ? palette/* WHITE */.Cj : palette/* GRAY_100 */.Pg
    })
  });
});
/* harmony default export */ var action_item = (ActionItem);
const action_item_Wrapper = styled_components_cjs/* default.li */.ZP.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  ${({
  isSelected
}) => `border-left: 0.16rem solid ${isSelected ? palette/* WHITE */.Cj : "transparent"}`};
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/activity-bar/index.tsx











const GITHUB_URL = "https://github.com/likelionSungGuk";
const ACTIVITY_BAR_WIDTH = "3rem";
const ACTION_ITEMS = [{
  label: "EXPLORER",
  Icon: icons/* FilesIcon */._g,
  content: /*#__PURE__*/jsx_runtime.jsx(ExplorerSection, {})
}, {
  label: "SEARCH",
  Icon: icons/* SearchIcon */.W1,
  content: /*#__PURE__*/jsx_runtime.jsx(SearchSection, {})
}, {
  label: "POSTING LOG",
  Icon: icons/* SourceControlIcon */._K,
  content: /*#__PURE__*/jsx_runtime.jsx(log_section, {})
}, {
  label: "RUN AND DEBUG",
  Icon: icons/* RunAndDebugIcon */.or,
  content: "RUN AND DEBUG"
}, {
  label: "EXTENSIONS",
  Icon: icons/* ExtensionsIcon */.aq,
  content: "EXTENSIONS"
}];
function ActivityBar({
  currentActionItem,
  onCurrentActionItemChange,
  onKeyDown
}) {
  const itemsRef = (0,react.useRef)([]);

  const handleItemClick = index => () => {
    onCurrentActionItemChange(index === currentActionItem ? null : index);
  };

  const setFocusToPreviousItem = index => {
    var _itemsRef$current$pre;

    const prevItemIdx = index === 0 ? ACTION_ITEMS.length - 1 : (index - 1) % ACTION_ITEMS.length;
    (_itemsRef$current$pre = itemsRef.current[prevItemIdx]) === null || _itemsRef$current$pre === void 0 ? void 0 : _itemsRef$current$pre.focus();
  };

  const setFocusToNextItem = index => {
    var _itemsRef$current$nex;

    const nextItenIdx = (index + 1) % ACTION_ITEMS.length;
    (_itemsRef$current$nex = itemsRef.current[nextItenIdx]) === null || _itemsRef$current$nex === void 0 ? void 0 : _itemsRef$current$nex.focus();
  };

  const handleItemKeyDown = index => e => {
    switch (e.key) {
      case " ":
      case "Enter":
        handleItemClick(index)();
        return;

      case "Up":
      case "ArrowUp":
        setFocusToPreviousItem(index);
        return;

      case "Down":
      case "ArrowDown":
        setFocusToNextItem(index);
        return;
    }
  };

  const openGithubLink = () => {
    window.open(GITHUB_URL, "_blank");
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(activity_bar_Wrapper, {
    onKeyDown: onKeyDown,
    children: [/*#__PURE__*/jsx_runtime.jsx(activity_bar_Ul, {
      children: ACTION_ITEMS.map(({
        label,
        Icon
      }, index) => /*#__PURE__*/jsx_runtime.jsx(action_item, {
        ref: el => itemsRef.current[index] = el,
        Icon: Icon,
        isSelected: index === currentActionItem,
        onClick: handleItemClick(index),
        onKeyDown: handleItemKeyDown(index)
      }, label))
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(activity_bar_Ul, {
      children: [/*#__PURE__*/jsx_runtime.jsx(ThemeSwitcher, {}), /*#__PURE__*/jsx_runtime.jsx(action_item, {
        Icon: icons/* AccountIcon */.fr,
        onClick: openGithubLink
      }), /*#__PURE__*/jsx_runtime.jsx(action_item, {
        Icon: icons/* SettingsGearIcon */.HO,
        onClick: () => null
      })]
    })]
  });
}
const activity_bar_Wrapper = styled_components_cjs/* default.nav */.ZP.nav`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${ACTIVITY_BAR_WIDTH};

  background-color: ${palette/* DRACULAR_BACKGROUND_LIGHT_DARK */.r4};
`;
const activity_bar_Ul = styled_components_cjs/* default.ul */.ZP.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :not(:last-child) {
    margin-bottom: 0.4rem;
  }

  > li {
    &:hover {
      cursor: pointer;
    }
  }
`;
;// CONCATENATED MODULE: ./src/hooks/useCanvasContext.ts

const useCanvasContext = () => {
  const canvasRef = useRef(null);
  const {
    0: context,
    1: setContext
  } = useState();
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    setContext(ctx);
  }, [canvasRef]);
  return {
    canvasRef,
    context
  };
};
;// CONCATENATED MODULE: ./src/hooks/useDrag.ts

const useDrag = onDrag => {
  const {
    0: isDragging,
    1: setIsDragging
  } = (0,react.useState)(false);
  const {
    0: start,
    1: setStart
  } = (0,react.useState)({
    x: 0,
    y: 0
  });
  (0,react.useEffect)(() => {
    const handleMouseMove = e => {
      if (isDragging) {
        onDrag({
          x: e.clientX - start.x,
          y: e.clientY - start.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setStart({
        x: 0,
        y: 0
      });
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }; // 주의 : onDrag가 dependencies 배열에 들어가면 오작동한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, start]);

  const startDrag = e => {
    setIsDragging(true);
    setStart({
      x: e.clientX,
      y: e.clientY
    });
  };

  return {
    isDragging,
    startDrag
  };
};
;// CONCATENATED MODULE: ./src/hooks/useResizeDetector.ts

const useResizeDetector = () => {
  const ref = useRef(null);
  const {
    0: size,
    1: setSize
  } = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    const callback = entries => {
      entries.forEach(entry => {
        const {
          width,
          height
        } = entry && entry.contentRect || {};
        setSize({
          width,
          height
        });
      });
    };

    const resizeObserver = new ResizeObserver(callback);
    ref.current && resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);
  return {
    width: size.width,
    height: size.height,
    ref
  };
};
;// CONCATENATED MODULE: ./src/hooks/index.ts



// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(524);
;// CONCATENATED MODULE: ./src/layouts/blog-layout/side-bar/index.tsx









const INITIAL_WIDTH = 320;
const MIN_WIDTH = 80;
const SideBar = /*#__PURE__*/(0,react.forwardRef)(({
  label,
  content,
  onClose
}, ref) => {
  const {
    0: width,
    1: setWidth
  } = (0,react.useState)(INITIAL_WIDTH);
  const {
    isDragging,
    startDrag
  } = useDrag(movement => {
    const nextWidth = width + movement.x;

    if (nextWidth <= MIN_WIDTH) {
      onClose();
      setWidth(INITIAL_WIDTH);
      return;
    }

    setWidth(nextWidth);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(side_bar_Wrapper, {
    ref: ref,
    tabIndex: 0,
    width: width,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TitleWrapper, {
      children: [/*#__PURE__*/jsx_runtime.jsx(side_bar_Title, {
        children: label
      }), /*#__PURE__*/jsx_runtime.jsx(CloseIcon, {
        onClick: onClose
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(ContentWrapper, {
      children: content
    }), /*#__PURE__*/jsx_runtime.jsx(DraggableLine, {
      onMouseDown: startDrag,
      isVisible: isDragging
    })]
  });
});
/* harmony default export */ var side_bar = (SideBar);
const side_bar_Wrapper = styled_components_cjs/* default.section */.ZP.section`
  position: relative;

  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  width: ${props => props.width}px;
  background-color: ${({
  theme
}) => theme.colors.semanticScheme.sideBarBg};

  ${theme/* breakpoints.small */.A.small} {
    width: calc(100% - ${ACTIVITY_BAR_WIDTH});
    z-index: 1;
  }
`;
const TitleWrapper = styled_components_cjs/* default.div */.ZP.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.4rem;
  padding: 0 0.8rem;
`;
const side_bar_Title = styled_components_cjs/* default.h2 */.ZP.h2`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({
  theme
}) => theme.colors.scheme.$gray100};
`;
const CloseIcon = (0,styled_components_cjs/* default */.ZP)(icons/* CloseIcon */.Tw).attrs({
  style: {
    width: "1.2rem",
    height: "1.2rem"
  }
})`
  display: none;

  ${theme/* breakpoints.small */.A.small} {
    display: block;
  }
`;
const ContentWrapper = styled_components_cjs/* default.div */.ZP.div`
  flex: 1;

  overflow: hidden;
`;
const DraggableLine = styled_components_cjs/* default.div */.ZP.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0.2rem;
  height: 100%;

  background-color: ${({
  isVisible
}) => isVisible ? palette/* BLUE */.Ej : "transparent"};

  &:hover {
    cursor: col-resize;
  }
`;
;// CONCATENATED MODULE: ./src/layouts/blog-layout/index.tsx







function BlogLayout({
  children
}) {
  const {
    0: currentActionItem,
    1: setCurrentActionItem
  } = (0,react.useState)(null);
  const sideBarRef = (0,react.useRef)(null);

  const handleActivityBarKeyDown = e => {
    if (["ArrowRight", "Right"].includes(e.key)) {
      var _sideBarRef$current;

      (_sideBarRef$current = sideBarRef.current) === null || _sideBarRef$current === void 0 ? void 0 : _sideBarRef$current.focus();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(blog_layout_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(blog_layout_Header, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row, {
      children: [/*#__PURE__*/jsx_runtime.jsx(ActivityBar, {
        currentActionItem: currentActionItem,
        onCurrentActionItemChange: setCurrentActionItem,
        onKeyDown: handleActivityBarKeyDown
      }), currentActionItem != null && /*#__PURE__*/jsx_runtime.jsx(side_bar, {
        ref: sideBarRef,
        label: ACTION_ITEMS[currentActionItem].label,
        content: ACTION_ITEMS[currentActionItem].content,
        onClose: () => setCurrentActionItem(null)
      }), /*#__PURE__*/jsx_runtime.jsx(Main, {
        children: children
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(Footer, {})]
  });
}
const blog_layout_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${({
  theme
}) => theme.colors.semanticScheme.mainBg};
  color: ${({
  theme
}) => theme.colors.scheme.$white};
`;
const blog_layout_Header = styled_components_cjs/* default.header */.ZP.header`
  flex-shrink: 0;

  height: 1.6rem;
  background-color: ${palette/* GRAY_300 */.BD};
`;
const Row = styled_components_cjs/* default.div */.ZP.div`
  flex: 1;

  display: flex;
  flex-direction: row;

  overflow: hidden;
`;
const Main = styled_components_cjs/* default.main */.ZP.main`
  flex: 1;

  overflow-x: hidden;
  overflow-y: hidden;

  background-color: ${({
  theme
}) => theme.colors.semanticScheme.mainBg};
`;
const Footer = styled_components_cjs/* default.footer */.ZP.footer`
  flex-shrink: 0;

  height: 1.6rem;
  background-color: ${palette/* GRAY_600 */.eD};
`;
;// CONCATENATED MODULE: ./src/layouts/index.ts

;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps,
  posts
}) {
  const router = (0,next_router.useRouter)();
  (0,react.useEffect)(() => {
    const handleRouteChange = url => {
      const {
        title
      } = window.document;
      const {
        href
      } = window.location;
      gtag/* pageview */.LV({
        url,
        title,
        href
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: `Frontend Dev | likelionSungGuk Blog`
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Frontend Dev likelionSungGuk Blog"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(ThemeContextProvider, {
      defaultTheme: "dark",
      children: /*#__PURE__*/jsx_runtime.jsx(app/* AppContextProvider */.i, {
        posts: posts,
        children: /*#__PURE__*/jsx_runtime.jsx(BlogLayout, {
          children: /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    })]
  });
}

MyApp.getInitialProps = async () => {
  const posts = await post_service/* default.getPosts */.Z.getPosts();
  return {
    posts
  };
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2010);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3605);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9600);
/* harmony import */ var _src_helpers_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(916);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-css-tags */



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__/* .ServerStyleSheet */ .qH();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "ko",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          href: "//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
          rel: "stylesheet",
          type: "text/css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${_src_helpers_gtag__WEBPACK_IMPORTED_MODULE_2__/* .GA_TRACKING_ID */ .vt}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${_src_helpers_gtag__WEBPACK_IMPORTED_MODULE_2__/* .GA_TRACKING_ID */ .vt}', {
                page_path: window.location.pathname,
              });
              `
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 8971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fr": function() { return /* reexport */ account; },
  "v4": function() { return /* reexport */ down; },
  "XC": function() { return /* reexport */ right; },
  "Tw": function() { return /* reexport */ icons_close; },
  "aq": function() { return /* reexport */ extensions; },
  "_g": function() { return /* reexport */ files; },
  "or": function() { return /* reexport */ run_n_debug; },
  "W1": function() { return /* reexport */ search; },
  "HO": function() { return /* reexport */ settings_gear; },
  "_K": function() { return /* reexport */ source_control; }
});

// UNUSED EXPORTS: ChevronLeftIcon, ChevronUpIcon, EllipsisIcon

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2010);
;// CONCATENATED MODULE: ./src/assets/icons/chevron/up.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ChevronUpIcon({
  style,
  fill
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/_jsx("svg", {
    style: _objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.024 5.928l-4.357 4.357-.62-.618L7.716 5h.618L13 9.667l-.619.618-4.357-4.357z"
    })
  });
}

/* harmony default export */ var up = ((/* unused pure expression or super */ null && (ChevronUpIcon)));
// EXTERNAL MODULE: ./.yarn/unplugged/styled-components-virtual-4118695063/node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9600);
;// CONCATENATED MODULE: ./src/assets/icons/chevron/down.tsx


function down_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function down_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { down_ownKeys(Object(source), true).forEach(function (key) { down_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { down_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function down_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ChevronDownIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: down_objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
    })
  });
}

/* harmony default export */ var down = (ChevronDownIcon);
;// CONCATENATED MODULE: ./src/assets/icons/chevron/left.tsx


function left_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function left_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { left_ownKeys(Object(source), true).forEach(function (key) { left_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { left_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function left_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ChevronLeftIcon({
  style,
  fill
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/_jsx("svg", {
    style: left_objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.928 7.976l4.357 4.357-.618.62L5 8.284v-.618L9.667 3l.618.619-4.357 4.357z"
    })
  });
}

/* harmony default export */ var left = ((/* unused pure expression or super */ null && (ChevronLeftIcon)));
;// CONCATENATED MODULE: ./src/assets/icons/chevron/right.tsx


function right_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function right_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { right_ownKeys(Object(source), true).forEach(function (key) { right_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { right_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function right_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function right_ChevronUpIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: right_objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
    })
  });
}

/* harmony default export */ var right = (right_ChevronUpIcon);
;// CONCATENATED MODULE: ./src/assets/icons/chevron/index.ts




// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
;// CONCATENATED MODULE: ./src/assets/icons/account.tsx


function account_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function account_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { account_ownKeys(Object(source), true).forEach(function (key) { account_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { account_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function account_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function AccountIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: account_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"
    })
  });
}

/* harmony default export */ var account = (/*#__PURE__*/react.memo(AccountIcon));
;// CONCATENATED MODULE: ./src/assets/icons/close.tsx


function close_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function close_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { close_ownKeys(Object(source), true).forEach(function (key) { close_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { close_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function close_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CloseIcon({
  style,
  fill,
  onClick,
  className
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    className: className,
    style: close_objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
    })
  });
}

/* harmony default export */ var icons_close = (CloseIcon);
;// CONCATENATED MODULE: ./src/assets/icons/ellipsis.tsx


function ellipsis_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ellipsis_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ellipsis_ownKeys(Object(source), true).forEach(function (key) { ellipsis_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ellipsis_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ellipsis_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function EllipsisIcon({
  style,
  fill
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/_jsx("svg", {
    style: ellipsis_objectSpread({
      width: "1.6rem",
      height: "1.6rem"
    }, style),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/_jsx("path", {
      d: "M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    })
  });
}

/* harmony default export */ var ellipsis = ((/* unused pure expression or super */ null && (EllipsisIcon)));
;// CONCATENATED MODULE: ./src/assets/icons/extensions.tsx


function extensions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function extensions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { extensions_ownKeys(Object(source), true).forEach(function (key) { extensions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { extensions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function extensions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ExtensionsIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: extensions_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
    })
  });
}

/* harmony default export */ var extensions = (/*#__PURE__*/react.memo(ExtensionsIcon));
;// CONCATENATED MODULE: ./src/assets/icons/files.tsx


function files_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function files_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { files_ownKeys(Object(source), true).forEach(function (key) { files_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { files_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function files_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function FilesIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: files_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.71 4.29l-3-3L10 1H4L3 2v12l1 1h9l1-1V5l-.29-.71zM13 14H4V2h5v4h4v8zm-3-9V2l3 3h-3z"
    })
  });
}

/* harmony default export */ var files = (/*#__PURE__*/react.memo(FilesIcon));
;// CONCATENATED MODULE: ./src/assets/icons/run-n-debug.tsx


function run_n_debug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function run_n_debug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { run_n_debug_ownKeys(Object(source), true).forEach(function (key) { run_n_debug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { run_n_debug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function run_n_debug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function RunAndDebugIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: run_n_debug_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"
    })
  });
}

/* harmony default export */ var run_n_debug = (/*#__PURE__*/react.memo(RunAndDebugIcon));
;// CONCATENATED MODULE: ./src/assets/icons/search.tsx


function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SearchIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: search_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"
    })
  });
}

/* harmony default export */ var search = (/*#__PURE__*/react.memo(SearchIcon));
;// CONCATENATED MODULE: ./src/assets/icons/settings-gear.tsx


function settings_gear_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function settings_gear_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settings_gear_ownKeys(Object(source), true).forEach(function (key) { settings_gear_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settings_gear_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function settings_gear_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SettingsGearIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: settings_gear_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"
    })
  });
}

/* harmony default export */ var settings_gear = (/*#__PURE__*/react.memo(SettingsGearIcon));
;// CONCATENATED MODULE: ./src/assets/icons/source-control.tsx


function source_control_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function source_control_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { source_control_ownKeys(Object(source), true).forEach(function (key) { source_control_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { source_control_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function source_control_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SourceControlIcon({
  style,
  fill
}) {
  const {
    colors
  } = (0,styled_components_cjs/* useTheme */.Fg)();
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    style: source_control_objectSpread({
      width: "1.4rem",
      height: "1.4rem"
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fill || colors.scheme.$white,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"
    })
  });
}

/* harmony default export */ var source_control = (/*#__PURE__*/react.memo(SourceControlIcon));
;// CONCATENATED MODULE: ./src/assets/icons/index.ts
/**
 * Activity Bar Icons
 */











/***/ }),

/***/ 9289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6687);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9600);



const DEFAULT_PAGE_SIZE = 20;

function ScrollPagenation({
  data: initialData,
  pageSize = DEFAULT_PAGE_SIZE,
  renderItem,
  onClick
}) {
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData.slice(0, pageSize));
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setData(initialData.slice(0, pageSize));
  }, [initialData, pageSize]);

  const handleScroll = () => {
    if (!wrapperRef.current) {
      return;
    }

    const {
      scrollTop,
      clientHeight,
      scrollHeight
    } = wrapperRef.current;
    const scrollBottom = scrollTop + clientHeight; // 모든 스크롤을 내렸을 때

    if (scrollBottom >= scrollHeight) {
      loadMore();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!wrapperRef.current) {
      return;
    }

    wrapperRef.current.addEventListener("scroll", handleScroll); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  const getNextData = ({
    offset,
    limit
  }) => {
    return initialData.slice(offset, offset + limit);
  };

  const loadMore = () => {
    if (hasMore) {
      setData(prevData => {
        const nextData = getNextData({
          offset: prevData.length,
          limit: pageSize
        });

        if (nextData.length < pageSize) {
          var _wrapperRef$current;

          setHasMore(false);
          (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.removeEventListener("scroll", handleScroll);
        }

        return [...prevData, ...nextData];
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
    ref: wrapperRef,
    onClick: onClick,
    children: data.map((item, i) => renderItem(item, i === 0 ? null : data[i - 1]))
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (ScrollPagenation);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.ul */ .ZP.ul`
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow-y: auto;
`;
const More = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.div */ .ZP.div`
  width: 100%;
  height: 2rem;
  background-color: black;
`;

/***/ }),

/***/ 3047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2010);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9600);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6696);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Tag(_ref) {
  let {
    children,
    count,
    clickable = true,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "count", "clickable", "href"]);

  const tagDefault = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, _objectSpread(_objectSpread({}, props), {}, {
    clickable: clickable,
    children: [children, count != null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Count, {
      children: count
    })]
  }));

  return href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: href,
    passHref: true,
    children: tagDefault
  }) : tagDefault;
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.a */ .ZP.a`
  margin: 0 0.8rem 0.8rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;

  font-size: 1.2rem;
  color: ${({
  theme
}) => theme.colors.scheme.$tagFontColor};;
  background-color: ${({
  theme
}) => theme.colors.scheme.$gray300};

  ${p => p.clickable && `
    cursor: pointer;
    &:hover {
      background-color: ${p.theme.colors.scheme.$gray400};
    }
  `}
`;
const Count = styled_components__WEBPACK_IMPORTED_MODULE_2__/* .default.span */ .ZP.span`
  margin-left: 0.4rem;

  color: ${({
  theme
}) => theme.colors.scheme.$gray100};
`;

/***/ }),

/***/ 2837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ AppContextProvider; },
/* harmony export */   "b": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6687);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5021);



const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);

const useAppContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);

const AppContextProvider = ({
  children,
  posts
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: openPosts,
    1: setOpenPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: currentPostId,
    1: setCurrentPostId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (currentPostId === undefined) {
      return;
    }

    router.push(currentPostId ? `/blog/${currentPostId}` : "/blog"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPostId]);

  const selectPost = id => {
    setCurrentPostId(id);

    if (openPosts.find(post => post.id === id) !== undefined) {
      return;
    }

    const targetPost = posts.find(post => post.id === id);
    targetPost && setOpenPosts([...openPosts, targetPost]);
  };

  const closePost = id => {
    const newOpenPosts = openPosts.filter(post => post.id !== id);
    setOpenPosts(newOpenPosts);

    if (newOpenPosts.length === 0) {
      setCurrentPostId(null);
      return;
    }

    if (id === currentPostId) {
      setCurrentPostId(newOpenPosts[newOpenPosts.length - 1].id);
    }
  };

  const appStore = {
    state: {
      posts,
      openPosts,
      currentPostId
    },
    action: {
      selectPost,
      closePost
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
    value: appStore,
    children: children
  });
};



/***/ }),

/***/ 916:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "LV": function() { return /* binding */ pageview; }
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = process.env.GA_MEASUREMENT_ID || "";
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = ({
  url,
  title,
  href
}) => {
   true && window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
    page_title: title,
    page_location: href
  });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({
  action,
  category,
  label,
  value
}) => {
   true && window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ 7896:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ post_service; }
});

// EXTERNAL MODULE: ./.yarn/cache/gray-matter-npm-4.0.3-852ae4f34c-37717bd424.zip/node_modules/gray-matter/index.js
var gray_matter = __webpack_require__(8366);
var gray_matter_default = /*#__PURE__*/__webpack_require__.n(gray_matter);
// EXTERNAL MODULE: ./.yarn/cache/marked-npm-2.0.6-d375c0da85-f9088d33f8.zip/node_modules/marked/src/marked.js
var marked = __webpack_require__(2777);
var marked_default = /*#__PURE__*/__webpack_require__.n(marked);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/prism.js
var prism = __webpack_require__(963);
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-markup-templating.js
var prism_markup_templating = __webpack_require__(2470);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-css.js
var prism_css = __webpack_require__(1267);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-json.js
var prism_json = __webpack_require__(9510);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-javascript.js
var prism_javascript = __webpack_require__(8819);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-typescript.js
var prism_typescript = __webpack_require__(14);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-jsx.js
var prism_jsx = __webpack_require__(4416);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-tsx.js
var prism_tsx = __webpack_require__(5009);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-bash.js
var prism_bash = __webpack_require__(7124);
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/components/prism-yaml.js
var prism_yaml = __webpack_require__(9089);
;// CONCATENATED MODULE: ./src/helpers/markdown.helper.ts











marked_default().setOptions({
  highlight: (code, lang) => {
    if ((prism_default()).languages[lang]) {
      return prism_default().highlight(code, (prism_default()).languages[lang], lang);
    } else {
      return code;
    }
  }
});
const parseMarkdown = text => {
  return marked_default().parse(text);
};
;// CONCATENATED MODULE: ./src/helpers/index.ts

;// CONCATENATED MODULE: ./src/services/post.service.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const filterPosts = (posts, filter) => {
  if (!filter) {
    return posts;
  }

  const {
    tag
  } = filter;
  let filteredPosts = posts;

  if (tag) {
    filteredPosts = filteredPosts.filter(post => {
      var _post$meta$tags;

      return (_post$meta$tags = post.meta.tags) === null || _post$meta$tags === void 0 ? void 0 : _post$meta$tags.includes(tag);
    });
  }

  return filteredPosts;
};

const getPosts = async filter => {
  // request only markdown files which is ending with .md
  const context = __webpack_require__(4515);

  let posts = [];
  await Promise.all(context.keys().map(async key => {
    const path = key.slice(2); // 맨 앞 './' 문자열 제거

    const post = await getPost(path);
    posts.push(post);
  }));
  return filter ? filterPosts(posts, filter) : posts;
};

const getPost = async id => {
  var _data$description;

  const {
    default: markdown
  } = await __webpack_require__(3488)(`./${id}`);
  const {
    data,
    content
  } = gray_matter_default()(markdown);
  return {
    id,
    meta: _objectSpread(_objectSpread({}, data), {}, {
      description: (_data$description = data.description) !== null && _data$description !== void 0 ? _data$description : content.split("\n").slice(0, 4).join(" ")
    }),
    html: parseMarkdown(content)
  };
};

const PostService = {
  getPosts,
  getPost
};
/* harmony default export */ var post_service = (PostService);

/***/ }),

/***/ 524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ breakpoints; }
/* harmony export */ });
const breakpoints = {
  small: "@media (max-width: 600px)",
  medium: "@media (max-width: 768px)",
  large: "@media (min-width: 769px)"
};


/***/ }),

/***/ 1287:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 1287;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 7175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"AWS EC2 한글 도메인 연결하기\"\r\ndate: \"2021-05-28\"\r\ntags: \r\n  - AWS\r\n  - EC2\r\n  - route53\r\n---\r\n\r\n# AWS EC2 한글 도메인 연결하기\r\n\r\nAWS EC2와 ROUTE53으로 도메인 연결에 관해서는 많은 정보가 있다. \r\n\r\n하지만 한글 도메인을 연결해보다가 뜻밖에 문제상황에 부딪혔던 경험이 있어 이를 공유하려 한다.\r\n\r\n![20210528_212411](../../../assets/img/20210528_212411.png)\r\n\r\n위 이미지와 같이 도메인 이름에 한글도메인을 넣으면 `지원되지 않는 문자가 있습니다.`라며 거부한다.\r\n\r\n하지만 나는 이미 한글 도메인을 구매해놨다면...?\r\n\r\n이때 활용할 수 있는 것이 바로 `**퓨니코드**` 이다.\r\n\r\n\r\n\r\n### 퓨니코드\r\n\r\n> **한글 도메인을 사용하실 경우에 DNS가 한글을 처리하기 위하여 영어, 숫자, 하이픈(-)으로 이루어진 퓨니코드(Punycode)의 형태로 변환된 후, DNS 서버에 전달, 저장돱니다. 따라서 서비스에 도메인을 등록하실 경우 퓨니코드 변환기를 통하여 \"xn--\"로 시작하는 퓨니코드로 변환된 값을 등록하셔야만 합니다**\r\n\r\n\r\n\r\n퓨니코드 변환기는 구글에 검색하면 쏟아져 나오니 골라서 쓰면 된다. \r\n\r\n나는 아래 사이트를 활용하였다.\r\n\r\n[KISA 퓨니코드 변환 사이트](https://xn--c79as89aj0e29b77z.xn--3e0b707e/idnconv/idnconv.do)\r\n\r\n![20210528_212418](../../..//assets/img/20210528_212418.png)\r\n\r\n![20210528_212456](../../..//assets/img/20210528_212456.png)\r\n\r\n사이트 입력창에서 도메인 이름을 작성하고 `**변환**`버튼을 누르면 아래 OUTPUT이 나온다.\r\n\r\n`xn--bj0b ~~~` 이 값이 변환된 값이다.\r\n\r\nAWS ROUTE53에서 다시 이 OUTPUT을 입력해준다.\r\n\r\n![20210528_213117](../../..//assets/img/20210528_213117.png)\r\n\r\n오류가 나지 않는다.\r\n\r\n\r\n\r\n끝.\r\n");

/***/ }),

/***/ 5200:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"CI/CD 개념에 대해 알아보자\"\r\ndate: \"2021-08-30\"\r\ntags: \r\n  - javascript\r\n  - iterable\r\n  - iterator\r\n  - ES6\r\n---\r\n\r\n# CI/CD 개념을 빠르게 알아보자!\r\n\r\n유튜브 채널 `드림코딩 by 엘리` 에 업로드된 내용을 정리해보았습니다. 링크는 하단에 있으니 직접 보시는걸 추천드립니다.\r\n\r\n## CI/CD란? \r\n\r\n> CI: Continuous Integration \r\n> CD: Continuous Delivery ( or Deployment)\r\n\r\nCI/CD란 시장과 고객의 요구에 빠르게 맞춰 개발 배포 프로세스를 빠르게 할 수 있도록 통합적이고(Continuous ntegration) 지속적인 개발 - 배포 프로세스(CD)를 말합니다.\r\n\r\n\r\n\r\n### CI 지속적인 통합\r\n\r\n새로운 기능을 개발하고 git repository (Github, Gitlab, Bitbucket 등)에 push되면, `build` -> `merge` -> `test` 되는 과정을 말합니다.\r\n\r\n![Grady Booch](https://image.slideserve.com/845909/grady-booch-pronounced-bootch-l.jpg)\r\n\r\nExtreme Programming의 Grady Booch는 CI의 두 가지 포인트를 제시했다\r\n\r\n1. 코드 변경사항을 **<u>주기적</u>**으로 **<u>빈번하게 머지</u>**해야 한다.\r\n2.  통합을 위한 단계 (`빌드` -`테스트` - `머지`)의 **<u>자동화</u>**\r\n\r\n\r\n\r\n1번의 주기적이고 빈번한 머지는, 개발자들이 오랜 기간 개발을 하고 나서 한참 뒤에 서로의 코드를 머지하려고 하면 실제로 코어 기능을 개발하는 중요한 것보다는 merge conflict를 해결하는 부수적인 일에 훨씬 더 시간을 많이 쓰는 단점을 막기 위한 방법이라고 합니다.\r\n\r\n2번의 자동화 단계에서 중요한 점은 주기적으로 merge된 코드가 build 상에 문제는 없었는지 자동으로 체크해야 한다는 점입니다. Build가 문제없이 진행되었다면 그 다음에는 이 코드가 정상적으로 작동하는지를 자동으로 테스트하는 것까지가 CI의 중요한 점이라고 강조했습니다.\r\n\r\n\r\n\r\nCI 프로세스를 통해 얻을 수 있는 장점은 다음과 같습니다.\r\n\r\n1. 개발 생산성 향상\r\n2. 문제점 빠르게 발견\r\n3. 버그 수정 용이\r\n4. 코드 퀄리티 향상\r\n\r\nCI를 자동화 하기 위해서는 개발자들이 모두 유닛테스트를 포함해야 하기 때문에 자연스레 코드의 퀄리티 향상까지 기대할 수 있습니다.\r\n\r\n\r\n\r\n### CD 지속적인 제공/배포\r\n\r\n어떻게 하면 자동화해서 서비스를 배포할 수 있을까?\r\n\r\n![Continuous Delivery](/assets/img/cd1.png)\r\n\r\n![Continuous Deployment](/assets/img/cd2.png)\r\n\r\n\r\n\r\n\r\n\r\n---\r\n\r\nRef.\r\n\r\n[CI/CD 5분 개념 정리 (현업에서 쓰는 개발 프로세스) - 드림코딩 by 엘리](https://www.youtube.com/watch?v=0Emq5FypiMM)\r\n");

/***/ }),

/***/ 3143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"윈도우 듀얼모니터 가상드세크탑 & 멀티모니터 맥처럼 따로 따로 사용하기\"\r\ndate: \"2021.08.07\"\r\ntags: \r\n  - windows 듀얼모니터\r\n  - 가상데스크톱 화면고정\r\n---\r\n\r\n# 윈도우 가상 데스크톱과 듀얼모니터 활용 극대화하기\r\n\r\n\r\n> 윈도우 OS에서 듀얼모니터 이상 사용할 때 해당 모니터별로 따로 구분해서 한 쪽은 고정화면을 띄워놓고 다른 쪽만 변경하며 사용하고 싶었으나 방법을 모르셨다면 아래 내용을 확인해보시길 추천드립니다.\r\n\r\n검색해보니 유료 추가 앱을 이용하지 않고도 윈도우 자체기능으로도 이 문제를 해결할 수 있어 공유드립니다.\r\n\r\n\r\n\r\n## **💀 나의 문제상황**\r\n\r\n- 듀얼 모니터 사용\r\n- 왼쪽면은 고정화면을 띄워놓고 계속 보고 싶음\r\n- 오른쪽면은 잦은 화면 변환을 하고 싶음.\r\n\r\n<video src=\"/assets/img/vdektop_vid_1.mp4\" width=\"100%\" autoplay controls loop></video>\r\n\r\n\r\n\r\n맥북을 사용할때는 가상환경에 따라 트랙패드를 좌우로 휙휙 쓸면서 모니터별로 따로 사용할 수 있어서 좋았었는데 윈도우로 작업을 하다보니 그때처럼 하려고 단축키 `Ctrl+Win+방향키(<- or ->)` 를 쓰면 좌우 모든 화면이 같이 돌아가서 해당 가상데스크탑을 모든 모니터가 공유해버리는 문제가 있었습니다.\r\n\r\n\r\n\r\n## **💡 어느 정도 해결할 방법을 찾았습니다.**\r\n\r\n원리는 가상화면 자체를 모니터별로 분화하는 것은 아니고, 똑같은 창을 모든 가상 데스크톱에 고정적으로 띄워놓는 방법입니다.\r\n\r\n(아쉽지만 맥북처럼 가상 데스크탑 자체를 모니터별로 분화해서 사용하는 방법은 아닙니다. 이런 기능을 제공하는 써드파티 앱이 있는데 유료라는 것 같고 데모버전을 테스트해보려 해도 이것저것 입력한 뒤 사용요청을 보내라고 해서 귀찮아서 그냥 안했습니다.)\r\n\r\n### **1. Win + Tab 키로 여러 화면을 한 번에 띄웁니다.**\r\n\r\n![vdektop1.png](/assets/img/vdesktop1.png)\r\n\r\n### **2. 계속 고정하려는 창 마우스 우클릭 > \"모든 바탕 화면에 이 창 표시\" 클**\r\n\r\n![vdesktop2.png](/assets/img/vdesktop2.png)\r\n\r\n크롬창을 우클릭하고 스샷찍으려 했는데 Win+Tab상황에서 스샷찍기가 쉽지가 않아서 좀 어긋났습니다 ;;\r\n\r\n> 참고로 (1)모든 바탕화면에 이 창 표시 하고 (2)모든 바탕화면에 이 앱창 표시는 조금 다릅니다.\r\n\r\n같은 크롬창이어도 여러개로 나누어져 있으면  (1)의 경우 설정한 하나의 크롬창만을 고정합니다. 하지만 (2)의 경우 여러개의 크롬창을 모두 \"크롬\"이라는 하나의 앱으로 인식하여 예상과는 다른 결과가 나올 수 있으므로 **\"(1) 모든 바탕화면에 이 창 표시\"**를 추천합니다.\r\n\r\n\r\n\r\n### **3. 나머지 변환하며 사용하고 싶은 앱들은 각각의 가상 데스크탑1, 2, 3으로 나눠서 분배**\r\n\r\n예를 들어 크롬창을 계속 띄워놓고 싶다면 `크롬창 우클릭 > \"모든 바탕 화면에 이 창 표시\"` 클릭\r\n\r\n이러면 이 크롬창이 데스크탑 1, 2, 3 등에 모두 복사가 되고 한 쪽 면을 차지하게 됩니다.\r\n\r\nCtrl+Win+방향키 단축키를 활용해 데스크탑을 넘나 들어도 한 쪽면에 고정된 크롬창은 그 자리를 그대로 지키고 있습니다.\r\n\r\n## 😎 적용 후 모습\r\n\r\n<video src=\"/assets/img/vdektop_vid_2.mp4\" width=\"100%\" autoplay controls loop></video>\r\n\r\n\r\n\r\n가상 데스크탑에서 알탭 누르거나 그러면 좀 앱들이 복잡해지고 해서 맥만큼의 깔끔함은 아니지만 원하던 기능을 쓸 수 있어 저는 매우 만족합니다. 모니터가 많아지더라도 잘 활용하면 꽤 유용할 것 같습니다.\r\n\r\n감사합니다 :)\r\n\r\n");

/***/ }),

/***/ 1416:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"jekyll 구글애널리틱스(GA) 다는 방법 초간단 알아보기\"\r\ndate: \"2021.08.18\"\r\ntags: \r\n  - jekyll\r\n  - google analytics\r\n  - GA\r\n  - 구글애널리틱스\r\n  - UX\r\n  - 사용자패턴\r\n---\r\n\r\n# 구글 애널리틱스로 jekyll로 만든 내 블로그 방문자 행동패턴 알아보는 방법\r\n\r\n## 1. 구글 애널리틱스 가입하기 \r\n\r\n그새 예전에 할 때랑 좀 달라져 있네요.\r\n\r\n\r\n\r\n![ga_1](/assets/img/ga_1.png)\r\n\r\n구글 애널리틱스 검색 후 접속\r\n\r\n\r\n\r\n![ga_2](/assets/img/ga_2.png)\r\n\r\n[Start Measuring] 버튼 클릭\r\n\r\n![ga_3](/assets/img/ga_3.png)\r\n\r\n계정 설정 후 나머지 설정은 알아서 체크 후 Next!\r\n\r\n![ga_4](/assets/img/ga_4.png)\r\n\r\n카테고리, business size 등 알아서 체크 후 Create\r\n\r\n![ga_5](/assets/img/ga_5.png)\r\n\r\n마지막으로 Agreement 에 동의 후 Accept하면 구글 애널리틱스 생성완료\r\n\r\n\r\n\r\n## 2. GA 트랙코드 jekyll에 심기\r\n\r\n![GA추적코드](https://rextarx.github.io/assets/2017-02-03-Applying_Google_Analytics_to_a_blog_using_Jekyll/4.png)\r\n\r\n만약 이 관리 페이지에 들어오지 못하셨다면 왼쪽 하단에 **[관리] ** 버튼을 클릭해보세요.\r\n\r\n![ga_6](/assets/img/ga_6.png)\r\n\r\n\r\n\r\n![ga_7](/assets/img/ga_7.png)\r\n\r\n### (접속 경로)_includes > _third_party > analytics > google-analytics.html\r\n\r\n위 경로로 들어와서 구글 애널리틱스 페이지에 있던 추적코드를 심어줍니다.\r\n\r\n\r\n\r\n## 3. _config.yml 에 추적ID 추가해주기\r\n\r\n![ga_8](/assets/img/ga_8.png)\r\n\r\n`_config.yml ` 파일에서 google_analytics를 찾아서 **UA-OOOOOOOO-1** 과 같은 추적 ID를 추가해줍니다.\r\n\r\n\r\n\r\n여기까지 완료되었으면 끝!\r\n\r\n\r\n\r\n## 4. 완성된 모습\r\n\r\n![ga_9](/assets/img/ga_9.png)\r\n\r\n![ga_10](/assets/img/ga_10.png)\r\n\r\n시간이 조금 지나고나면...WOW! \r\n\r\n드디어 얼마나 많은 사용자들이 방문-이탈했는지 한 눈에 볼 수 있는 대시보드가 보입니다!\r\n\r\n그밖에도 실시간 사용자에 대한 정보, 잠재고객층에 대한 정보도 살펴볼 수 있고 어떤 페이지에 얼마나 많은 방문횟수가 나왔는지 등에 대한 다양한 정보를 알 수 있습니다.\r\n\r\nGA와 함께 더욱 효과적으로 블로그를 잘 꾸며나가시길 바랍니다. \r\n\r\n감사합니다.");

/***/ }),

/***/ 4559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"개발자를 괴롭히지만 없어서는 안되는 CORS\"\r\ndate: \"2020.12.16\"\r\ntags:\r\n  - http\r\n  - 웹개발\r\n  - CORS\r\n  - SOP\r\n  - 네트워크\r\n---\r\n\r\n\r\n\r\n# Cross-Origin Resource Sharing, CORS\r\n\r\n> 이 포스팅은 같이 스터디 했던 팀원 신상훈님의 포스팅을 기반으로 약간의 편집만을 더했습니다.\r\n\r\n\r\n\r\n## 0. CORS를 이해하기 위한 배경\r\n\r\n**CORS는 웹 개발자라면 한 번쯤은 마주하게 될 정책입니다.**\r\n\r\nMozilla의 MDN 에서는 CORS를 아래와 같이 설명하고 있습니다.\r\n\r\n> `교차 출처 리소스 공유`는 추가 `HTTP 헤더`를 사용하여, 한 `출처`에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 교차 출처 HTTP 요청을 실행합니다.\r\n>\r\n> 쉽게 말해 교차 출처 자원 공유는 웹 페이지 상의 제한된 리소스를 최초 자원이 서비스된 도메인 밖의 다른 도메인으로부터 요청할 수 있게 허용하는 구조입니다. CORS는 교차 출처 요청을 허용하는 것이 안전한지 아닌지를 판별하기 위해 브라우저와 서버가 상호 통신하는 하나의 방법을 정의합니다.\r\n\r\n### 0.1 시작 전 집고 넘어갈 점\r\n\r\n- CORS를 직역하니 `Cross-Origin` 을 `교차 출처` 로 해석되었는데 `\"다른 출처\"` 로 생각하는게 이해에 도움이 된다.\r\n- 즉 CORS 는 `다른 출처간의 리소스 공유` 라는 의미 !\r\n\r\n---\r\n\r\n\r\n\r\n## 1. 같은 출처, 다른 출처는 무엇을 기준으로 나뉘는가?\r\n\r\n### 1.1 출처(Origin)\r\n\r\n\r\n **서버의 위치를 의미하는 URL은 여러 개의 구성 요소로 이루어져 있습니다.**\r\n\r\n![](/assets/img/sources.JPG)\r\n\r\n- 출처는 위 그림과 같이 `Protocol` 과 `Host` 등, 그리고 그림에 없는 `:443` 과 같은 포트 번호까지 모두 합친 것을 의미합니다. 즉, 서버의 위치를 찾아가기 위해 필요한 가장 기본적인 것들을 합쳐놓은 것이죠\r\n\r\n- 출처 내의 포트 번호는 생략이 가능한데, 이는 각 웹에서 사용하는 `HTTP`, `HTTPS` 프로토콜의 기본 포트 번호가 정해져 있기 때문입니다. (지난 포스팅에도 언급했듯이 기본적으로 80포트를 쓰고 이때는 생략 가능함.)\r\n- 그러나, 만약 `https://google.com:443` 과 같이 출처에 포트 번호가 명시적으로 포함된다면, 이 포트 번호까지 모두 일치해야 같은 출처라고 인정됩니다.\r\n  - (그런데 이 케이스에 대한 명확한 정의가 표준으로 정해진 것은 아니어서, 어떤 경우에는 다른 출처로 판단될 수도 있다는게 함정)\r\n\r\n---\r\n\r\n\r\n\r\n### 1.2 SOP(Same-Origin Policy) 동일출처 정책\r\n\r\n\r\n\r\n**웹 세계에서 다른 출처로의 리소스 요청을 제한하는 것과 관련된 정책은 두 가지인데, 한 가지는 앞서 소개한 CORS, 나머지 한 가지가 `SOP` 입니다.**\r\n\r\n**SOP의 의미 : \"같은 출처에서만 리소스를 공유할 수 있다\" 인데,** 즉 이 동일 출처 정책은 한 도메인의 JavaScript 코드를 불러오면 해당 코드 안에서 다른 도메인의 데이터를 요청할 수 없다는 것을 의미합니다. \r\n\r\n**따라서 CORS와는 반대되는 의미로 보이지만 기본적으로 CORS또한 SOP의 일환으로 `적어도 이정도는 지키면서 교차출처 요청을 해라!` 이해하시면 됩니다.**\r\n\r\n대표적으로 `XMLHttpRequest`와 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)는 동일출처정책(SOP)을 따릅니다.\r\n\r\n여기서 `XMLHttpRequest` 는 비동기 웹 기술에 관련된 객체이고(대표적으로 ajax 요청),`fetch`란 쉽게 말해 웹 리소스를 가져오는 고수준 api를 뜻합니다. html의 img태그나 scipt 태그, javascript,css 의 리소스 접근에 관한 일부 api도 Fetch의 구현체입니다.\r\n\r\n**하지만 최근에는 웹이라는 오픈된 환경에서 ajax가 대중화되고, OPEN API 등 <u>다른 출처에 있는 리소스를 가져와 활용하는 일은 매우 흔한 일</u>로 무작정 막을 수는 없습니다. 그래서 몇 가지 예외 조항을 두고 이 조항에 해당하는 리소스 요청은 다른 출처라도 허용하기로 했는데, 그 중 하나가 `CORS 정책을 지킨 리소스 요청` 이죠.**\r\n\r\n\r\n\r\n- 왜 이러한 정책이 만들어 졌을까 ?\r\n\r\n>  출처가 다른 두 개의 어플리케이션이 제약없이 소통할 수 있는 환경이 위험하기 때문이다. 특히 웹 어플리케이션의 경우 브라우저의 개발자 도구만 열어도 어떤 서버와 통신하는지, 리소스의 출처는 어디인지와 같은 각종 정보들을 아무런 제재없이 열람할 수 있다. \r\n>\r\n> (최근에는 자바스크립트 소스 코드를 난독화해 읽기 어렵다고는 하지만  난독화는 암호화가 아니므로, 소스 코드를 직접 볼 수 있다는 것 자체가 보안적으로 상당히 취약하다. 다시 복호화하는 사이트도 있음. 상당히 쉽게 파훼가 가능함.)\r\n\r\n이런 환경에서 아무런 제약이 존재하지 않는다면, 악의를 가진 사용자가 소스 코드를 쓱 구경한 후 [CSRF(Cross-Site Request Forgery)](https://ko.wikipedia.org/wiki/사이트_간_요청_위조)나 [XSS(Cross-Site Scripting)](https://ko.wikipedia.org/wiki/사이트_간_스크립팅)와 같은 방법을 사용하여 사용자의 어플리케이션에서 코드가 실행된 것처럼 꾸며서 사용자의 정보를 탈취하기가 너무나도 쉬워지는 문제가 생길 수 있습니다.\r\n\r\n\r\n\r\n- 즉, 우리가 다른 출처로 리소스를 요청하면 SOP 정책을 위반하는 것이고, SOP의 예외 조항인 CORS 정책까지 위반한다면 아예 다른 출처의 리소스를 사용할 수 없게 되는 것이다.\r\n\r\n**결론적으로, 다른 출처로 리소스를 요청하기 위해서는 SOP에서 정의된 예외 조항과 CORS를 사용할 수 있는 케이스를 따라야 한다는 것이다.**\r\n\r\n---\r\n\r\n\r\n\r\n### 1.3 같은 출처와 다른 출처의 구분\r\n\r\n결론부터 말하자면, 두 URL의 구성 요소 중 `Scheme`, `Host`, `Port` 이 3가지만 동일하면 두 개의 출처가 서로 같습니다.\r\n\r\n`https://mensan-sanghun.github.io:80` 이라는 출처로 예를 들자면 `https://` 이라는 스킴에 `mensan-sanghun.github.io` 호스트를 가지고 `:80` 번 포트를 사용하고 있다는 것만 같다면, 나머지는 전부 다르더라도 같은 출처로 판단됩니다.\r\n\r\n\r\n\r\n- 예시(출처가 https://mensan-sanghun.github.io 일 때)\r\n\r\n| URL                                            | 같은 출처 여부 | 이유                        |\r\n| ---------------------------------------------- | -------------- | --------------------------- |\r\n| https://mensan-sanghun.github.io/about         | O              | 스킴, 호스트, 포트가 동일   |\r\n| https://mensan-sanghun.github.io/about?q=상훈  | O              | 스킴, 호스트, 포트가 동일   |\r\n| https://user:password@mensan-sanghun.github.io | O              | 스킴, 호스트, 포트가 동일   |\r\n| http://mensan-sanghun.github.io                | X              | 스킴이 다름                 |\r\n| https://api.github.io                          | X              | 호스트가 다름               |\r\n| https://mensan-sanghun.naver.com               | X              | 호스트가 다름               |\r\n| https://mensan-sanghun.github.io:8000          | ?              | 브라우저의 구현에 따라 다름 |\r\n\r\n맨 마지막 케이스의 경우, 만약 출처에 `https://mensan-sanghun.github.io:80` 처럼 포트 번호가 명시되어 있다면 다른 출처이지만, 예시로 든 출처의 경우 포트 번호가 포함되지 않아 판단하기 애매합니다.\r\n\r\n이런 경우에는 각 브라우저들의 독자적인 출처 비교 로직을 따라갑니다.\r\n\r\n**여기서 중요한 점은, 이렇게 출처를 비교하는 로직이 <u>서버에 구현된게 아니라 브라우저에 구현</u>되어 있는 점입니다.**\r\n\r\n**!그렇기 때문에, 우리가 CORS 정책을 위반하는 리소스 요청을 해도, 해당 서버가 같은 출처에서 보낸 요청만 받는 로직을 가진 경우가 아니라면, 서버는 정상적으로 응답을 하고 이후 브라우저에서는 이 응답을 분석해 CORS 정책 위반이라고 판단하고 그 응답을 사용하지 않고 버립니다. **\r\n\r\n-> 따라서 서버 로그에는 `200 ok `가 뜨지만 브라우저 개발자 도구에는 \"CORS 오류\"가 떠있습니다.\r\n\r\n**즉, CORS는 브라우저의 구현 스펙에 포함되는 정책이기 때문에, 브라우저를 통하지 않고 서버 간 통신을 할 때는 이 정책이 적용되지 않습니다. 또한 CORS 정책을 위반하는 리소스 요청 에러가 발생해도, 서버 쪽 로그에는 정상적으로 응답을 했다는 로그가 남아 혼란을 야기할 수 있습니다.**\r\n\r\n---\r\n\r\n\r\n\r\n## 2. CORS의 동작\r\n\r\n기본적으로 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 `Origin` 이라는 필드에 요청을 보내는 출처를 함께 담습니다\r\n\r\n```http\r\n# http\r\nOrigin: https://mensan-sanghun.github.io\r\n```\r\n\r\n이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더의 `Access-Control-Allow-Origin`이라는 값에 “이 리소스를 접근하는 것이 허용된 출처”를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 `Origin`과 서버가 보내준 응답의 `Access-Control-Allow-Origin`을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정합니다.\r\n\r\n기본적 흐름은 이와 같고, CORS가 동작하는 방식은 세 가지의 시나리오가 있습니다.\r\n\r\n---\r\n\r\n### 2.1 CORS의 시나리오\r\n\r\n> 1. simple request\r\n> 2. preflight request\r\n> 3. credentialed request\r\n\r\n\r\n\r\n#### Simple Request 시나리오를 들어가기 전에\r\n\r\n이 시나리오 케이스에 대한 정식 명칭은 없지만, MDN의 CORS 문서에서는 이 시나리오를 [Simple Request](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#접근_제어_시나리오_예제)라고 부르고 있습니다.\r\n\r\nSimple Request의 정의에 앞서 CORS Preflight 에 대해 먼저 집고 넘어가는게 이해하기에 좋습니다. \r\n\r\n---\r\n\r\n#### Preflight Request(예비 요청 시나리오)\r\n\r\n`프리플라이트(Preflight)` 방식은 일반적으로 우리가 웹 어플리케이션을 개발할 때 가장 자주 마주치는 시나리오입니다. 이 시나리오에 해당하는 상황일 때 브라우저는 요청을 한번에 보내지 않고 **예비 요청과 본 요청으로 나누어서 서버로 전송**합니다.\r\n\r\n이때 브라우저가 본 요청을 보내기 전에 보내는 예비 요청을 Preflight라고 부르는 것이며, 이 예비 요청에는 HTTP 메소드 중 `OPTIONS` 메소드가 사용됩니다. 예비 요청의 역할은 본 요청을 보내기 전에 브라우저 스스로 이 요청을 보내는 것이 안전한지 확인하는 것입니다.\r\n\r\n자바스크립트를 예를 들어 이 과정을 간단한 플로우 차트로 나타내보면 다음과 같습니다.\r\n\r\n![preflight](/assets/img/Preflight.JPG)\r\n\r\n> 브라우저는 본 요청을 보내기 전 예비 요청을 먼저 보내고, 요청의 유효성을 검사한다.\r\n\r\n자바스크립트의 `fetch API`를 사용하여 브라우저에게 리소스를 받아오라는 명령을 내리면 브라우저는 서버에 예비 요청을 먼저 보내고, 서버는 이 예비 요청에 대한 응답으로 현재 자신이 어떤 것들을 허용하고, 어떤 것들을 금지하고 있는지에 대한 정보를 응답 헤더에 담아 브라우저에게 다시 보내주게 됩니다.\r\n\r\n>  이후 브라우저는 자신이 보낸 예비 요청과 서버가 응답에 담아준 허용 정책을 비교한 후, 이 요청을 보내는 것이 안전하다고 판단되면 같은 엔드포인트로 다시 본 요청을 보내게 된다. 이후 서버가 이 본 요청에 대한 응답을 하면 브라우저는 최종적으로 이 응답 데이터를 자바스크립트에게 넘겨준다.\r\n\r\n\r\n\r\n---\r\n\r\n아래 플로우는 다른 개발자가 재현한 예제를 통해 공부해보았다.\r\n\r\n출처: [CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)\r\n\r\n---\r\n\r\n- 예제\r\n\r\n개발자의 블로그 환경에서 개발자의 티스토리 블로그의 RSS 파일 리소스에 요청을 보내면 브라우저가 본 요청을 보내기 전에 `OPTIONS` 메소드를 사용하여 예비 요청을 보내는 것을 확인할 수 있습니다.\r\n\r\n![preflight_1](/assets/img/Preflight_1.JPG)\r\n\r\n실제로 브라우저가 보낸 요청을 보면, 단순히 `Origin`에 대한 정보 뿐만 아니라 자신이 예비 요청 이후에 보낼 본 요청에 대한 다른 정보들도 함께 포함되어 있는 것을 볼 수 있습니다.\r\n\r\n위 예비 요청에서 브라우저는 `Access-Control-Request-Headers`를 사용하여 자신이 본 요청에서 `Content-Type` 헤더를 사용할 것을 알려주거나, `Access-Control-Request-Method`를 사용하여 이후 `GET` 메소드를 사용할 것을 서버에게 미리 알려주고 있습니다.\r\n\r\n이후, 티스토리 서버는 예비 요청에 대한 응답을 보내줍니다.\r\n\r\n![preflight_2](/assets/img/Preflight_2.JPG)\r\n\r\n여기서 중요하게 볼 것은 `Access-Control-Allow-Origin: https://evanmoon.tistory.com`라는 값입니다.\r\n\r\n티스토리 서버는 이 리소스에 접근이 가능한 출처는 오직 `https://evanmoon.tistory.com` 뿐이라고 브라우저에게 이야기해준 것이고, 개발자가 이 요청을 보낸 출처는 `https://evan-moon.github.io`이므로 **<u>서버가 허용해준 출처와는 다른 출처</u>**입니다.\r\n\r\n결국 브라우저는 이 요청이 CORS 정책을 위반했다고 판단하고 다음과 같은 에러를 보유줍니다.\r\n\r\n![preflight_3](/assets/img/Preflight_3.JPG)\r\n\r\n앞에서 얘기했듯, 위 예비 요청에 대한 응답에서 에러가 발생하지 않고 `200` 이 정상적으로 응답되었는데, 콘솔 창에서는 에러가 표시되는 부분이 많은 개발자를 헷갈리게 합니다.  따라서 중요한 것은 예비 요청의 성공/실패 여부가 아니라 “응답 헤더에 유효한 `Access-Control-Allow-Origin` 값이 존재하는가”입니다. 만약 예비 요청이 실패해서 `200`이 아닌 상태 코드가 내려오더라도 헤더에 저 값이 제대로 들어가있다면 CORS 정책 위반이 아닌 것이죠.\r\n\r\n---\r\n\r\n#### Simple Request(단순 요청 시나리오)\r\n\r\n대부분의 경우 Preflight Request 방식을 사용해 예비 요청과 본 여청을 나누어 보내지만, 예비 요청없이 본 요청만으로 CORS 정책 위반 여부를 검사하기도 합니다.\r\n\r\n이 시나리오는 Preflight Request 시나리오와 전반적인 로직 자체는 같되, 예비 요청의 존재 유무만 다릅니다.\r\n\r\n예비 요청을 보내지 않고 바로 서버에게 본 요청을 보낸 후, 서버가 이에 대한 응답의 헤더에 `Access-Control-Allow-Origin`과 같은 값을 보내주면 그때 브라우저가 CORS 정책 위반 여부를 검사하는 방식입니다.\r\n\r\n![simple](/assets/img/simple.JPG)\r\n\r\n> 단순 요청은 예비 요청없이 바로 본 요청을 보낸다.\r\n\r\n다만 단순 요청은 특정 조건을 만족하는 경우에만 가능하고, 이 조건은 까다로운 편이라 거의 경험하기 힘든 편이다.\r\n\r\n1. 요청의 메소드는 `GET`, `HEAD`, `POST` 중 하나여야 함.\r\n2. `Accept`, `Accept-Language`, `Content-Language`, `Content-Type`, `DPR`, `Downlink`, `Save-Data`, `Viewport-Width`, `Width`를 제외한 헤더를 사용하면 안됨\r\n3. 만약 `Content-Type`를 사용하는 경우에는 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`만 허용\r\n\r\n2번 조건에 명시된 헤더는 매우 기본적인 헤더들이고, `Authorization` 헤더 조차 저 조건에는 포함되지 않습니다. 또한, 대부분의 HTTP API는 `text/xml`이나 `application/json` 컨텐츠 타입을 가지도록 설계되기 때문에 3번 조건을 만족시키기도 매우 어렵습니다.\r\n\r\n---\r\n\r\n#### Credentialed Request(인증된 요청 시나리오)\r\n\r\n이번 시나리오는 CORS의 기본적 방식이라기 보다 **다른 출처 간 통신에서 보안을 좀 더 강화하고 싶을 때 사용하는 방법**입니다.\r\n\r\n기본적으로 브라우저가 제공하는 비동기 리소스 요청 API인 `XMLHttpRequest` 객체나 `fetch API`는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않습니다. 이때 요청에 인증과 관련된 정보를 담을 수 있게 해주는 옵션이 바로 `credentials` 옵션입니다.\r\n\r\n이 옵션에 사용할 수 있는 값과 의미는 다음과 같습니다.\r\n\r\n| 옵션 값              | 설명                                            |\r\n| -------------------- | ----------------------------------------------- |\r\n| same-origin (기본값) | 같은 출처 간 요청에만 인증 정보를 담을 수 있다. |\r\n| include              | 모든 요청에 인증 정보를 담을 수 있다.           |\r\n| omit                 | 모든 요청에 인증 정보를 담지 않는다.            |\r\n\r\n만약 `same-origin`이나 `include`와 같은 옵션을 사용하여 리소스 요청에 인증 정보가 포함된다면, 브라우저는 다른 출처의 리소스를 요청할 때 단순히 `Access-Control-Allow-Origin`만 확인하는 것이 아니라 좀 더 빡빡한 검사 조건을 추가하게 됩니다.\r\n\r\n---\r\n\r\n- 예제\r\n\r\n앞선 예제의 개발자의 로컬환경과 블로그를 호스팅하고 있는 Github 서버와의 통신을 통해, 어떤 제약이 추가되었는지 보여주는 예제\r\n\r\n\r\n\r\n개발자의 블로그는 `Allow-Control-Allow-Origin` 값으로 모든 출처를 허용한다는 의미인 `*`가 설정되어있기 때문에, 다른 출처에서 개발자의 블로그로 리소스를 요청할 때 CORS 정책 위반으로 인한 제약을 받지 않습니다.\r\n\r\n그래서 `http://localhost:8000`과 같은 로컬의 개발 환경에서도 `fetch API`를 사용하여 마음대로 리소스를 요청하고, 또 받아올 수 있습니다.\r\n\r\n![credential1](/assets/img/Credentialed_1.JPG)\r\n\r\n구글 크롬 브라우저의 `credentials` 기본 값은 같은 출처 내에서만 인증 정보를 사용하겠다는 `same-origin`이기 때문에, 로컬 환경에서 `https://evan-moon.github.io`로 보내는 리소스 요청에는 당연히 브라우저의 쿠키와 같은 인증 정보가 포함되어 있지 않습니다.\r\n\r\n그렇기 때문에 브라우저는 단순히 `Access-Control-Allow-Origin: *`이라는 값을 보고 “이 요청은 안전하다”라는 결론을 내리는 것이다. 그러나 `credentials` 옵션을 모든 요청에 인증 정보를 포함하겠다는 의미를 가진 `include`로 변경하고 같은 요청을 보내면 이번에는 상황이 조금 달라지게 됩니다.\r\n\r\n![credential2](/assets/img/Credentialed_2.JPG)\r\n\r\n블로그를 호스팅하고 있는 Github 서버는 이번에도 동일한 응답을 보내주었지만, 브라우저의 반응은 다르죠.\r\n\r\n![credential3](/assets/img/Credentialed_3.JPG)\r\n\r\n브라우저는 인증 모드가 `include`일 경우, 모든 요청을 허용한다는 의미의 `*`를 `Access-Control-Allow-Origin` 헤더에 사용하면 안된다고 이야기하고 있습니다.\r\n\r\n이처럼 요청에 인증 정보가 담겨있는 상태에서 다른 출처의 리소스를 요청하게 되면 브라우저는 CORS 정책 위반 여부를 검사하는 룰에 다음 두 가지를 추가하게 됩니다.\r\n\r\n1. `Access-Control-Allow-Origin`에는 `*`를 사용할 수 없으며, 명시적인 URL이어야한다.\r\n\r\n2. 응답 헤더에는 반드시 `Allow-Control-Allow-Credentials: true`가 존재해야한다.\r\n\r\n---\r\n\r\n\r\n\r\n## 3. CORS를 해결할 수 있는 방법\r\n\r\n그렇다면 이 복잡한 정책 CORS를 위반하지 않으려면 어떻게 해야하는건가?\r\n\r\n\r\n\r\n### 3.1 Access-Control-Allow-Origin 세팅하기\r\n\r\nCORS 정책 위반으로 인한 문제를 해결하는 가장 대표적이고 정석적인 방법은, 그냥 서버에서 `Access-Control-Allow-Origin` 헤더에 알맞은 값을 세팅해주는 것입니다. (인터넷을 찾아보면 리버스 프록싱 등 몇 가지 꼼수가 있지만 로컬환경과 실제 서버 환경이 다른 경우 에러가 나기 쉽다. 그러므로 정석대로 하자)\r\n\r\n이때 와일드카드인 `*`을 사용하여 이 헤더를 세팅하게 되면 모든 출처에서 오는 요청을 허용한다는 의미이므로 **보안적으로 심각한 이슈가 발생할 수도 있습니다.**\r\n\r\n그러므로 `Access-Control-Allow-Origin: https://evan.github.io`와 같이 출처를 명시해주도록 합니다.\r\n\r\nSpring, Express, Django와 같이 이름있는 백엔드 프레임워크의 경우에는 모두 CORS 관련 설정을 위한 세팅이나 미들웨어 라이브러리를 제공하고 있으니 세팅 자체가 어렵지는 않을 것입니다.\r\n\r\n\r\n\r\n#### EX)장고에서 적용하기\r\n\r\n먼저 장고 패키지를 설치한다.\r\n\r\n```bash\r\n>>> pip install django-cors-headers\r\n```\r\n\r\n설치가 완료되면, `settings.py`의 `INSTALLED_APP`과 `MIDDLEWARE`에 코드를 입력한다.\r\n\r\n```django\r\nINSTALLED_APPS = [\r\n\t'corsheaders',\r\n]\r\n\r\nMIDDLEWARE = [\r\n\t'corsheaders.middleware.CorsMiddleware',\r\n]\r\n```\r\n\r\n마지막으로 `settings.py`에 아래와 같은 코드를 입력하면 된다. 아래 설정에서 CORS_ORIGIN_ALLOW_ALL=False를 하고 CORS_ORIGIN_WHITELIST를 지운다면 모든 요청을 허용하는 환경(테스트환경으로나 가능)\r\n\r\n```django\r\n##CORS\r\nCORS_ORIGIN_ALLOW_ALL=False\r\nCORS_ORIGIN_WHITELIST = [\r\n\t'google.com',\r\n\t'localhost:8000',\r\n\t'127.0.0.1:9000',\r\n\t'hostname.example.com',\r\n]\r\nCORS_ALLOW_CREDENTIALS = True\r\n\r\nCORS_ALLOW_METHODS = (\r\n    'DELETE',\r\n    'GET',\r\n    'OPTIONS',\r\n    'PATCH',\r\n    'POST',\r\n    'PUT',\r\n)\r\n\r\nCORS_ALLOW_HEADERS = (\r\n    'accept',\r\n    'accept-encoding',\r\n    'authorization',\r\n    'content-type',\r\n    'dnt',\r\n    'origin',\r\n    'user-agent',\r\n    'x-csrftoken',\r\n    'x-requested-with',\r\n)\r\n```\r\n\r\n---\r\n\r\n\r\n\r\nCORS 정책 위반은 브라우저의 구현에서 발생하기 때문에, 프론트엔드 개발자가 이로 인한 문제를 겪는다. 하지만 문제 해결을 위해서는 백엔드 개발자가 서버 어플리케이션의 응답 헤더에 올바른 `Acccess-Control-Allow-Origin`이 내려올 수 있도록 세팅해줘야 합니다.\r\n\r\n그러므로 프론트엔드 개발자로서든, 백엔드 개발자로서든 이 정책위반 문제해결에 대한 지식을 가지고, 꼭 한 번 쯤은 경험해볼 필요가 있다고 생각합니다.\r\n\r\n---\r\n\r\n#### References\r\n\r\n[교차 출처 리소스 공유 MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)\r\n\r\n[Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)\r\n\r\n[CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)\r\n\r\n[Django-내 로컬 서버에서 외부접속 허용하기](https://velog.io/@devmin/Django-CORS-Setting-basic)\r\n\r\n[Django CORS 설정과 API 연동](https://blog.thereis.xyz/41)\r\n\r\n[교차 출처 리소스 공유 위키피디아](https://ko.wikipedia.org/wiki/%EA%B5%90%EC%B0%A8_%EC%B6%9C%EC%B2%98_%EB%A6%AC%EC%86%8C%EC%8A%A4_%EA%B3%B5%EC%9C%A0#cite_note-6)");

/***/ }),

/***/ 4029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"우리가 항상 쓰는 HTTP 프로토콜이 뭘까\"\r\ndate: \"2020.12.16\"\r\ntags:\r\n- http\r\n- 웹개발\r\n- CORS\r\n- SOP\r\n- 프로토콜\r\n- 네트워크\r\n---\r\n\r\n## HTTP의 정의\r\n\r\n> **하이퍼텍스트 전송 프로토콜(HTTP)**은 HTML과 같은 하이퍼미디어 문서를 전송하기위한 [애플리케이션 레이어](https://en.wikipedia.org/wiki/Application_Layer) 프로토콜입니다.\r\n>\r\n> 일반적으로 안정적인 [전송 레이어](https://en.wikipedia.org/wiki/Transport_Layer)로 UDP와 달리 메세지를 잃지 않는 프로토콜인 TCP/IP 레이어를 기반으로 사용 합니다.\r\n>\r\n> 웹 브라우저와 웹 서버간의 커뮤니케이션을위해 디자인되었지만, 다른 목적으로도 사용될 수 있습니다.\r\n>\r\n> [URI](https://developer.mozilla.org/ko/docs/Glossary/URI)의 일부로, \"http://\" 는 \"schema\" 라고도 불리며, 일반적으로 주소의 시작 부분에 위치합니다. 일례로 \"https://developer.mozilla.org\" 라는 주소는 HTTP 프로토콜을 사용하여 문서를 요청하도록 브라우저에 명시한다는 것을 의미합니다. 이 경우 https는 HTTP 프로토콜의 보안 버전인 [SSL](https://developer.mozilla.org/ko/docs/Glossary/SSL) 를 나타냅니다 (TLS라고도 부르죠).\r\n>\r\n> HTTP 텍스트 기반 (모든 통신은 일반 텍스트로 수행됩니다) 이며 stateless (이전의 통신을 인식하지 않습니다) 입니다. 이 속성은 www 상에서 인간이 문서(웹 사이트) 를 읽는 것을 이상적으로 수행할 수 있도록 합니다. 그뿐만 아니라, HTTP 는 서버 간 웹 서비스 [REST](https://developer.mozilla.org/ko/docs/Glossary/REST) 또는 웹 사이트 내의 요청 [AJAX](https://developer.mozilla.org/ko/docs/Glossary/AJAX) 에 대한 기초로도 사용할 수 있습니다. - 출처 MDN\r\n>\r\n> 요청을보내고(request)응답을받는(response)과정이며, 연결당 하나의 트랜잭션을 수행한다.\r\n\r\n### HTTP 연결\r\n\r\nHTTP와 같은 클라이언트-서버 프로토콜에서, 세션은 다음의 세 가지 과정으로 이루어집니다:\r\n\r\n1. 클라이언트가 TCP 연결을 수립합니다(또는 전송 계층이 TCP가 아닌 다른 적당한 연결로).\r\n2. 클라이언트는 요청을 전송한 뒤 응답을 기다립니다.\r\n3. 서버는 요청에 대해 처리하고 그에 대한 응답을 상태 코드 그리고 요청에 부합하는 데이터와 함께 돌려보냅니다.\r\n\r\nTCP를 이용할 경우, 컴퓨터 상의 HTTP 서버를 위한 **기본 포트는 80**인데, **8000 혹은 8080**처럼 다른 포트들도 자주 사용되곤 합니다. 요청을 위한 페이지 URL은 도메인 이름과 포트 번호 둘 다 포함하는데, **포트 번호가 80일 경우 생략 가능**합니다.\r\n\r\n## HTTP MESSAGE REQUEST & RESPONSE\r\n\r\n#### 1. 클라이언트 요청 전송 (REQUEST)\r\n\r\n1. 첫번째 줄은 파라메터가 따르는 요청 메서드를 포함합니다:\r\n\r\n   The first line contains a request method followed by its parameters:\r\n\r\n   - 문서의 경로, 즉 프로토콜과 도메인 이름을 제외한 절대 URL\r\n   - 사용중인 HTTP 프로토콜 버전\r\n\r\n2. 바로 다음 줄들은 각각 특정 헤더를 나타내는데, 데이터의 종류가 적합한지(예를 들어, 언어는 무엇인지, MIME 타입은 무엇인지 등) 혹은 서버의 동작을 수정하는 몇 가지 데이터(예를 들어, 이미 캐시되어 있는 경우 응답을 전송하지 않는다든지 하는) 등에 관한 몇 가지 정보를 서버에게 제공합니다. 이런 HTTP 헤더들은 빈 줄로 끝나는 블록을 형성합니다.\r\n\r\n3. 마지막 블록은 부가적인 데이터 블록으로, 더 많은 데이터를 포함하며 주로 POST 메서드에 의해 사용됩니다.\r\n\r\n```markdown\r\nGET / HTTP/1.1\r\nHost: developer.mozilla.org\r\nAccept-Language: fr\r\n```\r\n\r\n**다양한 http request methods**\r\n\r\n- HTTP는 주어진 자원에 대해 실행되길 바라는 동작을 가리키는 요청 메소드 집합으로, 대표적으로 `GET`, `POST`방식이 있습니다. \r\n- 좀 더 자세한 내용은 아래 MDN 링크를 통해 확인해보세요.\r\n\r\n[다양한 HTTP request methods](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)\r\n\r\n\r\n\r\n#### 2. 서버 응답의 구조 (RESPONSE)\r\n\r\n연결된 에이전트가 자신의 요청을 전송하고 난 뒤에, 웹 서버가 그것을 처리하고 최종적으로 응답을 돌려보내게 됩니다. 클라이언트 요청과 유사하게, 서버 응답은 세 개의 다른 블록으로 나누어진, CRLF로 구분된 텍스트 지시자들로 형성됩니다\r\n\r\n1. 상태 줄인 `첫번째 줄`은 `상태 요청`(그리고 인간이 읽을 수 있는 텍스트 내에서의 의미)이 따르도록 사용된 HTTP 버전의 acknowledgment로 구성됩니다.\r\n2. 다음 줄들은 각각 `특정 HTTP 헤더`를 나타는데, 전송되는 데이터에 관한 정보(이를테면, 타입, 데이터 크기, 사용된 압축 알고리즘, 캐시에 대한 힌트 등)를 클라이언트에게 제공합니다. 클라이언트의 요청에 대한 HTTP 헤더 블록과 유사하게, 이 HTTP 헤더들은 빈 줄로 끝나는 블록을 형성합니다.\r\n3. 마지막 블록은 데이터 블록으로 (존재한다면) 데이터를 포함합니다.\r\n\r\n\r\n\r\n> 서로 유사한 형태의 REQUESTS와 RESPONSES\r\n\r\n![HTTPMsgStructure2](https://media.prod.mdn.mozit.cloud/attachments/2016/08/31/13827/2737306def7d994b1785d5879f0f5704/HTTPMsgStructure2.png)\r\n\r\n웹 페이지의 성공적인 수신:\r\n\r\n```markdown\r\nHTTP/1.1 200 OK\r\nDate: Sat, 09 Oct 2010 14:28:02 GMT\r\nServer: Apache\r\nLast-Modified: Tue, 01 Dec 2009 20:18:22 GMT\r\nETag: \"51142bc1-7449-479b075b2891b\"\r\nAccept-Ranges: bytes\r\nContent-Length: 29769\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)\r\n\r\n```\r\n\r\n요청된 자원이 존재하지 않는다는 내용의 알림\r\n\r\n```markdown\r\nHTTP/1.1 404 Not Found\r\nDate: Sat, 09 Oct 2010 14:33:02 GMT\r\nServer: Apache\r\nLast-Modified: Tue, 01 May 2007 14:24:39 GMT\r\nETag: \"499fd34e-29ec-42f695ca96761;48fe7523cfcc1\"\r\nAccept-Ranges: bytes\r\nContent-Length: 10732\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)\r\n```\r\n\r\n**HTTP REQUEST STATUS CODE 응답 상세 코드**\r\n\r\nHTTP 응답 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 알려줍니다. 응답은 5개의 그룹으로 나누어집니다\r\n\r\n정보를 제공하는 응답, 성공적인 응답, 리다이렉트, 클라이언트 에러, 그리고 서버 에러.\r\n\r\n가장 대표적인 것은 200, 400, 500 번대의 에러입니다.\r\n\r\n| STATUS CODE                  | DESCRIPTION                                                  |\r\n| ---------------------------- | ------------------------------------------------------------ |\r\n| `200`: OK                    | 가장 반가운 상태입니다. 요청이 성공적으로 되었습니다. 성공의 의미는 HTTP 메소드에 따라 달라집니다: GET: 리소스를 불러와서 메시지 바디에 전송되었습니다. HEAD: 개체 해더가 메시지 바디에 있습니다. PUT 또는 POST: 수행 결과에 대한 리소스가 메시지 바디에 전송되었습니다. TRACE: 메시지 바디는 서버에서 수신한 요청 메시지를 포함하고 있습니다. |\r\n| `400`: Bad Request           | 이 응답은 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미합니다.<br />401: unauthorized - 인증되지 않은 요청 (주로 login 되지 않은 경우 발생)<br />403: Forbidden - 콘텐츠에 접근할 권리를 가지고 있지 않는 요청. (주로 권한이 없는 유저가 요청하여 발생)<br />404: Not found - 서버는 요청받은 리소스를 찾을 수 없습니다. (주로 잘못된 링크를 작성하여 발생하거나 예전에 있던 페이지가 없어져서 발생) |\r\n| `500`: Interner server Error | 이 응답은 클라이언트 요청에서는 문제가 없었으나 요청에 대한 처리를 해주는 서버쪽에 문제가 생겼을 때의 상태코드입니다.<br />일명 `서버가 터졌다`는 상황이 많습니다. |\r\n\r\n`HTTP REQUEST STATUS 코드`에 대한 더욱 자세한 내용은 아래 링크를 통해 확인해주세요.\r\n\r\n[HTTP 요청 STATUS CODE](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)\r\n\r\n---\r\n\r\n다음은 `개발자를 괴롭히지만 없어서는 안되는 CORS와 SOP`에 대한 포스팅을 해보겠습니다.\r\n\r\n---\r\n\r\nCopyright - likelionSungGuk\r\n\r\n");

/***/ }),

/***/ 2826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"WAS와 웹서버는 뭐가 다른거지?\"\r\ndate: \"2021.01.01\"\r\ntags: \r\n  - WAS\r\n  - 웹서버\r\n  - NGINX\r\n  - Apache\r\n  - Tomcat\r\n---\r\n\r\n# [헷갈리는 개념 비교] \r\n\r\n## 1. Web 서버란\r\n\r\n- 클라이언트가 서버에 페이지 요청을 하면 요청을 받아` 정적 컨텐츠(.html, .png, .css등)`를 제공하는 서버\r\n- WEB서버는 클라이언트에서 요청이 올 때 가장 앞에서 요청에 대한 처리를 진행합니다.\r\n- 작동 Process\r\n  - 1. 클라이언트 콘텐츠 요청\r\n    2. 만약 정적 콘텐츠 요청이면, 웹서버에서 정정 콘텐츠 클라이언트에게 전달\r\n       만약 동적 콘텐츠 요청이면, 웹서버에서 처리하기 버거움. -> WAS에게 요청\r\n    3. 끝.\r\n- 대표적인 웹서버: Apache, nginx\r\n\r\n![web_server](/assets/img/web_server.png)\r\n\r\n\r\n\r\n## 2. WAS란\r\n\r\n![20200819_000733](/assets/img/middle_ware.png)\r\n\r\n- DB조회 혹은 로직처리가 요구되는 `동적 콘텐츠`를 제공하기 위해 만들어진 **Web Application Server**입니다. \r\n- 좀 더 구체적으로는 분산 트랜잭션, 보안, 메시징, 쓰레드 처리 등의 기능을 처리하는 분산환경에서 사용되는 미들웨어입니다.\r\n- 클라이언트에서 DB서버로 데이터를 직접 요청하는 것에 여러 문제가 있었다. 첫 번째는 보안 문제, 두 번째는 클라이언트와 DB의 갯수가 많아지면서 로직이 복잡해진다는 것이다.  따라서, 미들웨어라는 새로운 개념이 생겼는데, 클라이언트는 이 미들웨어에 자신의 요청을 모두 전송하고 이 미들웨어는 가운데에서 이를 db서버에 전달하고 response를 받아 다시 클라이언트에 전달하는 역할을 수행합니다. \r\n- JSP, Servlet이 구동할 수 있는 환경을 제공합니다.\r\n- 컨테이너, 웹컨테이너 혹인 서블릿 컨테이너라고도 부릅니다.\r\n\r\n- 동작 프로세스\r\n\r\n  1. 웹서버로부터 요청이 오면 컨테이너가 받아서 처리\r\n\r\n  2. 컨테이너는 web.xml을 참조하여 해당 서블릿에 대한 쓰레드 생성하고 httpServletRequest와 httpServletResponse 객체를 생성하여 전달한다.\r\n\r\n  3. 컨테이너는 서블릿을 호출한다.\r\n\r\n  4. 호출된 서블릿의 작업을 담당하게 된 쓰레드(2번에서 만든 쓰레드)는 doPost()또는 doGet()을 호출한다.\r\n\r\n  5. 호출된 doPost(), doGet() 메소드는 생성된 동적 페이지를 Response객체에 담아 컨테이너에 전달한다.\r\n\r\n  6. 컨테이너는 전달받은 Response객체를 HTTPResponse형태로 바꿔 웹서버에 전달하고 생성되었던 쓰레드를 종료하고 httpServletRequest, httpServletResponse 객체를 소멸시킨다.\r\n\r\n- 대표 : Tomcat, Jeus, JBoss\r\n\r\n![](/assets/img/WAS.png)\r\n\r\n\r\n\r\n## 3. 웹서버와 WAS 구조\r\n\r\n![](/assets/img/web-service-architecture.png)\r\n\r\n웹서버는 다양한 구조를 가질 수 있습니다.\r\n\r\n- Client -> Web Server -> DB\r\n- Client -> WAS -> DB\r\n- Client -> Web Server -> WAS -> DB\r\n\r\n이 중에서 가장 마지막 구조인 `Client -> Web Server -> WAS -> DB`가 위의 도식화된 형태이고, 이렇게 가장 많이 구분되어 있는 구조가 좋다고 평가받고 있습니다. 그 이유는 아래 상세히 설명하겠습니다.\r\n\r\n\r\n\r\n## 4. 웹서버와 WAS 구분 이유\r\n\r\n- 일단 WAS는 웹서버의 역할도 맡을 수 있습니다.\r\n- 이전에는 **정적콘텐츠까지 WAS에서 하기에는 서버에 부하를 많이 줘 비효율적**이어서 나눴었습니다. 하지만 최근에는 WAS의 성능이 더 올라갔기 때문에 굳이 성능상의 이유 때문에 둘을 나누지는 않는다고 합니다. \r\n- 그럼에도 불구하고 이 두 가지를 구분해서 쓰고 있는데 이유는 다음과 같습니다.\r\n  1.  물리적 분리로 인한 보안 강화 \r\n     - WAS는 db서버를 호출하는 역할을 맡는데, 이 db서버에는 회원정보와 같이 가장 중요한 정보들이 들어있습니다. 따라서 클라이언트와 가장 가까이 있는 웹서버의 보안이 뚫려도, WAS에서 db에 접근하는 한 단계가 더 생기므로 보안에 상대적으로 용이합니다. 반면, 웹서버와 WAS를 구분하지 않는 경우 한 번에 다 뚫리기 때문에 보안에 취약하다고 볼 수 있습니다. \r\n  2. 여러 WAS를 연결할 수 있음\r\n     - java서버, C서버, php서버 등 하나의 웹서버를 통해 여러 서비스가 가능하다.\r\n  3. ***장애 극복*** - 만약 WAS에 오류가 났을 경우, 웹서버에서 이를 인지하고 사용자가 오류가 난 WAS에 접근하지 못하도록 막고 WAS를 재시작합니다. 이때, 이 사용자가 WAS를 호출하는 요청을 하기 전까지는 웹서버에서 정적콘텐츠(html, png) 등을 보여주고 있기 때문에 오류상황을 인지하지 못할 수 있습니다. \r\n- 특히나 서비스의 규모가 커질수록 WAS와 웹서버를 더욱 필수적으로 분리합니다.\r\n- Web Server를 WAS 앞에 두고 필요한 WAS들을 Web Server에 플러그인 형태로 설정하면 더욱 효율적인 분산 처리가 가능하다.\r\n\r\n\r\n\r\n---\r\n\r\n출처 Refs.\r\n\r\nhttps://gmlwjd9405.github.io/2018/10/29/web-application-structure.html\r\n\r\nhttps://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html\r\n\r\nhttps://jeong-pro.tistory.com/84\r\n\r\nhttps://okky.kr/article/243427\r\n\r\n");

/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"요것이 웹팩이다!\"\ndate: \"2022-02-22\"\ntags:\n  - webpack\n---\n\n\n\n이 글은 [프론트엔드 개발 환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html#5-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)를 메인으로 해서 간단한 html, css, js를 활용한 프로젝트를 만들어보며 제가 이해한 대로 웹팩을 설명해 놓은 글입니다.\n\n\n\n# 요것이 웹팩 (Webpack)이다!\n\n## 1. 웹팩이란?\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다.png)\n\n오픈 소스 자바스크립트 **모듈 번들러**로써 여러개로 나누어져 있는 파일들을 **하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리**입니다.\n\n이러한 Bundler의 가장 대표적인 것이 `웹팩`이고, `Parcel`, `Rollup`등이 더 있습니다.\n\n![과거 일반적인 모습의 html, css, js 구조\n각각의 파일들을 따로 받아오는 것은 네트워크 낭비가 크다.](/assets/img/요것이웹팩이다%201.png)\n\n과거 일반적인 모습의 html, css, js 구조\n각각의 파일들을 따로 받아오는 것은 네트워크 낭비가 크다.\n\n### 1.1 웹팩을 사용하는 이유?\n\n1. **여러 파일의 자바스크립트 코드를 압축하여 최적화** 할 수 있기 때문에 **로딩에 대한 네트워크 비용을 줄일 수 있습니다. \n⇒ 로딩 속도를 높일 수 있습니다.**\n2. **모듈 단위로 개발이 가능하여, 가독성과 유지보수가 쉽습니다.**\n    - 예를 들어, 기능별로 나눈다고 하면 Create.js, Read.js, Update.js, Delete.js 스크립트를 각각 만들어서 해당 기능에 필요한 코드들끼리 모아두고 다른 것들끼리는 분리해서  javascript 파일을 용도별로 구분해서 작성하는 것이 개발자 입장에서는 편리합니다. 어차피 따로 만들어도 Webpack으로 Build(Bundling)을 하면 **하나의 JS 파일**로 만들어 주니까요.\n3. **최신 자바스크립트 문법을 지원하지 않는 브라우저에서 사용할 수 있는 코드로 쉽게 변환시켜 줍니다.**\n    - 브라우저의 종류에 따라, 브라우저 버전에 따라서 최신 Javascript문법을 지원하지 않을 수도 있습니다. Webpack을 사용해서 빌드하면 최신 Javascript 문법을 사용한 코드를 이전 버전에서도 호환이 가능하도록 변경해줍니다.\n4. **JS 모듈화 이슈**\n    - Javascript를 각각 불러오도록 하면 불러오는 순서에 따라 영향을 받는 이슈.\n    - 스코프가 같은 위치에 동일 변수가 있으면 변수가 원하는 대로 작동하지 않습니다.\n    - Code Example\n      \n        ```html\n        # index.html\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Document</title>\n        </head>\n        <body>\n          <h1 id=\"title\">Hello world!</h1>\n        \n          <script src=\"./js/A.js\"></script>\n          <script src=\"./js/B.js\"></script>\n          <script src=\"./js/C.js\"></script>\n            \n        </body>\n        </html>\n        ```\n        \n        ```jsx\n        // A.js\n        const text = \"AAAAA\";\n        let target = document.getElementById(\"title\")\n        target.innerText = text\n        ```\n        \n        ```jsx\n        // B.js\n        const text = \"BBBBB\";\n        let target = document.getElementById(\"title\")\n        target.innerText = text\n        ```\n        \n        ```jsx\n        // C.js\n        const text = \"CCCCC\";\n        let target = document.getElementById(\"title\")\n        target.innerText = text\n        ```\n        \n        - 이 경우 H1태그에는 어떤 텍스트가 들어갈까요?\n            - 정답\n              \n                AAAAA\n            \n            - 이유\n              - A/B/C 모두 글로벌 영역에서 text 변수를 const 로 지정하고 있습니다. 동일 영역에서 const로의 변수 선언은 가장 먼저 불린 A.js의 `const text = \"AAAAA\"`가 선언됩니다.\n\n## 2. 웹팩의 구성\n\n### **2.1. entry** ➡️\n\n> entry 속성은 웹팩에서 웹 자원을 변환하는 데 필요한 진입점이자 자바스크립트 파일 경로입니다.\n> \n\nentry 속성에서 번들링하고 싶은 파일들을 선언합니다.\n\n웹팩은 엔트리를 통해서 필요한 모듈들을 로딩하고, 하나의 파일로 묶는 과정을 진행합니다.\n\n### **2.2. output 🎯**\n\n> output 속성은 웹팩을 돌리고 난 결과물의 파일 경로를 의미합니다.\n> \n\n번들된 결과물을 처리할 위치를 output에 기록합니다.\n\n### **2.3. loader 🚩**\n\n> 웹팩이 웹 애플리케이션을 해석할 때 JS 파일이 아닌 HTML, CSS, IMG, 폰트 등을 변환할 수 있도록 도와주는 속성입니다.\n> \n\n웹팩은 모든 파일을 모듈로 관리하지만 JS 만 알고 있어서 **다른 파일들을 웹팩이 이해할 수 있도록 변경해주는 것이 로더의 역할**입니다.\n\n### **2.4. plugin 🔗**\n\n> 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성입니다.\n> \n\n로더랑 비교하면 **로더는 파일을 해석하고 변환하는 과정에 해당**하고 **플러그인은 해당 결과물의 형태를 바꾸는 과정에 해당**합니다.\n\n## 3. Webpack 실습으로 알아보기\n\n```bash\n$ npm i webpack webpack-cli --save-dev\n```\n\n[💡github 바로가기](https://github.com/likelionSungGuk/webpack/tree/2aa56fbf4f0166f5082c2d43d9e6a3a181404e55)\n\n### 3.1 `webpack.config.js` 파일 직접 작성\n\n```jsx\n// webpack.config.js\nconst path = require('path');\n\nmodule.exports = {\n  mode: 'development',\n\n  entry: {\n    main: './js/A.js',\n  },\n\n  output: {\n    filename: '[name].js',  // entry의 이름을 뜻합니다. (여기서는 main)\n    path: path.resolve('./dist'), // .resolve 를 이용해서 절대 경로를 작성 (OS)\n\t\t\t\t\t\t\t\t\t\t\t\t\t// 기본적으로 dist로 설정되어있으나 웹에서는 public으로 많이 함\n  },\n};\n```\n\n- mode:  `'production' | 'development' | 'none'` 중 하나를 선택.\n    - production\n        - DefinePlugin 의 process.env.NODE_ENV 를 production 으로 설정합니다.\n        - `최적화를 가장 중점적`으로 두고 빌드하는 속성\n          - production 모드에서는 코드가 가장 짧고 간결하게 빌드됩니다.\n    - development\n        - DefinePlugin 의 process.env.NODE_ENV 를 development 로 설정합니다.\n        - `빠른 빌드`를 중심으로 두고 빌드하는 속성\n          - development 모드에서 실제로 빌드를 해보면 수 많은 주석이 함께 작성됩니다.\n          - 개발자가 개발하면서 진행상황을 최대한 알아볼 수 있도록 지원합니다.\n    - none\n        - 기본 최적화 옵션으로 설정합니다.\n    \n- entry: 엔트리는 애플리케이션 번들링을 시작할 지점을 의미합니다. 즉, 어떤 파일들을 bundling할 것인가에 대한 경로입니다.\n  \n    entry의 이름이 main이고, 이 main은 `./js/A.js` 입니다. 즉, build를 하면 dist 폴더 아래에 main이라는 이름으로 A.js가 bundling됩니다.\n    \n    - SPA와 MPA Entry차이\n      \n        ```\n        module.exports = {\n          // SPA\n          entry: './index.js'\n        \n          // MPA\n          entry: {\n            main: './main.js',\n            contact: './contact.js'\n          }\n        }\n        ```\n        \n\n💡[웹팩으로 번들링 했을 때와 안했을 때의 차이](https://github.com/likelionSungGuk/webpack/tree/654efb034e021cd4d45cc3d736810824673c9d6d)\n\n```html\n# Bundling 전 index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  <h1 id=\"title\">Hello world!</h1>\n  <h3 id=\"B\"></h3>\n  <h3 id=\"C\"></h3>\n\n  <script src=\"./js/A.js\"></script>\n    \n</body>\n</html>\n```\n\n- 돌발QUIZ: 예상되는 화면은?\n  \n    ![요것이웹팩이다](/assets/img/요것이웹팩이다%202.png)\n    \n\n```html\n# Bundling 후\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  <h1 id=\"title\">Hello world!</h1>\n  <h3 id=\"B\"></h3>\n  <h3 id=\"C\"></h3>\n\n  <script src=\"./main.js\"></script>\n    \n</body>\n</html>\n```\n\n- 돌발QUIZ: 예상되는 화면은?\n  \n    ![요것이웹팩이다](/assets/img/요것이웹팩이다%203.png)\n    \n\n⇒ 번들링을 하면 Import로 연결되어있는 Javascript 파일들을 모두 하나(`main.js`)로 모아주기 때문에 B.js와 C.js에 있는 BBB와 CCC가 모두 화면에 나옵니다.\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%204.png)\n\n### 3.2 loader & plugin\n\n위에서 언급했듯이 로더는 자바스크립트가 아닌 파일들을 번들링해주는 기능을 합니다.\n\n대표적인 것이 html, css, img파일 등이 있죠.\n\n로더는 아래와 같은 규칙으로 작성됩니다.\n\n[💡커스텀 로더 코드 바로가기](https://github.com/likelionSungGuk/webpack/tree/c522b7b520103488528b1bedbf0e839ee1bd1b80)\n\n```jsx\nmodule : {\n\trules: {\n\t\ttest: '가지고올 파일 형식 정규식',\n\t\tuse: [\n\t\t\t{\n\t\t\t\tloader: '사용할 로더 이름',\n\t\t\t\toptions: { 사용할 로더 옵션 }\n\t\t\t}\n\t\t]\n\t}\n}\n```\n\n커스텀 로더를 하나 만들어 보겠습니다.\n\n```jsx\n// customLoader.js\nmodule.exports = function customLoader(content) {\n  console.log(\"customLoader 동작!\")\n  return content\n}\n```\n\n단순히 로그를 찍은 뒤 content를 그대로 반환하는 간단한 로더입니다.\n\n```jsx\n// webpack.config.js\nmodule: {\n  rules: [{\n    test: /\\.js$/, // .js 확장자로 끝나는 모든 파일\n    use: [path.resolve('./customLoader.js')] // 방금 만든 로더를 적용한다\n  }]\n}\n```\n\njs로 끝나는 모든 확장자는 이 로더를 한 번씩 돌리도록 하는 설정입니다.\n\n- 돌발 QUIZ: build를  때 “customLoader 동작!”이라는 로그는 몇 번 나올까요?\n  \n    ![요것이웹팩이다](/assets/img/요것이웹팩이다%205.png)\n    \n\n앞서 언급했듯이 로더는 주로 Javascript가 아닌 파일들을 위해 만들어져있는데 예시를 자바스크립트로 만들어 버렸네요. 자주쓰이는 Loader들을 살펴보며 실제로는 어떻게 활용되는지 알아보겠습니다.\n\n## 4. 자주쓰이는 Loader\n\n### 4.1 css-loader\n\n[💡css-loader 코드 바로가기](https://github.com/likelionSungGuk/webpack/tree/231957299996bad792a750638e4f72d0c43a9e3b)\n\n```bash\n$ npm install -D css-loader\n```\n\n- 돌발QUIZ: `-D`는 무슨 뜻일까요?\n  \n    D, --save-dev (Package will appear in your `devDependencies`)\n    \n    개발의존성 모드.\n    \n    개발할 때만 필요한 패키지가 있습니다. 이런 경우에는 -D를 붙여서 설치하면 \n    \n    런타임에도 필요한 패키지가 있을 경우에는 -D를 생략하면 됩니다.\n    \n    dev에서만 필요하고 prod에서는 필요하지 않은 패키지의 경우 이렇게 설치하여 사용합니다.\n    \n    - `npm install {패키지}` == `npm install --save {패키지}`\n    - `npm install -D {패키지}` == `npm install --save-dev {패키지}`\n    \n    ![요것이웹팩이다](/assets/img/요것이웹팩이다%206.png)\n    \n\n설치를 하고 `webpack.config.js` 에 로더 설정을 추가해줍니다.\n\n```jsx\nmodule: {\n    rules: [\n      {\n        test: /\\.css$/, \n        use: [\"css-loader\"], // css-loader를 적용한다\n      },\n    ],\n  }\n```\n\nbuild후 main.js\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%207.png)\n\n- `style.css`파일이 같이 빌드되어있는 것을 확인할 수 있습니다.\n\n그렇다면 배경이 초록색으로 변경되었을까요?\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%208.png)\n\nNO. ???\n\nstyle-loader에서 알아봅시다.\n\n### 4.2 **style-loader**\n\n[💡style-loader코드 바로가기](https://github.com/likelionSungGuk/webpack/tree/06209b896af27a128ccd0a05012b3bdb3e1f1fe3)\n\n모듈로 변경된 스타일 시트는 돔에 추가되어야만 브라우저가 해석할 수 있습니다. `css-loader`로 처리하면 CSS가 자바스크립트 코드로 변경만 되었을 뿐 돔에 적용되지는 않은 상황이다. 때문에 스타일이 적용되지 않은 것입니다.\n\nstyle-loader는 javascript로 변경된 스타일을 돔에 추가하는 로더입니다.\n\n❕그러므로 css-loader와 style-loader는 대부분 함께 사용됩니다.\n\n```bash\n$ npm install -D css-loader\n```\n\n설치 후 webpack.config.js 추가\n\n```jsx\nmodule: {\n  rules: [\n    {\n      test: /\\.css$/, // .css 확장자로 끝나는 모든 파일\n      use: [\"style-loader\", \"css-loader\"], // style-loader를 앞에 추가한다\n    },\n  ],\n}\n```\n\n특이한 점은 뒤에 설치된 style-loader를 use 배열의 앞쪽에 적었다는 점입니다. 이 배열은 뒤에서 부터 읽어들여 로더를 실행한다고 합니다. 따라서 css를 js로 바꾸는 css-loader먼저 실행하고 그 뒤에 style-loader를 실행해야 하므로 위와 같은 순서대로 작성해줘야 합니다.\n\n```jsx\n$ npm run build\n```\n\n![드디어 못생긴 초록색 배경 스타일(background: green)이 적용되었네요.](/assets/img/요것이웹팩이다%209.png)\n\n드디어 못생긴 초록색 배경 스타일(background: green)이 적용되었네요.\n\n이 외에 file-loader, url-loader, babel-loader들이 자주 사용되는 로더라고 합니다.\n\n## 5. 플러그인\n\n로더가 “파일” 단위로 처리한다면 플러그인은 “번들된 결과물”을 처리합니다.\n\n특징점인 것은 플러그인 배열에는 생성자를 사용해서 만들어줘야 한다는 점입니다.\n\n```jsx\n// webpack.config.js \nvar webpack = require('webpack'); \nvar HtmlWebpackPlugin = require('html-webpack-plugin'); \nmodule.exports = {\n  mode : '', \n\tentry : {}, \n\toutput : {}, \n\tmodule : {},\n plugins : [ \n\tnew HtmlWebpackPlugin(), \n\tnew webpack.ProgressPlugin(), \n\tnew webpack.optimize.UglifyJsPlugin()\n\t // ... ] \n}\n\n```\n\n[💡플러그인 바로가기](https://github.com/likelionSungGuk/webpack/tree/47df871e7cb317e490948627b9cc3165a2829c23)\n\n가장 이해하기 편한 `HtmlWebpackPlugin`의 사용 사례를 살펴보겠습니다.\n\n```bash\n$ npm install --save-dev html-webpack-plugin\n```\n\n`HtmlWebpackPlugin` 은 번들링 했을 때 최종적으로 완성된 Html을 같이 export해주는 기능을 제공합니다.\n\n플러그인은 각각의 플러그인별로 사용법이 많이 차이가 난다고 합니다. 따라서 webpack 공식 사이트에서 제공해주는 Guide를 따라 가며 진행할 것을 권장드립니다.\n\n[HtmlWebpackPlugin | webpack](https://webpack.js.org/plugins/html-webpack-plugin)\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%2010.png)\n\n상단에 require, 하단에 생성자 생성을 진행해줍니다.\n\n```jsx\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst path = require('path');\n\nmodule.exports = {\n  mode: 'development',\n\n  entry: {\n    main: './src/js/A.js',\n  },\n  output: {\n    filename: '[name].js',\n    path: path.resolve('./dist'),\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.css$/, // .css 확장자로 끝나는 모든 파일\n        use: [\"style-loader\", \"css-loader\"], // style-loader를 앞에 추가한다\n      },\n    ],\n  },\n  plugins: [new HtmlWebpackPlugin()]\n};\n```\n\n이후 `npm run build`\n\n```html\n// index.html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Webpack App</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><script defer src=\"main.js\"></script></head>\n  <body>\n  </body>\n</html>\n```\n\n기존에는 따로 만들어줬던 index.html 이었지만 이번에는 플러그인이 직접 index.html을 생성해주었습니다. index.html을 브라우저로 열어보겠습니다.\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%2011.png)\n\n이상하게도 스타일은 그대로 적용이 되었는데, 기존 h1태그 들이 사라져 있습니다.\n\n우리가 원하는 것은 기본 index.html을 템플릿으로 해서 새롭게 빌드해주는 것이었는데 그렇게 동작하지 않았네요.\n\n이것을 가능하게 하려면 템플릿을 지정하는 설정을 추가해줘야 합니다.\n\n`webpack.config.js`\n\n```jsx\nplugins: [new HtmlWebpackPlugin({\n  template: './index.html', // 템플릿이 될 html path를 지정\n  filename: './output.html' // 빌드될 html의 이름/path 지정\n}\n```\n\n의도적으로 이름을 `output.html` 로 지어봤습니다.\n\n![요것이웹팩이다](/assets/img/요것이웹팩이다%2012.png)\n\n`output.html`\n\n```jsx\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n<script defer src=\"main.js\"></script></head>\n<body>\n  <h1 id=\"title\">Hello world!</h1>\n  <h3 id=\"B\"></h3>\n  <h3 id=\"C\"></h3>\n\n  <script src=\"./js/A.js\"></script>\n    \n</body>\n</html>\n```\n\n우리가 원하던 대로 index.html 템플릿을 그대로 가져왔네요.\n\n—-END—-\n\n---\n\n참고자료\n\n[npm-install | npm Docs](https://docs.npmjs.com/cli/v8/commands/npm-install)\n\n[npm install (plugin) --save와 --save-dev 차이점](https://ithub.tistory.com/165)\n\n[개발(Development) 모드는 어떻게 작동할까?](https://ui.toast.com/weekly-pick/ko_20191212)\n\n[프론트엔드 개발환경의 이해: 웹팩(기본)](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html#5-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)\n\n[Writing a Plugin | webpack](https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture)");

/***/ }),

/***/ 4157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"똑똑하게 ASSETS관리하는 EIMA 라이브러리 추천합니다!\"\ndate: \"2022.10.12\"\ntags:\n- 리액트\n- 이미지\n- EIMA\n- 라이브러리\n---\n\n\n\n## 1. Intro\n\n개발을 하다보면 png, svg 파일 등의 Assets들을 import해와서 써야 하는 경우가 빈번하게 발생합니다. 이 과정을 반복하다보면 크게 두 가지 귀찮은 상황이 발생하는데 하나는 import문이 길어진다는 것이고 또 다른 하나는 다양한 곳에서 활용되는 assets은 A, B, C… 등 n개의 여러 파일에 걸쳐서 계속 import 되고 쓰여야 한다는 것이죠. 그때마다 해당 소스의 path를 상대경로로 가지고 오는 것도 꽤나 귀찮은 반복작업입니다.\n\n### EIMA 라이브러리 소개\n\n이런 불편한 점을 개선할 수 있도록 도와주는 좋은 라이브러리를 찾아 공유합니다.\n\n[https://github.com/Jonghakseo/EimaJS](https://github.com/Jonghakseo/EimaJS)\n\nEIMA라이브러리는 하나의 디렉토리 안에 있는 assets들을 [상위dir _ 하위dir _ 이름]으로 구분지어 쉽게 import하고 이름을 검색할 수 있도록 만들어주는 똑똑한 기능을 제공합니다.\n\n예를들어 `img/abc/def/sky.png` 라는 이미지가 있으면 `ABC_DEF_SKY_PNG` 라는 이름으로 해당 path를 불러올 수 있도록 도와줍니다.\n\n```\n// assets.js\nimport ABC_DEF_SKY_PNG from \"img/abc/def/sky.png\";\n\nconst ASSETS = {\n  ABC_DEF_SKY_PNG\n}\nexport default ASSETS\n```\n\n또 해당 디렉토리를 watch하고 있다가 새로운 리소스가 들어오면 그 리소스에 대한 이름과 path도 바로 만들어서 assets.js에 추가해주어 리소스를 추가한 뒤 또 assets.js에 추가해야되는 번거로움을 없애주었습니다.\n\neima를 설치하고 `eima init` 명령어를 입력하면 기본적으로 생기는 것이 eima.json입니다.\n\n```tsx\n// eima.json\n{\n\t\"target\":\"es6\",\n\t\"hideSize\":false,\n\t\"lintPath\":\"src\",\n\t\"paths\":[{\"assets\":\"src/img\",\"out\":\"src/assets.js\",\"vName\":\"ASSETS\"}]\n}\n```\n\n- target은 ECMASCRIPT 문법을 뜻하며 es6로 할 경우 익숙한 import from 으로 변환시켜 줍니다.\n- 여기서 중요하게 봐야할 것은 paths인데, paths내부의 **assets은 타겟 디렉토리의 path**를 넣어주고 out은 어떤 위치에 assets를 import하여 이름과 path를 반환해주는 js파일의 path와 name, 확장자까지 적어줍니다. vName은 export할 대표 닉네임이라 보시면 됩니다.\n- 위와 같이 설정하면 eima.json은 디렉토리 최상단, assets.js라는 이름의 파일은 src 아래 생기고 닉네임은 ASSETS로 설정됩니다.\n- 이 설정파일을 완료한 뒤 `eima start` 명령어를 입력하면 assets.js 가 생기면서 ASSETS의 이름과 path가 생성됩니다.\n\n> 💡주의: eima를 리액트 프로젝트 내부에 설치하면 eima 명령어가 제대로 동작하지 않습니다. \n> npm i eima -g 명령어로 글로벌로 설치하시면 eima의 명령어를 실행할 수 있습니다.\n\n\n\n## 2. SVG 파일을 ReactComponent로 사용하기\n\n기존에는 SVG 파일을 리액트 컴포넌트로 사용하기 위해 다음과 같은 문법을 활용하였습니다.\n\n```tsx\nimport { ReactComponent as FileUpload } from '../src/img/icon/file_upload.svg';\n```\n\n하지만 새롭게 EIMA 라이브러리를 쓰게 되면서 import 자체를 ReactComponent로 해오기는 어려웠습니다. 이를 해결하기 위해서 svg의 ASSETS src 를 전달하면 ReactComponent를 만들어 주는 컴포넌트를 만들었습니다.\n\n```tsx\nimport React from 'react'\nimport styled from 'styled-components';\n\ninterface SvgComponentProps {\n  src: string;\n  className: string;\n  disabled?: boolean;\n}\n\nconst SvgComponent = (props: SvgComponentProps) => <StyledObject type=\"image/svg+xml\" data={props.src} className={props.className} disabled={props.disabled} />;\n\nexport default SvgComponent;\n\ninterface StyledObjectProps {\n  disabled?: boolean;\n}\n\nconst StyledObject = styled.object<StyledObjectProps>`\n  filter: ${(props) => (props.disabled ? `invert(50%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%) contrast(100%)` : ``)};\n`;\n```\n\n여기서 특이한 점은 object를 썼다는 점인데요, svg를 사용하는 다양한 방식이 있었지만 svg의 색상을 제어해야했던 상황에서 object 태그가 그나마 유용하다고 여겨졌습니다.\n\n[웹에서 SVG 사용하기](https://svgontheweb.com/ko/)\n\n\n\n### 2-1. Object태그 에러 핸들링\n\nobject태그로 disabled가 props로 왔을 때 색상 변경까지 진행할 수 있어서 이제 다 되었구나 생각하고 있었을 때 예상치 못한 상황이 하나 펼쳐졌습니다. 마우스 커서를 보면 아이콘 바로 위에 위치했을 때는 포인터 커서가 아닌 일반커서형태로 나오고 클릭도 되지 않습니다. 해당 아이콘 영역을 벗어나면 다시 일반 버튼과 동일하게 동작하게 되는 것이죠.\n\n<video src=\"/assets/img/object태그이슈.mp4\" width=\"100%\" autoplay controls loop></video>\n\n바로 svg가 상위의 버튼 컴포넌트의 클릭 이벤트를 막고 있었습니다.\n\n따라서 css에 `pointer-events: none;` 을 추가해주고 나서야 드디어 정상적으로 동작할 수 있게 되었습니다.\n\n[How to bind click event to object tag?](https://stackoverflow.com/questions/25916403/how-to-bind-click-event-to-object-tag#:~:text=1.%20Issue%3A%20Event%20handling)\n\n\n\n### 2-2. 아이콘마다 색상이 다른 이슈\n\nSvgComponent로 아이콘을 래핑해서 ReactComponent화 해주어도 문제가 되는 것은 색상 이슈였습니다. 아이콘의 색상이 원하던 색이 그대로 나오지 않는 상황이었는데 원인은 크게 두 가지가 있었습니다.\n\n1. svg는 기존 class에 선언된 css 영향을 받지 않는다.\n2. svg 파일별로 각각의 색상값이 존재하고 그 값이 다르다.\n\n```tsx\n// ex: file_download.svg\n<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#000000\"> ...\n\n// ex2: ic-cal-area.svg\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">...\n```\n\n예를 들어 file_download.svg 파일은 기본적으로 검정색 색상이 fill로 적용되어있고 이와는 달리 ic-cal-area 파일은 fill 색상이 따로 지정되어있지 않는 특성을 가지고 있습니다.\n\n따라서 각각의 svg파일에 기본 색상값 #CCC를 넣어주고 해당 값이 변해야 하는 상황(예를 들어 disabled)에서는 filter 어트리뷰트를 사용하여 색상값을 변경해주었습니다.\n\n<aside>\n💡 SVGR 라이브러리를 활용하면 SVG 파일을 ReactComponent로 변경하여 사용할 수 있게 됩니다. 하지만 개인적으로 EIMA 라이브러리를 설치한데다가 SVGR까지 두 개를 설치하는게 좀 꺼려졌고, 좀 더 원했던것은 각각의 SVG파일이 ReactComponent가 되는 것이 아니라 SVG의 Path만으로 쉽게 ReactComponent를 만들고 싶어서 이번에는 위와 같이 작업하였습니다.\n</aside>\n```javascript\n<img className=\"loading-img\" src={ASSETS.ICON_LOADING_PNG} alt=\"loading-img\" />\n```\n\n\n이런식으로 기존 svg의 경로를 찾아서 src에 직접 넣는 것보다 vsCode와 EIMA의 도움을 받아 내가 추가한 assets의 경로와 이름으로 손쉽게 찾아올 수 있다는 점이 상당히 편리해졌다는 것입니다. 또한 여러개의 페이지에 동일한 이미지 assets들이 import 되고 있는데 이런 부분들은 추후 assets의 경로나 파일이 변경되면 번거롭게 모두 수정해주어야 하고 그에 따라 버그 발생확률도 올라갈 수 있다는 단점이 있습니다. 하지만 이렇게 동일한 asset에 대해 같은 이름을 사용한다면 변경사항이 있더라도 모두 동일하게 적용될 수 있습니다.\n\n이와 같은 과정을 반복하면서 기존 Assets들을 대체해줍니다.\n\n### 3-2. ReactComponent로 import해서 사용하던 SVG 파일 수정 예시\n\n```tsx\n// 기존\nimport { ReactComponent as DoubleArrowRight } from \"./img/icon/double_arrow_right.svg\"\n<DoubleArrowRight className=\"icon\" />\n```\n\n<video src=\"/assets/img/ReactComponent-eima.mp4\" width=\"100%\" autoplay controls loop></video>\n\n```tsx\n// 변환\nimport SvgComponent from './components/SvgComponent';\nimport ASSETS from './assets';\n\n<SvgComponent className=\"icon\" src={ASSETS.ICON_DOUBLE_ARROW_RIGHT_SVG} disabled={this.state.endPageNum - 10 < this.props.curPage || this.state.endPageNum === this.props.curPage} />\n```\n\n이렇게 SVG의 src path를 SvgComponent에 props으로 내려주는 방식으로 아이콘을 쉽게 ReactComponent화 해서 활용할 수 있습니다.\n\n\n\n## 4. 사용법\n\nEima를 도입하고자 한다면 다음과 같이 쓸 수 있습니다.\n\n터미널을 두  개 이상 켭니다.\n\n그래서 하나는 로컬 서버로 사용하고 또 다른 하나는 eima를 사용합니다. (저는 git용으로 3개씩 켜서 쓰고 있습니다.)\n\n![eima사용법.png](/assets/img/eima사용법.png)\n\n이렇게 되면 assets가 바라보고 있는 디렉토리에 새로운 assets이 추가될 때마다 assets.js 에 해당 assets의 패스와 이름이 자동으로 추가되어 손쉽게 사용할 수 있게 됩니다.\n\n제가 한 번 써보고 괜찮으면 저희 팀에도 소개하려고 했는데 개인적으로 상당히 만족하고 있어서 팀에 소개 후 도입하려고 합니다.\n\n좋은 라이브러리를 만들어주신 [서종학](https://nookpi.tistory.com/97?category=906072) 님께 다시 한 번 감사드립니다 🙇\n");

/***/ }),

/***/ 713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"FEconf 2022 Rescript같이해요\"\ndate: \"2022.10.14\"\ntags:\n- feconf\n- rescript\n- 그린랩스\n---\n\n\n\n# 2022 FEconf Track A - Rescript같이해요\n\n2022년부터 코로나 규제가 서서히 풀리면서 컨퍼런스들이 오프라인으로 진행이 되고 있습니다. 올해 처음 시작한 인프콘도 있었고 Feconf도 10월에 열렸습니다.\n\nFEconf는 그 인기가 대단해서 마치 무슨 BTS 콘서트 티켓팅 하듯이 순식간에 마무리가 되었더라구요. 올해 꼭 오프라인 컨퍼런스를 참여해보고 싶었는데 올해는 쉽지 않을 것 같아 아쉽네요. 내년에는 꼭 참석하고 싶습니다. 집구석에서 온라인으로 컨퍼런스 내용을 정리해보며 스스로 마음을 달래봅니다.\n\n\n\nTrack A 목차\n\n1. **Rescript같이해요**\n\n2. @webtoon/psd 라이브러리 개발기\n\n3. 프론트엔드 DDD를 만나다 \n\n4. 텍스트 에디터? 그게 뭘 만드는건데? \n\n5. Edge 컴퓨팅으로 프론트엔드 포텐셜 끌어올리기 \n\n\n\n## Rescript같이해요\n\n- 발표자: 그린랩스 정미량\n\n- 예상 청자: 프론트엔드 비기너, 타입언어 사용해보고 싶은분, 함수형 프로그래밍에 관심있으신 분 등\n- 발표 내용 요약: Rescript라는 순수함수를 지향하는 함수형 프로그래밍 정적 타입언어를 소개하는 세션이었으며 그린랩스에서 왜 Rescript를 쓰고 있고 그 장점이 무엇인지 알려주셨습니다.\n\n\n\n## Rescript의 특징\n\n- 불변성을 유지하기 위해 변수값을 변경할 수 없다.\n- let만 있다 (재할당이 안되서 const와 오히려 유사)\n- return 이 없다. (마지막 라인이 암묵적 반환됨)\n- import export가 없다. (모든 모듈은 내보내진다.)\n- TS처럼 JS의 superset인가? NO\n  - JS의 기능 중 특별히 선정된 기능만을 다루고 있는 새로운 언어\n\n\n\n## Rescirpt의 소소한 장점\n\n- 모든 JS 라이브러리를 Rescript와 함께 사용 가능하다. (npm, yarn, package.json 모두 사용 가능)\n\n- 파이프 연산자를 통해 한 방향으로 코드를 읽기 편하게 도와준다 (좌 -> 우, 위 -> 아래) \n\n  - JS문법이 달라졌다기 보다 문법적 설탕(Syntactic Sugar)으로 보면 된다.\n\n  - ```javascript\n    // 기존 js\n    A(B(C(...args)))\n    \n    // rescript\n    A -> B -> C\n    ```\n\n- 모든 모듈이 내보내지기 때문에 import, export문이 길어지지 않는다.\n\n\n\n## Rescript의 큰 장점\n\n### 타입추론\n\n- 타입어노테이션 없이 모든 표현식의 타입을 힌들리-밀너 타입으로 추론 가능하다\n\n- ```javascript\n  let add (a, b) => a+b     --- (int, int) => int\n  let add2 (a, b) => a++b  --- (str, str) => str\n  let add3 (a, b) => a+.b  --- (float, float) => float\n  ```\n\n- 이게 가능한 이유는 각 타입별로 연산자를 다르게 사용하는 Rescript의 특징때문이다.\n\n- 이 뿐만 아니고 실제로 타입을 선언한 뒤 비슷한 객체를 새롭게 생성하면 Rescript는 스스로 가장 적합해 보이는 타입을 추론한다.\n\n- variant 타입\n\n  - ```javascript\n    type result = Pending | Success({ data: string }) | Fail\n    ```\n\n  - 위와 같이 Variant 생성자는 타입에 추가 값을 가질 수가 있다.\n\n- 패턴매칭\n\n  - 위 variant 타입을 활용하면 패턴 매칭에 유리하다\n\n  - ```javascript\n    let data = (true, false) // 튜플\n    let component = switch data {\n        | (true, true) => \"tt\"\n        | (true, false) => \"tf\"\n        | (false, true) => \"ft\"\n    }\n    ```\n\n  - 위와 같이 코드를 짜면 Rescript compile 당시 \"ff\" 쌍이 없다는 것을 찾아준다.\n\n- option 타입\n\n  - Rescript에는 nulll, undefined 개념이 없다. 이런 경우 option타입을 이용해서 값이 있는지 없는지를 체크할 수 있다.\n\n\n\n## Rescript를 쓰면서 아쉬웠던 점\n\n### 1. 바인딩\n\nRescript에서는 javascript함수를 사용하기 위해 바인딩을 해야 한다. 이것이 어렵고 귀찮다.\n\n> 바인딩이란?\n>\n> 현재 언어에서 다른 언어로 쓰인 코드를 호출하기 위한 인터페이스\n\n그린랩스에서는 next, nock, jest, react-hook-form, react-linkify 등 다양한 rescript-bindings 라이브러리를 제공합니다.\n\nNEXT 예시 링크: https://www.npmjs.com/package/@greenlabs/rescript-next\n\n\n\n### 2. 작은 커뮤니티\n\nStackoverflow에서 검색해도 나오는 것이 거의 없음 ㅠㅠ\n\n[rescript] 태그로 조회해보면 22년 10월 현재 69개 정도밖에 나오지 않을 정도로 글로벌 레벨에서도 사용빈도가 확실히 낮은 편에 속한다.\n\n\n\n## 느낀점\n\nRescript란 것을 처음 본 느낌은 뭔가 JS와 TS가 합쳐져서 하나의 언어로 다시 태어난 것 같다는 생각이 드네요.\n\n근데 현 프로젝트에 도입한다고 하면 좀 꺼려지는 생각이 우선 듭니다. 뭔가 벌써부터 꼰대가 된 느낌인데... 연사분께서 말씀하신 것처럼 러닝커브가 좀 있기도 하고 기존 JS/TS 조합으로 사용해도 어느 정도 만족하기 때문이 아닐까 싶기도하고 아직 스스로 느끼기에 'JS/TS도 완벽하게 못쓰는 놈이 한 눈 파나' 라는 생각이 들기도 합니다.\n\n그래도 Feconf에서 새로운 언어를 살펴보는 재미가 있었습니다.\n\n막상 써보면 또 다를 수도 있을 것 같아요.\n\n\n\n---\n\n출처: https://www.youtube.com/watch?v=jZNk-Ncez6E\n");

/***/ }),

/***/ 9438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"jekyll Blog 만드는게 글쓰는 것보다 힘든 사람들에게\"\r\ndate: \"2020.12.17\"\r\ntags:\r\n   - jekyll\r\n   - jekyll theme\r\n   - ruby\r\n   - rails\r\n   - blog\r\n   - mac\r\n   - 지킬 테마\r\n---\r\n\r\n# [mac] Jekyll Blog 지킬 블로그 NeXT theme 따라하기\r\n\r\n## 1. 준비사항\r\n\r\n1. github pages 호스팅을 기본으로 합니다.\r\n\r\n   `username.github.io`라는 이름의 repository를 github에 만들어 줍니다.\r\n   \r\n2. `mac OS`에서 `ruby on rails`를 활용합니다. (windows는 좀 더 복잡한 것 같습니다... 추후 windows에서도 해보고 2탄을 올릴까 생각중입니다)\r\n   \r\n\r\nruby 를 설치하지 않고 jekyll 을 활용하고 싶으시다면  [쉽고 빠르게 수준 급의 GitHub 블로그 만들기 - jekyll remote theme으로](https://dreamgonfly.github.io/blog/jekyll-remote-theme/) 포스팅을 참고하세요. \r\n   저의 포스팅에서는 좀 더 custom이 가능한 `ruby on rails`를 활용하는 방법을 설명드리겠습니다.\r\n\r\n3. 마음에 드는 jekyll theme를 선택합니다. 아래 사이트 들을 돌아다니며 자신이 원하는 theme를 찾아보세요\r\n\r\n   - http://jekyllthemes.org/\r\n   - https://jekyllthemes.io/free\r\n   - http://themes.jekyllrc.org/\r\n   - https://github.com/topics/jekyll-theme\r\n\r\n   제 블로그에는 다음의 것들이 꼭 필요하다고 생각했습니다.\r\n\r\n   - 마크다운으로 글 작성\r\n\r\n   - 카테고리\r\n- tag기능 \r\n   - 검색기능\r\n- 포스트 댓글 기능 등\r\n  \r\n\r\n위의 요소들을 포함하는 테마 중에서 깔끔하다고 생각한[ `Next theme`](https://github.com/Simpleyyt/jekyll-theme-next)를 선택했습니다.\r\n\r\n개인적으로 깔끔한 테마를 추천하자면 [Tale](https://github.com/chesterhow/tale)테마도 추천합니다. `Next theme`과 Tale 사이에서 많이 고민했었습니다.\r\n\r\n\r\n\r\n선택한 theme의 github repository를 로컬 환경에 다운받습니다. 이후 username.github.io 에 git remote 를 연결해줍니다.\r\n\r\n```bash\r\n   $ git remote add origin https://github.com/username/username.github.io\r\n```\r\n\r\n3. .gitignore 를 추가해줍니다.\r\n   \r\n\r\n[jekyll gitignore](https://gist.github.com/bradonomics/cf5984b6799da7fdfafd) 페이지를 활용하시면 됩니다.\r\n\r\n5. Jekyll은 기본적으로 `ruby on rails` 의 정적 페이지 프로젝트입니다. 따라서 ruby 언어 설치가 필요합니다.\r\n   만약 mac OS를 쓰고 계시면 ruby가 기본적으로 설치되어 있을 수도 있습니다. \r\n   (아니면 homebrew를 통해 간단히 설치도 가능합니다.)\r\n   (만약 windows OS를 쓰고 계시다면[ `rubyinstaller`](https://rubyinstaller.org/)를 활용해 설치하시면 됩니다. )\r\n   저희는 이번에는 rvm 을 사용해서 ruby를 설치해보겠습니다.\r\n   ruby는 2.1.x 이상 버전으로 설치해주세요.\r\n\r\n6. 루비를 설치하기 전에 rvm을 설치하고 이후 ruby의 버전을 맞추어 설치해줍니다.\r\n\r\n   ```bash\r\n   $ \\curl -L https://get.rvm.io | bash -s stable\r\n   ```\r\n\r\n   rvm 설치 후  체크\r\n\r\n   ```bash\r\n   $ rvm list known\r\n   ```\r\n\r\n   ```bash\r\n   $ rvm install [ruby-version]\r\n   예: rvm install ruby-2.7.0\r\n   ```\r\n\r\n   ruby version확인\r\n\r\n   ```bash\r\n   $ ruby -v \r\n   또는\r\n   $ ruby --version\r\n   ```\r\n\r\n   \r\n\r\n## 2. Gem\r\n\r\n***만약 해당 과정 중  오류가 발생한다면  포스팅아래 3. errors & actions를 확인해주세요.***\r\n\r\n\r\n\r\n### 2-1. Gemfile 설치하기\r\n\r\n```ruby\r\nsource 'https://rubygems.org'\r\ngem 'github-pages', group: :jekyll_plugins\r\n#gem 'jekyll-admin', group: :jekyll_plugins\r\ngem 'bigdecimal', '1.3.5'\r\n```\r\n\r\n`Gemfile`을 아래와 같이 작성해주세요.\r\n\r\n- github-pages gem을 추가해주고, jekyll-admin 부분은 주석처리 합니다.\r\n- bigdecimal의 경우 mac OS 사용 시 `gem` 버전이 맞지 않아 버전까지 추가로 설정해주었습니다.\r\n\r\n### 2-2. rails, bundler 설치하기\r\n\r\n1. ruby의 프레임워크인 rails를 설치해줍니다.\r\n\r\n```bash\r\n$ gem install rails\r\n```\r\n\r\n2. 다음으로 라이브러리 관리를 도와주는 bundler를 설치해줍니다.\r\n\r\n```bash\r\n$ gem install bundler\r\n```\r\n\r\n3. 그리고 update를 실행해줍니다.\r\n\r\n(왜 처음 설치할 때부터 최신버전이 아닌지에 대해서는 정확히 모르겠지만, 아마 bundler뿐만 아니라 관련 gem 라이브러리들이 bundler 버전에 맞춰 업데이트 해줘야 하는 것 같습니다..;;)\r\n\r\n```bash\r\n$ bundle update --bundler\r\n```\r\n\r\n```bash\r\n$ bundle install\r\n```\r\n\r\n### 2-3. 로컬에서 제대로 돌아가는지 확인하기\r\n\r\n```bash\r\n$ bundle exec jekyll server\r\n```\r\n\r\n이 명령어를 입력하면 `http://127.0.0.1:4000` 에서 서버가 구동되는 것을 확인할 수 있습니다.\r\n\r\n일단 여기까지만 제대로 되면 아주 Nice한 상황입니다만...\r\n\r\n실제로 저는 이 화면을 띄우는데 꼬박 하루 걸렸던 것 같습니다.\r\n\r\n다음은 jekyll을 설치하고 실행시키면서 마주쳤던 오류 메시지들과 그에 대한 해결책들을 보여드리겠습니다.\r\n\r\n\r\n\r\n---\r\n\r\n## 3. errors & actions\r\n\r\n크게 4가지의 error들이 괴롭혔었는데요 하나씩 소개해드리겠습니다.\r\n\r\n### 3-1. [oh-my-zsh] permission error\r\n\r\n저는 terminal을 `oh-my-zsh`를 사용하고 있습니다. 여기서 계속 이런 오류가 발생합니다.\r\n\r\n![oh-my-zsh-permission](https://blog.kakaocdn.net/dn/bxXXV2/btqF00zWrWO/kZ0TIFBgWggC57LXO8MJBK/img.png)\r\n\r\n이 문제는 해당 directory의 ower가 현재 user와 다른 경우에 발생한다고 합니다.\r\n\r\n예를 들어, 맥에 2개의 계정이 있는데 서로 다른 계정을 사용하면서 생긴 문제라고 합니다. (하지만 저는 그렇지 않았던 것 같은데 계속 이 메시지가 떴습니다...;;)\r\n\r\n### 3-1. [oh-my-zsh] permission error actions 대응 방법\r\n\r\n해결 방법은 이미지의 마지막에서도 볼 수 있듯이 `ZSH_DISABLE_COMPFIX`를 true로 설정해주는 것입니다.\r\n\r\n```bash\r\n$ vi ~/.zshrc\r\n```\r\n\r\n명령어를 입력하여 vi editor 모드로 변경합니다.\r\n\r\n```bash\r\n...\r\nZSH_DISABLE_COMPFIX=\"true\"\r\n\r\nsource $ZSH/oh-my-zsh.sh\r\n...\r\n```\r\n\r\n**!주의!**\r\n\r\n여기서 가장 중요한 것은 위치입니다. 반드시 `source $ZSH/oh-my-zsh.sh`보다 위쪽에 `ZSH_DISABLE_COMPFIX=\"true\"`를 입력해주세요\r\n\r\n`source $ZSH/oh-my-zsh.sh` 는 위의 scripts 들을 적용하는 명령어인데 이것보다 뒤에 있으면 적용되지 않는다고 이해하시면 됩니다.\r\n\r\n`:wq`로 저장 후 vi editor를 빠져나옵니다.\r\n\r\n이 에러는 이렇게 해결할 수 있었습니다.\r\n\r\n\r\n\r\n### 3-2. undefined method `new' for BigDecimal:Class, Ruby 2.7\r\n\r\n```bash\r\nbundler: failed to load command: fastlane (/Users/REDACTED/.gem/ruby/2.7.0/bin/fastlane)\r\nNoMethodError: [!] undefined method `new' for BigDecimal:Class\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext/object/duplicable.rb:111:in `<class:BigDecimal>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext/object/duplicable.rb:106:in `<top (required)>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext/object.rb:3:in `require'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext/object.rb:3:in `<top (required)>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext.rb:2:in `require'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext.rb:2:in `block in <top (required)>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext.rb:1:in `each'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/activesupport-4.2.11.1/lib/active_support/core_ext.rb:1:in `<top (required)>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/slack-ruby-client-0.14.4/lib/slack-ruby-client.rb:39:in `require'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/slack-ruby-client-0.14.4/lib/slack-ruby-client.rb:39:in `<top (required)>'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/fastlane-2.146.1/fastlane/lib/fastlane/fastlane_require.rb:10:in `require'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/fastlane-2.146.1/fastlane/lib/fastlane/fastlane_require.rb:10:in `install_gem_if_needed'\r\n  /Users/REDACTED/.gem/ruby/2.7.0/gems/fastlane-2.146.1/fastlane/lib/fastlane/fast_file.rb:232:in `fastlane_require'\r\n  Fastfile:55:in `block in parsing_binding'\r\n```\r\n\r\n이 에러는 ruby 버전과 `BigDecimal` 이라는 gem의 버전 차이 문제로 발생한 것 같습니다.\r\n\r\nGemfile 내에 `gem 'bigdecimal', '1.3.5'` 로 버전까지 명확히 추가한 후 `bundle install` 하니 해결되었습니다.\r\n\r\n\r\n\r\n### 3-3. bundle / bundle install 이 안되는 에러\r\n\r\n이 에러도 꽤나 고생했던 에러였습니다.\r\n\r\n저는 `homebrew`를 사용하여 ruby 등 다양한 것들을 설치하고 했었는데 이게 mac OS 최신 버전인 Catalina와의 충돌 문제인건지, 아니면 rbenv와의 충돌인건지는 잘 모르겠습니다. \r\n\r\n### Actions 해결법 \r\n\r\n저는 아래와 같은 두 줄의 코드를 `vi ~/.zshrc`에 추가하여 해결했습니다.\r\n\r\n위와 같이 `source $ZSH/oh-my-zsh.sh` 보다 위쪽에 입력하고 저장하면 됩니다.\r\n\r\n```bash\r\n...\r\nexport PATH=\"$HOME/.rbenv/bin:$PATH\"\r\neval \"$(rbenv init -)\"\r\n\r\nsource $ZSH/oh-my-zsh.sh\r\n...\r\n```\r\n\r\n\r\n\r\n한 이틀 정도 지나고나서 작성하다보니 그새 에러와 대응법을 많이 잊었습니다.\r\n\r\n포스팅의 방법이 완벽하지 않을 수 있으니 사용에 주의해주시고, 혹시 잘못된 부분을 발견하신 분은 아래 댓글로 남겨주시면 정말 감사하겠습니다.\r\n\r\n이 외에도 여러가지 에러가 더 생각나거나 제보받으면 추가해보겠습니다.\r\n\r\nWindows 컴퓨터에서도 한 번 해보고 올려보도록 하겠습니다.\r\n\r\n\r\n\r\n감사합니다!\r\n\r\n---\r\n\r\nCopyright: likelionSungGuk 조성국\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 7979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"jekyll Blog에 포스팅 하는법-이미지넣기\"\r\ndate: \"2020.12.17\"\r\ntags: \r\n   - blog\r\n   - jekyll\r\n   - blog\r\n   - jekyll\r\n   - theme\r\n   - NexT theme\r\n   - 지킬 테마\r\n   - 지킬 블로그 포스팅\r\n   - GitHub Pages\r\n---\r\n\r\n## Jekyll Blog Posting Basic\r\n\r\n![image-20201217202444028](/assets/img/image-20201217202444028.png)\r\n\r\nblog posting은 `_post` 폴더 안에 `markdown`문서를 작성하면 됩니다.\r\n\r\n대신 이 때 지켜야할 형식이 있습니다.\r\n\r\n바로 `markdown`문서의 최상단에 아래와 같은 `Yaml` 방식의 코드를 삽입해주는 것입니다.\r\n\r\n아래는 이번 포스팅의 예시를 그대로 사용하였습니다.\r\n\r\n```yaml\r\n---\r\nlayout: post\r\ntitle: jekyll Blog에 포스팅 하는법-이미지넣기\r\ndate: 2020-12-17 17:32:09\r\ncategories: \r\n- jekyll\r\n- blog\r\ntags: [blog, jekyll, blog, jekyll theme, NexT theme, 지킬 테마, 지킬 블로그 포스팅, GitHub Pages]\r\n---- \r\n```\r\n\r\n하나 하나 살펴보면\r\n\r\n1. 위 아래를 세 개의 대시(-)로 막고 그 안에 내용을 작성합니다.\r\n2. `layout`: 레이아웃은 이 글이 어떤 형식인지를 명시합니다. Next theme에서는 archive, post, page, category, tag,  등의 레이아웃이 있습니다. \r\n   이 중에서 포스팅은 `post`를 사용합니다.\r\n3. `title`은 이 포스팅의 제목을 나타냅니다. (추후 자동적으로 해당 markdown 파일 자체의 이름이 됩니다.)\r\n4. `categories`는 이 글의 카테고리를 나타내는 것으로 이 글이 어떻게 분류 되었으면 하는지 희망하는 대로 작성하면 됩니다. 예시의 모습처럼 대시(-) 이후 한 칸 띄고 엔터치는 방식으로도 작성이 가능하고 아래 tags와 같이 배열 형태로 두 가지 형식 모두 작성 가능합니다.\r\n5. `tags`는 이 글에 여러개의 tag를 달아 추후 tag별 구분이 가능하도록 하고 검색엔진에 잘 잡히도록 `SEO`를 도와주기도 합니다. \r\n\r\n\r\n\r\n이 외에도 permalink, date 형식 변경 등 다양한 내용이 있습니다.\r\n\r\n더 자세한 내용은 [**jekyll 공식 사이트**](https://jekyllrb.com/docs/front-matter/)에서 확인하시고 하나씩 테스트해보시면 됩니다.\r\n\r\n\r\n\r\n이후 아래 부분에 평범한 markdown 형식으로 글을 작성하면 됩니다. 이후 Git Push 해주시면 몇 분 후 글이 포스팅 됩니다.\r\n\r\n**만약 온라인에 어떻게 포스팅 될 지 미리 확인해 보고 싶으시다면,**\r\n\r\n1. ``_draft` 폴더를 따로 만들어 온라인 상에서 확인하는 방법\r\n2. `Atom` 에디터를 활용하여 markdown 작성과 동시에 Web에서 보여지는 화면을 보면서 작성\r\n3. `bundle exec jekyll serve`로 로컬 서버로 먼저 돌려서 확인하는 방법\r\n\r\n등 이 있습니다.\r\n\r\n\r\n\r\n## 생각보다 난관인 이미지 넣기\r\n\r\n### 문제상황\r\n\r\n하지만 예전과 같이 `markdown`을 작성하시면서 글 중간 중간 이미지를 업로드 하실 경우, 웹상에서는 이미지가 제대로 뜨지 않는 오류가 심심찮게 발생합니다.\r\n\r\n저의 경우 `Markdown`파일을 `Typora`라는 에디터를 활용해서 작성하는데, 이때 이미지가 자동으로 한 폴더에 모이도록 하는 설정을 활용합니다.\r\n\r\n때문에 `포스팅과 똑같은 이름.assets`라는 폴더가 하나 더 생기게 되고 이때 상대경로로 이미지를 자동으로 찾아오기 때문에 막상 로컬에서는 제대로 동작하는 것처럼 보입니다.\r\n\r\n![image-20201217204513035](/assets/img/image-20201217204513035.png)\r\n\r\n\r\n\r\n그러나, 웹에서 해당 포스팅의 URL이 변경되면서 이 상대경로가 제대로 지정되지 않아 이미지가 불러와지지 않는 오류가 발생합니다.\r\n\r\n![image-20201217204655892](/assets/img/image-20201217204655892.png)\r\n\r\n아래 이미지에서 보듯이 URL에 보시면 `{날짜}`/`{title}`의 형식으로 되어 있는 것을 알 수 있습니다.\r\n\r\n\r\n\r\n### 해결\r\n\r\n이 문제를 해결하는 방법은 생각보다 **간단**하지만, **귀찮은 작업**이 될 수 있습니다.\r\n\r\n해결방법은 `절대경로`를 이용하는 것입니다.\r\n\r\n다시 파일트리를 살펴보면, `assets`폴더가 있습니다.\r\n\r\n![image-20201217205015321](/assets/img/image-20201217205015321.png)\r\n\r\n저의 경우 포스팅에 사용하는 이미지들은 모두 `img`라는 폴더에 넣어두고 해당이미지의 `절대주소`를 마크다운에 링크해두었습니다.\r\n\r\n정리하면, \r\n\r\n1. assets에 img폴더를 만든다\r\n\r\n2. 포스팅에 쓰인 img들을 모두 `/assets/img` 안에 넣는다. (복사 또는 이동)\r\n\r\n3. 포스팅 내에 이미지들의 링크를 모두 다음과 같이 변경한다.\r\n\r\n   ```markdown\r\n   ![Foo](/assets/imge/Foo.jpg)\r\n   ![Bar](/assets/imge/Bar.png)\r\n   ```\r\n\r\n   \r\n\r\n이렇게 처리한 뒤 `git push`해보면 이미지까지 제대로 포스팅 된 것을 확인하실 수 있습니다 :smile:\r\n\r\n\r\n\r\n혹시 참고하셔도 포스팅에 어려움을 겪으신 경우 댓글에 문의해주세요.\r\n\r\n---\r\n\r\nCopyright: likelionSungGuk 조성국");

/***/ }),

/***/ 2430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"jekyll Next 테마 자세히 알아보기\"\r\ndate: \"2020.12.17\"\r\ntags: [\r\n  - blog\r\n  - jekyll\r\n  - blog\r\n  - jekyll theme\r\n  - NexT theme\r\n  - 지킬 테마\r\n  - GitHub Pages\r\n---\r\n\r\n## _config.yml\r\n\r\n대부분의 Jekyll의 환경설정은 `_config.yml`에서 합니다.\r\n\r\n이번 포스팅에서는 `_config.yml`을 자세히 알아봅시다.\r\n\r\n\r\n\r\n## Site\r\n\r\n> Site 기본 설정입니다. 아래 이미지를 통해 어떤 내용이 어디에 뜨는지 확인해보세요.\r\n\r\n```yaml\r\ntitle: Blog 대문\r\nsubtitle: 개발자 조성국의 블로그입니다.\r\ndescription: Python, django, algorithm, Computer science, IT 트렌드\r\nauthor: likelionSungGuk 조성국\r\nSupport language: en, ko\r\nlanguage: en\r\ndate_format: '%Y-%m-%d'\r\n```\r\n\r\n![화면](/assets/img/IMG_0284.jpg)\r\n\r\n\r\n\r\n## URl\r\n\r\n```yaml\r\nurl: \"https://likelionSungGuk.github.io\"\r\nbaseurl: \"\"\r\npermalink: pretty\r\n```\r\n\r\n\r\n\r\n## Pagination\r\n\r\n> pagination은 게시글이 N개 이상일 경우 N+1개부터는 다음 페이지에서 보여주도록 하는 내용입니다. \r\n> paginate 10인 경우 게시물 10개까지는 한 페이지에 나오고 그 다음부터는 \"NEXT\"버튼 누르면 다시 10개가 노출되는 형식입니다.\r\n\r\n```yaml\r\npaginate: 10\r\npaginate_path: \"/page:num/\"\r\narchive:\r\n  paginate: 10\r\n  paginate_path: \"/page:num/\"\r\ncategory:\r\n  paginate: 10\r\n  paginate_path: \"/page:num/\"\r\ntag:\r\n  paginate: 10\r\n  paginate_path: \"/page:num/\"\r\n```\r\n\r\n\r\n\r\n## favicon\r\n\r\n> favicon은 chrom 탭의 맨 앞에 나오는 조그마한 icon입니다.\r\n> assets 폴더에 favicon을 넣으시면 해당 icon으로 favicon을 설정 가능합니다.\r\n\r\n```yaml\r\n# Put your favicon.ico into `assets/` directory.\r\nfavicon: /assets/favicon_terminal.ico\r\n```\r\n\r\n\r\n\r\n## index_with_subtitle\r\n\r\n> Home 화면에서 subtitle까지 보여주는 지 여부에 대한 내용입니다.\r\n> true로 설정하면 subtitle까지 나옵니다.\r\n\r\n```yaml\r\n# If true, will add site-subtitle to index page, added in jekyll config.\r\n# subtitle: Subtitle\r\nindex_with_subtitle: true\r\n```\r\n\r\n\r\n\r\n## menu\r\n\r\n>어떤 메뉴들을 활용하지 선택합니다.\r\n>Home, Category, About, Archive, Tags 들을 활성화시켰으며 sitemap, commonweal의 경우 비활성화 하였습니다.\r\n\r\n```yaml\r\n# When running the site in a subdirectory (e.g. domain.tld/blog), remove the leading slash (/archives -> archives)\r\nmenu:\r\n  home: /\r\n  categories: /categories/\r\n  about: about/\r\n  archives: /archives/\r\n  tags: /tags/\r\n  #sitemap: /sitemap.xml\r\n  #commonweal: /404.html\r\n```\r\n\r\n\r\n\r\n## menu icons\r\n\r\n>  menu를 표현하는 icon들입니다.\r\n> fontawesome 의  아이콘 이름들을 적어주면 해당 icon들로 변경됩니다.\r\n\r\n```yaml\r\nmenu_icons:\r\n  enable: auto\r\n  # KeyMapsToMenuItemKey: NameOfTheIconFromFontAwesome\r\n  home: home\r\n  about: user\r\n  categories: th\r\n  schedule: calendar\r\n  tags: tags\r\n  archives: archive\r\n  sitemap: sitemap\r\n  commonweal: heartbeat\r\n```\r\n\r\n```html\r\n<i class=\"fas fa-home\"></i>\r\n```\r\n\r\n[fontawesome](https://fontawesome.com/icons/)사이트에서 위와 같이 `fa-`뒤에 나오는 이름들을 `_config.yml`에 넣어주면 됩니다.\r\n\r\n\r\n\r\n## scheme settings\r\n\r\n> Next theme중에서도 크게 3가지 디자인 형식이 있습니다.\r\n\r\n```yaml\r\n# Schemes\r\nscheme: Muse\r\n#scheme: Mist\r\n#scheme: Pisces\r\n```\r\n\r\nMist, Pisces 형식의 블로그를 보고 싶으시다면 [Mist 예시](https://blog.zzbd.org/) / [Pisces 예시](https://dandyxu.me/)를 통해 Demo를 확인해주세요.\r\n\r\n([Muse 형식의 ㅎㄷㄷ한 Custom CSS 적용 사례](https://acris.me/))\r\n\r\n\r\n\r\n## fonts\r\n\r\n>각 영역별로 font를 내가 원하는 것으로 변경할 수 있습니다.\r\n\r\n```yaml\r\n# ---------------------------------------------------------------\r\n# Font Settings\r\n# - Find fonts on Google Fonts (https://www.google.com/fonts)\r\n# - All fonts set here will have the following styles:\r\n#     light, light italic, normal, normal italic, bold, bold italic\r\n# - Be aware that setting too much fonts will cause site running slowly\r\n# - Introduce in 5.0.1\r\n# ---------------------------------------------------------------\r\nfont:\r\n  enable: true\r\n\r\n  # Uri of fonts host. E.g. //fonts.googleapis.com (Default)\r\n  host: {웹 폰트 주소 넣는 곳: 예) fonts.googleapis.com} \r\n\r\n  # Global font settings used on <body> element.\r\n  # Blog 전체의 글꼴 지정 (현 Lato)\r\n  global:\r\n    # external: true will load this font family from host.\r\n    external: true\r\n    family: Lato\r\n\r\n  # Font settings for Headlines (h1, h2, h3, h4, h5, h6)\r\n  # Fallback to `global` font settings.\r\n  # h1, h2, h3, h4, h5, h6태그만 font바꾸고 싶다면 설정\r\n  headings:\r\n    external: true\r\n    family:\r\n\r\n  # Font settings for posts\r\n  # Fallback to `global` font settings.\r\n  # posting 파트 font설정\r\n  posts:\r\n    external: true\r\n    family:\r\n\r\n  # Font settings for Logo\r\n  # Fallback to `global` font settings.\r\n  # The `size` option use `px` as unit\r\n  logo:\r\n    external: true\r\n    family:\r\n    size:\r\n\r\n  # Font settings for <code> and code blocks.\r\n  codes:\r\n    external: true\r\n    family:\r\n    size:\r\n```\r\n\r\n\r\n\r\n## search\r\n\r\n> 검색기능을 원하시는 경우 enable: true로 설정해주세요\r\n> trigger: manual의 경우 사용자가 search 아이콘을 클릭했을 때에만 나타나는 설정입니다.\r\n\r\n```yaml\r\n# Local search\r\nlocal_search:\r\n  enable: true\r\n  # if auto, trigger search by changing input\r\n  # if manual, trigger search by pressing enter key or search button\r\n  trigger: manual\r\n  # show top n results per article, show all results by setting to -1\r\n  top_n_per_article: 1\r\n```\r\n\r\n\r\n\r\n이 외에 더 다양한 설정들이 있지만 대부분 중국 관련 Social 링크들이거나 불필요하다고 생각하여 스킵하였습니다.\r\n\r\n추가로 궁금한 점이 있으시면 댓글 남겨주세요.\r\n\r\n---\r\n\r\nCopyright: likelionSungGuk 조성국");

/***/ }),

/***/ 4169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"Jekyll 블로그 조회수 뱃지 달기 - HITS\"\r\ndate: \"2021.01.05\"\r\ntags: \r\n  - jekyll\r\n  - blog\r\n  - github pages\r\n  - 깃헙페이지\r\n  - 지킬 블로그\r\n  - hits\r\n---\r\n\r\n# 방문자에게 게시글 조회수 보여주는법\r\n\r\nJekyll과 같은 정적 블로그는 간편한 것이 장점입니다. 하지만 DB가 없기 때문에 누적 방문자 수를 체크하기가 어렵다는 단점이 있습니다.\r\n\r\n이것을 해결하기 위해서는 써드파티 앱인 **[HITS](https://github.com/dwyl/hits)**를 사용하면 간단하게 해결가능합니다.\r\n\r\n **[HITS](https://github.com/dwyl/hits)**는 github repository에 방문하는 사람들을 세기 위한 프로젝트로 만들어졌다고 합니다. 아래 이미지에 표시된 부분은 **[HITS](https://github.com/dwyl/hits)**의 github repository의 `README.md`의 모습입니다.\r\n\r\n![image-20210105103446971](/assets/img/image-20210105103446971.png)\r\n\r\n\r\n\r\n#### *! 주의 ! 현재 Hits가 디스크 메모리 문제로 정상적으로 작동하고 있지 않아 잠시 사용을 보류해두었습니다.* \r\n\r\n## jekyll blog에서 Hits 사용하기\r\n\r\nHits를  사용하기 위해서는 적절한 위치에 아래와 같은 코드를 삽입해야 합니다.\r\n\r\n```html\r\n<div style=\"text-align: center;\">\r\n    <a\r\n       href=\"http://hits.dwyl.com/{{ site.url | remove_first: 'https://' | remove_first: 'http://' }}{{ page.url }}\"\r\n       target=\"_blank\"\r\n     >\r\n     <img\r\n       src=\"http://hits.dwyl.com/{{ site.url | remove_first: 'https://' | remove_first: 'http://' }}{{ page.url }}.svg\"\r\n     />\r\n    </a>\r\n</div>\r\n```\r\n\r\n저는 제목과 본문이 시작하는 사이에 삽입해보았습니다. 적절한 위치를 찾기 위해 `크롬 개발자도구`를 활용해서 찾아보시면 됩니다.\r\n\r\n근데 그 위치를 내 blog코드 내에서 찾는 것이 생각보다 복잡합니다. 아래 이미지를 보시면서 파일 트리를 찾으시면 좋습니다.\r\n\r\n> '_includes' > '_macro' > 'post.html'\r\n\r\n![image-20210105102831674](/assets/img/image-20210105102831674.png)\r\n\r\n해당 위치에 삽입하면 아래 이미지와 같이 조회수가 표시됩니다.\r\n\r\n![11](/assets/img/11.png)\r\n\r\n---\r\n\r\nreferences\r\n\r\n[Hits 생성기](http://hits.dwyl.io/)\r\n\r\n[Hits Github repository](https://github.com/dwyl/hits)\r\n\r\n[HITS!를 이용하여 Jekyll 블로그에 조회수 배지 달기](https://ryanking13.github.io/2020/03/09/jekyll-views-count-badge.html)");

/***/ }),

/***/ 4372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"Javascript 자주쓰는 내장 함수 복습하기\"\r\ndate: \"2021.03.31\"\r\ntags: \r\n  - javascript\r\n  - js\r\n  - vanillaJS\r\n  - es6\r\n---\r\n\r\n\r\n\r\n# 자주쓰는 JS 내장함수 :map, find, findIndex, filter, indexOf, splice, slice, shift & pop, join, reduce\r\n\r\n## 1. map\r\n\r\nmap은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다. 배열.map()\r\n\r\n```jsx\r\nconst array = [1, 2, 3, 4, 5, 6, 7, 8];\r\nconst square = n => n**2\r\nconst squared = array.map(square)\r\nconsole.log(squared)\r\n\r\n// [1,  4,  9, 16, 25, 36, 49, 64]\r\n```\r\n\r\n- map안에 들어가는 square같은 함수를 `변화함수`라고 한다.\r\n- 변화함수를 쓰지 않고 바로 해도 된다\r\n\r\n```jsx\r\nconst array = [1, 2, 3, 4, 5, 6, 7, 8];\r\nconst squared = array.map(n => n**2)\r\nconsole.log(squared)\r\n// 결과는 같다. [1,  4,  9, 16, 25, 36, 49, 64]\r\n```\r\n\r\n## 2. indexOf\r\n\r\nindexOf 는 원하는 항목이 배열 내 몇번째 원소인지 찾아주는 함수입니다.\r\n\r\n```jsx\r\nconst superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']\r\nconst index = superheroes.indexOf('토르')\r\nconsole.log(index)\r\n// 2\r\n```\r\n\r\n## 3. findIndex - 찾아낸 값의 index를 반환\r\n\r\n배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없습니다. 이럴 때 findIndex를 사용합니다.\r\n\r\n```jsx\r\n// todos에서 id가 3인 객체가 몇 번째 인지 찾기\r\n\r\nconst todos = [\r\n  {\r\n    id: 1,\r\n    text: '자바스크립트 입문',\r\n    done: true\r\n  },\r\n  {\r\n    id: 2,\r\n    text: '함수 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 3,\r\n    text: '객체와 배열 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 4,\r\n    text: '배열 내장함수 배우기',\r\n    done: false\r\n  }\r\n];\r\n\r\nconst index = todos.findIndex(todo => todo.id === 3);\r\nconsole.log(index);\r\n\r\n// 2\r\n```\r\n\r\n## 4. find - 찾아낸 값 자체를 반환\r\n\r\n```jsx\r\nconst todos = [\r\n  {\r\n    id: 1,\r\n    text: '자바스크립트 입문',\r\n    done: true\r\n  },\r\n  {\r\n    id: 2,\r\n    text: '함수 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 3,\r\n    text: '객체와 배열 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 4,\r\n    text: '배열 내장함수 배우기',\r\n    done: false\r\n  }\r\n];\r\n\r\nconst todo = todos.find(todo => todo.id === 3);\r\nconsole.log(todo);\r\n\r\n// {id: 3, text: \"객체와 배열 배우기\", done: true}\r\n```\r\n\r\n## 5. filter\r\n\r\n특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.\r\n\r\n```jsx\r\nconst todos = [\r\n  {\r\n    id: 1,\r\n    text: '자바스크립트 입문',\r\n    done: true\r\n  },\r\n  {\r\n    id: 2,\r\n    text: '함수 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 3,\r\n    text: '객체와 배열 배우기',\r\n    done: true\r\n  },\r\n  {\r\n    id: 4,\r\n    text: '배열 내장함수 배우기',\r\n    done: false\r\n  }\r\n];\r\n\r\nconst tasksNotDone = todos.filter(todo => todo.done === false);\r\nconsole.log(tasksNotDone);\r\n/* \r\ntodo.done이 false인 {id: 4, text: '배열 내장함수 배우기', done: false} \r\n객체만 새로운 배열(taskNotDone) 안에 들어간다.\r\n[ { id: 4, text: '배열 내장함수 배우기', done: false } ]\r\n\r\n*/\r\n\r\n//  이렇게 표현할 수도 있다.\r\nconst tasksNotDone = todos.filter(todo => !todo.done);\r\n```\r\n\r\n## 6. splice\r\n\r\n배열에서 특정 항목을 제거할 때 사용된다. 인덱스 값으로 지우는 것이기 때문에 인덱스를 먼저 구하고 해당 인덱스로부터 몇 개나 지울 것인지 선택하여 여러값을 한 번에 지울 수 있다.\r\n\r\n```jsx\r\nconst numbers = [10, 20, 30, 40];\r\nconst index = numbers.indexOf(30);\r\nnumbers.splice(index, 1);\r\nconsole.log(numbers);\r\n\r\n// 30의 index = 2이고 2번째 인덱스로부터 한 개의 값을 지우므로 30만 지워진다.\r\n// [10, 20, 40]\r\n```\r\n\r\n## 7. slice\r\n\r\n기존 배열에 변화를 일으키지 않고 슬라이싱 하여 새로운 배열을 생성한다.\r\n\r\n```jsx\r\nconst numbers = [10, 20, 30, 40];\r\nconst sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지\r\n\r\nconsole.log(sliced); // [10, 20]\r\nconsole.log(numbers); // [10, 20, 30, 40]\r\n```\r\n\r\n## 8. shift & pop\r\n\r\nshift는 배열의 첫 번째 값을 뽑아내고, pop은 맨 뒤의 값을 뽑아낸다. python과 비교하면 shift = pop(0), pop은 똑같다.\r\n\r\n```jsx\r\nconst numbers = [10, 20, 30, 40];\r\nconst value = numbers.shift();\r\nconsole.log(value); // 10\r\nconst value2 = numbers.pop();\r\nconsole.log(value2); // 40\r\nconsole.log(numbers); //[20, 30]\r\n```\r\n\r\n## 9. join\r\n\r\n배열 안의 값들을 문자열 형태로 합쳐줍니다.\r\n\r\n```jsx\r\nconst array = [1, 2, 3, 4, 5];\r\nconsole.log(array.join()); // 1,2,3,4,5\r\nconsole.log(array.join(' ')); // 1 2 3 4 5\r\nconsole.log(array.join(', ')); // 1, 2, 3, 4, 5\r\n```\r\n\r\n## 10. reduce\r\n\r\n배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다. 앞의 문장만 읽어서는 이해하기 어려운데, 내가 지정해준 함수를 실행 후 나온 결과값을 다시 파라미터로 사용하도록 합니다. 아래 예를 통해 이해해봅시다.\r\n\r\n```jsx\r\n// 기존 방식\r\nconst numbers = [1, 2, 3, 4, 5];\r\n\r\nlet sum = 0;\r\nnumbers.forEach(n => {\r\n  sum += n;\r\n});\r\nconsole.log(sum);  //15\r\n\r\n//reduce를 사용하는 방식\r\nconst numbers = [1, 2, 3, 4, 5];\r\nlet sum = array.reduce((accumulator, current) => accumulator + current, 0);\r\n\r\nconsole.log(sum);  //15\r\nconst numbers = [1, 2, 3, 4, 5];\r\nlet sum = numbers.reduce((accumulator, current) => {\r\n  console.log({ accumulator, current });\r\n  return accumulator + current;\r\n}, 0);\r\n\r\nconsole.log(sum);\r\n\r\n// 결과\r\n{ accumulator: 0, current: 1 }\r\n{ accumulator: 1, current: 2 }\r\n{ accumulator: 3, current: 3 }\r\n{ accumulator: 6, current: 4 }\r\n{ accumulator: 10, current: 5 }\r\n15\r\n```\r\n\r\n\r\n\r\n---\r\n\r\n**references**\r\n\r\n[LearnJS GitBook](https://learnjs.vlpt.us/basics/09-array-functions.html)");

/***/ }),

/***/ 3278:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"ES2021 최신 자바스크립트 새롭게 추가된 기능 살펴보기\"\r\ndate: \"2021.08.03\"\r\ntags: \r\n    - javascript\r\n    - 자바스크립트\r\n---\r\n\r\n# ES2021 최신 자바스크립트 새롭게 추가된 기능을 알아보자\r\n\r\n## replaceAll\r\n\r\nString을 변경해주는 replace의 upgrade 버전이다. \r\n\r\n'그냥 replace쓰면 되는거 아니야?'라고 생각할 수 있지만 특수문자가 들어간 경우 정규표현식을 써야해서 다소 복잡해지는 경우가 많은데, replaceAll이 있으면 훨씬 간편하다. 비교해서 보자.\r\n\r\n\r\n\r\n> Mike와 Car앞뒤로 있는 대괄호를 중괄호로 바꿔보자.\r\n\r\n```javascript\r\n// replace\r\nconst str1 = \"I'm [Mike]. This is Tom's [Car]\";\r\nstr1.replace(/\\[/g, \"~\").replace(/\\]/g, \"~\");\r\n```\r\n\r\n이렇게 정규표현식을 써서 대괄호의 각각'[' , ']'을 설정하고 'g'로 모든 해당 기호를 선택한 뒤 변경해줘야한다.\r\n\r\n```javascript\r\n// replaceAll\r\nconst str2 = \"I'm [Mike]. This is Tom's [Car]\";\r\nstr2.replaceAll(\"[\", \"~\").replaceAll(\"]\", \"~\")\r\n```\r\n\r\n정규표현식을 쓸 필요없이 직관적으로 쉽게 사용이 가능하다.\r\n\r\n\r\n\r\n## Promise.any\r\n\r\npromise.race의 경우 가장 빠르게 처리되는 객체를 반환합니다.\r\n\r\n예를 들어 두 개의 Promise요청이 있을 경우, Reject된 요청이 더 빠르게 도착한다면 promise.race는 'Reject'를 반환 할 것입니다.\r\n\r\n하지만 우리는 여러개의 요청 중 하나만이라도 성공하는게 있는지 알고 싶을 때가 있습니다. 이 경우 새로 생긴 `Promise.any`를 사용할 수 있습니다.\r\n\r\n```javascript\r\n// 1. \r\nconst Fail = new Promise((res, reject) => {\r\n    setTimeOut(()=> {\r\n        reject(\"fail..\")\r\n    }, 1000)\r\n})\r\nconst Success = new Promise((res, reject) => {\r\n    setTimeOut(()=> {\r\n        res(\"success!\")\r\n    }, 2000)\r\n})\r\n\r\nconst promiseRace = Promise.race([Fail, Success])\r\n// log -> fail..\r\nconst promiseAny = Promise.any([Fail, Success])\r\n// log -> sucess!\r\n```\r\n\r\n\r\n\r\n## ||= , &&= , ??=\r\n\r\n정식명칭은 `Logical Assignment Operator` 입니다. \r\n\r\n```javascript\r\n// 1. ||=\r\n    name = name || 'anonymous'\r\n위 코드는 다음과 같이 쓰일 수 있습니다.\r\n    name ||= 'anonymous'\r\n\r\n// 2. &&=\r\n    name = name && `Hello ${name}`\r\n\t\t\t===\r\n    name &&= `Hello ${name}`;\r\n\r\n// 3. ??= (Null병합연산자)\r\n\tname = name ?? \"Mike\";\r\n\tname ??= \"Mike\"\r\n```\r\n\r\n- Null 병합 연산자와 OR의 차이는 다음과 같다.\r\n\r\n  - `**||**` : 앞의 값이 falsy이면 뒤의 값\r\n  - `**??**` : 앞의 값이 null이나 undefined 이면 뒤의 값 \r\n\r\n  ```javascript\r\n  let num = 0\r\n  let a = num || 3\r\n  // a는?\r\n  // -> a = 3\r\n  \r\n  let b = num ?? 3\r\n  // b는? \r\n  // -> b = 0\r\n  null이나 undefined가 아니므로 num(0)이 b가 된다.\r\n  ```\r\n\r\n  \r\n");

/***/ }),

/***/ 795:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"자바스크립트 프로와 나의 차이는...?\"\r\ndate: \"2021.08.05\"\r\ntags: \r\n    - javascript\r\n    - 자바스크립트\r\n---\r\n\r\n\r\n# 자바스크립트를 프로처럼 세련되게 쓰는 법\r\n유튜브 드림코딩 엘리 영상을 보다 좋은 내용이 있어 정리하여 공유합니다.\r\n\r\n[TOC]\r\n\r\n\r\n## 조건문에서 조건이 두 개라면 과감하게 삼항연산자 사용\r\n\r\n```javascript\r\n// not good...\r\nfunction (score) {\r\n\tif (score > 5) {\r\n        result = 'thumbup'\r\n    } else if {\r\n        result = 'thumbdown'\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n// Better !!\r\nfunction (score) {\r\n\treturn score > 5 ? 'thumbup': 'thumbdown';\r\n}\r\n\r\n```\r\n\r\n\r\n\r\n## Nullish Coalescing operator를 사용해보자\r\n\r\n```javascript\r\n// not good...\r\nfunction printMessage(text) {\r\n    let message = text;\r\n    if (text == null || text == undefined) {\r\n        message = 'Nothing to display';\r\n    }\r\n    console.log(message);\r\n}\r\n\r\n\r\n// Better !\r\nfunction printMessage(text) {\r\n    const message = text ?? 'Nothing to Display';\r\n    console.log(message);\r\n}\r\n\r\n```\r\n\r\n- 위 코드와 아래 코드는 동일하게 동작한다.\r\n- text가 null or undefined이면 'Nothing to Display'를 할당하는 코드인데, 위 코드는 message를 일단 받고, null/undefined check 후 message에 할당한다.\r\n- 하지만 아래 코드 같은 경우 text를 바로 체크하여 message에 선언과 할당이 동시에 가능하기 때문에 message를 const로 선언할 수 있고 가독성도 좋다.\r\n\r\n\r\n\r\n### Logical Operator OR<||>와 Nullish Coalescing Operator의 차이\r\n\r\n**OR**\r\n\r\n- Left: falsy 하면 오른쪽이 true\r\n\r\n**Nullish Coalescing (??)**\r\n\r\n- Left: null, undefiend 이면 오른쪽이 true\r\n\r\n\r\n\r\nnull & undefined는 모두 falsy에 포함된다. 이외에도 0, -0, NaN, 빈문자열('') 등도 모두 falsy에 포함된다. 다시 말해 falsy가 좀 더 광범위한 범위를 포괄한다.\r\n\r\n**따라서 두 연산자가 비슷해보이지만 조금 다른 결과를 초래할 수 있으므로 차이를 정확하게 이해하고 사용하는 것이 중요하다!**\r\n\r\n\r\n\r\n## Object Destructuring으로 변수 할당/선언하기\r\n\r\n```javascript\r\n// Not good...\r\nfunction displayPerson(person) {\r\n    const name = person.name;\r\n    const age = person.age;\r\n    displayAvatar(name);\r\n    displayName(name);\r\n    displayProfile(name, age);\r\n}\r\n\r\n// Better !!\r\nfunction displayPerson(person) {\r\n    const { name, age } = person;\r\n    displayAvatar(name);\r\n    displayName(name);\r\n    displayProfile(name, age);\r\n}\r\n```\r\n\r\n\r\n\r\n## Object 결합은 Object.assign 혹은 Spread Syntax를 사용하자\r\n\r\n```javascript\r\n// Not Good...\r\nconst item = {\r\n    ...\r\n}\r\nconst detail = {\r\n\t...    \r\n}\r\n\r\nconst newObject = {\r\n    type: item.type,\r\n    size: item.size,\r\n    price: detail.price,\r\n    made: detail.made,\r\n    gender: detail.gender\r\n}\r\n\r\n\r\n// Better !!\r\n // 1. Object.assign\r\nconst newObj = Object.assign(item, detail);\r\n\r\n // 2. Spread Syntax\r\nconst newObj2 = {...item, ...detail};\r\n```\r\n\r\n\r\n\r\n## Optional Chaining\r\n\r\n```javascript\r\n// Not good...\r\nfunction displayJobTitle(person) {\r\n    if (person.job && person.job.title) {\r\n        console.log(person.job.title);\r\n    }\r\n}\r\n\r\n// Better !!\r\nfunction displayJobTitle(person) {\r\n \tif (person.job?.title){\r\n        console.log(person.job.title)\r\n\t}   \r\n}\r\n\r\n// Optional Chaining + Nullish Coalescing\r\nfunction displayJobTitle(person) {\r\n \tconst title = person.job?.title ?? 'No Job yet'\r\n\tconsole.log(title)\r\n}\r\n```\r\n\r\n- 이 내용은 오늘 낮에도 내가 Not Good으로 코드를 짰던 내용이었어서 더욱 공감하며 들었던 내용입니다.\r\n- person에 job이 있을 수도 있고, 없을 수도 있는 경우 일단 person.job을 먼저 체킹하고 person.job.title을 체킹하는 코드입니다. 이게 일반적으로 정말 많이 사용됩니다. 특히 typescript와 함께 쓰이면 job이나 job.title이 null or undefined 될 수 있어서 이 내용에 타입을 미리 설정해주는 것이 생각보다 고역입니다.\r\n- ?를 통해서 person.job이 있는지 없는지를 동시에 처리할 수 있게 됩니다.\r\n\r\n- 가장 아래에는 optional chaining과 Nullsih Coalescing을 한 번에 사용하는 경우입니다. person.job이 있는지 체크하고 person.job.title이 있는지까지 한 번에 체크해서 없는 경우에 'No job yet'을 출력할 수 있습니다.\r\n\r\n\r\n\r\n## Array 관련 연산은 map, filter, reduce를 적극 활용하자!\r\n\r\nJavascript의 배열 methods (map, filter, reduce)들은 정말 강력합니다. \r\n\r\n전통적인 for loop보다는 이 친구들을 적극적으로 활용하면 언어의 특징을 잘 이해하고 사용하는 프로다운 면모를 보여줄 수 있습니다.\r\n\r\n```javascript\r\n// Not good...\r\nconst arr = [1,2,3,4,5]\r\n\t// 짝수 구하기\r\nconst even = [];\r\nfor (let i = 0 ; i <items.length; i++) {\r\n    if (items[i] % 2 === 0) {\r\n        even.push(items[i]);\r\n    }\r\n}\r\n\r\n// Better !!\r\nconst even = arr.filter(item => item % 2 == 0)\r\n\r\n```\r\n\r\n- 코딩테스트를 주로 python을 기반으로 준비했었는데 프론트엔드 개발자로 취업을 하다보면 Javascript 단일 언어로 코테를 많이 제공합니다. 이때 초반에는 저도 위와 같은 코드를 자연스럽게 썼었는데.... 하.... 이제와서 돌이켜 생각해보니까 이게 문제가 풀린다고 해도 제가 면접관이라면 위와 같이 javascript를 쓰는 개발자와 같이 일하는게 꺼려질 것 같다는 생각이 드네요 ㅎㅎ\r\n\r\n\r\n\r\n---\r\n\r\nRef.\r\n\r\n[드림코딩엘리](https://www.youtube.com/watch?v=BUAhpB3FmS4&t=2s)\r\n");

/***/ }),

/***/ 1636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"자바스크립트 변수-var, let, const 꼭 알아야할 차이점\"\r\ndate: \"2021.08.09\"\r\ntags: \r\n  - Javascript\r\n  - let\r\n  - var\r\n  - const\r\n  - 변수\r\n---\r\n\r\n# 자바스크립트 변수 var, let, const 비교\r\n\r\n유튜브 `코딩앙마 채널`의 자바스크립트 중급 1편 var, let, const를 보다가 좋은 내용이 있어 정리합니다.\r\n\r\n\r\n\r\n## 호이스팅 \r\n\r\n선언하기 전에 호출된 var변수가 오류가 나지 않는다는 것을 거의 모든 프론트엔드 개발자라면 알고 있을 것입니다. 그 이유는 바로 hoisting 때문인데, ES6 이후 나온 let이나 const 로 변수를 선언하는 것은 var와 달리 이것이 되지 않는다. 그렇다면 let은 호이스팅 되지 않는 것일까?라는 의문이 들었습니다.\r\n\r\n\r\n\r\n### 💡 let도 hoisting된다.\r\n\r\n<u>결론부터 말하자면 let도 호이스팅 됩니다</u>. 하지만 var처럼 동작하지 않는 이유는 `변수의 생성단계 3가지 ` **\"선언\"-\"초기화\"-\"할당\"** 의 진행과정이 다르기 때문이다.\r\n\r\n| var                 | let       | const                         |\r\n| ------------------- | --------- | ----------------------------- |\r\n| 1. 선언 + 2. 초기화 | 1. 선언   | 1. 선언 + 2. 초기화 + 3. 할당 |\r\n| -                   | 2. 초기화 |                               |\r\n| 3. 할당             | 3. 할당   |                               |\r\n\r\n위 표에서 보듯이 **세 가지 변수설정 타입은 모두 다른 과정을 통해 변수를 생성**합니다.\r\n\r\n```javascript\r\n// 1. var\r\nconsole.log(name) // undefined\r\nvar name=\"홍길동\"\r\n\r\n// 2. let \r\nconsole.log(name) // Error: 레퍼런스 에러\r\nlet name=\"홍길동\"\r\n\r\n// 3. const\r\nconsole.log(name) // Error\r\nconst name=\"홍길동\"\r\n\r\n// 4. const 추가\r\nconst name;\r\nname=\"홍길동\"\r\n```\r\n\r\n- var의 경우 아직 할당되지 않은 name을 먼저 호출하더라도 호이스팅된 변수명 name은 이미 알고 있으며 다만 해당 값은 undefined상태이다. 따라서 에러가 나지 않는다.\r\n\r\n- let의 경우 호이스팅은 되므로 name변수를 아예 모르는 것은 아니나, 초기화(name에 undefined)가 되지않았으므로 name에 해당하는 레퍼런스가 없어 레퍼런스 에러가 난다.\r\n- const의 경우 선언/초기화/할당 세 가지가 모두 한 번에 이뤄져야 하는데 그렇지 않았으므로 에러가 발생한다.\r\n- const의 경우 선언과 동시에 할당까지 이뤄져야 한다. 따라서 4번처럼 생성만 해두고 나중에 할당하면 오류가 발생한다.\r\n\r\n\r\n\r\n## 스코프\r\n\r\n| var                                                          | let, const                                             |\r\n| ------------------------------------------------------------ | ------------------------------------------------------ |\r\n| 함수 스코프                                                  | 블록 스코프                                            |\r\n| function() 단위                                              | if, while, for, try/catch문 등                         |\r\n| -> if문이나 while문 등 블록스코프 내에서 선언되어도 함수단위에서 호출이 가능함. <br />단, 함수단위를 넘어서는 곳에서의 호출은 안된다. | if문이나 while문등 선언된 블록 내에서만 호출이 가능함. |\r\n\r\n\r\n\r\n\r\n---\r\nRef.\r\n\r\n[유튜브 코딩앙마 채널](https://www.youtube.com/watch?v=ocGc-AmWSnQ&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4)\r\n\r\n");

/***/ }),

/***/ 8504:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"자바스크립트 비동기의 꽃 async await 초스피드로 핵심만 체크\"\r\ndate: \"2021.08.17\"\r\ntags: \r\n    - javascript\r\n    - async\r\n    - 비동기\r\n---\r\n\r\n# 자바스크립트 비동기의 꽃 async await 초스피드로 알아보기\r\n\r\n## :bulb: 핵심 체크 문답\r\n\r\n### :one: asnyc await란? \r\n\r\n 자바스크립트 비동기 함수의 가독성을 높여주는 문법\r\n\r\n\r\n\r\n### :two: async await의 장점은?\r\n\r\nPromise 보다 **<u>간결</u>**하고 **<u>직관적</u>**이며 **<u>높은 가독성을 보여주는 장점</u>**이 있다.\r\n\r\n\r\n\r\n### :three: Promise를 대체하는가?\r\n\r\n**:no_good: NO!**   ***promise를 완전히 대체하지는 못한다***.\r\n\r\npromise는 값으로 존재하여 더 다양한 범위에서 활용되는 반면, **<u>async await은 함수를 정의할 때에만 사용된다</u>**는 점에서 활용 범위가 promise보다는 작다.\r\n\r\nasync 함수의 반환값은 항상 `Promise`객체이다. 이 Promise객체는 **<u>상태와 반환값</u>**이 포함되어있다.\r\n\r\n\r\n\r\n## :bulb: async await 병렬처리\r\n\r\n```javascript\r\nfunction asyncFunc1() {\r\n    return new Promise(resolve => {\r\n        console.log('처리중 1');\r\n        setTimeout(() => {\r\n            resolve(10);\r\n        }, 1000)\r\n    })\r\n}\r\nfunction asyncFunc2() {\r\n    return new Promise(resolve => {\r\n        console.log('처리중 2');\r\n        setTimeout(() => {\r\n            resolve(20);\r\n        }, 1000)\r\n    })\r\n}\r\n\r\n// 병렬처리 (O)\r\nasync function getData() {\r\n    const p1 = asuncFunc1();\r\n    const p2 = asyncFunc2();\r\n    const data1 = await p1;\r\n    const data2 = await p2;\r\n    console.log({data1, data2});\r\n} // 1초 후에 LOG: '처리중 1', '처리중 2'\r\n\r\n// 병렬처리 (X)\r\nasync function getData() {\r\n    const data1 = await asuncFunc1();\r\n    const data2 = await asyncFunc2();\r\n    console.log({data1, data2});\r\n} // 1초 후에 LOG:: '처리중 1', 2초 후에 LOG:: '처리중 2'\r\n```\r\n\r\n- 병렬처리를 진행한 예를 보면 1초에 data1과 data2의 로그를 모두 볼 수 있다.\r\n- 하지만 병렬처리를 진행하지 않은 예시처럼 코드를 작성하면 1초를 써서 data1을 받아오고 그 다음 또 다시 1초를 data2에 사용하기 때문에 총 2초가 걸리는 비효율이 발생한다.\r\n\r\n---\r\n\r\nRef.\r\n\r\n실전 자바스크립트 - 이재승");

/***/ }),

/***/ 133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"자바스크립트의 새로운 함수 Generator를 알아보자\"\r\ndate: \"2021.08.26\"\r\ntags: \r\n    - javascript\r\n    - generator\r\n    - ES6\r\n---\r\n\r\n# 자바스크립트의 새로운 함수 Generator를 알아보자\r\n## Generator는?\r\n\r\n순차적으로 진행하는 자바스크립트의 특별한 함수.\r\n\r\n\r\n\r\n## 사용법\r\n\r\n### 1. 선언\r\n\r\nfunction을 선언할 때 에 `*` 을 추가한다.\r\n\r\n```javascript\r\n// Recommend\r\nfunction* example() {}\r\n\r\n// Not Recommend\r\nfunction *example() {}\r\n```\r\n\r\n- function과 함수 이름중에서 function에 `*`을 붙여주는 것을 추천한다.\r\n\r\n\r\n\r\n### 2. yeild와 next() 메소드\r\n\r\n제너레이터는 yield를 순차적으로 실행하는데, 이를 실행하기 위해서는 next() 메소드를 활용해야 다음 yield로 넘어갈 수 있다.\r\n\r\n```javascript\r\nfunction* f1() {\r\n    console.log('f1-1');\r\n    yield 10;\r\n    console.log('f1-2');\r\n    yield 20;\r\n    console.log('f1-3');\r\n    return 'finished'\r\n}\r\n\r\nconst gen = f1();\t\t//(1)\r\nconsole.log(gen.next());//(2)\r\nconsole.log(gen.next());//(3)\r\nconsole.log(gen.next());//(4)\r\n```\r\n\r\n- (1)까지는 아무것도 출력되지 않는다.\r\n- (2)가 실행되면 로그에 f1-1이 출력되고 {value: 10, done: false}가 반환된다. next의 반환값은 항상 value와 done이 포함된 객체로 넘어온다. done은 이 제너레이터 함수가 모두 실행되면 true가 된다.\r\n- (3)이 실행되면 로그에 f1-2이 출력되고 {value: 20, done: false}가 반환된다.\r\n- (3)이 실행되면 로그에 f1-3이 출력되고 {value: 'finished', done: true}가 반환된다.\r\n\r\n\r\n\r\n:heavy_exclamation_mark: **만약 return 다음에 yield가 더 있다하더라도 return이 된 순간 더 이상 next() 메소드는 동작하지 않고 이후 yield는 모두} {value: undefined, done: true} 만이 반환된다.**\r\n\r\n\r\n\r\n## 3. Generator를 쓰는 이유, 장점\r\n\r\n### :bulb: Generator는 실행되는 딱 그 순간에만 연산을 실행한다. 따라서 무의미한 반복이 필요하지 않다.\r\n\r\n>  마치 배열에서 순회하는 것과 같이 작동하는데, 배열의 경우 처음 생성할 때부터 모든 값이 정해져있기 때문에 메모리 사용량이 많다. 하지만 제너레이터는 만들어지는 그 때 메모리에 저장되기 때문에 <u>메모리 활용성 측면에서 큰 장점</u>이 있다.\r\n\r\n- 예) 배열의 끝까지 다 순회하지 않고 필요한 곳까지만 순회하는 사례\r\n\r\n  ```javascript\r\n  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\r\n  const result = take(3,\r\n  map(filter(values, n=> n % 2 === 0),\r\n      n => n* 10\r\n  \t)\r\n  )\r\n  ```\r\n\r\n- 위의 예시는 과연 어떤 값을 반환할까?\r\n\r\n- log를 찍어보면 [20, 40, 60]이 반환될 것이다.\r\n\r\n- 짝수를 순회하다가 `take(3)`를 보고 3번째에서 딱 멈추는 것이다. Generator의 효율성이 돋보인다.\r\n\r\n\r\n\r\n### :bulb: 메모리 사용이 효율적으로 사용할 수 있다.\r\n\r\n- 예) map, filter함수 등을 반환하는 배열 없이 만들어서 쓸 수 있다.\r\n\r\n  ```javascript\r\n  function* map(iter, mapper) {\r\n      for (const v of iter) {\r\n          yield mapper(v);\r\n      }\r\n  }\r\n  \r\n  function* filter(iter, test) {\r\n      for (const v of iter) {\r\n          if (test(v)) {\r\n              yield v;\r\n          }\r\n      }\r\n  }\r\n  \r\n  ```\r\n\r\n- 위와 같이 map, filter함수를 제너레이터로 만들어서 사용하면 기존 내장함수보다 메모리를 더 효율적으로 사용할 수 있다.\r\n\r\n\r\n\r\n---\r\n\r\nRef.\r\n\r\n실전 자바스크립트 - 이재승\r\n\r\n");

/***/ }),

/***/ 1401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"자바스크립트 iterable과 iterator에 대해 알아보자\"\r\ndate: \"2021.08.30\"\r\ntags: \r\n    - javascript\r\n    - iterable\r\n    - iterator\r\n    - ES6\r\n---\r\n\r\n# 자바스크립트 iterable과 iterator에 대해 알아보자 \r\n## 이터러블 (iterable)이란?\r\n\r\n> 반복 가능한 객체 (ES2015에 추가된 문법)\r\n\r\n객체의 `Symbol.iterator` 속성에 특정 형태의 함수가 들어있다면, 이를 ***반복 가능한 객체(iterable object)*** 혹은 줄여서 **iterable**이라 부르고, <u>해당 객체는 iterable protocol을 만족한다</u>고 말합니다.\r\n\r\n\r\n\r\n### 이터러블의 조건 \r\n\r\n1. 순회 할수 있는 데이터를 가지고 있어야한다. \r\n2. 전역 “well-known” symbol 인`Symbol.iterator` 을 메서드로 가지고 있어야한다. 또한 이 메서드는 #3 , #6 에 따라 구현되어야 한다.\r\n3. `Symbol.iterator` 메서드는 **“iterator” 객체를 반환**해야합니다\r\n4. “iterator” 객체는 **반드시 next 라고 하는 메서드를 가져야합니다.** (지난 Generator 포스팅에서 봤던 개념입니다.)\r\n5. next 에는 #1에 저장되어있는 데이터에 접근 할 수 있어야합니다.\r\n6. “iterator” 객체인 iteratorObj를 iteratorObj.next()하면 `{value:<stored data},done:false}` #1 데이터가 추출 되며 전부다 순회했을 경우 `{done:false}` 가 반환되도록 한다.\r\n\r\n\r\n\r\n### 이터러블(iterable)이 사용되는 곳\r\n\r\n- for... of 루프\r\n\r\n```javascript\r\nconst iterable = [1,2,3]\r\nfor (let value of iterable) {\r\n    console.log(value)\r\n}\r\n// 1, 2, 3\r\n```\r\n\r\n\r\n\r\n- destructuring\r\n\r\n```javascript\r\n// spread operator\r\nlet newIterable = [...iterable] // [1, 2, 3]\r\n\r\n// destructuring\r\nconst [c1, c2] = 'hello';\r\n```\r\n\r\n\r\n\r\n\r\n\r\n## 이터러블(iterable)과 이터레이터(iterator)의 차이\r\n\r\n- 이터러블: 순회할 수 있는 객체\r\n- 이터레이터: next메소드를 호출하면 {done: boolean, value} 를 반환하는 오브젝트, 객체 그 자체\r\n\r\n이터러블은 순회할 수 있는 모든 객체가 될 수 있다. 따라서 배열(Array), 문자열(string), 객체 등 다양한 것들이 될 수 있다. 이터레이터는 이터러블의 속성을 가진 바로 그 객체를 의미한다. \r\n\r\n이터레이터는 .next() 메소드를 반드시 갖는다. 즉, 앞 뒤로 바로 이전과 바로 다음 값만을 가져올 수 있다. 하지만 이터러블 중 하나인 배열은 인덱스로 랜덤 Access가 가능하다는 점에서 이터러블과 이터레이터의 차이를 알 수 있다.\r\n\r\n물론 개념적으로 완전히 포괄하는 느낌은 아니지만, 사실상 배열은 언제든 이터레이터로 변환이 가능하다는 점에서 이터레이터가 이터러블을 포함하는 관계로 볼 수 있다.\r\n\r\n| Iterable 이터러블       | Iterator 이터레이터                               |\r\n| ----------------------- | ------------------------------------------------- |\r\n| 랜덤 Access가 가능하다. | .next() 메소드, 바로 앞/뒤 값만을 가져올 수 있다. |\r\n| 기능이 많다 -> 무겁다   | 기능이 배열에 비해 상대적으로 적다 -> 가볍다      |\r\n| 메모리 사용량이 많다.   | 메모리 효율적이다.                                |\r\n\r\n\r\n\r\n---\r\n\r\nRef.\r\n\r\nhttps://helloworldjavascript.net/pages/260-iteration.html\r\n");

/***/ }),

/***/ 6907:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"javascript 즉시실행함수(?) 일단 알아보자\"\r\ndate: \"2021.09.16\"\r\ntags: \r\n    - javascript\r\n    - 즉시실행함수\r\n---\r\n\r\n# javascript 즉시실행함수란 무엇일까\r\n\r\n> 즉시실행함수: 함수선언과 동시에 바로 실행이 되는 함수.\r\n\r\njavascript는 일회성으로 사용되는 함수가 다른 언어에 비해 많은 편인데, 이를 효율적으로 진행하기 위해`익명함수`, `즉시실행함수` 등을 지원합니다.\r\n\r\n당연히 단 한 번만 호출되고 실행됩니다.\r\n\r\n\r\n\r\n## 즉시실행함수\r\n\r\n```javascript\r\n// 일반함수\r\n\r\nfunction normal() {\r\n    console.log('Hello World!');\r\n}\r\nnormal();\r\n```\r\n\r\n```javascript\r\n// 즉시실행함수 - 이름이 있으므로 \"기명즉시실행함수\"라고도 불린다.\r\n(function immediate(){\r\n    console.log('URGENT!!')\r\n})();\r\n```\r\n\r\n위의 예시에서 보듯이 함수선언부분 전체를 괄호로 감싸고 그 뒤에 () 를 붙여서 바로 실행하도록 합니다.\r\n\r\n사실 한 번만 호출되고 더 이상 호출되지 않기 때문에 함수의 이름이 필요하지 않습니다. 따라서 다음과 같이 쓸 수 있습니다.\r\n\r\n```javascript\r\n// Anonymous function - 이름이 없으므로 \"익명즉시실행함수\"라고도 불린다.\r\n(function (){\r\n    console.log('URGENT!!')\r\n})();\r\n\r\n// ES6\r\n(()=> {console.log('URGENT!!')})();\r\n```\r\n\r\n일반적으로 즉시실행함수는 어차피 실행 선언 후 바로 사용되고 다시 사용되지 않으므로 ***익명함수***로 많이 쓰입니다.\r\n\r\n하지만 ***기명함수***로 쓰이는 경우도 있는데, 바로 재귀함수입니다. 자기 자신을 다시 호출해야 하는데 이름이 없으면 호출할 수가 없으므로 재귀함수에서는 이름을 지어서 활용합니다.\r\n\r\n\r\n\r\n### 함수 인자(arguments)는 어떻게 활용할까?\r\n\r\n```javascript\r\n(function sum(a, b){\r\n    console.log(`The answer is ${a+b}`)\r\n})(3, 5)\r\n// \"The answer is 8\"\r\n\r\n\r\n(function (arr){\r\n    arr.map((item) => {\r\n        console.log(item)\r\n    })\r\n})([\"Hello\", \"World\", \"!\"])\r\n// \"Hello\"\r\n// \"World\"\r\n// \"!\" \r\n```\r\n\r\n아래 예시와 같이 함수뒤에 붙여주는 괄호안에 인자를 넣어주면 즉시실행함수 내부에서 활용할 수 있다.\r\n\r\n지금은 숫자 자료형을 넣어줬지만 배열도 가능합니다.\r\n\r\n\r\n");

/***/ }),

/***/ 7707:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"React프로젝트 Nodejs 버전(v10.x → v14.x) 올리기\"\ndate: \"2022.03.24\"\ntags:\n       - nodejs\n       - cra\n       - react\n       - 노드버전\n---\n\n\n# React프로젝트 Nodejs 버전(v10.x → v14.x) 올리기\n\n## buildit-co-kr-react 프로젝트 현 스펙\n\n```jsx\n// package.json\n\n\"react-scripts\": \"^2.1.8\",\n\"typescript\": \"3.8\",\n\"node-sass\": \"^4.14.1\",\n...\n```\n\n- 회사 프로젝트는 2022년 3월 21일 nodejs는 10.23.0 버전을 사용하고 있습니다.\n\nnode 버전이 낮은 편이어서 최신 javascript 문법을 쓰지 못하는 문제 상황이 있었는데, 이를 해결하기 위해서는 크게 두 가지 방법이 있습니다.\n\n1️⃣ react-rewire로 CRA 설정 중 babel설정을 override하기\n\n2️⃣ node 버전과 dependecy가 있는 라이브러리들의 버전을 같이 올려서 해결하기\n\n1번의 경우 아래 글에서 작성한 것처럼 이미 작업을 진행해보았습니다.\n\n#### :link:[react-rewired 사용해서 eject없이 CRA에babel설정 추가하기](https://likelionsungguk.github.io/22-03-23/react-rewired-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-eject%EC%97%86%EC%9D%B4-CRA%EC%97%90babel%EC%84%A4%EC%A0%95-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)\n\n\n\n1번의 경우 CRA “one build dependecy”가 깨질 수 있는 위험성이 있으므로 이참에 2번 방법을 써보기로 했습니다.\n\n## 버전 선택하기\n\n먼저 nodejs 버전을 선택하기 전에는 다음의 내용들을 체크해봤습니다.\n\n✅ 사용하고자 하는 기능을 제공하는가?\n\n✅ 다른 프로젝트들과 버전 차이가 심하지 않는가?\n\n---\n\n### ✅ 사용하고자 하는 기능을 제공하는가?\n\n중점적으로 생각했던 기능을 ***optional chaining*** 이었습니다.\n\n![출처: mdn](/assets/img/0324-0.png)\n\n출처: mdn\n\n14.0.0 버전 이상부터 지원하는 것을 확인할 수 있었습니다.\n\n### ✅ 다른 프로젝트들과 버전 차이가 심하지 않는가?\n\n- 회사내 다른 프로젝트1: `nodejs14.x`\n- 회사내 다른 프로젝트2: `nodejs12.x`\n\n종합적으로 고려해봤을 때 최종적으로 nodejs 14버전을 사용하기로 하였습니다.\n\nnvm 으로 nodejs 버전을 10.23.0. 에서 14.15.4로 바꾸고 나서 npm start를 실행하면 에러가 발생합니다.\n\n![node버전에러](/assets/img/0324-1.png)\n\nnode버전에러\n\n```bash\nNode Sass version X.0.0 is incompatible with ^4.0.0 \n```\n\n보면 node-sass 라이브러리와 의존성 충돌이 일어나고 있습니다.\n\n![nodesass의존성충돌](/assets/img/0324-2.png)\n\nnode 14버전은 node-sass 최소 4.14 버전 이상을 설치해줘야 정상 동작하는 것으로 보입니다.\n\n살펴보니 기존 node-sass버전이 4.14 버전이었는데 충돌이 났습니다. 4.14+ 는 이상의 개념보다는 \"초과\" 개념으로 보고 4.14.1버전을 설치해봤습니다.\n\n\n\n## 작업 진행\n\n1. node version 변경 (v14.15.4로 했습니다.)\n2. node-sass uninstall\n3. node-sass@4.14.1로 재설치 (`npm i node-sass@4.14.1`)\n4. react-scripts 버전올리기 `package.json` 에서 \"react-scripts\":\"^3.3.0\"\n5. package-lock.json 지우고 다시 `npm i`\n6. es-lint 오류 수정\n\n위 단계를 실행하다보면 3번 이후에 다음과 같은 에러를 만날 수 있습니다.\n\n```bash\nAdd @babel/plugin-proposal-optional-chaining\n```\n\n이때 react-scripts의 버전을 3.3.0 이상으로 끌어올려주면 위 문제를 해결할 수 있습니다.\n\n(react-rewire를 안쓰고 최대한 react-scripts를 사용하기 위해 react-scripts버전을 같이 올려주었습니다.)\n\n이후 6번까지의 과정을 진행하면 node14버전으로 프로젝트를 컴파일 하여 실행할 수 있습니다.\n\n\n\n## 배포 문제 발생\n\n위 작업을 진행하고나면 로컬에서는 문제없이 작동시킬 수 있습니다. 하지만 배포를 하면 빌드가 실패하며 배포에 실패합니다.\n\n![여기까지는 문제없고](/assets/img/0324-3.png)\n\n여기까지는 문제없고\n\n![CI=True](/assets/img/0324-4.png)\n\n여기서부터 [process.env.CI](http://process.env.CI) = true 여서 warnings 를 errors로 본다고 하면서 compile에 실패하는 모습을 보여줍니다.\n\n![컴파일에 실패하고서 gitlab ci의 Job이 실패했습니다.](/assets/img/0324-5.png)\n\n컴파일에 실패하고서 gitlab ci의 Job이 실패했습니다.\n\n### 배포실패 문제원인 찾기\n\n### **What is this error all about? (about netlify deploy)**\n\nBeginning on *June 15, 2020,* Netlify started a gradual rollout of adding the environment variable CI to build environments, with the value of true. This environment variable, short for Continuous Integration, is commonly set in various CI environments like Travis CI and Github Actions, among many others. The ecosystem has largely agreed to use this environment setting to detect when a build is executing in a CI environment, as opposed to a local development environment.\n\nThis setting allows many common libraries to detect a CI environment and change behavior accordingly. One such behavior is the disabling of progress “spinners” that while useful in a local development terminal, can render poorly when operating in a log streamed CI environment.\n\n***Because of this some libraries now interpret what were previously just warnings as hard errors and halt the build***. The intention is that developers should not ship potentially broken configurations, but the downside is that builds that successfully completed previously started failing after this change.\n\n위 내용을 요약하면, CI환경은 github actions나 travis 등을 포함하여 다양한 곳에서 일반적으로 설정되고 있습니다. 로컬 개발 환경이 아닌 CI환경에서 빌드가 실행되는 환경에 맞춰서 빌드를 합니다. 왜냐하면 로컬 환경에서는 유용했던 것들이 CI의 log stream과 같은 곳에서 작동할 때는 working poorly 하기 때문입니다.\n\n따라서 `CI=true` 는 기본 설정이며 이 설정이 `true`로 세팅 되어있을 때에는  CI환경에 맞게 warnings를 error로 처리하여 빌드를 정상적으로 구성할 수 있도록 합니다.\n\n장점은 개발자가 config를 파괴하지 못하도록 하는 것이 있습니다. 하지만 단점은 기존에 잘 배포되던 시스템이 이 설정때문에 failed된다는 것입니다.\n\nFacebook 에서도 react-scripts를 통해 빌드할 때 CI=true를 기본설정으로 하기로 했다고 합니다. 여기서는 자기들끼리 엄청나게 discussion을 한 후 내린 결론이라고 하네요.\n\n[https://github.com/facebook/create-react-app/issues/3657](https://github.com/facebook/create-react-app/issues/3657)\n\n\n\n### 해결법 (FIX)\n\n```bash\n$ CI='' npm run build\n       or\n$ CI=false npm run build\n```\n\nCI=false와 CI= 은 조금 다릅니다.\n\n**“False” isn’t always false**\n\nThough it seems like the logical opposite of `CI=true`, setting `CI=false` may not work as expected. This is because environment variable values are processed as strings, and many libraries interpret *any* non-empty string value for `CI` as `true`.\n\n환경 변수들의 값은 스트링으로 처리되기 때문에 많은 라이브러리에서 non-empty string을 true로 하기 때문입니다. (CI=false로 False값을 주었다고 생각하지만 empty가 아니기 때문에 True라고 오류를 발생시킬 수 있다는 내용입니다.)\n\n회사에서는 gitlab CI를 쓰고 있습니다. gitlab CI에서는 `CI=fase` 로 했을 때 문제 없이 배포를 통과하긴 했습니다.\n\n\n\n---\n\nReferences.\n\n[Optional chaining - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)\n\n[How to enable optional chaining with Create React App and TypeScript](https://stackoverflow.com/questions/59093630/how-to-enable-optional-chaining-with-create-react-app-and-typescript)\n\n[Treating Warnings As Errors Because Process.env.CI = True.](https://360techexplorer.com/treating-warnings-as-errors-because-process-env-ci-true-vercel-netlify-jenkins-etc/)\n\n[[Solved] \"Treating warnings as errors because of process.env.CI = true\"](https://dev.to/kapi1/solved-treating-warnings-as-errors-because-of-process-env-ci-true-bk5)\n\n");

/***/ }),

/***/ 7848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"input 정수만 입력받기\"\ndate: \"2022.07.08\"\ntags:\n  - javascript\n  - test\n  - jest\n  - tdd\n---\n\n# javascript input 정수만 입력받기\n\n## 문제 상황\n\n<video src=\"/assets/data/소수점오류.mp4\" width=\"100%\" autoplay controls loop></video>\n\n- input의 비율을 소수점으로 입력했을 때 분명 입력한 대로는 총 합계가 100이 나와서 딱 맞아 떨어지는데, 미선택에 0.0000000001 과 같은 숫자가 남아있거나 100이 다 맞을 때 7.1023981203와 같은 엉뚱한 숫자가 나오는 오류가 있습니다.\n\n\n\n## 문제 원인\n\n![image.png](/assets/img/javascriptinput정수만입력받기1.png)\n\n문제 원인은 자바스크립트 소수의 특징입니다.\n\n자바스크립트의 숫자는 ****64 비트 부동 소수점****입니다.\n\n우리가 쓰는 10진법을 자바스크립트 엔진은 2진법으로 바꿔서 계산을 하는데, 이때 특정 소수의 경우 무한소수가 되어버립니다. (예: const 소수 = 10/3)\n\n이런 경우 자바스크립트는 무한수를 정해진 자원 안에서 표현하기 위해 유한하게 변경 하려다 보니 미세한 값들이 초과되거나 손실발생하게 됩니다.\n\n때문에 경우에 따라 대략 소수점 아래 15 ~ 17자리에서 그 무한소수를 끊고 근사값으로 저장하여 연산을 수행합니다.\n\n\n\n## 문제해결 방식 결정\n\n### toFixed, round를 사용하지 않는 이유\n\n가장 많이 쓰이는 것이 toFixed, round 같이 소수점을 특정 자릿수에서 끊고서 해당 수치들을 합계하거나 다 연산이 된 후에 동일한 처리를 할 수 있습니다.\n\n하지만 세대타입은 총합이 100이 되어야 하고 이 합계를 진행하는 로직이 생각보다 여러 곳에서 빈번하게 일어나고 있습니다.\n\n이 합계로직들을 모두 찾아다니면서 수정하는 것은 비효율적인 방법이라 판단했습니다.\n\n### 세대타입 비율 입력 시 정수값만 받도록 수정한 이유\n\n소수문제를 가장 쉽게 해결할 수 있는 것은 입력을 정수로만 받도록 하는 것입니다.\n\n하지만 UX관점에서 사용자가 세대타입의 비율을 꼭 소수점으로 표현해야만 한다면 또 다른 얘기입니다. 이 때 실제로 자주 사용하는 사용성을 체크해본 결과 세대타입 비율은 대략적인 수치이기 때문에 반드시 소수점까지 표기할 필요가 없다는 것을 확인하였습니다. 따라서 정수로 수정해도 큰 무리가 없다는 판단을 할 수 있었습니다.\n\n\n\n## 문제해결 과정\n\njavascript에서는 타언어와 다르게 숫자 타입이 딱 하나밖에 없습니다. 따라서 integer로 설정을 바꾸는 방법을 사용하지 못하므로 정수값만 입력을 받도록 하기 위해서는 약간의 트릭이 필요합니다.\n\n- 일단 정수만 입력이 가능하도록 하는pattern을 props으로 내려줘서 pattern에 맞는 입력만 입력이 가능하도록 해줘야 합니다.\n- input에 pattern을 줄 수 있는 것은 text타입입니다. (number는 X)\n- 따라서 input type=”number” 가 아닌 input type=”text”로 설정해줘야 합니다.\n\n### 1. ProjectFormHousing > ProjectFieldInput 수정\n\n```jsx\n// 기존\n<ProjectFieldInput\n\t...\n  type=\"number\"\n  unit=\"%\"\n  ...\n/>\n```\n\n```jsx\n// 수정 후\n<ProjectFieldInput\n\t...\n  type=\"text\"\n  pattern={\"[0-9]*\"}\n  unit=\"%\"\n  ...\n/>\n```\n\n1차로 이렇게 작업을 진행한 뒤 projectFielnInput에서 pattern을 props받아서 사용해보면 정수만 입력이 가능하도록 잘 동작합니다.\n\n하지만, 숫자입력값이 아닌 다른 입력값이 들어오는 경우 `NaN` 을 띄워주는 의도하지 않은 동작이 일어납니다.\n\n![숫자가 아닌 입력을 하면 NaN을 띄워주는 의도치 않은 동작을 하게 됩니다.](/assets/img/javascriptinput정수만입력받기2.png)\n\n숫자가 아닌 입력을 하면 NaN을 띄워주는 의도치 않은 동작을 하게 됩니다.\n\n### 2. onchange 에서 숫자가 아닌 값 처리해주기\n\n현재 활용하고 있는 projectFieldInput은 onChange 이벤트 발생시에 `updateValue` 함수를 통해 state값을 관리하고 있습니다.\n\n이 함수에서 숫자가 아닌 입력값을 받은 경우 return 을 막아주면, 위 오류 사항을 해결할 수 있을 거라 판단했습니다.\n\n```jsx\nupdateValue = (type: 'HOUSING' | 'MY_TYPE', index: number, area?: number, bay?: number, proportion?: number, userdef?: boolean) => {\n    if (proportion !== undefined && !isFinite(proportion)) {\n      return\n    }\n...\n}\n```\n\n위와 같이 updateValue 함수의 최상단에 proportion이 숫자가 아닌경우 return을 비어두어 처리하였습니다. `isFinite()` 은 숫자인지 아닌지 체크하는 함수입니다. 최상위 함수로 어떤 객체와도 연결되지 않았습니다. Nan, -infinite, +infinite → false, 나머지는 true를 반환합니다.\n\n### 3. CSS 맞추기\n\nBuilditInput은 크게 type이 text인지 number인지에 따라 CSS가 다르게 설정됩니다.\n\nText의 경우 input창의 왼쪽에 정렬이 되고 unit 설정은 따로 없습니다.\n\nNumber의 경우 input창의 오른쪽에 정렬이 되고 unit은 props를 받습니다.\n\n![TEXT](/assets/img/javascriptinput정수만입력받기3.png)\n\nTEXT\n\n![Number](/assets/img/javascriptinput정수만입력받기4.png)\n\nNumber\n\n세대타입의 경우 원래대로라면 우측정렬이 되고 단위인 %까지 unit으로 표현되는 것이 올바릅니다. 하지만 이번 정수만 입력가능하다는 특성이 추가되면서 이 부분에 대한 UI통일성이 깨져버리게 되었으므로 이를 다시 맞춰주는 작업이 필요합니다.\n\n이미 컴포넌트 자체에 align이라는 프로퍼티를 정의해 두었기 때문에 간단하게 left, right, center를 선택할 수 있습니다.\n\n따라서 ProjectFieldInput component에서 align=”right”을 props해주면 우측정렬을 할 수 있습니다.\n\n![Untitled](/assets/img/javascriptinput정수만입력받기5.png)\n\n—끝—");

/***/ }),

/***/ 6178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"Typescript 시작하기\"\r\ndate: \"2021.04.14\"\r\ntags: \r\n  - typescript\r\n  - ts\r\n  - 타입스크립트\r\n---\r\n\r\n\r\n\r\n# 타입스크립트 fundamentals - 타입, 함수, 인터페이스, enum, 클래스\r\n\r\n\r\n## 1. 기본타입\r\n\r\n변수선언방식 변수명 : 타입 = 값;\r\n\r\n```tsx\r\nlet str: string = 'hi'\r\nlet num: number = 10;\r\nlet isLoggedIn: boolean = false;\r\n```\r\n\r\n### Array\r\n\r\n요소의 집합\r\n\r\n```tsx\r\nlet arr: number[] = [1, 2, 3];\r\narr[2] = 100;\r\n\r\n// 타입이 다르므로 에러\r\narr[2] = 'hi';\r\n```\r\n\r\n### Tuple\r\n\r\n**길이가 고정**되고 요소 **타입이 지정**된 배열\r\n\r\n```tsx\r\nlet tuple: [string, number] = ['hi', 10];\r\n\r\n//길이가 고정되기때문에 에러뜸\r\ntuple[5] = 'hello';\r\n// number타입에 string 할당 x 에러\r\ntuple[1] = 'hi';\r\n\r\n```\r\n\r\n### Enum\r\n\r\n**상수**들의 집합이다.\r\n\r\n```tsx\r\nenum Avengers { Capt, IronMan, Thor }\r\nlet hero: Avengers = Avengers.Capt;\r\n\r\nconsole.log(hero); // 0\r\n\r\n//읽기전용이라서 할당불가 에러\r\nAvengers.Capt = 3;\r\n```\r\n\r\n### Any\r\n\r\n자바스크립트의 변수랑 똑같다. 뭐든 할당 가능\r\n\r\n```tsx\r\nlet str: any = 'hi';\r\nlet num: any = 10;\r\nlet arr: any = ['a', 2, true];\r\n\r\n//any라서 num에 'hi' 할당 가능\r\nnum = 'hi';\r\n```\r\n\r\n### Void\r\n\r\nundefined와 null만 할당가능하다. 일반적으로 반환하지 않는 **함수**에서 사용\r\n\r\n```tsx\r\nlet unuseful: void = undefined;\r\nfunction notuse(): void {\r\n  console.log('sth');\r\n}\r\n```\r\n\r\n### never\r\n\r\n에러를 throw 하거나 절대 반환하지 않는 함수(무한루프일때 쓰이네요)\r\n\r\n```tsx\r\nfunction neverEnd(): never {\r\n  while (true) {\r\n\r\n  }\r\n}\r\n\r\nfunction error(message: string): never {\r\n    throw new Error(message);\r\n}\r\n```\r\n\r\n## 2. 함수\r\n\r\n### 함수의 기본적인 타입 선언\r\n\r\n자바스크립트와의 차이점은 **매개 변수**와 **반환 값**에 타입 부여\r\n\r\n```tsx\r\nfunction sum(a: number, b: number): number {\r\n\treturn a + b;\r\n}\r\n```\r\n\r\n### 함수의 인자\r\n\r\n전달 인자의 수가 더 많거나 적거나 하면 당연히 안되겠죠? 당연히 타입도 다르면 안되요\r\n\r\n```tsx\r\nfunction sum(a: number, b: number): number {\r\n  return a + b;\r\n}\r\nsum(10, 20); // 30\r\nsum(10, 20, 30); // error, too many parameters\r\nsum(10); // error, too few parameters\r\n```\r\n\r\n### 선택적 매개변수\r\n\r\n하지만 매개변수에 ?를 달아주면 그 전달인자를 넘기지 않아도 됩니다.\r\n\r\n```tsx\r\nfunction sum(a: number, b?: number): number {\r\n  return a + b;\r\n}\r\nsum(10, 20); // 30\r\nsum(10, 20, 30); // error, too many parameters\r\nsum(10); // 10\r\n```\r\n\r\n```tsx\r\n// error 필수 매개변수가 선택적 매개변수 \r\n// 선택적 매개변수가 앞에 있으면 안됩니다.\r\nfunction sum(a?: number, b: number): number {\r\n  return a + b;\r\n}\r\n```\r\n\r\n기본값도 설정해 줄 수 있습니다.\r\n\r\n```tsx\r\nfunction sum(a: number, b = 100): number {\r\n  return a + b;\r\n}\r\nsum(10, undefined); // 110\r\nsum(10, 20, 30); // error, too many parameters\r\nsum(10); // 110\r\n```\r\n\r\n### 인터페이스\r\n\r\n인터페이스는 상호간의 정의한 약속이나 규칙을 의미한다.\r\n\r\n객체의 속성과 속성타입\r\n\r\n함수의 매개변수나 반환타입\r\n\r\n배열과 객체를 접근하는 방식\r\n\r\n클래스\r\n\r\nlogAge 메소드는 age라는 속성을 갖고 number타입을 갖는 객체를 받는것을 약속했다.\r\n\r\n```tsx\r\nlet person = { name: 'Capt', age: 28 };\r\n\r\nfunction logAge(obj: { age: number }) {\r\n  console.log(obj.age); // 28\r\n}\r\nlogAge(person); // 28\r\n```\r\n\r\n```tsx\r\ninterface personAge {\r\n  age: number;\r\n}\r\n\r\nfunction logAge(obj: personAge) {\r\n  console.log(obj.age);\r\n}\r\nlet person = { name: 'Capt', age: 28 };\r\nlogAge(person);\r\n```\r\n\r\n### 옵션속성\r\n\r\n아까 매개변수때와 마찬가지로 ?를 붙혀주면 그 속성을 모두 다 꼭 사용하지 않아도 됩니다.\r\n\r\n```tsx\r\ninterface CraftBeer {\r\n  name: string;\r\n  hop?: number;  \r\n}\r\n\r\nlet myBeer = {\r\n  name: 'Saporo'\r\n};\r\nfunction brewBeer(beer: CraftBeer) {\r\n  console.log(beer.name); // Saporo\r\n}\r\nbrewBeer(myBeer);\r\n```\r\n\r\n### 읽기 전용 속성\r\n\r\nreadonly가 붙은 속성은 읽는것만 된다.\r\n\r\n```tsx\r\ninterface CraftBeer {\r\n  readonly brand: string;\r\n}\r\n\r\nlet myBeer: CraftBeer = {\r\n  brand: 'Belgian Monk'\r\n};\r\nmyBeer.brand = 'Korean Carpenter'; // error!\r\n```\r\n\r\n### 읽기 전용 배열\r\n\r\nReadonlyArray로 선언하면 배열 내용 변경 불가ReadonlyArray로 선언하면 배열 내용 변경 불가\r\n\r\n```tsx\r\nlet arr: ReadonlyArray<number> = [1,2,3];\r\narr.splice(0,1); // error\r\narr.push(4); // error\r\narr[0] = 100; // error\r\narr = [10, 20, 30]; // error\r\n```\r\n\r\n객체 선언과 관련된 타입 체킹\r\n\r\n```tsx\r\ninterface CraftBeer {\r\n  brand?: string;\r\n}\r\n\r\nfunction brewBeer(beer: CraftBeer) {\r\n  // ..\r\n}\r\nbrewBeer({ brandon: 'what' }); // 속성이 다르니 에러뜹니다.\r\n```\r\n\r\n이러면 타입 체크를 무시한다.\r\n\r\n```tsx\r\nlet myBeer = { brandon: 'what' }';\r\nbrewBeer(myBeer as CraftBeer);\r\n```\r\n\r\n### 함수 타입\r\n\r\n함수 매개변수와 반환타입도 인터페이스 정의가 가능하다.\r\n\r\n```tsx\r\ninterface login {\r\n  (username: string, password: string): boolean;\r\n}\r\n\r\nlet loginUser: login; // 함수 저장할 변수 선언\r\nloginUser = function(id: string, pw: string) {\r\n  console.log('로그인 했습니다');\r\n  return true;\r\n}\r\n```\r\n\r\n클래스 타입\r\n\r\n자바의 인터페이스와 목적이 비슷한데\r\n\r\n어떤 인터페이스를 implements한 클래스가 있다면\r\n\r\n인터페이스의 메소드와 변수가 있다는 것을 보장한다.\r\n\r\n```tsx\r\ninterface CraftBeer {\r\n  beerName: string;\r\n  nameBeer(beer: string): void;\r\n}\r\n\r\nclass myBeer implements CraftBeer {\r\n  beerName: string = 'Baby Guinness';\r\n  nameBeer(b: string) {\r\n    this.beerName = b;\r\n  }\r\n  constructor() {}\r\n}\r\n```\r\n\r\n인터페이스 끼리 상속도 가능합니다.\r\n\r\n```tsx\r\ninterface Person {\r\n  name: string;\r\n}\r\ninterface Drinker {\r\n  drink: string;\r\n}\r\ninterface Developer extends Person {\r\n  skill: string;\r\n}\r\nlet fe = {} as Developer;\r\nfe.name = 'josh';\r\nfe.skill = 'TypeScript';\r\nfe.drink = 'Beer';\r\n```\r\n\r\n## 4. Enum\r\n\r\n> 특정 값들의 **집합**을 의미하는 자료형으로 크게 {숫자형 이넘, 문자형 이넘} 두 가지가 있다\r\n\r\n- Enum이라는 개념을 이해하기 어려웠던 이유는, javascript에는 enum이 없었기 때문이다. (하지만 검색해보니 C언어에서는 제공하는 것 같음.)\r\n\r\n### 4-1. 숫자형 이넘\r\n\r\n```tsx\r\nenum Direction {\r\n  Up = 1,\r\n  Down,\r\n  Left,\r\n  Right\r\n}\r\n```\r\n\r\n특이한 것은 이렇게 선언하면  양방향으로 호출할 수 있는 특이한 자료구조가 된다는 것이다.\r\n\r\n```tsx\r\nconsole.log(Direction[1])    // \"Up\"\r\nconsole.log(Direction[\"Up\"]) // 1\r\nconsole.log(Direction[3])    // \"Left\"\r\n```\r\n\r\n이와 같이 숫자형 Enum에서 Direction.Up 으로 1값을 얻거나 반대로 Direction[1]로 \"Up\"값을 얻는 것을 **`리버스 매핑`** 이라고 한다.\r\n\r\n이렇게 초기값을 선언해주면 1, 2, 3, 4 의 순서로 1씩 증가하며 할당된다. 만약,\r\n\r\n```tsx\r\nenum Direction {\r\n\tUp, \r\n\tDown,\r\n\tLeft,\r\n\tRight\r\n}\r\n```\r\n\r\n으로 선언되었다면 Up - 0 , Down - 1, Left - 2, Right - 3이 된다.\r\n\r\n### 4-2 숫자형 enum 사용\r\n\r\n```tsx\r\nenum Response {\r\n  No = 0,\r\n  Yes = 1,\r\n}\r\n\r\nfunction respond(recipient: string, message: Response): void {\r\n  console.log(recipient, message)\r\n}\r\n\r\nrespond(\"Captain Pangyo\", Response.Yes);\r\n\r\n--------------------\r\n[LOG]: \"Captain Pangyo\",  1\r\n```\r\n\r\n### 4-3. 문자형 enum\r\n\r\n> 문자형 이넘은 이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 해줘야 합니다.\r\n\r\n```tsx\r\nenum Direction {\r\n    Up = \"UP\",\r\n    Down = \"DOWN\",\r\n    Left = \"LEFT\",\r\n    Right = \"RIGHT\",\r\n}\r\n```\r\n\r\n** 복합 enums **\r\n\r\n문자와 숫자를 혼합하여 enum을 생성할 수 있으나, 권장하지 않는 방식!\r\n\r\n```tsx\r\nenum BooleanLikeHeterogeneousEnum {\r\n    No = 0,\r\n    Yes = \"YES\",\r\n}\r\n```\r\n\r\n### 4-4. 런타임 시점에서의 이넘 특징\r\n\r\n이넘은 런타임시에 실제 객체 형태로 존재합니다. 예를 들어 아래와 같은 이넘 코드가 있을 때\r\n\r\n```tsx\r\nenum E {\r\n  X, Y, Z\r\n}\r\n\r\nfunction getX(obj: { X: number }) {\r\n  return obj.X;\r\n}\r\ngetX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작\r\n-----\r\nQuiz. \r\ngetX(E)값을 변수에 넣어서 출력한다면, 얼마나 나올까?\r\n```\r\n\r\n### 4-5. 컴파일 시점에서의 이넘 특징\r\n\r\n```tsx\r\nenum LogLevel {\r\n  ERROR, WARN, INFO, DEBUG\r\n}\r\n\r\n// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';\r\ntype LogLevelStrings = keyof typeof LogLevel;\r\n\r\nfunction printImportant(key: LogLevelStrings, message: string) {\r\n    const num = LogLevel[key];\r\n    if (num <= LogLevel.WARN) {\r\n       console.log('Log level key is: ', key);\r\n       console.log('Log level value is: ', num);\r\n       console.log('Log level message is: ', message);\r\n    }\r\n}\r\nprintImportant('ERROR', 'This is a message');\r\n\r\n-------\r\n[LOG]: \"Log level key is: \",  \"ERROR\" \r\n[LOG]: \"Log level value is: \",  0 \r\n[LOG]: \"Log level message is: \",  \"This is a message\"\r\n```\r\n\r\n### 4-6. Typescript enum을 사용하는 이유\r\n\r\nEnum은 추상화의 수단이다.\r\n\r\n다국어 코드 (Language Code)를 할당한다고 생각해보자\r\n\r\n```tsx\r\ntype LanguageCode = 'ko' | 'en' | 'ja' | 'zh' | 'es'\r\n\r\nconst code: LanguageCode = 'ko'\r\n\r\nconsole.log(code) // [LOG]: \"ko\"\r\n\r\n하지만 \r\ncost code: LanguageCode = 'hahahaha'\r\n와 같이 코드를 짜면 typescript에서 에러로 표시해준다.\r\n```\r\n\r\n이것도 좋지만 데이터 양이 많아지면 가독성이 많이 떨어진다.\r\n\r\n우리가 원하는 것은 korean을 검색하면 'ko'라는 코드가 나왔으면 하는 것이고 기존 방식으로는 다음과 같이 두 가지 방법이 있다.\r\n\r\n```tsx\r\n// 이렇게 하면 언어 코드가 위아래에 중복되고\r\nconst korean = 'ko'\r\nconst english = 'en'\r\nconst japanese = 'ja'\r\nconst chinese = 'zh'\r\nconst spanish = 'es'\r\ntype LanguageCode = 'ko' | 'en' | 'ja' | 'zh' | 'es'\r\nlet code: LanguageCode = english\r\nconsole.log(code) // \"en\"\r\n```\r\n\r\n```tsx\r\n// 이렇게 하면 코드가 너무 길어집니다\r\nconst korean = 'ko'\r\nconst english = 'en'\r\nconst japanese = 'ja'\r\nconst chinese = 'zh'\r\nconst spanish = 'es'\r\ntype LanguageCode = typeof korean | typeof english | typeof japanese | typeof chinese | typeof spanish\r\nlet code: LanguageCode = spanish\r\nconsole.log(code) // \"es\"\r\n```\r\n\r\n이러한 이유 때문에 리터럴의 타입과 값에 이름을 붙인 `enum`을 활용하면 가독성을 크게 높일 수 있습니다.\r\n\r\n```tsx\r\nenum LanguageCode {\r\n  korean = 'ko',\r\n  english = 'en',\r\n  japanese = 'ja',\r\n  chinese = 'zh',\r\n  spanish = 'es',\r\n}\r\n// 여기서 \r\n// LanguageCode.korean === 'ko'\r\n// (의미상) LanguageCode === 'ko' | 'en' | 'ja' | 'zh' | 'es'\r\nconst code: LanguageCode = LanguageCode.korean\r\nconsole.log(code) // \"ko\"\r\n```\r\n\r\n### 4-7. Typescript enum을 사용하지 않는 이유\r\n\r\n### Tree-shaking은 무엇인가요?\r\n\r\nTree-shaking이란 간단하게 말해 사용하지 않는 코드를 삭제하는 기능을 말합니다. 나무를 흔들면 죽은 잎사귀들이 떨어지는 모습에 착안해 Tree-shaking이라고 부릅니다. Tree-shaking을 통해 export했지만 아무 데서도 import하지 않은 모듈이나 사용하지 않는 코드를 삭제해서 번들 크기를 줄여 페이지가 표시되는 시간을 단축할 수 있습니다.\r\n\r\n하지만 enum을 사용하게 되면 Tree-shaking이 되지 않습니다.\r\n\r\n결론적으로  Tree-shaking 관점에서 보았을 때 아래와 같은 순서로 사용하시길 추천하며 글을 마치겠습니다.\r\n\r\n> Union Types > const enum > enum\r\n\r\n**정리**\r\n\r\n- 같은 ‘종류’를 나타내는 여러 개의 숫자 혹은 문자열을 다뤄야 하는데, \r\n각각 적당한 이름을 붙여서 코드의 가독성을 높이고 싶다면 enum을 사용!\r\n\r\n## 5. 연산자를 이용한 타입 정의\r\n\r\n### 5-1. Union Type ( | )\r\n\r\n유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입\r\n\r\n```tsx\r\nfunction logText(text: string | number) {\r\n  // ...\r\n}\r\n```\r\n\r\n- text는 string이거나 (OR || ) number이다. 즉, 둘 다 올 수 있다는 뜻.\r\n- 이처럼 `|` 연산자를 이용하여 타입을 여러 개 연결하는 방식을 `유니온 타입 정의 방식` 이라 부른다.\r\n\r\n```tsx\r\nfunction getAge(age: number | string) {\r\n  if (typeof age === 'number') {\r\n    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.\r\n    return age;\r\n  }\r\n  if (typeof age === 'string') {\r\n    return age;\r\n  }\r\n  return new TypeError('age must be number or string');\r\n}\r\nconsole.log(getAge(10))\r\nconsole.log(getAge('Hello World'))\r\nconsole.log(getAge(true))\r\n--- 출력 ---\r\n[LOG]: 10 \r\n[LOG]: \"Hello World\" \r\n[LOG]: age must be number or string\r\n```\r\n\r\n### 5-2. Intersection Type ( & )\r\n\r\n여러 타입을 모두 만족하는 하나의 타입을 의미.\r\n\r\n```tsx\r\ninterface Person {\r\n  name: string;\r\n  age: number;\r\n}\r\ninterface Developer {\r\n  name: string;\r\n  skill: number;\r\n}\r\ntype Capt = Person & Developer;\r\n```\r\n\r\n```tsx\r\n// Capt의 타입은\r\n\r\n{\r\n  name: string;\r\n  age: number;\r\n  skill: string;\r\n}\r\n```\r\n\r\n![Intersection Type](https://joshua1988.github.io/ts/assets/img/intersection-diagram.01f4fdfe.png)\r\n\r\n### 5-3. Union Type을 쓸 때 주의할 점\r\n\r\n```tsx\r\ninterface Person {\r\n  name: string;\r\n  age: number;\r\n}\r\ninterface Developer {\r\n  name: string;\r\n  skill: string;\r\n}\r\nfunction introduce(someone: Person | Developer) {\r\n  someone.name; // O 정상 동작\r\n  someone.age; // X 타입 오류 -> 타입스크립트에서 빨간줄로 표시해줌\r\n  someone.skill; // X 타입 오류 -> 타입스크립트에서 빨간줄로 표시해줌\r\n}\r\n```\r\n\r\n유니온 타입은 A도 될 수 있고 B도 될 수 있는 타입이지라고 생각하면 파라미터의 타입이 Person도 되고 Developer도 될테니까 함수 안에서 당연히 이 인터페이스들이 제공하는 속성들인 age나 skill를 사용할 수 있겠지라고 생각할 수 있습니다. \r\n\r\n하지만, 타입스크립트 관점에서는 introduce() 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수가 없기 때문에 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됩니다.\r\n\r\n따라서 위의 예시 같은 경우에는 의도와는 달리 [someone.name](http://someone.name) 만 정상적으로 작동하게 됩니다.\r\n\r\n## 6. Class\r\n\r\n### 6-1. Readonly\r\n\r\n```tsx\r\nclass Developer {\r\n    readonly name: string;\r\n    constructor(theName: string) {\r\n        this.name = theName;\r\n    }\r\n}\r\nlet john = new Developer(\"John\");\r\njohn.name = \"John\"; // error! name is readonly.\r\nconsole.log(john)\r\n--- 출력 ---\r\n[LOG]: Developer: {\r\n  \"name\": \"John\"\r\n}\r\n```\r\n\r\n### 6-2. Accessor\r\n\r\n타입스크립트는 객체의 특정 속성의 접근과 할당에 대해 제어할 수 있습니다. 이를 위해선 해당 객체가 클래스로 생성한 객체여야 합니다. 아래의 간단한 예제를 봅시다.\r\n\r\n```tsx\r\nclass Developer {\r\n  name: string;\r\n}\r\nconst josh = new Developer();\r\njosh.name = 'Josh Bolton';\r\n```\r\n\r\n위 코드는 클래스로 생성한 객체의 `name` 속성에 `Josh Bolton`이라는 값을 대입한 코드입니다. 이제 `josh`라는 객체의 `name` 속성은 `Josh Bolton`이라는 값을 갖겠죠.\r\n\r\n여기서 만약 `name` 속성에 제약 사항을 추가하고 싶다면 아래와 같이 `get`과 `set`을 활용합니다.\r\n\r\n```tsx\r\nclass Developer {\r\n  private name: string;\r\n  \r\n  get name(): string {\r\n    return this.name;\r\n  }\r\n\r\n  set name(newValue: string) {\r\n    if (newValue && newValue.length > 5) {\r\n      throw new Error('이름이 너무 깁니다');\r\n    }\r\n    this.name = newValue;\r\n  }\r\n}\r\nconst josh = new Developer();\r\njosh.name = 'Josh Bolton'; // Error\r\njosh.name = 'Josh';\r\n```\r\n\r\nTIP!\r\nget만 선언하고 set을 선언하지 않는 경우에는 자동으로 readonly로 인식됩니다.\r\n\r\n### 6-3. Abstract Class\r\n\r\n추상 클래스(Abstract Class)는 인터페이스와 비슷한 역할을 하면서도 조금 다른 특징을 갖고 있습니다. 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드의 모양을 정의합니다.\r\n\r\n```tsx\r\nabstract class Developer {\r\n  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함\r\n  drink(): void {\r\n    console.log('drink sth');\r\n  }\r\n}\r\n\r\nclass FrontEndDeveloper extends Developer {\r\n  coding(): void {\r\n    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드\r\n    console.log('develop web');\r\n  }\r\n  design(): void {\r\n    console.log('design web');\r\n  }\r\n}\r\nconst dev = new Developer(); // error: cannot create an instance of an abstract class\r\nconst josh = new FrontEndDeveloper();\r\njosh.coding(); // develop web\r\njosh.drink(); // drink sth\r\njosh.design(); // design web\r\n```\r\n\r\n\r\n\r\n\r\n---\r\nReferences\r\nhttps://joshua1988.github.io/ts/\r\n\r\n[TypeScript enum을 사용하는 이유](https://medium.com/@seungha_kim_IT/typescript-enum을-사용하는-이유-3b3ccd8e5552)\r\n\r\n[TypeScript enum을 사용하지 않는 게 좋은 이유](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)\r\n\r\n[C언어 Enum](https://dojang.io/mod/page/view.php?id=480)");

/***/ }),

/***/ 1328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"타입스크립트 실습 QUIZ\"\r\ndate: \"2021.04.28\"\r\ntags: \r\n  - typescript\r\n  - ts\r\n  - 타입스크립트\r\n  - quiz\r\n---\r\n# 나를 위해 내가 직접 만든 QUIZ\r\n\r\n## Q1. 다음 빈칸에 들어갈 알맞은 것은?\r\n\r\n```jsx\r\nfunction joinStudy(name: string, age: number): ( 빈칸 ) {\r\n  if (age > 23) {\r\n    console.log(name)\r\n  }\r\n}\r\njoinStudy('John Doe', 35)\r\n```\r\n\r\n\r\n\r\n## Q2. 아래 arr는 숫자로 이루어진 배열이고 수정이 불가능하다. 이때 빈칸에 들어갈 것으로 가장 알맞은 것은?\r\n\r\n```jsx\r\nlet arr: (      빈칸     ) = [1,2,3];\r\n```\r\n\r\n\r\n\r\n## Q3. OX퀴즈\r\n\r\n- (   ) 클래스끼리는 상속이 가능하지만 인터페이스간에는 상속이 불가능하다.\r\n- (   ) enum은 javascript로 컴파일 된 후에도 남아있다.\r\n\r\n\r\n\r\n## Q4. 다음중 Capt 타입은 어떤 모습인가?\r\n\r\n```jsx\r\ninterface Person {\r\n  name: string;\r\n  age: number;\r\n}\r\ninterface Developer {\r\n  name: string;\r\n  skill: number;\r\n}\r\ntype Capt = Person & Developer;\r\n\r\n```\r\n\r\n```jsx\r\n// Capt타입\r\n{\r\n\t// 여기에 답안을 작성해주세요.\r\n\t\r\n\t\r\n}\r\n```\r\n\r\n\r\n\r\n## Q5. 다음 빈칸에 들어갈 수 있는 것을 모두 작성해주세요.\r\n\r\n```jsx\r\ninterface Animal{\r\n  name: string;\r\n\tage: number,\r\n  move: number;\r\n}\r\ninterface Bird{\r\n  name: string;\r\n\tage: number;\r\n  fly: string;\r\n}\r\nfunction hawk(sth: Animal & Bird) {\r\n // 여기에 답안을 작성해주세요.\r\n}\r\n```\r\n\r\n\r\n\r\n## Q6. 다음 코드가 console에 출력되는 결과는 무엇일까요?\r\n\r\n```jsx\r\nclass Animal {\r\n    name: string;\r\n    constructor(theName: string) { this.name = theName; }\r\n    move(distanceInMeters: number = 0) {\r\n        console.log(`${this.name} moved ${distanceInMeters}m.`);\r\n    }\r\n}\r\n\r\nclass Snake extends Animal {\r\n    constructor(name: string) { super(name); }\r\n    move(distanceInMeters = 5) {\r\n        console.log(\"Slithering...\");\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\n\r\nclass Horse extends Animal {\r\n    constructor(name: string) { super(name); }\r\n    move(distanceInMeters = 45) {\r\n        console.log(\"Galloping...\");\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\n\r\nlet sam = new Snake(\"Sammy the Python\");\r\nlet tom: Animal = new Horse(\"Tommy the Palomino\");\r\n\r\nsam.move();\r\ntom.move(34);\r\n```\r\n\r\n```jsx\r\n//답안\r\n\r\n```\r\n\r\n\r\n\r\n## Q7. 타입스크립트에서 어떠한 클래스 혹은 함수에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정하는 프로그래밍 기법은?\r\n\r\n- \r\n\r\n\r\n\r\n## Q8-1. 다음 두 가지 방법 중 어떤 방법이 컴포넌트 재사용성을 높일 수 있는 방법이라고 생각하는가? 그리고 그 이유는 무엇인가?\r\n\r\n```jsx\r\n// 1번\r\nclass Stack {\r\n  private data: any[] = [];\r\n\r\n  contructor() {}\r\n\r\n  push(item: any): void {\r\n    this.data.push(item);\r\n  }\r\n\r\n  pop(): any {\r\n    return this.data.pop();\r\n  }\r\n}\r\n```\r\n\r\n```jsx\r\n// 2번\r\n\r\nclass Stack<T> {\r\n  private data: T[] = [];\r\n\r\n  constructor() {}\r\n\r\n  push(item: T): void {\r\n    this.data.push(item);\r\n  }\r\n\r\n  pop() {\r\n    return this.data.pop();\r\n  }\r\n}\r\n```\r\n\r\n- \r\n\r\n\r\n\r\n## 08-2. 마지막 로그에 찍히는 numberStack과 stringStack의 데이터를 표기하시오.\r\n\r\n```jsx\r\nclass Stack<T> {\r\n  private data: T[] = [];\r\n\r\n  constructor() {}\r\n\r\n  push(item: T): void {\r\n    this.data.push(item);\r\n  }\r\n\r\n  pop() {\r\n    return this.data.pop();\r\n  }\r\n}\r\n\r\nconst numberStack = new Stack<number>();\r\nconst stringStack = new Stack<string>();\r\nnumberStack.push(1);\r\nnumberStack.push(2);\r\nnumberStack.push(3);\r\nstringStack.push('a');\r\nstringStack.push('b');\r\nnumberStack.pop();\r\nstringStack.pop();\r\nconsole.log(numberStack);\r\nconsole.log(stringStack);\r\n```\r\n\r\n```jsx\r\n// stringStack\r\n\"data\": [\r\n\r\n]\r\n\r\n// numberStack\r\n\"data\": [\r\n\r\n]\r\n```\r\n\r\n\r\n\r\n### 퀴즈에 대한 해설은 아래 노션 링크에서 확인할 수 있습니다!\r\n\r\n[퀴즈 답안 보러가기](https://www.notion.so/Typescript-7b44163f91fc411e978ecc0c3f527173)\r\n\r\n---\r\n\r\nReferences.\r\n\r\nhttps://typescript-kr.github.io/\r\n\r\nhttps://joshua1988.github.io/ts/");

/***/ }),

/***/ 7844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"실전 리액트 프로그래밍 section 1. 리액트 프로젝트 시작하기 \"\r\ndate: \"2021.04.28\"\r\ntags: \r\n  - react\r\n  - react-js\r\n  - 리액트\r\n  - 프론트엔드\r\n---\r\n\r\n# section 1. 리액트 프로젝트 시작하기\r\n\r\n## 1. 리액트란 무엇인가?💡\r\n\r\n- 자동으로 업데이트되는 UI\r\n- UI = render(state)\r\n- render함수는 순수함수로 작성\r\n    - 순수함수란, 입력값이 같으면 출력값이 같은 함수\r\n    - 랜덤함수 사용 X\r\n    - 외부 상태 변경 X\r\n    - 순수함수와 불변변수를 이용하는 이유?\r\n        - 복잡도가 낮아지고, 버그 발생확률이 낮아짐.\r\n        - 렌더링 성능을 크게 향상시킬 수 있음.\r\n- state는 불변 변수로 관리\r\n- 가상 돔 (virtual dom)\r\n    - 이전 UI상태를 메모리에 유지한 뒤 변경된 부분만 실제 DOM에서 변경함\r\n\r\n## 2. 리액트 개발 환경 구축하기💡\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled.png](/assets/img/react.png)\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html lang=\"ko\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n  <h2>안녕하세요.</h2>\r\n  <h3>root1</h3>\r\n  <div id=\"root1\"></div>\r\n  <h3>root2</h3>\r\n  <div id=\"root2\"></div>\r\n  <h3>root3</h3>\r\n  <div id=\"root3\"></div>\r\n  <script src=\"react.development.js\"></script>\r\n  <script src=\"react-dom.development.js\"></script>\r\n  <script src=\"simple1.js\"></script>\r\n</body>\r\n</html>\r\n```\r\n\r\n```jsx\r\n// 방법1. 그냥 반복해서 만들기\r\n\r\nfunction LikeButton() {\r\n  const [liked, setLiked] = React.useState(false);\r\n  const text = liked ? '좋아요 취소': '좋아요';\r\n  return React.createElement(\r\n    'button',\r\n    { onClick: () => setLiked(!liked) },\r\n    text,\r\n  );\r\n}\r\nconst domContainer1 = document.getElementById('root1');\r\nReactDOM.render(React.createElement(LikeButton), domContainer1)\r\nconst domContainer2 = document.getElementById('root2');\r\nReactDOM.render(React.createElement(LikeButton), domContainer2)\r\nconst domContainer3 = document.getElementById('root3');\r\nReactDOM.render(React.createElement(LikeButton), domContainer3)\r\n```\r\n\r\n```jsx\r\n// 방법2. 리액트 render 내에서 반복하기\r\n\r\nfunction LikeButton() {\r\n  const [liked, setLiked] = React.useState(false);\r\n  const text = liked ? '좋아요 취소': '좋아요';\r\n  return React.createElement(\r\n    'button',\r\n    { onClick: () => setLiked(!liked) },\r\n    text,\r\n  );\r\n}\r\nconst domContainer = document.getElementById('root');\r\nReactDOM.render(\r\n  React.createElement(\r\n    'div',\r\n    null,\r\n    React.createElement(LikeButton),\r\n    React.createElement(LikeButton),\r\n    React.createElement(LikeButton),\r\n  ), \r\n  domContainer\r\n);\r\n```\r\n\r\n## 3. 바벨 사용해보기💡\r\n\r\n- 초기에는 ES5문법을 ES6로 바꿔주는 역할을 많이 수행했음.\r\n- 최근에는 코드 주석을 제거하거나 코드를 압축하는 용도로 사용되기도 한다.\r\n- 리액트에서는 JSX문법을 createElement함수를 호출하는 코드로 변환하기 위해 바벨 사용\r\n- JSX문법은 javascript표준이 아니기 때문에 에러가 나지 않도록 babel을 사용한다.\r\n\r\n```bash\r\n$ npx babel --watch src --out-dir . --presets @babel/preset-react\r\n\r\n```\r\n\r\n## 4. 웹팩 기본 개념 이해하기💡\r\n\r\n- 파일 내용 기본으로 파일이름에 해시값을 추가해주기도 함.\r\n\r\n    → 이것은 효율적으로 브라우저 캐싱을 이용할 수 있게 도와주는 역할을 함.\r\n\r\n- 사용되지 않은 코드 제거\r\n- 자바스크립트 압축\r\n- JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기\r\n- 환경변수 주입\r\n- 그 중에서도 웹팩을 사용하는 가장 큰 이유는 `모듈 시스템` (ESM, commonJS)을 사용하고 싶어서임.\r\n- 여러개의 js 파일에서 같은 전역 변수를 사용하면 문제가 생기기도 한다. 따라서 js파일은 불러오는 순서도 중요하다.\r\n  \r\n    - 이때, 웹팩을 쓰면 이러한 것들을 컴파일 단계에서 잡아주기 때문에 충돌 위험을 미리 파악할 수 있다.\r\n\r\n### ESM 문법\r\n\r\n```jsx\r\n// file1.js\r\n\r\nexport default function func1() {}\r\nexport function func2() {}\r\nexport const variable1 = 123;\r\nexport let variable2 = 'hello';\r\n\r\n// file2.js\r\nimport myFunc1, { func2, variable1, variable2 } from './file1.js';\r\n\r\n// file3.js\r\nimport { func2 as myFunc2 } from './file1.js';\r\n```\r\n\r\n- file1에서 default로 export해주는 func1() 은 가져올 때 중괄호 없이 바로 가져올 수 있다.\r\n- 반면 func2, variable1, variable2는 중괄호 안에 가져와야한다.\r\n- 가져온 후에는 `as` 로 별칭을 설정해 쓸 수 있다.\r\n\r\n## 5. create-react-app으로 시작하기💡\r\n\r\n- 이 명령어로 react 프로젝트를 시작할 때의 장점\r\n    - babel, webpack 몰라도 알아서 해준다.\r\n    - jest같은 테스트 프레임워크를 따로 사용하지 않고도 테스트를 할 수 있다.\r\n- 기타 개발 환경 구축 등을 알아서 해준다. (예전에는 create-react-app 없었음ㅠ)\r\n    - polyfill : 오래된 브라우저를 지원\r\n    - eslint : 코딩 컨벤션\r\n    - HMR (Hot Module Replacement) : 코드 수정 시 화면에 바로 적용되는 것\r\n    - CSS 후처리: sass 컴파일, 벤더 접두사 등...\r\n\r\n### Create-react-app VS Next.js\r\n\r\n- 리액트 프로젝트를 실행할 때 크게 두 가지 옵션이 있다. (더 많긴 하지만 일단 )\r\n- 이 둘의 차이 중 가장 큰 것은 Next.js는 서버사이드 렌더링을 지원하지만 create-react-app은 지원하지 않아 깔끔하게 서버사이드 렌더링을 하기 어렵다는 것이다. 따라서 서버사이드 렌더링이 필요하면 next.js를 활용하는게 훨씬 낫다.\r\n- 또 CRA는 빌드 시스템이나 eslint등의 설정을 거의 변경하기 어렵다는 것이다. Next.js는 웹팩, eslint, 바벨 등의 설정을 변경하기 쉬운 편이다.\r\n\r\n### package.json 탐방\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%201.png](/assets/img/react_1.png)\r\n\r\n- create-react-app 에서 react-scripts 명령어를 사용하는데, 만약 새로운 버전의 기능을 사용하고 싶다면 react-scripts의 버전을 바꿔주면 된다.\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%202.png](/assets/img/react_2.png)\r\n\r\n- 'polyfill이 브라우저 점유율 0.2% 이상인 브라우저들을 지원하겠다' 는 뜻\r\n\r\n### 효율적인 react의 데이터 불러오기 - 데이터가 필요한 순간 딱 불러올 수 있다.\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%203.png](/assets/img/react_3.png)\r\n\r\n이제 저 버튼을 누르면 이전에 없던 `1.chunks.js`가 추가됨.\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%204.png](/assets/img/react_4.png)\r\n\r\n```jsx\r\nfunction App() {\r\n  function onClick () {\r\n    import('./data.json').then(({default: data}) => {\r\n      console.log({data})\r\n    })\r\n  }\r\n  return (\r\n    <div className=\"App\">\r\n      <header className=\"App-header\">\r\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\r\n        <p>\r\n          Edit <code>src/App.js</code> and save to reload.\r\n        </p>\r\n        <button onClick={onClick}> 데이터 보여주세요</button>\r\n        <a\r\n          className=\"App-link\"\r\n          href=\"https://reactjs.org\"\r\n          target=\"_blank\"\r\n          rel=\"noopener noreferrer\"\r\n        >\r\n          Learn React\r\n        </a>\r\n      </header>\r\n    </div>\r\n  );\r\n}\r\n\r\n-> Promise처럼 통신 후 then 문법을 쓸 수가 있다. \r\n따라서 데이터를 import하고, 이게 성공하면 그 뒤에 데이터를 불러와 rendering할 수 있다.\r\n```\r\n\r\n기본적으로 http로 실행이 되지만 https로 실행하고 싶을 때 다음의 명령어로 실행한다.\r\n\r\n```bash\r\n// mac OS\r\n$ HTTPS=true npm start\r\n\r\n// windows OS\r\n$ set HTTPS=true && npm start\r\n```\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%205.png](/assets/img/react_5.png)\r\n\r\n### build 시 이미지 처리\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%206.png](/assets/img/react_6.png)\r\n\r\n- 빌드할 때 큰 사이즈의 이미지와 작은 사이즈 이미지의 처리가 다르다.\r\n    - 큰 사이즈 이미지는 /dist/media/라는 폴더에 이미지가 추가된다.\r\n    - 반면 작은 사이즈 이미지는 javascript파일 내부에 내장된다.\r\n    - 이렇게 하는 이유는 http요청 횟수를 줄여 성능을 향상시키기 위함이다.\r\n        - 하지만 http 2.0부터는 별로 성능 차이 없어서 다소 불필요해지긴 했다 ;;\r\n\r\n### 환경변수 관리법\r\n\r\n- development: root위치에 .env.development 파일로 관리\r\n- production: root 위치에 .env.production 파일로 관리\r\n- 접근할 때는 `process.env.{변수명}` 이런식으로 접근해서 사용할 수 있다.\r\n\r\n## 6. CSS 작성 방법 결정하기💡\r\n\r\n### 6-1. 일반 CSS파일로 작성하기\r\n\r\n```css\r\n.big {\r\n\twidth: 100%;\r\n\theight: 100px;\r\n}\r\n.small {\r\n\twidth: 50%;\r\n\theight: 50px;\r\n}\r\n```\r\n\r\n```jsx\r\n// Box.js\r\n\r\nimport './Box.css'; // 이렇게 불러올 수 있다.\r\n```\r\n\r\n- 이 방식은 여러 CSS파일에 같은 클래스명으로 정의된 것이 있으면 나중에 불러와지는 클래스명의 속성만 적용된다는 점이 있다.\r\n\r\n### 6-2. css-module로 작성하기\r\n\r\n```css\r\nBox.moduel.css\r\n\r\n```\r\n\r\n```jsx\r\nimport Style from './Button.module.css';\r\n// CSS모듈을 쓰면 이렇게 객체형태로 불러올 수가 있다.\r\n\r\n<button className={`${Style.button} ${Style.big}}>큰 버튼</button>\r\n```\r\n\r\n- 모듈 형식으로 사용하면, 여러 CSS파일 내의 클래스명이 동일하더라도 각각의 CSS 스타일을 적용받을 수 있다.\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%207.png](/assets/img/react_7.png)\r\n\r\n- 이렇게 클래스명 뒤에 해시값이 붙기 때문에 구별된다.\r\n\r\n### 6-3. sass로 작성하기\r\n\r\n> 필수요소: node-sass\r\n\r\n```bash\r\n$ npm install node-sass\r\n```\r\n\r\n```scss\r\n// Box.module.scss\r\n\r\n@import './shared.scss';\r\n\r\n.box {\r\n\theight: 50px;\r\n\tcolor: $infoColor;  // <- shared.scss에서 받아온 infoColor라는 변수값을 사용할 수 있음.\r\n}\r\n```\r\n\r\n### 6-4. css-in-js로 작성하기\r\n\r\n> CSS를 자바스크립트 내에서 만들고 사용. 모든 개발자가 JS를 다룰 수 있다면 좋은 선택이지만, 마크업 전담하시는 분이 따로 있다면 비추!\r\n\r\n```jsx\r\nconst BoxCommon = styled.div`\r\n\theight: 50px;\r\n`;\r\n\r\nconst BoxBig = styled(BoxCommon)` \r\n\twidth: 200px;\r\n`;\r\n```\r\n\r\n- 미리 만들어둔 BoxCommon을 BoxBig에서 불러와서 활용할 수 있다. 이처럼 확장해서 또 다른 컴포넌트를 만들기 쉽다는 것이 장점이다.\r\n\r\n## 7. SPA 만들기💡\r\n\r\n![section%201%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676220463cf64096955da450c765587d/Untitled%208.png](/assets/img/react_8.png)\r\n\r\n### react-router-dom 라이브러리 활용해서 라우팅하기\r\n\r\n- SPA의 경우 초기화면에서 많은 파일을 불러오기 때문에 로딩이 길어질 수 있다는 단점이 있다.\r\n- 이때 react-router-dom을 사용하면 코드 분할을 이용해 페이지 단위로 불러오기 때문에 초기로딩을 줄일 수 있다.\r\n\r\n```bash\r\n$ npm install react-router-dom\r\n```\r\n\r\n```jsx\r\nimport { BrowserRouter, Link} from 'react-router-dom';\r\n\r\n<BrowserRouter>\r\n    <Link to=\"/\">Home</Link>\r\n    <Link to=\"/rooms\">Rooms</Link>\r\n</BrowserRouter>\r\n```\r\n\r\n- 이렇게 react-router-dom에서 broswerRouter와 Link를 불러오고 활용하면 라우팅을 연결할 수 있다.");

/***/ }),

/***/ 4566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"리액트 디자인 패턴 1. Container+Presenter\"\r\ndate: \"2021.05.04\"\r\ntags: \r\n  - react\r\n  - react-js\r\n  - 리액트\r\n  - 프론트엔드\r\n  - 디자인패턴\r\n---\r\n\r\n# 리액트 디자인 패턴 1. 컨테이너 - 프리젠터\r\n\r\n리액트에서 코드 짜는 방식은 상당히 자유로운 편이다. 권장하는 방식이 있긴 하지만 CSS스타일링에 대한 Strict한 제약은 없다.\r\n\r\n이런 자유도가 개발자에게 좋을 때도 있지만 때때로 너무 중구난방으로 코드가 작성될 가능성이 있다.\r\n\r\n이런 단점을 예방하는 방법 중 하나는 디자인 패턴을 사용하는 것이다. 오늘은 그 중 대표적인 `컨테이너 - 프리젠터` 디자인 패턴을 알아보자\r\n\r\n\r\n\r\n## :bulb: 컨테이너 프리젠터 디자인 패턴이란?\r\n\r\n데이터 처리 로직  -  데이터 출력 (디자인) **분리!**\r\n\r\n\r\n\r\n### Container컨테이너\r\n\r\n**<u>Logic</u>** : API Request, Exception Error, setState... ETC...\r\n\r\n\r\n\r\n### Presenter 프리젠터\r\n\r\nData comes from props. **<u>No logic. Only UI</u>**\r\n\r\n![디자인패턴도식](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWsxc1%2Fbtqzmk5UVvm%2FFgvzV9NbwOEvCC0mdhrkNk%2Fimg.png)\r\n\r\n\r\n\r\n## :computer: 코드로 알아보기\r\n\r\n![containerpresenter](/assets/img/containerpresenter.png)\r\n\r\n```javascript\r\nimport React from \"react\";\r\nimport HomePresenter from \"./HomePresenter\";\r\nimport { moviesApi } from \"../../api\";\r\n\r\nexport default class extends React.Component {\r\n  state = {\r\n    nowPlaying: null,\r\n    upcoming: null,\r\n    popular: null,\r\n    error: null,\r\n    loading: true\r\n  };\r\n\r\n  async componentDidMount() {\r\n    try {\r\n      const {\r\n        data: { results: nowPlaying }\r\n      } = await moviesApi.nowPlaying();\r\n      const {\r\n        data: { results: upcoming }\r\n      } = await moviesApi.upcoming();\r\n      const {\r\n        data: { results: popular }\r\n      } = await moviesApi.popular();\r\n      this.setState({\r\n        nowPlaying,\r\n        upcoming,\r\n        popular\r\n      });\r\n    } catch {\r\n      this.setState({\r\n        error: \"Can't find movies information.\"\r\n      });\r\n    } finally {\r\n      this.setState({\r\n        loading: false\r\n      });\r\n    }\r\n  }\r\n\r\n  render() {\r\n    const { nowPlaying, upcoming, popular, error, loading } = this.state;\r\n    return (\r\n      <HomePresenter\r\n        nowPlaying={nowPlaying}\r\n        upcoming={upcoming}\r\n        popular={popular}\r\n        error={error}\r\n        loading={loading}\r\n      />\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n");

/***/ }),

/***/ 8677:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"react-rewired 사용해서 eject없이 CRA에babel설정 추가하기\"\ndate: \"2022.03.23\"\ntags:\n\t- babel\n\t- cra\n\t- react-rewired\n---\n\n\n\n# react-rewired 사용해서 eject없이 CRA에babel설정 추가하기\n\n\n\n## 1️⃣. 이 작업을 진행한 목적\n\nReact로 작업한 회사의 프로젝트 코드에서 Object 데이터의 값이 존재하는지 아닌지 알아 보기 위해서는 `&&` 연산자를 활용하거나 `if else` 구문을 활용해야 하는 등 코드가 다소 불필요하게 길어지는 문제가 있었습니다.\n\n해당 데이터가 존재하는 경우와 아닌 경우에 따라 rendering되는 것이 달라지기 때문에 react에서 이 component를 렌더링 하기 전에 데이터의 존재 여부를 특정 지을 수 있는 코드가 필요한 것이죠.\n\n예를 들면 다음과 같습니다.\n\n```jsx\nconst language = {\n\tname: \"javascript\",\n\tbest_friend: {\n\t\tname: \"Typescript\",\n\t}\n}\n\n{\n\tlanguage && language.best_friend && language.best_friend.name === \"Typescript\" && \n\t<h1>Hello {language.best_friend.name}</h1>\n}\n```\n\nlanguage라는 객체의 best_friend의 name값이 있는 경우에 Hello 뒤에 해당 데이터를 렌더링 하려는 경우 기존에는 위와 같은 방식으로 language안에 best_friend가 있는지를 보장하는 경우에만 렌더링 할 수 있도록 해야 했습니다.\n\n중요한 건 이 경우에 문제가 되는 것은 `name`값이 아니라 `best_friend`입니다. best_friend의 name값이 비어있더라도 react에서 렌더링하는데 문제가 없습니다. 그저 undefined를 할당하고 빈 값을 띄워주면 되니까요. 하지만 best_friend자체가 없으면 그것은 문제가 됩니다. undefiend의 “name”을 찾아오라는 잘못된 코드를 작성했기 때문이죠.\n\n### optional chaining (?)\n\n옵셔널 체이닝이라는 것은 2020년 javascript에 추가된 새로운 문법입니다. 바로 위의 language 객체와 같이 객체내부에 또다른 객체를 체이닝으로 연결할 때 발생하는 위와 같은 문제를 간편한 문법으로 해결하기 위한 기능이라 볼 수 있습니다. `?` 앞의 평가대상이 `undefined`이거나 `null`일 경우 평가를 멈추고 그 두 가지가 아닌 경우 뒤의 평가를  이어나갑니다. 옵셔널 체이닝을 활용하면 다소 지저분한 방어로직이나 외부 라이브러리를 사용할 필요없이 깔끔한 코드를 짤 수 있습니다. 아래와 같이 사용됩니다.\n\n```jsx\n{\n\tlanguage.best_friend?.name && \n\t<h1>Hello {language.best_friend.name} </h1>\n}\n```\n\n훨씬 깔끔해졌죠?\n\n주의할 점은 **옵셔널 체이닝을 남용하지 않는 것**입니다**.**\n\n`?.`는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.\n\n사용자 주소를 다루는 위 예시에서 논리상 `language`는 반드시 있어야 하는데 `best_friend`필수값이 아닙니다. 그러니 `language.best_friend?.name` 를 사용하는 것이 바람직합니다.\n\n실수로 인해 `language`값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 합니다. 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워집니다.\n\n결과적으로 이 작업을 진행하는 것은 빌드잇 프로젝트에서 이 최신 문법인 optional chaining을 활용할 수 있도록 하기 위해 설정값을 변경하는 것이 목적이었습니다.\n\n## 2️⃣. react-rewired\n\n회사의 project는 CRA(npm create-react-app buildit-co-kr-react) 명령어로 설치된 프로젝트입니다. 즉 기본적인 설정들을 직접 설정하기 보다는 자동적으로 세팅해주는 값으로 초기 프로젝트를 세팅했습니다. \n\nCRA는 빠른 프로젝트 설정을 도와준다는 장점(babel, webpack 등 사실상의 프로젝트 필수 설정)이 있지만 이러한 세팅값들을 프로젝트 디렉토리에서 쉽게 찾을 수 없게 되어 원하는대로 바꿀 수 없다는 단점이 있습니다. 이 CRA 설정을 깨고 다시 설정하는 것을 `eject`라 표현하는데 이렇게 하면 CRA의 장점인 (**one Build Dependency**)가 깨지게 됩니다. 따라서 eject하면 서로간의 dependency가 어떻게 꼬일 지 아는 것이 어렵다는 단점이 있습니다.\n\n![eject는 뭔가 두렵다](/assets/img/eject.png)\n\n(음... eject는 뭔가 두렵다)\n\n### react-rewired의 장점\n\nreact-rewired는 `eject`를 하지 않고 CRA의 설정값을 바꾸도록 도와주는 라이브러리 입니다.\n\n최대한 CRA 설정을 그대로 유지한채 특정 부분만 Custom하는 것을 도와줍니다.\n\n[https://github.com/timarney/react-app-rewired](https://github.com/timarney/react-app-rewired)\n\n### react-rewired의 단점\n\n하지만 아무리 react-rewired를 사용한다해도 CRA가 제공하는 기능을 완전히 provide하지는 않습니다.\n\n⚠️ **Please Note:**\n```\n💡 \"Stuff can break\" - Dan Abramov\n```\n\n> By doing this you're breaking the \"guarantees\" that CRA provides. That is to say you now \"own\" the configs. No support will be provided. Proceed with caution.\n\nUsing this library will override the default behavior and configuration of `create-react-app`\n, therefore invalidating the guarantees that come with it. Use with discretion!\n\n\n\n## 3️⃣. 작업 진행\n\n### 1. react-rewired\n\n#### 설치\n\n```bash\n$ npm install react-app-rewired --save-dev\n```\n\n#### 프로젝트 root 디렉토리에 ****`config-overrides.js` 설정**\n\n```jsx\n/* config-overrides.js */\n\nmodule.exports = function override(config, env) {\n  //do stuff with the webpack config...\n  return config;\n}\n```\n\n#### `package.json` 파일에서 scripts 부분 명령어 수정\n\n```jsx\n\"scripts\": {\n-   \"start\": \"react-scripts start\",\n+   \"start\": \"react-app-rewired start\",\n-   \"build\": \"react-scripts build\",\n+   \"build\": \"react-app-rewired build\",\n-   \"test\": \"react-scripts test\",\n+   \"test\": \"react-app-rewired test\",\n    \"eject\": \"react-scripts eject\"\n}\n```\n\n### 2. Customize-cra\n\n[customize-cra](https://www.npmjs.com/package/customize-cra)\n\n#### 설치\n\n```bash\n$ npm i customize-cra\n```\n\n#### `config-overrides.js` 설정 Override\n\n```jsx\nconst { override, useBabelRc } = require('customize-cra');\n\nmodule.exports = override(useBabelRc());\n```\n\n- babelrc 설정을 사용하기 위해 config-overrides.js의 설정을 변경해줍니다.\n\n### 3. babel 플러그인 “plugin-proposal-optional-chaining”\n\n#### 설치\n\n```bash\n$ npm install --save-dev @babel/plugin-proposal-optional-chaining\n```\n\n#### .babelrc\n\n```jsx\n{\n  \"plugins\": [\"@babel/plugin-proposal-optional-chaining\"]\n}\n```\n\n이제 ***optional chaining***을 쓸 수 있습니다.✌️\n\n\n\n다음에는 react-rewire를 하지 않고 직접 nodejs 버전과 react-scripts, 그리고 다른 라이브러리와의 의존성 문제를 해결한 내용을 업로드 하겠습니다.\n\n---\n\n참고\n\n[https://github.com/arackaf/customize-cra](https://github.com/arackaf/customize-cra)\n\n[Micalgenus](https://micalgenus.github.io/articles/2019-02/React-eject-%EC%97%86%EC%9D%B4-babelrc-%EC%A0%81%EC%9A%A9)\n\n[@babel/preset-react · Babel](https://babeljs.io/docs/en/babel-preset-react)\n\n[@babel/plugin-syntax-optional-chaining · Babel](https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture)");

/***/ }),

/***/ 8723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"CRA없이 리액트 프로젝트 설정하기\"\ndate: \"2022.04.01\"\ntags:\n  - react\n  - cra\n  - create-react-app\n---\n\n\n## 1. CRA (Create-React-App)없이 리액트 프로젝트 설정하기\n\n### CRA를 사용하는 이유?\n\n- 프로젝트 세팅을 위해 따로 학습할 필요가 없습니다.\n- 고민하지 않고 빠르게 설정할 수 있습니다.\n- 세팅보다는 코드에 좀 더 고민할 시간을 마련할 수 있습니다.\n- 잘 안쓰는 파일들을 굳이 생성하지 않아서 따로 지울 필요가 없습니다.\n\n### CRA에서 세팅해주는 내용은 무엇이 있을까?\n\n- 웹팩\n- 바벨\n- eslint\n\n​\t외 기타 등등\n\nCRA 명령어 없이 웹팩과 바벨 설정만으로 localhost로 리액트 프로젝트를 띄워보겠습니다.\n\n\n\n## 2. CRA없이 React Project를 세팅해보기\n\n<aside>\n💡 맹목적인 CRA의존을 하지 않고 직접 리액트 프로젝트를 세팅해보면서 프로젝트를 시작할 때 프로젝트의 목적에 가장 잘 부합하는 세팅을 진행할 수 있는 것이 목표.\n</aside>\n\n\n### 1. 프로젝트 시작하기\n\n```bash\n$ mkdir no-cra\n$ cd no-cra\n$ no-cra > npm init -y\n$ no-cra > mkdir src public\n$ no-cra > cd src\n$ no-cra > src > touch index.js index.css\n$ no-cra > public > touch index.html\n```\n\n- no-cra\n  - public\n    - index.html\n  - src\n    - index.js\n    - index.css\n  - package.json\n\n### 2. npm 패키지 설치\n\n```bash\n$ no-cra > npm i react react-dom\n$ no-cra > npm i webpack webpack-cli webpack-dev-server\n$ no-cra > npm i babel-loader css-loader style-loader\n$ no-cra > npm i @babel/core @babel/preset-react @babel/preset-env\n$ no-cra > npm install --save-dev html-webpack-plugin\n$ no-cra > npm install --save-dev clean-webpack-plugin\n```\n\n### 3. babel 설정 코드 작성\n\n```jsx\n// babel.config.js \nmodule.exports = {\n    presets: ['@babel/preset-env', '@babel/preset-react'] \n}\n```\n\n### 4. webpack 설정 코드 작성\n\n```jsx\n// webpack.config.js\nconst webpack = require('webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\nconst path = require('path');\n\nmodule.exports = {\n    mode: process.env.mode,\n    entry: './src/index.js',\n    output: {\n      path: path.resolve(__dirname, 'dist'),\n      filename: '[hash].js',\n      publicPath: '/'\n    },\n    resolve: {\n      // path.resove 형태로 사용할 수도 있다.\n      // 그러면 node의 기본 모듈 'path'를 불러와야 한다.\n      extensions: ['.js', '.jsx', '.css']\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.(js|jsx)$/,\n                exclude: '/node_modules/',\n                loader: 'babel-loader'\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    {\n                        loader: 'style-loader', \n                    },\n                    {\n                        loader: 'css-loader', \n                    },\n                ]\n            }\n        ]\n    },\n    plugins: [\n        new CleanWebpackPlugin(),\n        new HtmlWebpackPlugin({\n            template: './public/index.html'\n        })\n    ],\n    devServer: {\n        host: 'localhost',\n        port: 3000,\n        hot: true,\n        open: true\n    }\n};\n```\n\n\n\n### 5. package.json\n\n```javascript\n{\n  \"name\": \"no-cra\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n    \"start:dev\": \"webpack serve --progress --mode development\",\n    \"start:build\": \"webpack\"\n  },\n  \"keywords\": [],\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"@babel/core\": \"^7.17.8\",\n    \"@babel/preset-env\": \"^7.16.11\",\n    \"@babel/preset-react\": \"^7.16.7\",\n    \"babel-loader\": \"^8.2.4\",\n    \"css-loader\": \"^6.7.1\",\n    \"react\": \"^17.0.2\",\n    \"react-dom\": \"^17.0.2\",\n    \"style-loader\": \"^3.3.1\",\n    \"webpack\": \"^5.70.0\",\n    \"webpack-cli\": \"^4.9.2\",\n    \"webpack-dev-server\": \"^4.7.4\"\n  },\n  \"devDependencies\": {\n    \"clean-webpack-plugin\": \"^4.0.0\",\n    \"html-webpack-plugin\": \"^5.5.0\"\n  }\n}\n\n```\n\n\n\n이렇게 설정하고서 `npm run start:dev` 명령어를 입력해주시면 로컬에서 리액트 프로젝트를 실행해볼 수 있습니다.\n\n\n\n---\n\n[[Co'Talk] Create-React-App 없이 리액트 프로젝트 시작하기 - 코드스테이츠 강한결 교육 매니저](https://www.youtube.com/watch?v=wSzh8iSdYUQ)\n\n[Create-React-App 없이 리액트 프로젝트 보일러 플레이스 세팅하기](https://hankyeolk.github.io/2021/08/08/withoutCRA.html)\n\n");

/***/ }),

/***/ 9529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"리액트 콘솔창 에러 그대로 놔두고 계신가요?\"\ndate: \"2022.10.07\"\ntags:\n  - 리액트\n  - 콘솔\n  - 에러\n---\n\n\n\n# 리액트 console warning, error 제거하기\n\n평소 개발할 때 마다 켜는 크롬개발자도구의 콘솔창에는 수 많은 에러와 경고 메시지가 뜨고 있었습니다. 개발자를 도와주는 고마운 메시지들이지만 사실 볼 때 마다 좀 꼴뵈기 싫었다고(?) 표현하는게 가장 저의 정확한 심정이었습니다. 짬이 좀 나면 검도 9단이 대나무 썰듯이 썰어보겠다고 다짐만 했었다가 드디어 기다리던 기회가 와서(짬이 나서;) 한 번 처리해봤습니다.\n\n![에러 메시지를 썰기 전 나의 상상 속 내 모습 ;](https://cdn-ak.f.st-hatena.com/images/fotolife/g/gaou2/20170611/20170611020308.gif)\n\n에러 메시지를 썰기 전 나의 상상 속 내 모습 ;\n\n## 현상황\n\n![BUILDIT-error](/assets/img/BUILDIT-error.png)\n\n![BUILDIT-error1](/assets/img/BUILDIT-error1.png)\n\n## Error 해결\n\n### 1. MuiThemeProvider\n\n```tsx\n// Error log\n\nWarning: Failed prop type: The prop `theme` is marked as required in `MuiThemeProviderOld`, but its value is `undefined`.\n```\n\n```tsx\nconst jss = create(jssPreset());\n\nfunction withRoot(Component) {\n  function WithRoot(props) {\n    // JssProvider allows customizing the JSS styling solution.\n    return (\n      <JssProvider jss={jss} >\n        {/* MuiThemeProvider makes the theme available down the React tree\n          thanks to React context. */}\n        <MuiThemeProvider>\n          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}\n          <CssBaseline />\n          <Component {...props} />\n        </MuiThemeProvider>\n      </JssProvider>\n    );\n  }\n\n  return WithRoot;\n}\n```\n\n```\nconst jss = create(jssPreset());\nconst theme = createMuiTheme({})\n\nfunction withRoot(Component) {\n  function WithRoot(props) {\n    // JssProvider allows customizing the JSS styling solution.\n    return (\n      <JssProvider jss={jss} >\n        {/* MuiThemeProvider makes the theme available down the React tree\n          thanks to React context. */}\n        <MuiThemeProvider theme={theme}>\n          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}\n          <CssBaseline />\n          <Component {...props} />\n        </MuiThemeProvider>\n      </JssProvider>\n    );\n  }\n\n  return WithRoot;\n}\n```\n\n- MuiThemeProvider 에 theme 속성을 undefined로 주고 있기 때문에 발생한 에러였습니다.\n- theme에 createMuiTheme 메소드를 통해 만든 객체를 넣어줘서 해결했습니다.\n\n## 2. MuiInputLabel\n\n```tsx\n// Error log\n\nWarning: Material-UI: the `MuiInputlabel` component increases the css specificity of the `focused` internal state. you can not override it like this ...\n```\n\n```tsx\nconst darkTheme = createMuiTheme({\n  overrides: {\n\t\t...\n    MuiInputLabel: {\n      root: {\n        color: \"#ccc\",\n        fontSize: \"12px\",\n        marginTop: -3,\n      },\n      focused: {\n        display: \"none\",\n      },\n      shrink: {\n        display: \"none\",\n      },\n    },\n    MuiInput: {\n      underline: {\n        \"&:hover\": {\n          \":&before\": {\n            borderBottom: \"1px solid #ccc\",\n          },\n          margin: \"0 !important\",\n          borderBottom: \"1px solid #ccc\",\n        },\n        \"&:after\": {\n          borderBottom: \"1px solid #ccc\",\n        },\n      },\n    },\n  },\n});\n```\n\n- 불필요한 override theme 객체를 삭제하여 해결했습니다.\n\n### 3. Warning: Received `false` for a non-boolean attribute `display`.\n\n> 이 warning은 styled component에서 자주 발생하는 오류이다. html,css element 속성 중에서 non-boolean attributes에 boolean속성을 넘겨줘서 발생하는 오류인데, 예를 들면 img 태그의 src에 string타입이 와야 맞지만 boolean이나 숫자를 넣는 경우 발생할 수 있다.\n> 현재 타이틀 메시지는 boolean값이 아닌 display에 true/false 등의 boolean을 넣었다고 해서 에러메시지를 뿜고 있는 것이다. \n> 참고.\n> [https://mygumi.tistory.com/382](https://mygumi.tistory.com/382)\n\nIf you used to conditionally omit it with display={condition && value}, pass display={condition ? value : undefined} instead.\n\n→ display를 조건부로 변경하고 싶다면 && 연산자를 사용하기보다는 삼항연산자를 사용할 것을 권장하고 있다.\n\n하지만 모든 styled컴포넌트의 display를 살펴봤는데 모든 곳에서 display 속성에 삼항연산자로 제대로 설정이 되어있었습니다.\n\n![뭐지? 트릭인가?](https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/598060f2ac1843b1ba8979f4ed292de2/abd9f49cdf72485a8d5cb892bce85937_1617101551.jpg)\n\n뭐지? 트릭인가?\n\n문제 원인은 Banner 컴포넌트의 display 속성 이었습니다. 삼항연산자가 해결의 키는 아니었던 것이죠.\n\n```tsx\n<Banner\n  onClose={() => {\n    this.setState({ showBanner: false });\n    localStorage.setItem('showBanner', 'false');\n  }}\n  display={this.state.showBanner!}\n  href=\"/myPage/information\"\n  buttonContent=\"결제 수단 변경하기\"\n  icon={<ErrorOutline />}\n  content={`정기구독 자동결제가 실패했습니다. 결제 수단을 변경 부탁드립니다! \n  결제수단 변경 전까지 새 프로젝트를 시작할 수 없으며 ${moment(App.session.plan_finished_at).add(8, 'days').format('YYYY-MM-DD')} 23:59:59 까지 실패 시 자동으로 플랜이 해지됩니다.`} />\n```\n\n- 위 배너 컴포넌트는 showBanner state값에 따라서 display를 하느냐 마느냐가 결정됩니다.\n- 아마도 이 컴포넌트를 짜신 분께서 해당 props에 따라서 css의 display속성을 변경하므로 그대로 display attributes를 사용하셨던 것 같습니다. 하지만 display라는 동일한 이름의 attributes가 있어서 이 부분에서 에러를 발생시키는 문제가 있었습니다. display는 불리언 타입이 아니기 때문이죠.\n- 이 코드를 display={~} ⇒ show={~}로 attributes의 이름을 변경해주어 해결했습니다. (적으면서 다시 생각해보니 isShow로 이름을 지을걸 하는 후회가 살짝 되네요)\n\n### 4. each child in a list should have a unique key prop\n\n이 에러는 리액트에서 상당히 자주 나오는 에러로 map 반복문으로 render할 경우 해당 element에 고유한 key값을 넣어달라는 뜻이니 넣어주어 해결할 수 있습니다.\n\n### 5. index.js:1420 Warning: BuilditInput contains an input of type text with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props.\n\nhtml `input` 태그의 defaultValue는 string | string[] | undefined 타입입니다. 하지만 defaultValue가 props로 내려오지 않는 경우 “”로 빈 스트링을 넣도록 하였는데 이 경우에는 오히려 undefined로 선언하는 것이 더 적절합니다. 따라서 undefined로 수정하여 해결했습니다.\n\n![BUILDIT-error2](/assets/img/BUILDIT-error2.png)\n\n- “” 대신 undefined로 타입스크립트 타입 오류를 제거하였습니다.\n\n### 6. **Warning: React does not recognize the XXX prop on a DOM element**\n\n![BUILDIT-error3](/assets/img/BUILDIT-error3.png)\n\n> 참고: \n> **[How to solve Warning: React does not recognize the X prop on a DOM element](https://stackoverflow.com/questions/54468535/how-to-solve-warning-react-does-not-recognize-the-x-prop-on-a-dom-element)** \n> [https://ko.reactjs.org/warnings/unknown-prop.html](https://ko.reactjs.org/warnings/unknown-prop.html)\n\n올바른 DOM 어트리뷰트/프로퍼티로 인식되지 않는 DOM 엘리먼트를 렌더링하려고 하면 unknown-prop 경고가 발생합니다. DOM 엘리먼트에 잘못된 props가 추가되지 않도록 해야 합니다. 하지만 borderRadius, justifyContent와 같은 코드가 있으면 리액트에서 이런 에러를 내뱉습니다. 따라서 다음과 같이 (borderradius, justifycontent) 소문자로 변경해주면 해결할 수 있습니다.\n\n## Warning 해결\n\n### 1. componentWillReceiveProps, componentWillmount 라이프사이클 변경하기\n\n```tsx\nWarning: componentWillMount has been renamed, and is not recommended for use.\n\nWarning: componentWillReceiveProps has been renamed, and is not recommended for use\n```\n\n- 이전에도 봤던 경고 메시지입니다. componentWillmount, componentWillRecieveProps같은 라이프사이클은 다음버전의 리액트에서는 더 이상 쓰이지 않으니 변경해달라는 내용입니다.\n\n- `npx react-codemod rename-unsafe-lifecycles` 명령어로 모두 UNSAFE_ prefix를 앞에 달아줬습니다. 하지만 안타깝게 그럼에도 불구하고 이 메시지가 계속 뜨고 있습니다.\n\n- [https://stackoverflow.com/questions/58769752/componentwillmount-warnings-visible-even-though-componentwillmount-is-not-ex](https://stackoverflow.com/questions/58769752/componentwillmount-warnings-visible-even-though-componentwillmount-is-not-ex)\n\n  - 여기 답변을 살펴보면 You're getting this warning because `componentWillMount`\n    is deprecated in newer React versions. If you're not using `componentWillMount`\n     anywhere then one of your libraries is and it needs to be updated.\n\n     즉, 프로젝트 내부 코드가 아닌 다른 라이브러리의 예전 버전에서 이 hook들을 사용하고 있기 때문에 발생하는 메시지라는 내용이네요. 그래서 해당 라이브러리의 버전을 같이 올려서 해결할 수 있다고 합니다.\n\n     어떤 라이브러리인지도 모르고, 해당 라이브러리 버전을 올렸다가 충돌이 날 수도 있어 이 warning 메시지는 그대로 두는게 좋겠습니다.\n\n### 2. react.development.js:217 Warning: React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.\n\n- 이 에러메시지도 위의 1번과 비슷한 현상때문에 발생하는 것으로 파악됩니다. 현 코드에서 React.createFactory() 라는 코드를 사용하는 곳이 없는데 이 기능이 곧 사라지니까 바꾸라는 걸로 봐서는 라이브러리 내에서 활용하고 있는 것으로 볼 수 있겠습니다.\n\n### 3. maps.js?ncpClientId=nhthwdjbzm&submodules=geocoder,drawing,stylemap:15 A parser-blocking, cross site (i.e. different eTLD+1) script, [https://openapi.map.naver.com/openapi/v3/maps-geocoder.js](https://openapi.map.naver.com/openapi/v3/maps-geocoder.js), is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See [https://www.chromestatus.com/feature/5718547946799104](https://www.chromestatus.com/feature/5718547946799104) for more details.\n\n- 이 이슈는 네이버 뿐만 아니라 카카오 지도 로드 시에도 발생하는 문제인 것 같은데, 용량이 큰 라이브러리를 로드할 때 그 라이브러리 내에 document.write이 들어있으면 나머지 html parsing이나 JS를 block하여 흰화면이 오래 나올 수 있습니다. 이러면 사용자는 오류라고 느낄 수 있는데요 특히나 느린 네트워크 환경에서는 정도가 더 심할 것입니다. 때문에 크롬에서 주의하라고 알려주는 내용입니다.\n\n- [https://github.com/navermaps/maps.js/issues/298](https://github.com/navermaps/maps.js/issues/298) 에는 네이버에서 답변한 내용이 있는데 해결에 도움이 되지 않습니다.\n\n- [https://devtalk.kakao.com/t/topic/53763](https://devtalk.kakao.com/t/topic/53763) 에 있는 카카오의 답변에 따르면 지도가 뜬다면 그닥 큰 문제는 아니니 무시해도 괜찮다고 합니다. 카카오가 직접 무시해도 된다고 하니 좀 안심(?)이 되긴 하네요. 아무튼 이 warning도 무시하고 넘어갑니다.\n\n  ![BUILDIT-error4](/assets/img/BUILDIT-error4.png)\n\n## 결과\n\n![BUILDIT-error5](/assets/img/BUILDIT-error5.png)\n\n콘솔창이 완전히 깨끗해지지는 않았지만 그래도 한 페이지 내로 줄어들었습니다.\n\n이제 스스로 해결할 수는 없거나 무시해도 되는 메시지들과 내부 API 오류만 남았네요. 모든 페이지를 브루트포스하게 탐색하지는 않았기 때문에 다른 라우트들을 돌아다니며 확인해보고 처음 보는 오류메시지이면 추가하도록 하겠습니다🙏\n\n\n\n\n\n");

/***/ }),

/***/ 7442:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Jest로 리액트에서 유닛 테스트 하기\"\ndate: \"2022.07.08\"\ntags:\n  - javascript\n  - test\n  - jest\n  - tdd\n---\n\n# React Test (1) Unit test\n\n## Test 환경 설정 - JEST\n\n`CRA`를 하면 자동으로 설치해주는 jest로 시작해보자. jest는 jasmine 기반 테스팅라이브러리이다. \n\n이 외에도 mocha, Karma 등 다양한 [테스팅 라이브러리간 비교](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a) 글을 읽고 싶으면 링크를 클릭해보자.\n\n\n\nCRA로 만든 react 프로젝트에서 jest를 테스트 해볼 예정이다. 귀찮으면 이미 해놓은 아래 프로젝트를 클론하면서 따라해보자.\n\n```bash\n$ git clone https://github.com/likelionSungGuk/todolistRTKtypescript.git\n```\n\n\n\n## :one: Matchers\n\n### 1. toBe\n\n```javascript\n// fn.js\nexport const fn = {\n  add: (num1, num2) => num1 + num2,\n  makeUser: (name, age)=> ({\n    name,\n    age\n  })\n}\n```\n\n```javascript\n// fn.test.js\n\ntest('a + b =', ()=> {\n  // fn.add(1, 2)를 하면 3이 될거라 기대한다.\n  expect(fn.add(1, 2)).toBe(3)\n})\n```\n\n위 처럼 test의 첫번째 인자는 화면에 표시될 텍스트를 넣어주면 된다. 두 번째 인자에는 콜백함수를 열어주고 그 안에서 expect().`matchers` 형식으로 써준다. 여기서 살펴볼 `toBe` matcher는 expect내부의 값이 나타낼 기대값을 의미한다. 결과가 toBe내부와 같다면 true로 테스트를 통과한다.\n\n\n\n:bulb: 간단 Tip!\n\n>  가장 처음에 쓰는 `test`는 `it`으로 써도 똑같이 동작한다. 영어 문장에서 `it`으로 쓰면 하나의 완결된 문장을 만들기 쉽기 때문에 it으로도 쓰는 경향이 있다고 한다. 둘 중 취향에 따라 골라 쓰자!\n\n\n\n### 2. toEqual / toStrictEqual\n\n```javascript\ntest('make user: 이름과 나이를 전달받아서 객체를 반환', ()=>{\n  expect(fn.makeUser(\"Mike\", 25)).toEqual({\n  // expect(fn.makeUser(\"Mike\", 25)).toBe({ // X\n    name: \"Mike\",\n    age: 25\n  })\n})\n```\n\n이렇게 객체를 만드는 경우에는 toBe를 쓰면 false가 나온다. `객체는 depth가 깊을 수 있기 때문에` 재귀적으로 타고 들어가는 `toEqual/toStrictEqual`을 toBe대신 써줘야 한다.\n\n\n\n### 3. 기타 jest matcher들\n\n위 두 가지 외에도 다양한 matcher들이 있다. 활용법들을 한 번 쭉 살펴보는 것이 좋지만 이 글에서는 소개만 하고 넘어간다.\n\n1. Boolean \n\n    - toBeNull\n\n    - toBeUndefined\n\n    - toBeDefined\n\n\n2. Falsy/Truthy\n\n    - toBeFalsy\n\n    - toBeTruthy\n\n\n3. 대소비교\n\n    - toBeGreaterThan (크다)\n\n    - toBeGreaterThanOrEqual (크거나 같다)\n\n    - toBeLessThan\n\n    - toBeLessThanOrEqual\n\n\n4. epsilon check\n    - toBeCloseTo // ex: add(0.1, 0.2).toBeCloseTo(0.3) -> true (toBe(0,3) -> false)\n\n\n\n\n\n## :two: Describe\n\n`describe` 라는 키워드를 사용하면 여러 테스트 케이스를 묶을 수 있습니다. \n\n'sum' 이라는 공통 키워드로 묶을 수 있는 테스트의 경우 describe 키워드를 사용해 하나로 묶어서 테스트할 수 있습니다.\n\n```javascript\n// sum.js\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction sumOf(numbers) {\n  let result = 0;\n  numbers.forEach(n => {\n    result += n;\n  });\n  return result;\n}\n\n// 각각 내보내기\nexports.sum = sum;\nexports.sumOf = sumOf;\n```\n\n```javascript\n// sum.test.js\nconst { sum, sumOf } = require('./sum');\n\ndescribe('sum', () => {\n  it('calculates 1 + 2', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n\n  it('calculates all numbers', () => {\n    const array = [1, 2, 3, 4, 5];\n    expect(sumOf(array)).toBe(15);\n  });\n});\n```\n\n![describe로 테스트하면 하나로 묶어준다.](https://i.imgur.com/CP1J77P.png)\n\n\n\n### sumOf 함수 리팩토링해서 테스트코드의 진수 맛보기\n\n```javascript\n// sum.js\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction sumOf(numbers) {\n  return numbers.reduce((acc, current) => acc + current, 0);\n}\n\n// 각각 내보내기\nexports.sum = sum;\nexports.sumOf = sumOf;\n```\n\n위와 같이 reduce를 사용해서 sumOf를 리팩토링한 후 그대로 테스트를 돌리면 통과한다. 이렇게 코드를 리팩토링해도 테스트가 있다면 품질을 보장할 수 있다는 것이 장점이다.\n\n\n\n\n\n## :three: 비동기 함수의 경우 어떻게 테스트를 할 수 있을까?\n\n### 1. done() \n\n```javascript\n// fn.js\nexport const fn = {\n  ...,\n  getName: (callback) => {\n    const name = \"Mike\";\n    setTimeout(()=> {\n      callback(name)\n    }, 3000);\n  }\n}\n```\n\n```javascript\n// fn.test.js\nit('name is Mike', (done) => {\n  fn.getName((name) => {\n    expect(name).toBe(\"Mike\");\n    done();\n  });\n})\n```\n\n여기서 done을 쓰지 않으면 어떻게 될까?\n\n```bash\nPASS  src/components/__tests__/fn.test.js\nPASS  src/components/__tests__/TodoList.test.js\n\nTest Suites: 2 passed, 2 total\nTests:       5 passed, 5 total\nSnapshots:   1 passed, 1 total\nTime:        2.715 s\n\nRan all test suites related to changed files.\n\nWatch Usage: Press w to show more.\n\n```\n\nsetTimeout을 3000ms 로 줬는데도 불구하고 2.715s 만에 테스트가 끝나버렸다. 결과는 그냥 PASS.\n\n해당 콜백을 기다리지 않고 지나쳤기 때문인데, 이 때문에 `done()`을 활용한다. \n\ndone()에 도착하기 전까지의 동작을 전부 기다리다가 done에 도착하면 끝난다.\n\n\n\n### 2. Promise resolve\n\n(1) then\n\n```javascript\n// fn.js\nexport const fn = {\n...,\n  getName: (callback) => {\n    const name = \"Mike\";\n    setTimeout(()=> {\n      callback(name)\n    }, 3000);\n  },\n  getAge: () => {\n    const age = 30;\n    return new Promise((resolve, reject) => {\n      setTimeout(()=> {\n        resolve(age)\n      }, 3000);\n    })\n  }\n}\n```\n\n```javascript\n// fn.test.js\nit('age is 30', () => {\n  // async 2. Promise()\n  return fn.getAge().then( age => {\n    expect(age).toBe(30);\n  });\n})\n```\n\nfn.getAge()함수는 Promise객체를 리턴해준다. 해당 함수의 return 값을 받아야 하기 때문에 테스트 함수에서도 return을 받아줘야 한다.\n\n\n\n(2) Matcher 활용 - resolves\n\n```javascript\n// fn.test.js\nit('age is 30', () => {\n  // async 2. Promise()\n    return expect(fn.getAge()).resolves.toBe(30)\n  });\n})\n```\n\n위와 같이 `resolves` matcher를 활용해서 좀 더 간단히 작성할 수 있다.\n\n\n\n### 3. async / await\n\n```javascript\n// fn.test.js\nit('age is 30', async () => {\n  // async 3. async/await\n\tawait expect(fn.getAge()).resolves.toBe(30)\n});\n```\n\n역시나 async/await을 사용하면 가장 간단하게 비동기처리를 할 수 있다.\n\n\n\n## :four: 테스트 전/후 처리\n\n### beforeEach / afterEach\n\n```javascript\n// fail\nlet num = 1; \ntest('1+1 = 2', () => {\n  num = fn.add(num, 1)\n  expect(num).toBe(2)\n})\ntest('1+2 = 3', () => {\n  fn.add(num, 2)\n  expect(num).toBe(3)\n})\n```\n\n이 경우 num 이 매 테스트마다 재할당되면서 두번째 테스트가 실패하게 된다.\n\n이럴 때는 모든 테스트 이전에 num을 1로 지정해주는 matcher인 beforeEach를 활용하면 된다.\n\n```javascript\n// success!!\nlet num;\nbeforeEach(()=>{\n  num = 1;\n})\ntest('1+1 = 2', () => {\n  num = fn.add(num, 1)\n  expect(num).toBe(2)\n})\ntest('1+2 = 3', () => {\n  num = fn.add(num, 2)\n  expect(num).toBe(3)\n})\n```\n\n- afterEach는 모든 테스트 직후에 실행되는 로직이다.\n- 첫 num값만 다르게 주고 싶은 경우에 활용할 수 있다.\n\n\n\n### beforeAll / afterAll\n\n만약 각각의 테스트 전/후에 해둬야 할 작업이 중복되면서 꽤 시간이 걸리는 작업이라면 이런 경우에는 beforeAll/afterAll 을 활용해서 테스트 전/후에 한 번만 해두고 테스트가 끝날때까지 유지할 수 있다.\n\n```javascript\n// fn\nexport const fn = {\n ...\n  connectUserDB: () => {\n    return new Promise((resolve, reject) => {\n      setTimeout(()=> {\n        resolve({\n          name: \"Mike\",\n          age: 30\n        })\n      }, 3000)\n    })\n  },\n  disConnectUserDB: () => {\n    return new Promise((resolve, reject) => {\n      setTimeout(()=> {\n        resolve()\n      }, 3000)\n    })\n  }\n}\n```\n\nuser DB를 연결하는 상황이라 가정해보자. user DB에 연결하는데 3초, disconnect하는데 3초가 걸린다. 이걸 beforeEach, afterEach로 매 테스트마다 초기화 한다면 매우 비효율적이다. afterAll과 beforeAll을 테스트가 전부 실행되기 전과 전부 실행되고 나서 한 번씩 실행되는 matcher이므로 아래와 같이 사용하면 된다.\n\n```javascript\nlet user;\nbeforeAll(async()=>{\n  user = await fn.connectUserDB();\n})\n\nafterAll(async () => {\n  return await fn.disConnectUserDB();\n})\n\ntest('User name is Mike', () => {\n  expect(user.name).toBe(\"Mike\")\n})\ntest('Mike is 30', () => {\n  expect(user.age).toBe(30)\n})\n```\n\n\n\n\n\n## :five: Mock함수\n\n```javascript\nconst mockCallback = jest.fn(x => 42 + x);\nforEach([0, 1], mockCallback);\n\n// The mock function is called twice\nexpect(mockCallback.mock.calls.length).toBe(2);\n\n// The first argument of the first call to the function was 0\nexpect(mockCallback.mock.calls[0][0]).toBe(0);\n\n// The first argument of the second call to the function was 1\nexpect(mockCallback.mock.calls[1][0]).toBe(1);\n\n// The return value of the first call to the function was 42\nexpect(mockCallback.mock.results[0].value).toBe(42);\n```\n\n\n\nmock함수는 왜 사용하는 것일까?\n\n예를 들어 createUser함수가 있다고 가정해보자. 이 함수가 실행되면 db에 실제로 유저가 생성된다. createUser함수를 테스트하기 위해서 createUser함수를 호출한다면 원치않는 유저가 DB에 계속 생성될 수 있다. 때문에 createUser함수를 모방한 함수(mockCreateUser)를 하나 만들어서 모방한 함수가 테스트를 잘 통과하면 createUser도 무사히 통과될 것이라 예상할 수 있다.\n\n\n\n```javascript\n//\njest.mock('../fn')\nfn.connectUserDB().mockReturnValue({name: \"Mike\", age: 30})\n\ntest('test', async ()=>{\n  const user = await fn.connectUserDB();\n  expect(user.name).toEqual(\"Mike\");\n})\n```\n\n\n\n\n\n\n\n---\n\nreferences.\n\nhttps://learn-react-test.vlpt.us/#/01-javascript-testing\n\nhttps://www.youtube.com/playlist?list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt\n");

/***/ }),

/***/ 1250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"Vuejs에서 AWS Lambda와 SES를 사용해서 메일 보내기\"\r\ndate: \"2021.02.09\"\r\ntags: \r\n  - AWS\r\n  - Lambda\r\n  - Vuejs\r\n  - javascript\r\n  - email\r\n---\r\n\r\n\r\n# 보고 그대로 따라하기 쌉가능\r\n\r\n## 0. 이 문서를 작성하는 이유\r\n\r\n(요약: 블로그 잘못 읽으면 골로간다...)\r\n\r\n![작성이유](/assets/img/Untitled 2.png)\r\n\r\n처음 이메일 기능을 넣으려 했을 때 한 블로거의 글을 읽었습니다. 마지막 멘트까지 살펴본 결과 '아 그대로 따라하면 쉽게 할 수 있겠구나', '이 정도면 얼마 안걸리겠다' 생각하고 착수했습니다. \r\n하지만 이 글은 AWS Lambda 사용에 포커스를 맞추고 이메일링에 대해서는 크게 설명하지 않았습니다. \r\n때문에 오히려 이 블로그글을 보고 따라하다가 중간중간 많은 내용들이 생략되어 있어서 오히려 많이 헤맸습니다.\r\n믿고 그대로 따라했다가 삽질을 많이 했지만, 이제는 오히려 이 목적을 직접 달성하기 위해 다시 글을 작성하게 되었습니다.\r\n\r\n![기성룡좌 짤](https://ppss.kr/wp-content/uploads/2013/07/20130402_025303.png)\r\n\r\n(~~답답하면 니가 직접 뛰던가~~ ~~ )\r\n\r\n`AWS lambda, AWS SES, nodemailer, Vuejs를 활용한 이메일 전송 기능`에 대해 이 글만 보고 따라해도 충분할 정도로 정리해보겠습니다.\r\nGo Go Go!\r\n\r\n\r\n\r\n\r\n## 1. 왜 AWS lambda를 사용해야 할까?\r\n\r\n메일 기능... 간단한 것 같으면서도 그렇게 간단하지만은 않은 기능.\r\n\r\n이걸 EC2에 올려서 메일 전송만 해주기에는 너무 리소스 낭비이고, 그렇다고 프론트에서 정적으로 동작하게만 만드는 것도 애매하다.\r\n\r\n이럴 때 쓰라고 있는게 `AWS의 Lambda 기능`이다.\r\n\r\n> AWS lambda란 간단히 말해서 '함수' 단위의 deploy이다.\r\n\r\n어떤 이벤트가 발생했을 때에만 필요한 함수들은 클라우드 서버에 deploy하면 시간당 과금을 묻게된다. 이 경우 서버 호출이 자주 발생하지 않는 경우 비효율적(a.k.a. 돈낭비)이다.\r\n\r\n반면, AWS lambda를 사용하면 함수가 호출되는 횟수에 따라 과금이 부과되기 때문에 메일링 서비스 같이 자주 불리지 않는 함수들은 따로 떼내어 관리하면 더욱 경제적이고 효율적으로 서버를 운영할 수 있게 되는 장점이 있다.\r\n\r\n\r\n\r\n(2021. 2월 기준, 지원하는 언어는 C#, Go, Java, `Javascript(node.js)`, Perl, PHP, Python, Ruby이다.)\r\n\r\n이번에는 javascript를 활용해보았다. (중간에 javascript에 대한 부족한 이해력때문에 삽질을 많이해서 순간적으로 python으로 할까 고민했던 순간을 간신히 넘겼다 ;;;)\r\n\r\n\r\n\r\n## 2. 로컬환경에서 먼저 테스트 해보기\r\n\r\n### 2-1. 로컬에서 메일 보내기\r\n\r\n먼저, `nodemailer` 와 `nodemailer-smtp-transport`라는 npm 라이브러리를 먼저 설치하고 아래 예제 파일을 `index.js` 로 저장한다.\r\n\r\n```bash\r\n$ npm install nodemailer\r\n$ npm i nodemailer-smtp-transport\r\n```\r\n\r\n```jsx\r\n// index.js\r\n/*\r\n출처: https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/examples-send-using-smtp.html\r\nThis code uses callbacks to handle asynchronous function responses.\r\nIt currently demonstrates using an async-await pattern.\r\nAWS supports both the async-await and promises patterns.\r\nFor more information, see the following:\r\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function\r\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises\r\nhttps://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/calling-services-asynchronously.html\r\nhttps://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html\r\n*/\r\n\r\n\"use strict\";\r\nconst nodemailer = require(\"nodemailer\");\r\n\r\n// If you're using Amazon SES in a region other than US West (Oregon),\r\n// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP\r\n// endpoint in the appropriate AWS Region.\r\nconst smtpEndpoint = \"email-smtp.us-west-2.amazonaws.com\";\r\n\r\n// The port to use when connecting to the SMTP server.\r\nconst port = 587;\r\n\r\n// Replace sender@example.com with your \"From\" address.\r\n// This address must be verified with Amazon SES.\r\nconst senderAddress = \"Mary Major <sender@example.com>\";\r\n\r\n// Replace recipient@example.com with a \"To\" address. If your account\r\n// is still in the sandbox, this address must be verified. To specify\r\n// multiple addresses, separate each address with a comma.\r\nvar toAddresses = \"recipient@example.com\";\r\n\r\n// CC and BCC addresses. If your account is in the sandbox, these\r\n// addresses have to be verified. To specify multiple addresses, separate\r\n// each address with a comma.\r\nvar ccAddresses = \"cc-recipient0@example.com,cc-recipient1@example.com\";\r\nvar bccAddresses = \"bcc-recipient@example.com\";\r\n\r\n// Replace smtp_username with your Amazon SES SMTP user name.\r\nconst smtpUsername = \"AKIAIOSFODNN7EXAMPLE\";\r\n\r\n// Replace smtp_password with your Amazon SES SMTP password.\r\nconst smtpPassword = \"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\";\r\n\r\n// (Optional) the name of a configuration set to use for this message.\r\nvar configurationSet = \"ConfigSet\";\r\n\r\n// The subject line of the email\r\nvar subject = \"Amazon SES test (Nodemailer)\";\r\n\r\n// The email body for recipients with non-HTML email clients.\r\nvar body_text = `Amazon SES Test (Nodemailer)\r\n---------------------------------\r\nThis email was sent through the Amazon SES SMTP interface using Nodemailer.\r\n`;\r\n\r\n// The body of the email for recipients whose email clients support HTML content.\r\nvar body_html = `<html>\r\n<head></head>\r\n<body>\r\n  <h1>Amazon SES Test (Nodemailer)</h1>\r\n  <p>This email was sent with <a href='https://aws.amazon.com/ses/'>Amazon SES</a>\r\n        using <a href='https://nodemailer.com'>Nodemailer</a> for Node.js.</p>\r\n</body>\r\n</html>`;\r\n\r\n// The message tags that you want to apply to the email.\r\nvar tag0 = \"key0=value0\";\r\nvar tag1 = \"key1=value1\";\r\n\r\nasync function main(){\r\n\r\n  // Create the SMTP transport.\r\n  let transporter = nodemailer.createTransport({\r\n    host: smtpEndpoint,\r\n    port: port,\r\n    secure: false, // true for 465, false for other ports\r\n    auth: {\r\n      user: smtpUsername,\r\n      pass: smtpPassword\r\n    }\r\n  });\r\n\r\n  // Specify the fields in the email.\r\n  let mailOptions = {\r\n    from: senderAddress,\r\n    to: toAddresses,\r\n    subject: subject,\r\n    cc: ccAddresses,\r\n    bcc: bccAddresses,\r\n    text: body_text,\r\n    html: body_html,\r\n    // Custom headers for configuration set and message tags.\r\n    headers: {\r\n      'X-SES-CONFIGURATION-SET': configurationSet,\r\n      'X-SES-MESSAGE-TAGS': tag0,\r\n      'X-SES-MESSAGE-TAGS': tag1\r\n    }\r\n  };\r\n\r\n  // Send the email.\r\n  let info = await transporter.sendMail(mailOptions)\r\n\r\n  console.log(\"Message sent! Message ID: \", info.messageId);\r\n}\r\n\r\nmain().catch(console.error);\r\n```\r\n\r\n각각의 변수들이 무엇을 뜻하는지는 주석에 자세히 달려있다.\r\n\r\n\r\n\r\n먼저 간단하게 몇 가지만 살펴보자.\r\n\r\n```jsx\r\n// 1. aws-email region이다. 기본적으로 us-west로 설정되어있는데 서울은 email-stmp.ap-northeast-2이다.\r\nconst smtpEndpoint = \"email-smtp.us-west-2.amazonaws.com\";\r\n\r\n// 2. 보안사항\r\nconst smtpUsername = \"AXXXXXXXXXXXXXXXE\";\r\n// Replace smtp_password with your Amazon SES SMTP password.\r\nconst smtpPassword = \"wXXXXXXXXXXXXXXXXXXEY\";\r\n\r\n/*\r\n이메일을 접속하기 위해서는 보낼 이메일이 있어야한다. \r\n간단하게 자신의 이메일을 활용한다면 아이디와 비밀번호가 필요하다.\r\n하지만 아이디와 비밀번호를 코드에 그대로 노출시키는 것은 보안에 좋지 않으므로,\r\nAWS에서 제공하는 SES(~~요정)~~ 기능을 사용하여 username과 password를 사용할 수 있다.\r\n*/\r\n```\r\n\r\n\r\n\r\n### 2-2. AWS SES SMTP사용하기\r\n\r\nAWS의 SES(~~요정?~~)는 뭔가 약자로 쓰면 멋있고 복잡한 기능같지만 그 뜻을 보면 생각보다 친근(?)하다. Simple Email Service의 약자로 말그대로 간단한 email 서비스다. \r\n\r\n![SES](/assets/img/Untitled%203.png)\r\n\r\nSES를 검색하고 클릭!\r\n\r\n![email verify2](/assets/img/Untitled 4.png)\r\n\r\nEmail Address클릭!\r\n\r\n![email verify2](/assets/img/Untitled 5.png)\r\n\r\nemail 인증 ㄱㄱ!\r\n\r\n![AWS인증메일](/assets/img/Untitled 6.png)\r\n\r\n*이 화면은 Gmail에서 AWS로부터 받은 메일 화면이다. 붉은 부분의 링크를 클릭하면 인증이 완료된다.*\r\n\r\n![email verify3](/assets/img/Untitled 7.png)\r\n\r\n*인증이 완료되면 pending verification이 `verified`로 변경된다.*\r\n\r\n![email SMTP](/assets/img/Untitled 8.png)\r\n\r\n\r\n\r\n인증이 완료되면 SMTP credentials를 생성한다.\r\n\r\n이 과정을 거치면 `credentials.csv` 파일이 생성되고 이 파일을 다운로드 받아 열면 위의 `smtpUsername` 과 `smtpPassword`가 있으므로 index.js 파일의 해당 위치에 복붙한다.\r\n\r\n\r\n\r\n여기까지 진행하고서 terminal에서 `node index` 를 입력하면 index.js가 실행되면서 내가 sendTo로 설정했던 메일로 메일이 날라가 있을 것이다.\r\n\r\n\r\n\r\n## 3.  Lambda 사용해보기\r\n\r\n### 3-1. AWS Lambda에서 함수 생성\r\n\r\n![aws lambda1](/assets/img/Untitled 9.png)\r\n\r\n*'Lambda 서버에 대한 걱정없이 코드 실행' 클릭*\r\n\r\n![aws lambda2](/assets/img/Untitled 10.png)\r\n\r\n*우상단 '함수 생성' 버튼 클릭*\r\n\r\n![aws lambda3](/assets/img/Untitled%2011.png)\r\n\r\n*함수이름, 런타임을 선택하고 함수생성 (이번에는 example이라는 함수명과 node14.x로 만들었습니다.)*\r\n\r\n![aws lambda4](/assets/img/Untitled 12.png)\r\n\r\n*트리거 추가 버튼 클릭*\r\n\r\n![aws lambda5](/assets/img/Untitled 13.png)\r\n\r\n*API 게이트웨이*\r\n\r\n![aws gateway1](/assets/img/Untitled 14.png)\r\n\r\n*보안 - 열기, CORS 체크는 일단 하지않고 놔두고 나중에 처리 ㄱㄱ*\r\n\r\n\r\n\r\n아래로 내려와서 '함수 코드'쪽으로 내려온 뒤 index.js를 클릭해준다.\r\n\r\n이 part가 lambda 함수를 작성하는 메인 공간이다.\r\n\r\n![aws lambda6](/assets/img/Untitled 15.png)\r\n\r\n*밝은 화면을 눈뜨고 지켜볼 수 없어 aws에서도 dark theme로 바꿔서 쓰는중이라 화면이 다르게 보일 수 있음 ;;*\r\n\r\n\r\n\r\n간단한 예시 코드가 적혀있다\r\n\r\n```jsx\r\nexports.handler = async (event) => {\r\n    // TODO implement\r\n    const response = {\r\n        statusCode: 200,\r\n        body: JSON.stringify('Hello from Lambda!'),\r\n    };\r\n    return response;\r\n};\r\n\r\n람다는 이 exports.handler가 필수적이다. \r\n이후 response에 상태번호 200과 \"hello from Lambda!\"라는 문자열을 JSON으로 작성해 담아주고\r\n이 response를 return해준다.\r\n\r\n```\r\n\r\n[handler에 대한 설명](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)[영문]\r\n\r\nTest버튼을 누르면 execution results 창이 나오면서 함수 실행 결과를 보여준다\r\n\r\n![aws lambda7](/assets/img/Untitled 16.png)\r\n\r\n성공적으로 통신이 된다면 Response에 statusCode와 Body에 문자열이 담겨있는 것을 확인할 수 있다.\r\n\r\n\r\n\r\n### 3-2. AWS lamda에 로컬 환경과 똑같이 환경설정하기\r\n\r\n![로컬파일트리](/assets/img/Untitled 17.png)\r\n\r\n*로컬환경의 파일트리*\r\n\r\n![lambda 파일트리](/assets/img/Untitled 18.png)\r\n\r\n*AWS 람다 환경의 파일트리*\r\n\r\n\r\n\r\n로컬 환경에서는 `npm`을 활용해서 nodemailer를 설치해 활용했다.\r\n\r\n가장 문제는 이 라이브러리를 어떻게 aws 환경에서도 구성할 수 있을까였다.\r\n\r\nAWS lambda에서 터미널을 찾아 헤맸지만 보이지 않아 이 부분에서 많이 당황했다.\r\n\r\n해결방법은 생각보다 간단했다. 로컬의 이 디렉토리를 통째로 zip파일로 압축한 뒤 업로드하면 되는 것이었다.\r\n\r\n\r\n\r\n[How to install npm modules in AWS Lambda?](https://www.youtube.com/watch?v=RnFowJ130pc)\r\n\r\n이 유튜브 동영상을 보며 힌트를 얻고 따라할 수 있었다.\r\n\r\n1. 로컬환경에서 zip 파일을 만든다.\r\n2.  작업 버튼을 누르고 나오는 `.zip파일 업로드`로 압축해놓은 zip파일을 AWS에 올린다.\r\n\r\n![index.js](/assets/img/Untitled 19.png)\r\n\r\n(이렇게 쉬운 방법이 있었는데 하필 aws-sdk를 사용해 CLI환경에서 하는 방법이 구글링에서 먼저 나와 고생좀 했었다...ㅠ)\r\n\r\n![업로드완료](/assets/img/Untitled 20.png)\r\n\r\n이제 로컬 환경과 AWS lambda환경이 같아졌다. 여기까지 왔다면 거의 다왔다!\r\n\r\n\r\n\r\n## 4. Vuejs로 이메일 전송 폼 만들기\r\n\r\n### 4-1. .vue파일 만들기\r\n\r\n```jsx\r\n// Feedback.vue 전체 코드는 다음과 같다\r\n\r\n<template>\r\n  <div class=\"container\">\r\n    <h3>뉴하팀에 피드백 메일 보내기</h3>\r\n    <v-form @submit.prevent=\"submit\">\r\n      <v-text-field\r\n        v-model=\"email\"\r\n        :rules=\"emailRules\"\r\n        label=\"답장 받을 이메일\"\r\n        required\r\n      ></v-text-field>\r\n\r\n      <v-text-field\r\n        v-model=\"title\"\r\n        label=\"제목\"\r\n        required\r\n        autocapitalize=\"off\"\r\n      ></v-text-field>\r\n\r\n      <v-textarea\r\n        v-model=\"content\"\r\n        type=\"text\"\r\n        label=\"본문\"\r\n        required\r\n      ></v-textarea>\r\n      <br />\r\n      <v-btn\r\n        :disabled=\"!valid\"\r\n        color=\"#ff9800\"\r\n        @click=\"submit\"\r\n        >전송하기</v-btn\r\n      >\r\n    </v-form> \r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport axios from 'axios';\r\nconst API_FROM_AWS_API_GATEWAY = 'https://??????.ap-northeast-2.amazonaws.com/default/<함수명>';\r\n\r\nexport default {\r\n  name: 'Feedback',\r\n  methods: {\r\n    isValid: function () {\r\n      if (this.title == '' || this.content == '') {\r\n        this.valid = false\r\n      } else {\r\n        this.valid = true\r\n      }\r\n    },\r\n    submit: function () {\r\n      axios.post(API_FROM_AWS_API_GATEWAY, JSON.stringify({\r\n        email: this.email,\r\n        title: this.title,\r\n        content: this.content,\r\n        }\r\n      ))\r\n      .then((res) => {\r\n        console.log(res)\r\n      })\r\n      .catch((e) => {\r\n        console.log(e)\r\n      })\r\n    },\r\n  },\r\n  data: function () {\r\n    return {\r\n      email: '',\r\n      title: '',\r\n      content: '',\r\n      valid: false,\r\n      emailRules: [\r\n        v => !!v || 'E-mail is required',\r\n        v => /.+@.+/.test(v) || 'E-mail must be valid',\r\n      ],\r\n    }\r\n  },\r\n  watch: {\r\n    title: function () {\r\n      this.isValid();\r\n    },\r\n    content: function () {\r\n      this.isValid();\r\n    },\r\n  }\r\n}\r\n</script>\r\n```\r\n\r\n1. v-form을 활용해 간단히 세 줄 짜리 input을 만들었다.\r\n    - email\r\n    - title\r\n    - content\r\n2. v-model로 email, title, content를 각각 입력받는 값을 string으로 binding했다.\r\n3. AWS람다함수의 주소값을 넣어준다\r\n4. axios를 import 한다\r\n\r\n![주소1](/assets/img/Untitled%2021.png)\r\n\r\n*lambda 화면에서 API게이트웨이를 클릭한다*\r\n\r\n![주소2](/assets/img/Untitled 22.png)\r\n\r\n이 붉은색 표시를 한 URL이 함수호출 게이트웨이값이다.\r\n\r\n이 주소값을 const API_FROM_AWS_API_GATEWAY에 넣어준다.\r\n\r\n```jsx\r\nimport axios from 'axios';\r\nconst API_FROM_AWS_API_GATEWAY = 'https://??????.ap-northeast-2.amazonaws.com/default/<함수명>';\r\n```\r\n\r\n5. submit 이라는 전송 함수를 methods에 추가한다.\r\n\r\n- API 게이트웨이 주소로 POST방식의 axios 비동기 요청을 한다.\r\n\r\n```jsx\r\nsubmit: function () {\r\n    axios.post(API_FROM_AWS_API_GATEWAY, JSON.stringify({\r\n      email: this.email,\r\n      title: this.title,\r\n      content: this.content,\r\n      }\r\n    ))\r\n    .then((res) => {\r\n      console.log(res)\r\n    })\r\n    .catch((e) => {\r\n      console.log(e)\r\n    })\r\n  },\r\n},\r\n```\r\n\r\n여기까지 진행하고 크롬의 console창을 열어보면 status:200의 메시지가 도착해 있을 것으로 기대를 했겠지만 \r\n\r\n크흠....역시나 한 번에 되지 않는다.\r\n\r\n\r\n\r\n## 5. CORS 허용해주기\r\n\r\nAPI Gateway에서 CORS를 허용해 줘야한다. \r\n\r\n![CORS](/assets/img/Untitled 23.png)\r\n\r\n*CORS 클릭*\r\n\r\n![CORS2](/assets/img/Untitled 24.png)\r\n\r\n![CORS3](/assets/img/Untitled 25.png)\r\n\r\n\r\n\r\n첫 번째 input창에 원하는 주소값을 넣어준다. 예시로는 http://[localhost:8080](http://localhost:8080) 을 추가한 모습인데, \r\n\r\n> 주의! 👏\r\n> **마지막에 '/'슬래시를 붙이지 않는다.**\r\n\r\n이유까지는 잘 모르겠지만  http://[localhost:8080](http://localhost:8080)/ 과 같은 형태로 했을 때 잘 작동하지 않는 문제가 있으니 이 점을 꼭 유의한다.\r\n\r\n이렇게 하고 다시 폼을 전송해보면 반가운 statusCode 200을 받을 수 있을 것이다.\r\n\r\n여기까지 성공했다면 거의 막바지에 다다랐다.\r\n\r\n\r\n\r\n## 6. index.js 정리\r\n\r\n### 6-1 event handler\r\n\r\n현재 `index.js` 파일은 AWS제공해주는 기본 형식 그대로일 것이다.\r\n\r\n하지만 Lambda에서 event가 발생하고 이것을 핸들하기 위해서는 event handler가 반드시 필요하다\r\n\r\n따라서 시작 부분을 \r\n\r\n'exports.handler = async (event, callback) => {'\r\n\r\n와 같이 수정해준다.\r\n\r\n\r\n\r\n### 6-2. 기타 설정하기\r\n\r\n아래 완성된 코드 예시를 보면서 자신에게 맞도록 설정된 변수 값들을 수정해준다.\r\n\r\n👏**이때 반드시 주의할 점은 시작은 exports.handler로 열어주고, 마지막은 꼭 return값을 넣어주도록 한다.**\r\n(handler 스코프 바깥쪽에 변수같은건 설정 가능하다)\r\n\r\n```jsx\r\nexports.handler = async (event, callback) => {\r\n---\r\nlet info = transporter.sendMail(mailOptions);   // 메일을 전송하는 마지막 코드\r\nreturn info;     // 그리고 마지막에 return해줘야 함수가 제대로 실행된다.\r\n}\r\n```\r\n\r\n\r\n\r\n### 6-3. 완성 코드 예시\r\n\r\n```jsx\r\nexports.handler = async (event, callback) => {\r\n  // \"use strict\";\r\n  const nodemailer = require(\"nodemailer\");\r\n  const smtpTransport = require('nodemailer-smtp-transport');\r\n\r\n  // If you're using Amazon SES in a region other than US West (Oregon),\r\n  // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP\r\n  // endpoint in the appropriate AWS Region.\r\n  const smtpEndpoint = \"email-smtp.ap-northeast-2.amazonaws.com\"; // 서울 region을 사용하고 있다면 그대로 써도 좋다.\r\n  \r\n  // The port to use when connecting to the SMTP server.\r\n  const port = 587;\r\n  \r\n  // Replace sender@example.com with your \"From\" address.\r\n  // This address must be verified with Amazon SES.\r\n  const senderAddress = \"----@gmail.com\";\r\n  \r\n  // Replace recipient@example.com with a \"To\" address. If your account\r\n  // is still in the sandbox, this address must be verified. To specify\r\n  // multiple addresses, separate each address with a comma.\r\n  var toAddresses = \"----@gmail.com\";\r\n  \r\n  // Replace smtp_username with your Amazon SES SMTP user name.\r\n  const smtpUsername = \"AXXXXXXXXXXXXE\";\r\n  \r\n  // Replace smtp_password with your Amazon SES SMTP password.\r\n  const smtpPassword = \"BXXXXXXXXXXXXXXXXXXXXXXO\";\r\n  \r\n  // The subject line of the email\r\n  \r\n  // The email body for recipients with non-HTML email clients.\r\n  \r\n  \r\n  const base64body = JSON.stringify(event.body)\r\n  const body = JSON.parse(Buffer.from(base64body, 'base64').toString('utf8'))\r\n  const data = {\r\n    email: body.email,\r\n    title: body.title,\r\n    content: body.content,\r\n  }\r\n  var subject = `${data.title}`;\r\n  var body_text = `${data.content}`;\r\n  // The body of the email for recipients whose email clients support HTML content.\r\n  var body_html = `<html>\r\n  <head></head>\r\n  <body>\r\n    <h2> ${data.email} 님으로부터 NewsHi 피드백이 도착했습니다.</h2>\r\n    <p> ${data.content}</p>\r\n  </body>\r\n  </html>`;\r\n  \r\n  // The message tags that you want to apply to the email.\r\n  var tag0 = \"key0=value0\";\r\n  var tag1 = \"key1=value1\";\r\n  \r\n\r\n  // Create the SMTP transport.\r\n  let transporter = nodemailer.createTransport(smtpTransport({\r\n    host: smtpEndpoint,\r\n    port: port,\r\n    secure: false, // true for 465, false for other ports\r\n    auth: {\r\n      user: smtpUsername,\r\n      pass: smtpPassword\r\n    }\r\n  }));\r\n\r\n  // Specify the fields in the email.\r\n  let mailOptions = {\r\n    from: senderAddress,\r\n    to: toAddresses,\r\n    subject: subject,\r\n    text: body_text,\r\n    html: body_html,\r\n    service: \"Gmail\",\r\n    // Custom headers for configuration set and message tags.\r\n    headers: {\r\n      'X-SES-MESSAGE-TAGS': tag0,\r\n      'X-SES-MESSAGE-TAGS': tag1\r\n    }\r\n  };\r\n  // Send the email.\r\n  // let info = await transporter.sendMail(mailOptions);\r\n  \r\n  let info = transporter.sendMail(mailOptions);\r\n  return info;\r\n}\r\n```\r\n\r\n*<완성 모습>*\r\n\r\n![완성1](/assets/img/Untitled.png)\r\n\r\n*사이트에서 이메일 작성하는 폼*\r\n\r\n![완성2](/assets/img/mailcomplete.png)\r\n\r\n*G메일로 날아오는 결과*\r\n\r\n\r\n\r\n끝.\r\n\r\n---\r\n\r\n### References.\r\n\r\n**웬만하면 이 순서대로 참고하는 것을 추천.**\r\n\r\n**특히, 마지막에 있는 velog 블로그 글은 꼭 마지막에 읽을 것을 추천함.**\r\n\r\n[Amazon SES SMTP 인터페이스를 사용하여 이메일 전송](https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/examples-send-using-smtp.html)\r\n\r\n[Amazon SES SMTP 인터페이스를 사용하여 이메일 전송](https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/examples-send-using-smtp.html)\r\n\r\n[AWS Lambda 배포 패키지(Node.js)](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/nodejs-package.html)\r\n\r\n[AWS Lambda 함수 핸들러(Node.js)](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/nodejs-handler.html)\r\n\r\n[Sending email with Nodemailer using a lambda - Edward Beazer Blog](https://www.edwardbeazer.com/sending-email-using-nodemailer-using-a-lambda/)\r\n\r\n[How to load npm modules in AWS Lambda?](https://stackoverflow.com/questions/34437900/how-to-load-npm-modules-in-aws-lambda)\r\n\r\n[Vue.js와 AWS Lambda, Nodemailer 로 이메일 전송 폼 만들기](https://velog.io/@bluestragglr/Vue.js%EC%99%80-AWS-Lambda-Nodemailer-%EB%A1%9C-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%A0%84%EC%86%A1-%ED%8F%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0)");

/***/ }),

/***/ 2808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"Vuex가 무엇이고 왜 쓰는것인가?\"\r\ndate: \"2021.03.12\"\r\ntags: \r\n  - vuejs\r\n  - vuex\r\n  - javascript\r\n  - es6\r\n---\r\n\r\n## 1. 뷰엑스는 왜 필요한가?\r\n\r\n1. Vue인스턴스\r\n\r\n![vue인스턴스](/assets/img/vue인스턴스.png)\r\n\r\n화면(View) -> 화면에서의 이벤트 발생(Actions) -> 데이터 변경(State)의 **단방향 데이터 흐름**이 특징입니다.\r\n\r\n하지만, Component 관계가 복잡해질수록 상태관리가 어렵다\r\n\r\n![상태관리](/assets/img/vuestate.png)\r\n\r\n```jsx\r\n// 참고) Props를 정의할 때 Vue스타일 가이드에서 추천하는 스타일... \r\n// 여러번 반복되면 코드가 상당히 복잡해질듯\r\nprops: {\r\n  status: {\r\n    type: String,\r\n    required: true,\r\n    validator: function (value) {\r\n      return [\r\n        'syncing',\r\n        'synced',\r\n        'version-conflict',\r\n        'error'\r\n      ].indexOf(value) !== -1\r\n    }\r\n  }\r\n}\r\n```\r\n\r\n2. 글로벌 이벤트 버스\r\n\r\n이런 상태관리의 어려움을 해결하기 위해 소규모 Vue 프로젝트에서는 `이벤트 버스`를 사용한다.\r\n\r\n![vue인스턴스](/assets/img/eventbus.png)\r\n\r\n하지만 글로벌 이벤트 버스에도 한계가 있다.\r\n\r\n![vue인스턴스](/assets/img/buslimit.png)\r\n\r\n## 2. Vuex란?\r\n\r\n> Application을 구성하는 모든 컴포넌트가 참조가능한 상태를 중앙에서 관리하는 저장소\r\n> Vue.js가 효율적인 업데이트를 위해 세분화된 반응 시스템을 활용하도록 특별히 고안된 Vuex는 뷰의 상태관리 패턴이자 라이브러리이다. \r\n> 주로 중대형 프로젝트에 적합하다.\r\n\r\nVuex는 이 문제를 어떻게 해결하는가? → 전역 상태 관리 매니저 (Store)에 각각의 Component들이 접근하는 방식\r\n\r\n![vue인스턴스](/assets/img/storeconcept.png)\r\n\r\n![vue인스턴스](/assets/img/vuestructure.png)\r\n\r\n아래에서 각각의 주요 오소들을 자세히 살펴봅시다.\r\n\r\n## 3. 주요 요소\r\n\r\n### A. State\r\n\r\n> 여러 컴포넌트 간에 공유되는 데이터를 의미합니다\r\n\r\n1. state선언\r\n\r\n```javascript\r\nnew Vuex.Store({\r\n  state: {\r\n    message: 'Hello Vue.js'\r\n  }\r\n})\r\n```\r\n\r\n- message의 상태값 정의\r\n\r\n접근법은?\r\n\r\n```javascript\r\n<div>{{ this.$store.state.message }}</div>\r\n```\r\n\r\n2. state 호출\r\n\r\n```javascript\r\ndata: function () {\r\n\treturn {\r\n        sharedState = this.$store.state.message;\r\n\t}\r\n}\r\n```\r\n\r\n이렇게 중앙에 있는 store의 state 중 message에 접근해서 해당 데이터를 호출할 수 있다.\r\n\r\n하지만, 이 방식으로 호출하는 것은 비추천!\r\n\r\n### B. Getters\r\n\r\n> 상태(state) 값이 변경되었을 때 변화에 따른 차이를 자동으로 반영하여 값을 계산해줍니다.\r\n> **Computed 속성과 매칭**\r\n\r\n```javascript\r\nnew Vuex.Store({\r\n  state: {\r\n    message: 'Hello Vue.js'\r\n  },\r\n  getters: {\r\n    reverseMessage(state) {\r\n      return state.message.split('').reverse().join('');\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n위에서 `State`를 설명할 때 호출하는 방식을 이야기 했는데, Vue에서 추천하는 방식은 이 `Getters` 를 활용해서'만' 호출할 것을 강하게 추천한다.\r\n\r\n### C. Mutations\r\n\r\n> 뷰엑스에서 **상태 값을 변경하는 유일한 방법**입니다. 상태는 항상 뮤테이션으로 변경됩니다\r\n> **Method속성과 매칭**\r\n\r\n1. Mutation 선언\r\n\r\n```javascript\r\nnew Vuex.Store({\r\n  state: {\r\n    message: 'Hello Vue.js'\r\n  },\r\n  mutations: {\r\n    reverseMessage(state) {\r\n      state.message = state.message.split('').reverse().join('');\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n2. Mutation 호출\r\n\r\n```javascript\r\nnew Vue({\r\n  methods: {\r\n    reverseMsg() {\r\n      this.$store.commit('reverseMessage');\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n### D. Actions\r\n\r\n> 뮤테이션 중에서 **비동기 처리 로직들을 정의**하는 속성\r\n> 동기 처리는 뮤테이션, 비동기 처리는 액션\r\n\r\n1. actions 선언\r\n\r\n```javascript\r\nnew Vuex.Store({\r\n  state: {\r\n    message: ''\r\n  },\r\n  mutations: {\r\n    reverseMessage(state, data) {\r\n      state.message = data.split('').reverse().join('');\r\n    }\r\n  },\r\n  actions: {\r\n    fetchMessage(context) {\r\n      axios.get(url).then(function(response) {\r\n        context.commit('reverseMessage', response.message);\r\n      });\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n2. actions 호출\r\n\r\n```javascript\r\nnew Vue({\r\n  methods: {\r\n    getMessage() {\r\n      this.$store.dispatch('fetchMessage');\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n---\r\n\r\n### 요약\r\n\r\n- Vue.js에서 중앙 Store에 저장된 State를 호출할 때는 `this.$store.state.message` 와 같이 호출하는 것이 아니라 `this.$store.getters.` 에서 `return` 해주는 값을 가져다가 써야 한다.\r\n- State 값을 변경하기 위해서는 컴포넌트에서 커밋으로 `Mutation` or `Action`을 호출해서 변경해준다.\r\n\r\n---\r\n\r\n## 4. 헬퍼 함수\r\n\r\n> 헬퍼 함수는 뷰엑스 기술 요소들을 **컴포넌트에서 더 편하게 쓸 수 있도록 도와주는 API**\r\n\r\n### A. 일반적인 접근 방법\r\n\r\n```javascript\r\n<div>{{ this.$store.getters.reverseMessage }}</div>\r\n```\r\n\r\n```javascript\r\nexport default {\r\n  computed: {\r\n    reverseMessage() {\r\n      return this.$store.getters.reverseMessage;\r\n    }\r\n  }\r\n}\r\n```\r\n\r\n### B. 헬퍼 함수 사용\r\n\r\n```javascript\r\n<div>{{ reverseMessage }}</div>\r\n```\r\n\r\n```javascript\r\nimport { mapGetters } from 'vuex';\r\n\r\nexport default {\r\n  computed: {\r\n    ...mapGetters(['reverseMessage'])\r\n  }\r\n}\r\n```\r\n\r\n- `this.$store. ~~~` 와 같이 복잡한 방식X → 가독성 좋아짐\r\n\r\n```javascript\r\nimport { mapState, mapGetters, mapMutations, mapActions } from 'vuex'\r\n등 mapGetters뿐만 아니라 mapState, mapMutations, mapActions 모두 사용 가능!\r\n```\r\n\r\n## 5. 추가 학습 필요 사항\r\n\r\n### 스토어 모듈화\r\n\r\n> 애플리케이션에 스토어를 적용해서 사용하다가 보면 금방 스토어의 덩어리가 커진다. 그럴때 데이터(상태)의 성격별로 스토어를 모듈화 해주면 관리하기 수월하다.\r\n\r\n[Modules - Cracking Vue.js](https://joshua1988.github.io/vue-camp/vuex/modules.html#%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%AA%A8%EB%93%88%ED%99%94-%EC%BD%94%EB%93%9C-%ED%98%95%EC%8B%9D)\r\n\r\n### ES6 - 스프레드 오퍼레이터\r\n\r\n[[ES6] Spread Operator (스프레드 연산자)](https://paperblock.tistory.com/62)\r\n\r\n---\r\n\r\nReferences\r\n\r\n[State - Cracking Vue.js](https://joshua1988.github.io/vue-camp/vuex/state.html)");

/***/ }),

/***/ 2975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"2021 프론트엔드 개발자 직접 받은 기술 면접 질문 리스트와 느낀점\"\r\ndate: \"2021.06.02\"\r\ntags: \r\n  - react\r\n  - 리액트\r\n  - 프론트엔드\r\n  - Vue\r\n  - Vuejs\r\n---\r\n\r\n# 2021 기술면접 질문과 느낀점\r\n\r\n조금 까먹었는데, 최대한 기억나는 것들을 적어보겠습니다.\r\n\r\n\r\n\r\n## :book: 질문리스트\r\n\r\n- 미들웨어란 무엇인가요?\r\n- React Hook에 대해 설명해주세요.\r\n- CDN이 무엇인가요?\r\n- 교착상태(Deadlock)을 해결하는 방법이 무엇인가요?\r\n\r\n- HTTP에 대해 설명해 주세요.\r\n  - HTTP response status code에 대해 설명해주세요.\r\n- 자료구조 Linked List에 대해 설명해주세요.\r\n  - Linked List와 Array의 차이는 무엇인가요?\r\n  - 새로운 것을 삽입, 삭제하는 트랜잭션의 경우 Array와 Linked List중 어떤 것의 성능이 더 좋나요?\r\n- Restful API에 대해 설명해주세요.\r\n  - Restful API의 장점은?\r\n  - Restful API의 단점은?\r\n- javascript var, let, const의 차이는?\r\n- javascript scope에 대해 설명해 주세요\r\n- event loop에 대해 자세히 설명해주세요.\r\n  - web API에서 루프 돌고 Queue로 들어가는데 이 때 Queue의 종류는 무엇이 있나요?\r\n- CSR과 SSR의 차이점에 대해 말해주세요.\r\n- (Vue.js) Computed와 Watch의 차이를 말해주세요.\r\n  - 성능적으로 어떤 것이 더 뛰어난가요?\r\n- (Vue.js) 컴포넌트가 Re-rendering 되는 경우는 어떤 경우인가요?\r\n- (Vue.js) VUEX에 대해 설명해주세요.\r\n\r\n---\r\n\r\n\r\n\r\n## :sweat: 느낀점\r\n\r\n면접에서 좀 규모가 있는회사와 규모가 작은 회사와의 차이점이 느껴진 점은 큰 회사일수록 언어나 컴퓨터 공학적 지식 그리고 그것이 작동하는 '원리'와 '이유'를 아는지를 묻는 질문이 많았습니다. 상대적으로 규모가 조금 작은 회사일수록 스킬셋과 어떤 프로젝트 경험이 있는지, 거기에서 맡은 역할과 담당한 부분을 많이 물어본다는 느낌을 받았습니다.\r\n\r\n\r\n\r\n프론트엔드 개발에 초점을 맞춰서 좀 더 자세히 얘기하자면, \r\n\r\n### 상대적으로 큰 회사일수록 \r\n\r\n- 자바스크립트 언어\r\n\r\n  - var, let, const의 차이 ( [여기에 잘 정리되어있네요!](https://likelionsungguk.github.io/21-08-09/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-var-let-const-%EC%A7%84%EC%A7%9C-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EA%B5%AC%EB%B3%84%ED%95%98%EA%B8%B0) )\r\n  - 호이스팅\r\n  - this\r\n\r\n- 브라우저 동작 원리\r\n\r\n  - \"브라우저 검색창에 www.google.com을 검색하고 나면 그 다음 이뤄지는 동작을 설명해보세요\"\r\n  - 이벤트 루프\r\n\r\n- DOM트리\r\n\r\n  - Reflow & Repaint\r\n\r\n  와 관련된 최적화에 관한 내용에 대한 질문을 받았습니다.\r\n\r\n\r\n\r\n### 상대적으로 작은 회사일수록\r\n\r\n- 프론트엔드 프레임워크 관련 질문\r\n  - SPA란 무엇인가요?\r\n    - 그렇다면 SPA를 쓰는 이유는 무엇인가요?\r\n    - SPA의 장단점을 설명해보세요.\r\n  - (React) 리액트 컴포넌트 라이프 사이클\r\n  - (React) 클래스형 컴포넌트와 함수형 컴포넌트의 차이를 알고 있는가?\r\n  - (Vuejs) Vue 인스턴스 라이프 사이클\r\n- 정적 언어 사용 경험 \r\n  - \"Typescript 써본적 있으신가요?\"\r\n  - Typescript의 interface와 class차이를 설명해주세요.\r\n  - Typescript 제네릭은 무엇이고 언제 사용하나요?\r\n    - 유니언 타입으로 쓸 수도 있는데 굳이 제네릭을 쓰는 이유가 뭘까요?\r\n- 프로젝트 관련 경험에서 더 깊은 내용 질문\r\n  - \"검색 기능을 개발하셨던데, 입력창에 인풋이 있을 때마다 state값을 변경했었나요? 아니면 다른 방식을 사용했었나요?\" + \"어떻게 하면 더 효율적으로 만들 수 있을까요?\"\r\n    - 나중에 알고보니 이 질문은 debounce에 대해 알고 있냐는 질문이었습니다. 사내에서 검색기능에서 이 `debounce` 관련 이슈가 있었고 마침 그때 면접이어서 생각나서 질문하셨다고 하더라구요 ㅎㅎ.\r\n  - 다크모드를 개발하셨는데 이때 다크모드인지 아닌지 나타내는 true/false 플래그는 어디에 저장하셨나요? \r\n    - localStorage냐 sessionStorage냐 cache냐를 묻는 질문\r\n\r\n\r\n\r\n혼자만의 뇌피셜이지 않을까 싶은데, 아마도 작은 규모일수록 지금까지 만들어온 것보다는 앞으로 만들어 나가야 할 것이 더 많기 때문에 바로 합류해서 빈틈없이 작업을 이어나갈 수 있도록 관련 기술스택을 활용한 프로젝트 경험이 있어 코드를 보고 빠르게 파악할 수 있는 이른바 `즉시 전력감`을 찾는 경향성이 있다고 느껴졌습니다.\r\n\r\n반면, 큰 기업일수록 인력이 많고 이미 짜여진 코드의 양도 상당히 방대합니다. 주니어 개발자가 별 생각없이 짠 코드가 의도치 않은 연쇄작용을 일으켜 대규모 시스템에 안좋은 영향을 끼치지 않도록 하는 것이 더 중요하게 생각하지 않을까 싶습니다. 때문에 다양한 기초 내용과 원리를 이해하여 버그를 최소화 하는 잘 짠 코드가 중요하므로 이런 내용을 이미 잘 알고 있고 빠른 학습을 할 수 있는 잠재력을 갖고 있는 인재들을 찾아서 이런 경향성이 있지 않을까 추측해봅니다...\r\n\r\n\r\n\r\n아무쪼록 이글은 보신 분들은 모두 저 보다 더 좋은 답변 하시길 바랍니다.");

/***/ }),

/***/ 7880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"45년 동안 개발자로 일하며 배운것들\"\r\ndate: \"2021.01.10\"\r\ntags: \r\n  - developer\r\n  - Curse of Knowledge\r\n---\r\n\r\n# What I’ve Learned in 45 Years in the Software Industry\r\n\r\n45년 동안 소프트웨어 산업에서 일했던 Joel Goldberg가 은퇴하며 사내 동료들에게 마지막으로 남긴 좋은 글이 있어 공유드립니다.\r\n\r\n[What I’ve Learned in 45 Years in the Software Industry](https://www.bti360.com/what-ive-learned-in-45-years-in-the-software-industry/)\r\n\r\n\r\n\r\n---\r\n\r\n## *INTRO*\r\n\r\n소프트웨어 산업에서의 40여 년을 되돌아 보면 얼마나 많은 변화가 있었는지 놀랐습니다. 저는 *펀치 카드*(아래 이미지)로 경력을 시작해서 마지막은 클라우드 컴퓨팅 시대로 끝을 맺고 있습니다. 이러한 모든 변화에도 불구하고 제 커리어 전반에 걸쳐 저를 도왔던 많은 원칙은 변하지 않았습니다. 이제 키보드에서 물러나면서 소프트웨어 엔지니어로서의 경력에서 배운 `6 가지 아이디어`를 공유하고 싶습니다.\r\n\r\n![Punched card](/assets/img/300px-Used_Punchcard_(5151286161).jpg)\r\n\r\n\r\n\r\n## 1. *Beware of the Curse of Knowledge*\r\n\r\n> *지식의 저주를 조심하라*\r\n\r\n당신이 무언가를 알고있을 때 그 것을 모르는 것이 어떤 것인지 상상하는 것은 거의 불가능에 가깝습니다. 이것은 지식의 저주이며 수많은 오해와 비효율성의 근원입니다. 복잡성에 익숙한 똑똑한 사람들은 특히 이것에 취약할 수 있습니다!\r\n\r\n지식의 저주를 경계하지 않으면 코드를 포함한 모든 형태의 커뮤니케이션을 복잡하게 할 가능성이 있습니다. 업무가 전문화 될수록 초보자가 이해할 수 없는 방식으로 의사소통 할 위험이 커집니다. \r\n\r\n끊임없이 지식의 저주와 싸우세요. 듣는 사람이 이해할 수 있게 말하기 위해 노력하세요. 처음으로 소통하는 내용을 배우는 것이 어떤 것인지 상상해보세요.\r\n\r\n\r\n\r\n## 2. *Focus on the Fundamentals*\r\n\r\n> *핵심에 집중해라*\r\n\r\n기술은 끊임없이 변화하지만 소프트웨어 개발에 대한 몇 가지 기본적인 접근 방식은 이러한 트렌드를 초월합니다. 다음은 오랫동안 유지될 6 가지 기본 사항입니다.\r\n\r\n- **팀워크** — 훌륭한 팀은 훌륭한 소프트웨어를 구축합니다. 팀워크를 당연하게 생각하지 마세요.\r\n- **신뢰** — 팀은 신뢰의 속도로 움직입니다. 함께 일하고 싶은 신뢰할 수 있는 사람이 되세요.\r\n- **의사 소통** — 정직하고 적극적으로 의사 소통하세요. 그리고 지식의 저주를 피하세요.\r\n- **합의 추구** — 전체 팀이 함께 할 시간을 가지세요. 토론과 불일치가 최상의 솔루션을 제공하도록 하세요.\r\n- **자동화 된 테스트** — 잘 테스트 된 코드를 사용하면 팀이 자신감을 가지고 빠르게 다음 레벨로 이동할 수 있습니다.\r\n- **깔끔하고 이해하기 쉬우 며 탐색 가능한 코드 및 디자인** — 코드를 인수 받을 다음 엔지니어를 고객으로 생각하세요. 후임자가 읽기, 유지 관리 및 업데이트하는 데 문제가 없는 코드를 빌드하도록 노력하세요.\r\n\r\n\r\n\r\n## 3. *Simplicity*\r\n\r\n복잡성과의 싸움은 끝이 없는 원인입니다. 솔루션은 가능한 한 간단해야 합니다. 코드를 관리 할 다음 사람이 당신만큼 똑똑하지 않다고 가정합니다. 더 적은 수의 기술을 사용할 수 있으면 그렇게 하십시오.\r\n\r\n>  *“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”* -*Antoine de Saint-Exupery*\r\n\r\n\r\n\r\n## 4. *Seek First to Understand*\r\n\r\n> *이해하기 위해 먼저 찾아봐라* - 다른 사람의 말을 이해하기 위해 그들의 말을 먼저 들어라\r\n\r\n`스티븐 코비의 7가지 습관` (The 7 Habits of Highly Effective People - 스티븐 코비가 쓴 비즈니스/자기계발서이다. 이 책은 전 세계에서 38개 언어로 번역되었으며, 총 1500만부 이상 판매되었다. 대한민국에서는 1994년 최초로 출간되어 2021년 현재까지 약 300만부가 팔린 베스트 셀러이다.)중 하나는 \"먼저 이해하려고 노력해라, 그러면 이해될 것이다.\"입니다. 이 격언은 훌륭한 청취자(Listener)가 되기 위해서, 또 좋은 동료가 되기 위해 기타 다른 어떤 조언보다도 나에게 도움이 되었습니다. \r\n\r\n만약 여러분이 다른 사람들에게 영향력을 끼치고 효과적으로 일하고 싶다면, 먼저 그들을 이해할 필요가 있습니다. 여러분 자신의 생각을 알리기 전에 그들의 감정, 생각, 관점을 이해할 수 있도록 그들의 말을 먼저 적극적으로 들어보세요.\r\n\r\n\r\n\r\n## 5. *Beware of Lock-In*\r\n\r\n> *Lock-in 을 주의하라*\r\n\r\n미래에는 소프트웨어를 구축하는 방식에 혁명을 일으킬 Hot한 생산성 도구들이 반드시 많이 있을 겁니다. \r\n\r\n예를 들어, CASE (Computer Assisted Software Engineering) 도구, COTS, Peoplesoft 및 SAP와 같은 Enterprise Resource Planning 제품, 심지어 Ruby도 포함됩니다. 그들은 하나 같이 자신들의 전체적인 개발 방법론을 채택하면 비용과 시간이 크게 절감된다고 주장합니다. 하지만 상당한 선행 비용(up-front cost)과 제약(Constraints)이 없다고 할 수는 없습니다. `Lock-in`은 주로 공급하는 회사로부터 주로 발생했지만 이제는 `프레임 워크`에서도 발생할 수 있습니다. \r\n\r\n어느 쪽이든, 고정하는 것은 변경에 상당한 비용을 의미합니다. 현명하게 선택하세요. 새로운 것이 항상 좋은 것만은 아닙니다!\r\n\r\n\r\n\r\n## 6. *Be Honest and Acknowledge When You Don’t Fit the Role *\r\n\r\n> *정직해라 그리고 스스로 맡은 역할에 맞지 않다고 생각하면 그것을 인정하고 받아들여라*\r\n\r\n커리어의 어느 시점에서 자신에게 적합하지 않은 역할을 맡게 될 수도 있습니다. 잘못된 Fit은 어떤 잘못된 행동을 야기할 만큼 중대한 잘못까지는(Character flaws) 아니지만 무시할 수 있는 정도로 가벼운 문제도 아닙니다. 이러한 딜레마를 해결하기 위해서는 한 가지 이상의 방법이 있을 수 있습니다: 스스로 진화하거나 아니면 역할이 진화 할 수 있습니다. 주요 point는 무슨 일이 일어나고 있는지 정확히 인식하고 건강에 해로운 곳으로부터 벗어나기 위해 자기자신을 아는 것(Self-Knowledge)입니다. 불행한 것은 누구에게도 최선의 이익이되지 않으며, BTI360은 이러한 사실을 인지하고 있습니다.\r\n\r\n제가 GM에 있었을 때 다음 단계가 진행되지 않았다면 실패했다고 여겨졌습니다. '관리자로 승진하여 더 많은 사람을 관리하거나 더 크고 복잡한 프로젝트를 수행하는 것'입니다. 많은 사람들에게 이것은 <u>비참한 커리어 패스</u>를 만들었습니다.\r\n\r\n하지만 EDS의 문화는 GM의 그것과는 달랐습니다. 사람들은 관리 역할에 들어갔다가 종종 다시 나가곤 했습니다. 전략적 플래너와 같이 범위가 더 큰 역할에서 PM 또는 프로젝트 수준 개발자와 같이 범위가 더 좁은 역할로 이동하는 것을 좌천 또는 오명으로 여기는 문화가 없었습니다. 저는 이러한 유연성을 이용하여 기술 피라미드의 최상위 역할에서 프로젝트 수준의 개발자로 다시 이동 한 사람 중 한 명이었습니다. 그리고 저는 결코 뒤돌아 후회하지 않았습니다.\r\n\r\n\r\n\r\n## *Final Thoughts*\r\n\r\n저는 BTI360에 입사하기 전에도 위에서 설명한 원칙을 소중히 여기는 곳이라는 것을 알 정도로 BTI360의 문화에 대해 충분히 알고 있었습니다. \r\n\r\n제가 바라는 것은 여러분 각자가 BTI360이란 회사를 지속적으로 소프트웨어 구축을 위한 훌륭한 장소로 만들도록 하는 강력한 엔지니어링 문화를 유지할 뿐만 아니라 그러한 문화를 지켜나가고 이에 대한 주인의식을 가지는 것입니다.");

/***/ }),

/***/ 8261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"처음부터 끝까지 상세히 알아보자 - HTTP3에 대한 A TO Z 1편\"\r\ndate: \"2021.08.14\"\r\ntags: \r\n  - HTTP3\r\n  - 프로토콜\r\n---\r\n\r\n# (번역) HTTP/3 FROM A To Z: Core Concepts (Part 1) by Robin Marx\r\n\r\n원문링크: [https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)\r\n\r\n이 글은 *Robin Marx*의 [**HTTP/3 FROM A To Z: Core Concepts (Part1)**](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)을 번역하였습니다.\r\n\r\n\r\n\r\n## TL;DR\r\n\r\n- **HTTP3가 왜 필요한가?** - 엄밀히 말하면 우리에게 필요한 것은 실제로 HTTP/3가 아니라 \"TCP/2\"였으며 그 과정에서 TCP자체를 업그레이드 하는 것보다는 HTTP 버전업이 더 손쉬운 방법이었습니다. (네트워크 계층 구조에 따르면 HTTP는 TCP프로토콜 위에서 동작하는데 HTTP/3가 HTTP 프로토콜의 발전보다는 기저에 깔린 TCP의 발전이 더 필요했고 HTTP/3는 좀 더 로우 레벨의 프로토콜에서 발전이 있었음을 의미합니다.) 우리가 HTTP/3에 대해 기대하는 주요 기능(더 빠른 연결 설정, 더 적은 HoL 차단, 연결 마이그레이션 등)은 실제로 모두 QUIC(TCP의 단점을 보완한 새로운 프로토콜)에서 제공됩니다.\r\n- **QUIC과 UDP** -  HTTP/3는 TCP를 UDP로 바꿨다고 해서 HTTP/2보다 엄청나게 빠르지 않습니다.(정보처리기사에서 많이 나오는 프로토콜 간의 차이인데 UDP는 속도가 빠른 프로토콜입니다.) 대신 QUIC이라는 훨씬 더 발전된 TCP 버전을 재구상하고 구현했습니다. 그리고 이 QUIC은 더 쉽게 배포할 수 있도록 인터넷에서 광범위하게 지원되는 다른 하나의 전송 계층 프로토콜인 UDP 위에서 실행합니다. (TCP를 업그레이드 하는 것은 사실상 매우 어렵기 때문입니다.)\r\n- **BIG CHANGES** - 이전 버전의 HTTP에서는 데이터 통신과 TSL 암호화과정이 분리되어 있었습니다. 따라서 TSL암호화를 진행하다보면 성능이 떨어지는 것이 당연했습니다. 하지만 QUIC은 always-on-TSL 원칙에 맞춰 기본적으로 TSL를 탑재하였습니다. 따라서 연결이 더 빨라지고 보안 성능이 뛰어나다는 장점이 있으나 암호화 오버헤드가 더 큰 문제가 생기는 것, 인터넷 환경이 더 중앙집중화 되는 것 등의 단점이 예상되고 있습니다.\r\n\r\n\r\n\r\n*본문 START!*\r\n\r\n\r\n\r\n## Quick Summary\r\n\r\n약 5년여간의 개발 끝에, 새로운 HTTP/3 프로토콜이 거의 막바지 단계에 이르렀다. 이미 실험적 기능으로 몇몇의 기능은 제공되었음에도 불구하고 HTTP/3의 가용성과 사용은 2021년에 증가할 것으로 기대되고 있습니다. \r\n\r\n> 그래서 HTTP/3가 정확히 뭔데? \r\n> 왜 HTTP/2 가 나온지 얼마 안되서 곧바로 또 나온걸까? \r\n> 우리가 어떻게 쓸 수 있고 어떻게 써야 하는거지? \r\n> 그리고 특히 웹 퍼포먼스를 어떻게 향상시키는거지?\r\n\r\n자 이제 알아봅시다!\r\n\r\n\r\n\r\n## 💀 HTTP/3에 대한 잘못된 기대가 퍼지고 있다!\r\n\r\n이 주제에 대한 몇 가지 블로그 게시물을 읽거나 컨퍼런스 등을 듣고 어느 정도 답을 알고 있다고 생각할 수도 있습니다. \"HTTP/3는 패킷 손실이 있을 때 HTTP/2보다 훨씬 빠르다.\" 또는 \"HTTP/3 연결은 대기 시간이 짧고 설정하는 데 시간이 덜 걸린다.\", 아마도 \"HTTP/3 데이터를 더 빨리 보낼 수 있고 더 많은 리소스를 병렬로 보낼 수 있습니다.\"\r\n\r\n위와 같은 문장과 아티클들은 종종 중대한 기술적 디테일들을 건너 뛰거나 혹은 정확한 문맥 파악을 위한 뉘앙스를 빠뜨리거나 부분적으로 맞는 얘기들이다. 종종 그들은 HTTP/3가 성능면에서 엄청난 혁명인 것처럼 보이게 말하지면 실제로는 그렇게까지 급견한 진화는 아닌(그러나 여전히 유용한!) 진화입니다. 이것은 자칫 위험합니다. 왜냐하면 새로운 프로토콜이 실질적으로 이렇게까지 높은 기대치를 충족시키기지 못해서 살아남지 못할 수도 있기 떄문입니다. 따라서 나는 이것들이 많은 사람들을 결국 실망시켜서 새로온 사람들에게 맹목적인 오해를 아주 오래도록 각인시키게 될까 두렵습니다.\r\n\r\n나는 HTTP/2에서 똑같은 일이 일어나는 것을 보았습니다. 당시 서버 푸시, 병렬 스트림 및 우선 순위 지정과 같은 흥미로운 새 기능으로 놀라운 성능 혁명으로 예고되었습니다. 특히 '리소스 번들링을 중지하고 여러 서버에서 리소스 분할을 중지하고 페이지 로드 프로세스를 크게 간소화할 수 있었습니다. 스위치만 누르면 웹사이트가 마법처럼 50% 빨라집니다!'와 같이 너무 큰 기대를 불러모았죠.\r\n\r\n5년이 지나고 나서, 우리는 서버푸시가 실질적으로 그렇게 작동하지 않는다는 것과 스트림 및 우선 순위 지정은 종종 잘못 구현된다는 것을 압니다. 그리고 결과적으로 어떤 상황에서는 (감소된) 리소스 번들링 및 샤딩조차도 일부 상황에서 여전히 좋은 방법입니다. 마찬가지로 PreloadHint 힌트와 같이 프로토콜 동작을 조정하는 다른 메커니즘에는 종종 숨겨진 깊이와 버그가 포함되어 있어 올바르게 사용하기 어렵습니다. <u>때문에 나는 이런 잘못된 오보를 막아 HTTP/3에 대한 비현실적인 기대감이 널리 퍼지기 전에 막는 것이 중요하다고 판단</u>했습니다.\r\n\r\n이 글에서 나는 **<u>새로운 프로토콜과 특히 그 퍼포먼스적 특징</u>**에 대해 이야기할 것입니다. 그리고 HTTP3의 유망한 새로운 컨셉과 그렇지만 동시에 슬프게도 대부분의 웹 페이지에와 유저에게는 제한된 임팩트만을 줄 것에 대해 이야기하겠습니다. HTTP3는 또한 준비하고 사용하기 까지 꽤 어렵습니다. 때문에 새로운 프로토콜을 이해하기 위해 단단히 준비하세요!\r\n\r\n이 시리즈는 **<u>크게 3가지 파트</u>**로 나뉩니다:\r\n\r\n### 01. HTTP/3 history and core concepts HTTP/3에 관한 역사와 핵심 컨셉\r\n\r\n: 일반적으로 HTTP/3 및 프로토콜을 처음 접하는 사람들을 대상으로 하며 기본 사항들에 대해 설명합니다.\r\n\r\n### 02. HTTP/3 Perfomance features: 퍼포먼스적 특징\r\n\r\n: 더 깊이 있고 기술적인 파트입니다. 기본 사항을 이미 알고 있는 사람들은 1번을 스킵하고 여기부터 시작해도 좋습니다.\r\n\r\n### 03. Practical HTTP/3 deployment options: 실질적 배포 옵션\r\n\r\n: HTTP/3를 직접 배포하고 테스트하는 것과 관련된 문제를 설명합니다. 웹 페이지와 리소스도 변경해야 할 수도 있는데, 그렇게 하는 방법과 그렇게 해야 하는 이유에 대해 자세히 설명합니다.\r\n\r\n이 시리즈는 프로토콜에 대한 깊은 이해가 필요없는 웹 개발자들을 타겟으로 쓰였습니다. 그러나, 충분한 양의 기술적 디테일과 많은 외부링크들을 포함하고 있으므로 advanced readers들 역시 충분히 배울 것이 있을 겁니다.\r\n\r\n\r\n\r\n## ❓ HTTP/3 도대체 왜 필요한건데?\r\n\r\n종종 드는 생각인데, \"HTTP2가 나온 2015 이후에 왜이렇게 빨리 HTTP3가 필요해진거지?\" 이 질문에 대해서 사실 당신이 새로운 HTTP버전이 굳이 필요하지는 않지만 TCP의 업그레이드가 필요하다는 것을 깨닫기 전까지는 이상하다고 느낄것이다. \r\n\r\n(새로운 HTTP로 보기보단 TCP의 업그레이드 버전이라는 관점에서 보면 HTTP3가 2버전 이후 빠르게 다시 나오는 것을 이해할 수 있다는 의미로 해석됩니다.)\r\n\r\nTCP는 HTTP와 같이 다른 프로토콜에 대한 안정성(reliability) 및 순서 전달(in-order delivery)과 같은 중요한 서비스를 제공하는 주요 프로토콜입니다. 이 프로토콜이 사용자 대역폭 사용량을 스마트하고 공정하게 제한하는덕분에 수많은 사람이 인터넷에 동시 접속을해도 사용할 수 있습니다.\r\n\r\n프로토콜의 이러한 \"계층화(Layering)\"는 해당 기능을 쉽게 재사용할 수 있도록 하기 위해 수행됩니다. 상위 계층 프로토콜(예: HTTP)은 하위 계층 프로토콜(예: TLS)이 이미 이를 수행하기 때문에 복잡한 기능(예: 암호화)을 다시 구현할 필요가 없습니다. 또 다른 예로 인터넷의 대부분의 응용 프로그램은 내부적으로 TCP를 사용하여 모든 데이터가 완전히 전송되도록 합니다. 이러한 이유로 TCP는 인터넷에서 가장 널리 사용되고 배포된 프로토콜 중 하나입니다.\r\n\r\n![프로토콜레이어](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6ef36d1e-d91e-43e0-8732-f3e66ba9ea64/protocol-stack-h2-h3.png)\r\n\r\nTCP는 수십 년 동안 웹의 초석이었지만 2000년대 후반에 그 단점(원문 age를 의역함.)을 보여주기 시작했습니다. QUIC라는 이름의 새로운 전송 프로토콜은 TCP와 몇 가지 주요 면에서 충분히 다르기 때문에 그 위에서 직접 HTTP/2를 실행하는 것이 매우 어려울 수 있습니다. 따라서 **HTTP/3 자체는 사람들이 열광하는 대부분의 새로운 기능을 포함하는 새로운 QUIC 프로토콜과 호환되도록 HTTP/2를 비교적 작게 개조한 것**입니다.\r\n\r\nQUIC은 인터넷 초창기부터 존재했던 TCP가 실제로 최대 효율성을 염두에 두고 구축되지 않았기 때문에 발생하는 효율성 때문에 그 가치가 있습니다. 예를 들어 TCP는 새 연결을 설정하기 위해 **`핸드셰이크`**가 필요합니다. 이는 클라이언트와 서버가 모두 존재하고 데이터를 교환할 의사와 능력이 있는지 확인하기 위해 수행됩니다. 그러나 연결에서 다른 작업을 수행하기 전(preflight)에 완료하려면 전체 네트워크 왕복이 필요합니다. 클라이언트와 서버가 지리적으로 멀리 떨어져 있는 경우 각 RTT(왕복 시간)에 100밀리초 이상이 소요되어 눈에 띄는 지연이 발생할 수 있습니다.\r\n\r\n두 번째 예로, TCP는 실제로 동시에 여러 파일을 전송하는 데 사용하더라도 전송하는 모든 데이터를 단일 \"파일\" 또는 바이트 스트림으로 봅니다(예: 인터넷 웹페이지에서 많은 리소스를 다운로드 받는 것). 실제로 이것은 단일 파일의 데이터를 포함하는 TCP 패킷이 손실되면 해당 패킷이 복구될 때까지 다른 모든 파일도 지연됨을 의미합니다. 이를 **<u>헤드 오브 라인(HoL) 차단</u>**이라고 합니다. 이러한 비효율성은 실제로 관리할 수 있지만(그렇지 않으면 TCP를 30년 이상 사용하지 않았을 것입니다) HTTP와 같은 상위 수준 프로토콜에 눈에 띄는 방식으로 영향을 미칩니다.(앞에서 하나만 손상되더라도 뒤에 모두가 지연되는 상태. 정보처리기사에 자주 출제되는 내용이 나오네요 ;;)\r\n\r\n시간이 지남에 따라 이러한 문제 중 일부를 개선하고 새로운 성능 기능을 도입하기 위해 TCP를 발전 및 업그레이드하려고 했습니다. 예를 들어 TCP Fast Open은 상위 계층 프로토콜이 처음부터 데이터를 보낼 수 있도록 하여 핸드셰이크 오버헤드를 제거합니다. 또 다른 노력은 MultiPath TCP라고 합니다. 여기서 아이디어는 휴대 전화에 일반적으로 Wi-Fi와 (4G) 셀룰러 연결이 모두 있다는 것입니다. 그러므로 추가 처리량과 견고성을 위해 두 가지를 동시에 사용하지 않을 이유가 없겠다는 생각이 당연히 들겠죠?\r\n\r\n이러한 TCP 확장을 구현하는 것은 그리 어렵지 않습니다. 그러나 <u>실제로 인터넷 규모로 배포하는 것은 매우 어렵습니다</u>. TCP는 널리 사용되기 때문에 연결된 거의 모든 장치에는 자체 프로토콜 구현이 탑재되어 있습니다. 이러한 구현이 너무 오래되었거나 업데이트가 부족하거나 버그가 있는 경우 확장을 실제로 사용할 수 없습니다. 달리 말하면, 모든 구현은 확장이 유용하려면 확장에 대해 알아야 합니다. 최종 사용자 장치(예: 컴퓨터 또는 웹 서버)에 대해서만 이야기하는 경우 수동으로 비교적 쉽게 업데이트할 수 있기 때문에 이는 큰 문제가 되지 않습니다. 그러나 자체 TCP 코드도 탑재된 클라이언트와 서버 사이에 다른 많은 장치가 있습니다(예: 방화벽, 로드 밸런서, 라우터, 캐싱 서버, 프록시 등). <u>이러한 미들박스는 업데이트하기가 더 어렵고 때로는 더 엄격합니다</u>. 예를 들어 장치가 방화벽인 경우 (알 수 없는) 확장을 포함하는 모든 트래픽을 차단하도록 구성될 수 있습니다. 실제로, 엄청난 수의 활성 미들박스가 새로운 확장에 대해 더 이상 유지되지 않는 TCP에 대한 특정 가정을 하는 것으로 나타났습니다. <u>결과적으로 충분한 (미들박스) TCP 구현이 실제로 대규모로 확장을 사용하도록 업데이트되기까지는 몇 년에서 10년 이상이 걸릴 수 있습니다. TCP를 진화시키는 것은 사실상 불가능해졌다고 말할 수 있습니다.</u>\r\n\r\n결과적으로 이러한 문제를 해결하려면 직접적인 업그레이드가 아니라 TCP에 대한 대체 프로토콜이 필요하다는 것이 분명해졌습니다. 그러나 TCP 기능과 다양한 구현의 복잡성으로 인해 처음부터 새롭고 더 나은 것을 만드는 것은 기념비적인 일이 될 것입니다. 그래서 2010년대 초반에 이 작업을 연기하기로 결정했습니다. 결국 TCP뿐만 아니라 HTTP/1.1에도 문제가 있었습니다. 우리는 작업을 분할하고 먼저 HTTP/1.1을 \"수정\"하여 현재 HTTP/2가 되도록 선택했습니다. 이 작업이 완료되면 현재 QUIC인 TCP를 대체하는 작업을 시작할 수 있습니다. 원래 QUIC 위에서 HTTP/2를 직접 실행할 수 있기를 희망했지만 주로 기능 중복으로 인해 실제로는 구현이 너무 비효율적이었습니다. 대신 <u>HTTP/2는 QUIC와 호환되도록 몇 가지 주요 영역에서 조정</u>되었습니다. 이 조정된 버전은 주로 마케팅 이유와 명확성을 위해 HTTP/3(QUIC 대신 HTTP/2)으로 명명되었습니다. 따라서 <u>HTTP/1.1과 HTTP/2의 차이점은 HTTP/2와 HTTP/3의 차이점보다 훨씬 더 중요합니다.</u>\r\n\r\n\r\n\r\n## :bulb: What Is QUIC?\r\n\r\n당신은 아마 이게 왜 중요한지 궁금할 것입니다. 이러한 기능이 HTTP/3 에 있는지 QUIC에 있는지 그런걸 누가 신경 쓰나요? QUIC은 TCP와 마찬가지로 HTTP 및 웹 페이지 로딩 외에도 많은 사용 사례에 사용될 수 있고 앞으로도 사용될 일반 전송 프로토콜이기 때문에 이것이 중요하다고 생각합니다. 예를 들어 DNS, SSH, SMB, RTP 등은 모두 QUIC를 통해 실행할 수 있습니다. 따라서 내가 읽은 HTTP/3에 대한 대부분의 오해가 여기에 있기 때문에 QUIC에 대해 좀 더 자세히 살펴보겠습니다.\r\n\r\n아마 QUIC가 *UDP(User Datagram Protocol)*라는 또 다른 프로토콜 위에서 실행된다는 것을 들어보셨을 것입니다. 이것은 사실이지만 많은 사람들이 주장하는 성능 이유는 아닙니다. 이상적으로 QUIC는 위에서 공유한 이미지에 표시된 프로토콜 스택의 IP 위에서 직접 실행되는 완전히 독립적인 새로운 전송 프로토콜이었을 것입니다. 그러나 그렇게 하면 <u>TCP를 발전시키려고 할 때 직면했던 것과 동일한 문제가 발생했을 것</u>(미들웨어 problems)입니다. QUIC를 인식하고 허용하려면 인터넷의 모든 장치를 먼저 업데이트해야 합니다. 운이 좋게도 **<u>인터넷에서 광범위하게 지원되는 다른 하나의 전송 계층 프로토콜인 UDP 위에 QUIC를 구축</u>**할 수 있습니다.\r\n\r\n많은 출처에서 HTTP/3가 성능 때문에 UDP 위에 구축되었다고 주장합니다. HTTP/3는 UDP와 마찬가지로 연결을 설정하지 않고 패킷 재전송을 기다리지 않기 때문에 더 빠르다고 합니다. 하지만 이러한 주장은 잘못된 것입니다. 위에서 말했듯이 **<u>UDP는 QUIC에서 사용</u>**되며, HTTP/3은 주로 인터넷의 (거의) 모든 장치에 이미 알려져 있고 구현되기 때문에 배포가 더 쉬워지기를 희망하기 때문입니다. UDP 위에 얹어진 QUIC은 기본적으로 TCP의 강력하고 대중적인(그러나 다소 느린) 거의 모든 기능을 다시 구현합니다. **QUIC는 수신된 패킷과 재전송에 대한 승인을 사용하여 손실된 패킷이 여전히 도착하도록 하는 절대적으로 신뢰**할 수 있습니다. QUIC는 여전히 연결을 설정하고 **<u>매우 복잡한 핸드셰이크를 사용</u>**합니다. \r\n\r\n마지막으로 QUIC는 발신자가 네트워크나 수신자에 과부하를 주지 않도록 하는, 소위 흐름 제어 및 혼잡 제어 메커니즘을 사용하지만, 이로 인해 원시 UDP로 할 수 있는 것보다 TCP를 느리게 합니다. 핵심은 QUIC이 이러한 기능을 TCP보다 더 똑똑하고 더 성능이 좋은 방식으로 구현한다는 것입니다. 수십 년의 배포 경험과 TCP의 모범 사례를 몇 가지 핵심 새 기능과 결합합니다. 이 기사의 뒷부분에서 이러한 기능에 대해 더 자세히 설명합니다.\r\n\r\n\r\n\r\n## The Big Changes\r\n\r\n그렇다면 QUIC은 TCP보다 정확히 어떤 점이 얼마나 향상된다는 겁니까? 뭐가 그렇게 다른건가요? 시리즈의 다음 부분에서 자세히 논의할 QUIC(0-RTT 데이터, 연결 마이그레이션, 패킷 손실 및 느린 네트워크에 대한 복원력 향상)에는 몇 가지 새로운 구체적인 기능과 기회가 있습니다. 그러나 이러한 모든 새로운 사항은 기본적으로 4가지 주요 변경 사항으로 요약됩니다.\r\n\r\n1. QUIC deeply integrates with TLS. QUIC는 TLS와 긴밀하게 통합됩니다.\r\n2. QUIC supports multiple *independent* byte streams. QUIC는 여러 개의 독립적인 바이트 스트림을 지원합니다.\r\n3. QUIC uses connection IDs. QUIC는 연결 ID를 사용합니다.\r\n4. QUIC uses frames. QUIC는 프레임을 사용합니다.\r\n\r\n좀 더 자세히 알아보자.\r\n\r\n### TLS 없이 QUIC도 없다\r\n\r\n언급했듯이 TLS는 인터넷을 통해 전송되는 데이터의 보안 및 암호화를 담당합니다. HTTPS를 사용하는 경우 일반 텍스트 HTTP 데이터는 TCP로 전송되기 전에 먼저 TLS로 암호화됩니다.\r\n\r\n![TSL, TCP and QUIC](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f2240cb4-eb62-4054-ad19-0e72190e0a4f/connection-setup.png)\r\n\r\n인터넷 초창기 시절에는 트래픽을 암호화처리 비용이 많이 들었습니다. 또한 모든 유스 케이스에 반드시 필요한 것으로 여겨지지 않았습니다. 역사적으로 TLS는 TCP 위에서 선택적으로 사용할 수 있는 완전히 별도의 프로토콜이었습니다. 이것이 HTTP(TLS 없음)와 HTTPS(TLS 포함)를 구분하는 이유입니다. 시간이 지나면서 인터넷 보안에 대한 우리의 태도는 변화했습니다. \"보안이 된 것(HTTPS)가 기본이다\"라고 말이죠. 따라서 HTTP/2는 이론적으로 TSL없이 TCP를 통해 직접 실행할 수 있지만 실제로 이 모드를 지원하는 웹 브라우저는 없습니다. 어떤 면에서 브라우저 제조업체는 성능을 희생하면서까지 보안상의 안전을 위해 일부러 절충안을 택했습니다.\r\n\r\nalways-on TSL로의 분명한 진보 덕분에 QUIC의 설계자(designer)가 이 트렌드를 한 단계 더 발전시키기로 결정한 것은 어찌보면 당연한 것일지도 모릅니다. 단순히 HTTP/3에 대한 일반 텍스트 모드를 정의하지 않는 대신 QUIC 자체에 암호화를 깊숙이 뿌리기로 선택했습니다. QUIC의 첫 번째 Google 전용 버전은 이를 위해 맞춤 설정을 사용했지만 표준화된 QUIC는 기존 TLS 1.3 자체를 직접 사용합니다. 이를 위해 이전 이미지에서 볼 수 있듯이 <u>프로토콜 스택의 프로토콜 간의 일반적인 명확한 분리를 깨뜨립니다</u>. TLS 1.3은 여전히 TCP 위에서 독립적으로 실행할 수 있지만 QUIC는 대신 TLS 1.3을 캡슐화합니다. <u>달리 말하면 TLS 없이 QUIC를 사용할 방법이 없습니다. QUIC(및 확장하여 HTTP/3)는 항상 완전히 암호화됩니다</u>. 또한 QUIC는 거의 모든 패킷 헤더 필드도 암호화합니다. 전송 계층 정보(예: TCP에 대해 암호화되지 않은 패킷 번호)는 더 이상 QUIC의 중개자가 읽을 수 없습니다(일부 패킷 헤더 플래그도 암호화됨).\r\n\r\n![*Unlike TCP + TLS, QUIC also encrypts its transport-layer meta data in the packet header and payload.*](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fbf86b42-8f20-4b27-aea5-f1fc164b2683/tcp-vs-quic-packetization.png)\r\n\r\n이 모든 것을 위해 QUIC는 먼저 수학적 암호화 매개변수를 설정하기 위해 <u>TCP를 사용하는 것처럼 TLS 1.3 핸드셰이크를 사용</u>합니다. 그러나 이후에는 QUIC가 패킷 자체를 인수하여 암호화하는 반면 TLS-over-TCP에서는 TLS가 자체 암호화를 수행합니다. 이 겉보기에 작은 차이는 더 낮은 프로토콜 계층에서 시행되는 상시 작동 암호화에 대한 근본적인 개념적 변화를 나타냅니다.\r\n\r\n이 방법은 QUIC에 **<u>몇 가지 이득을 제공</u>**합니다.\r\n\r\n###  이점1. QUIC is more secure for its users. 유저는 attacker와 도청자로부터 더욱 안전합니다.\r\n\r\n일반 텍스트 QUIC를 실행할 수 있는 방법이 없으므로 공격자와 도청자가 들을 수 있는 옵션도 적습니다.\r\n\r\n### 이점2. QUIC’s connection set-up is faster. 연결이 더 빠릅니다.\r\n\r\nTLS-over-TCP 방식에서는 두 프로토콜 모두에서 분리된 핸드셰이크가 필요했다면 QUIC은 전송과 암호화 핸드셰이크를 하나로 결합하여 왕복 시 코스트를 절약할 수 있습니다.\r\n\r\n### 이점3. QUIC can evolve more easily. 새롭게 진화하기 쉽다.\r\n\r\n완전히 암호화 되어있기 때문에 네트워크의 미들박스는 더 이상 TCP에서와 같이 내부 작동을 관찰하고 해석할 수 없습니다. 결과적으로 업데이트에 실패했기 때문에 최신 버전의 QUIC에서 더 이상 중단될 수 없습니다. 향후 QUIC에 새로운 기능을 추가하려면 모든 미들박스 대신 최종 장치만 업데이트하면 됩니다.\r\n\r\n하지만 동시에 **<u>잠재적 DOWNSIDE도 예상</u>**됩니다.\r\n\r\n### 단점1. Many networks will hesitate to allow QUIC. 다수의 네트워크에서 QUIC도입을 꺼릴 것이다.\r\n\r\n원치 않는 트래픽을 감지하는 것이 더 어려워지기 때문에 <u>회사는 방화벽에서 이를 차단하려고 할 수 있습니다</u>. 평균 지연 및 패킷 손실 비율과 같은 메트릭을 더 이상 쉽게 사용할 수 없어 <u>문제를 감지하고 진단하기가 더 어려워지기 때문에 ISP 및 중간 네트워크가 이를 차단할 수 있습니다.</u>\r\n\r\n### 단점2. QUIC has a higher encryption overhead. 암호화 오버헤드가 더 크다.\r\n\r\nQUIC는 TLS로 각 개별 패킷을 암호화하는 반면 TLS-over-TCP는 동시에 여러 패킷을 암호화할 수 있습니다.\r\n\r\n### 단점 3. QUIC makes the web more centralized. QUIC이 웹을 더 중앙집중화 시킬 것이다.\r\n\r\n첫째로 내가 자주 접한 불만은 \"QUIC은 다른 사람과 데이터를 공유하지 않고 <u>데이터에 대한 전체 액세스 권한을 부여</u>하기 때문에 Google에서 푸시하고 있습니다.\"와 같은 것입니다. QUIC는 TLS-over-TCP(QUIC는 현상을 유지한다)보다 외부 관찰자로부터 더 많은(또는 적게!) 사용자 수준 정보(예: 방문 중인 URL)를 숨기지 않습니다.\r\n\r\n둘째로, Google이 QUIC 프로젝트를 시작했지만 오늘 우리가 이야기하는 최종 프로토콜은 IETF(Internet Engineering Task Force)의 훨씬 더 광범위한 팀에서 설계했습니다. IETF의 QUIC는 기술적으로 Google의 QUIC와 매우 다릅니다. 그러나 IETF의 사람들은 대부분 Google 및 Facebook과 같은 대기업과 Cloudflare 및 Fastly와 같은 CDN에서 온 사람들입니다. QUIC의 복잡성으로 인해, 예를 들어 실제로 HTTP/3을 올바르고 성능적으로 배포하는 데 필요한 노하우를 가진 회사는 주로 앞서 언급한 회사들일 것입니다. 이것은 아마도 이러한 회사들로의 더 많은 <u>중앙 집중화</u>로 이어질 것이 우려되는 사항입니다.\r\n\r\n\r\n\r\n---\r\n\r\n여기까지도 내용이 많은데 이게 절반 정도입니다... \r\n\r\n나머지 내용도 곧 번역해서 업로드하겠습니다..!\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 5720:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: \"처음부터 끝까지 상세히 알아보자 HTTP3에 대한 A TO Z 2편\"\r\ndate: \"2021.08.22\"\r\ntags: \r\n  - HTTP3\r\n  - 프로토콜\r\n---\r\n\r\n# (번역) HTTP/3 FROM A To Z: Core Concepts (Part 1) by Robin Marx\r\n\r\n원문링크: [https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)\r\n\r\n이 글은 *Robin Marx*의 [**HTTP/3 FROM A To Z: Core Concepts (Part1)**](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)을 두 포스트로 나눠 번역하였습니다.\r\n\r\n앞부분 첫 번째 포스트는 [처음부터 끝까지 상세히 알아보자! - HTTP/3에 대한 A TO Z (1)]()에서 보실 수 있습니다.\r\n\r\n\r\n\r\n*2부 START!*\r\n\r\n\r\n\r\n## :bulb: QUIC은 다중 바이트 스트림을 구분할 수 있습니다\r\n\r\nHTTP/1.1의 리소스 로드 프로세스는 매우 간단합니다. 각 파일은 자체 TCP가 연결되고 파일 전체가 다운로드 됩니다. 예를 들어, A, B, C 파일이 있다면 우리는 3개의 TCP연결이 있습니다 (HTTP/1.1에서). 실제로 브라우저는 사용할 수 있는 동시 연결 수(병렬로 다운로드할 수 있는 파일 수)에 대한 제한을 부과합니다 (일반적으로 페이지 로드당 약 6~30개). 그런 다음 이전 파일이 완전히 전송되면 연결을 다시 사용하여 새 파일을 다운로드합니다. 이러한 제한은 결국 30개 이상의 리소스를 로드하는 최신 페이지의 웹 성능을 방해하기 시작했습니다.\r\n\r\n이러한 상황을 개선하는 것이 HTTP/2의 주요 목표 중 하나였습니다. 프로토콜은 더 이상 각각의 모든 파일에 대해 새 TCP 연결을 열지 않고 단일 TCP 연결을 통해 다른 리소스를 다운로드하여 이를 수행합니다. 이것은 \"멀티플렉싱\"이라는 여러개 바이트 스트림에 의해 수행됩니다. 그것은 우리가 그것을 전송할 때 다른 파일의 데이터를 혼합하는 멋진 방법을 뜻합니다. 세 가지 예제 파일의 경우 단일 TCP 연결을 통해 들어오는 데이터는 AABBCCAABBCC처럼 보일 수 있습니다(다른 많은 순서 체계가 가능하지만). 이것은 충분히 간단해 보이고 실제로 아주 잘 작동하여 HTTP/2를 일반적으로 HTTP/1.1만큼 빠르거나 약간 빠르지만 오버헤드는 훨씬 적습니다.\r\n\r\n이미지를 통해 차이점을 확인해봅시다.\r\n\r\n![http1.1과 http2의 차이점](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/900ea8f0-3782-4505-b1b6-99ca2954bbce/multiplexing-basic.png)\r\n\r\n<u>그러나, TCP 쪽에 문제가 있습니다.</u> 알다시피 TCP는 오래된 프로토콜이고 웹 페이지를 로딩하기 위해 만들어진 것이 아니기 때문에 A, B, C가 무엇인지 알지 못합니다. TCP는 내부적으로 그냥 단순한 하나의 파일 X를 전송하고 있다고 생각하고 있어 실제로 HTTP 수준에서 AABBCCAABBCC로 전달되는 것인지 XXXXXXXXXXXX로 보이는 것인지에 대해 신경 쓰지 않습니다. 대부분의 경우에서는 이게 큰 문제가 되지는 않습니다. <u>하지만 네트워크 상에서 패킷로스가 있을 경우에는 문제가 됩니다.</u>\r\n\r\n모든 데이터 전송은 문제없었지만 3번째 패킷(file B의 첫 데이터를 담고 있는)이 손실되었다고 생각해봅시다. TCP는 이 손실을 메꾸기 위해 손실 데이터의 새로운 복사본을 재전송합니다. 그러나 이 재전송은 도착까지 시간이 꽤 걸립니다. 아마 이글을 읽는 독자분께서는 A랑 C파일 LOSS만 없었다면 '그게 뭐 대수라고', '그냥 다시 B 파일을 재전송하면 되는거 아니냐' 생각할 수도 있습니다. \r\n\r\n하지만 안타깝게도 재전송 로직은 TCP 계층에서 발생하고 앞서 언급했듯이 <u>TCP는 A, B, C에 대해 알지 못하기 때문에</u> 그렇지 않습니다!(-> 문제가 됩니다!) <u>대신 TCP는 단일 X 파일의 일부가 손실되었다고 생각</u>하므로 구멍이 채워질 때까지 X의 나머지 데이터가 처리되지 않도록 해야 한다고 생각합니다. 달리 말하면, HTTP/2 수준에서 우리는 이미 A와 C를 처리할 수 있다는 것을 알고 있지만 TCP는 이것을 알지 못하므로 잠재적인 것보다 일 처리가 더 느립니다. 이러한 문제를 **HOL(Head of Line) Blocking**이라고 합니다. HOL에 대해 더 자세히 알고 싶으면 [Head-of-line example](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/) 에서 알아보세요.\r\n\r\n<u>전송 계층에서 HoL 차단을 해결하는 것은 QUIC의 주요 목표 중 하나였습니다.</u> TCP와 달리 QUIC는 여러 개의 독립적인 바이트 스트림을 다중화하고 있음을 잘 알고 있습니다. 물론 CSS, JavaScript 및 이미지를 전송하고 있다는 사실까지는 알지 못합니다만 스트림이 분리되어 있다는 것을 알고 있습니다. 이와 같이 QUIC는 스트림별로 패킷 손실 감지와 복구 논리를 수행할 수 있습니다. 위의 시나리오에서는 스트림 B에 대한 데이터만 보류하고 TCP와 달리 A 및 C에 대한 모든 데이터를 가능한 한 빨리 HTTP/3 계층에 전달합니다. 이렇게 되면 이론적으로 퍼포먼스 향상을 기대할 수 있습니다. \r\n\r\n![HOL](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7981cb82-395c-4484-8873-46fd92804b4d/hol-blocking-basic.png)\r\n\r\n\r\n\r\n## ❓ QUIC은 CONNECTION MIGRATION을 지원합니다.\r\n\r\nQUIC의 세 번째 주요 개선 사항은 연결이 더 오래 유지될 수 있다는 사실입니다. 따라서 문제는 이러한 패킷이 올바른 목적지에 어떻게 도착하는가 하는 것입니다. \r\n\r\n인터넷에서 IP 주소는 두 개의 고유한 시스템 간에 패킷을 라우팅하는 데 사용됩니다. 그러나 당신의 전화기와 서버에 대한 IP 두 가지만로는 충분하지 않습니다.  왜냐하면 당신과 서버 모두 양쪽 끝에서 동시에 여러 네트워크 프로그램을 실행할 수 있기를 희망하기 때문입니다. 이것이 각각의 개별 연결마다 양쪽 끝점에서 <u>포트 번호가 할당되어 연결(Connection)과 해당 연결이 속한 응용 프로그램(Application)을 구별하는 이유</u>입니다. 서버 응용 프로그램은 일반적으로 기능에 따라 고정 포트 번호(예: HTTP(S)의 경우 포트 80 및 443, DNS의 경우 포트 53)를 갖는 반면 클라이언트는 일반적으로 각 연결에 대해 포트 번호를 (반)임의로 선택합니다.\r\n\r\n따라서 머신과 애플리케이션 간에 고유한 연결을 정의하려면 **(1)클라이언트 IP 주소** + **(2)클라이언트 포트** + **(3)서버 IP 주소** + **(4)서버 포트**의 <u>4가지가 필요</u>합니다.\r\n\r\nTCP에서 연결은 4-튜플로만 식별됩니다. 따라서 이 네 가지 매개변수 중 하나만 변경되면 연결이 무효화되고 다시 설정해야 합니다(새 핸드셰이크 포함). 이를 이해하려면 `주차장 문제 예시`를 활용하면 좋습니다. 한 번 상상해 보세요. 현재 건물 안에서 Wi-Fi로 스마트폰을 사용하고 있습니다. 따라서 이 Wi-Fi 네트워크에 IP 주소가 있습니다. 이제 외부로 이동하면 휴대전화가 셀룰러 4G 네트워크로 전환될 것입니다. 이것은 새로운 네트워크이기 때문에 완전히 새로운 IP 주소를 갖게 됩니다. 이제 서버는 이전에 본 적이 없는 클라이언트 IP에서 들어오는 TCP 패킷을 보게 됩니다(물론 두 포트와 서버 IP는 동일하게 유지될 수 있지만).\r\n\r\n![wifi에서 셀룰러로의 통신전환](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9413b221-47e9-427b-b958-b0e62fe7f681/1-migration-tcp.png)\r\n\r\n그렇다면 서버는 새로운 IP패킷이 이 기존의 \"연결\"에 속한다는 것을 어떻게 알 수 있을까요? 이러한 패킷이 동일한(임의) 클라이언트 포트(쉽게 발생할 수 있음)를 선택한 셀룰러 네트워크의 다른 클라이언트로부터의 새 연결에 속하지 않는다는 것을 어떻게 알 수 있을까요? 안타깝게도, TCP로는 이것을 알 수 없습니다. TCP는 우리가 셀룰러 네트워크와 스마트폰을 꿈꾸기도 전에 발명되었기 때문에 클<u>라이언트가 IP가 변경되었음을 서버에 알릴 수 있는 메커니즘이 없습니다.</u> 기존 4-튜플에 전송된 TCP 재설정 또는 fin 명령이 더 이상 클라이언트에 도달하지도 않기 때문에 연결을 \"닫을\" 방법조차 없습니다. 따라서 실제로 모든 네트워크 변경은 기존 TCP 연결을 더 이상 사용할 수 없음을 의미합니다. 새 연결을 설정하려면 새 TCP(및 TLS) 핸드셰이크를 실행해야 하며 응용 프로그램 수준 프로토콜에 따라 진행 중인 작업을 다시 시작해야 합니다. 예를 들어 HTTP를 통해 대용량 파일을 다운로드하는 경우 해당 파일을 처음부터 다시 요청해야 할 수 있습니다. 또 다른 예로는 네트워크를 전환할 때 짧은 정전이 발생할 수 있는 라이브 화상 회의가 있습니다. 하지만 위와 같은 상황에서 TCP 연결을 다시 시작하면 심각한 영향을 미칠 수 있습니다. **<u>이 문제를 해결하기 위해 QUIC에서는 연결 식별자(CID)라는 새로운 개념을 도입</u>**했습니다. 각 연결에는 두 끝점 사이에서 고유하게 식별하는 4-튜플 위에 다른 번호가 할당됩니다. 결정적으로 <u>이 CID는 QUIC 자체의 전송 계층에서 정의되기 때문에 네트워크 간에 이동할 때 변경되지 않습니다</u>!  아래 이미지를 통해 네트워크 원리를 확인해보세요. 이를 가능하게 하기 위해 CID는 모든 QUIC 패킷의 전면에 포함됩니다.\r\n\r\n![QUIC과 CID](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e6ae0ec1-3b85-49a9-9707-ee21ce5b02b3/2-migration-single-cid.png)\r\n\r\n<u>QUIC의 이 설정을 사용하면 4-튜플의 항목 중 하나가 변경되더라도 QUIC 서버와 클라이언트는 CID만 보고 동일한 이전 연결임을 알고 계속 사용할 수 있습니다.</u> 새로운 핸드셰이크가 필요하지 않으며 다운로드 상태를 그대로 유지할 수 있습니다. 이 기능을 일반적으로 연결 마이그레이션이라고 합니다. \r\n\r\n물론 CID도 극복해야 할 다른 과제가 있습니다. 예를 들어, 실제로 하나의 CID만 사용한다면 해커와 도청자가 네트워크를 통해 사용자를 추적하고 확장하여 그들의 (대략적인) 물리적 위치를 추론하는 것이 매우 쉬워질 것입니다. 이러한 프라이버시 악용을 방지하기 위해 QUIC은 새 네트워크가 사용될 때마다 CID를 변경합니다.\r\n\r\n??? 이 얘기는 아마도 이 글을 읽는 독자분들을 혼란스럽게 할 수 있습니다. 방금까지 CID가 네트워크에서 동일해야 한다고 말하지 않았었나요? 흠... 글쎄요, 그것은 지나친 단순화였습니다. 실제로 내부적으로 발생하는 것은 클라이언트와 서버가 모두 동일한 개념적 \"연결\"에 매핑되는 (임의로 생성된) CID의 공통 목록에 동의한다는 것입니다. 예를 들어 둘 다 실제로 CID K, C 및 D가 모두 연결 X에 매핑된다는 것을 알고 있습니다. 따라서 클라이언트는 Wi-Fi에서 패킷에 K로 태그를 지정할 수 있지만 4G에서는 C를 사용하도록 전환할 수 있습니다. 이러한 공통 목록은 QUIC에서 완전히 암호화되어 협상되므로 잠재적인 공격자는 K와 C가 실제로 X인지 알지 못하지만 클라이언트와 서버는 이를 알고 연결을 계속 유지할 수 있습니다. (wifi에서 셀룰러로 전환될 때 똑같은 CID 안에 여러개의 마커를 두고 해당 마커를 포함하기만 하면 같은 사용자라고 식별. 다만 외부에서는 이것을 정정확히 구분할 수 없어 해커로부터 좀 더 안전.)\r\n\r\n![QUIC과 CID2](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/715f189e-4ae6-4c4c-8db8-9fd8170049d8/3-migration-multi-cid.png)\r\n\r\n라이언트와 서버가 스스로 선택한 CID 목록이 다르기 때문에(포트 번호가 다른 것과 유사) 훨씬 더 복잡해집니다. 이는 주로 대규모 서버 설정에서 라우팅 및 로드 밸런싱을 지원하기 위한 것입니다.\r\n\r\n\r\n\r\n## :bulb: QUIC은 유연하고 진화할 수 있습니다.\r\n\r\nQUIC의 마지막 측면은 진화하기 쉽도록 특별히 제작되었다는 것입니다. 이것은 여러 가지 방법으로 수행됩니다. 먼저 논의한 바와 같이 QUIC가 거의 완전히 암호화되어 있다는 사실은 최신 버전의 QUIC를 배포하려는 경우 모든 미들박스가 아니라 끝점(클라이언트 및 서버)만 업데이트하면 된다는 것을 의미합니다. 그것은 여전히 시간이 걸리지 만 일반적으로 몇 년이 아닌 몇 개월 정도입니다. \r\n\r\n둘째, TCP와 달리 QUIC는 단일 고정 패킷 헤더를 사용하여 모든 프로토콜 메타 데이터를 전송하지 않습니다. 대신 QUIC는 패킷 헤더가 짧고 패킷 페이로드 내부에 다양한 \"프레임\"(예: 소형 특수 패킷)을 사용하여 추가 정보를 전달합니다. 예를 들어, 아래 이미지와 같이 ACK 프레임(승인용), NEW_CONNECTION_ID 프레임(연결 마이그레이션 설정을 돕기 위해) 및 STREAM 프레임(데이터 전달용)이 있습니다.\r\n\r\n이것은 모든 패킷이 가능한 모든 메타 데이터를 전달하는 것은 아니기 때문에 주로 최적화로 수행됩니다. 그러나 프레임 사용의 매우 유용한 부작용은 새로운 프레임 유형을 QUIC에 대한 확장으로 정의하는 것이 미래에 매우 쉬울 것이라는 점입니다. 예를 들어 매우 중요한 프레임은 DATAGRAM 프레임으로, 암호화된 QUIC 연결을 통해 신뢰할 수 없는 데이터를 전송할 수 있습니다.\r\n\r\n![QUIC evlolve1](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/88c76a7a-2752-4e5b-a829-290cd4951af3/quic-framing.png)\r\n\r\n\r\n\r\n셋째, QUIC는 사용자 지정 TLS 확장을 사용하여 소위 전송 매개변수라 불리는 것을 전달합니다. 이를 통해 클라이언트와 서버는 QUIC 연결을 위한 구성을 선택할 수 있습니다. 이것은 어떤 기능이 활성화되었는지(예: 연결 마이그레이션 허용 여부, 지원되는 확장 등) 협상하고 일부 메커니즘(예: 지원되는 최대 패킷 크기, 흐름 제어 제한)에 대해 가장 합리적인 기본값을 전달할 수 있다는 것을 의미합니다. QUIC 표준은 이들의 긴 목록을 정의하지만 확장을 통해 새 항목을 정의할 수도 있으므로 프로토콜을 더욱 유연하게 만들 수 있습니다.\r\n\r\n마지막으로, QUIC 자체의 실제 요구 사항은 아니지만 대부분의 구현은 현재 \"사용자 공간\"에서 수행됩니다(일반적으로 \"커널 공간\"에서 수행되는 TCP와 반대). 이는 주로 TCP보다 QUIC 구현 변형 및 확장을 실험하고 배포하는 것이 훨씬 쉽다는 것을 의미합니다.\r\n\r\n\r\n\r\n## Conclusion\r\n이 부분에서 배운 내용을 요약해 보겠습니다. 우리는 주로 어디에나 존재하는 TCP 프로토콜과 오늘날의 많은 문제가 알려지지 않은 시기에 HTTP프로토콜이 어떻게 설계되었는지에 대해 이야기했습니다. 하지만 TCP를 발전시키려고 시도하면서 거의 모든 장치에 업데이트해야 하는 자체 TCP 구현이 탑재되어 있기 때문에 TCP자체를 발전시키는 것이 실제로 어렵다는 것이 분명해졌습니다.\r\n\r\nTCP를 계속 개선하면서 이 문제를 우회하기 위해 <u>새로운 QUIC 프로토콜</u>(실제로는 TCP 2.0)을 만들었습니다. <u>QUIC를 더 쉽게 배포할 수 있도록 UDP 프로토콜(대부분의 네트워크 장치도 지원함) 위에서 실행되며 향후 발전할 수 있도록 기본적으로 거의 완전히 암호화되며 유연한 프레이밍을 사용</u>합니다.\r\n\r\n이 외에도 <u>QUIC는 핸드셰이크, 안정성 및 혼잡 제어와 같은 알려진 TCP 기능을 대부분 따라</u>합니다. 암호화 및 프레이밍 외에 두 가지 주요 변경 사항은 다중 바이트 스트림 인식과 연결 ID 도입입니다. 그러나 이러한 변경 사항은 QUIC 위에서 HTTP/2를 직접 실행하는 것을 방지하기에 충분하여 HTTP/3(실제로는 QUIC을 통한 HTTP/2임)을 만들어야 했습니다.\r\n\r\n**QUIC의 새로운 접근 방식은 여러 가지 성능 향상을 제공**하지만 잠재적인 이점은 QUIC 및 HTTP/3에 대한 기사에서 일반적으로 전달되는 것보다 더 미묘한 차이가 있습니다. 이제 기본 사항을 알았으므로 이 시리즈의 다음 부분에서 이러한 뉘앙스를 더 깊이 논의할 수 있습니다. 계속 지켜봐 주세요!\r\n\r\n\r\n\r\n---\r\n\r\n긴 글 읽어주셔서 감사합니다.\r\n\r\n");

/***/ }),

/***/ 4556:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"좋은 개발자란 무엇일까\"\ndate: \"2022.08.15\"\ntags:\n- 회고\n---\n\n\n\n\n\n여태까지는 뭔가 \"***기술***\" 블로그라는 것에 갇혀서 현재 블로그에는 내 생각보다는 다른 사람들이 들어와서 참고할 만한 \"기술\"에 관한 것만 포스팅을 해왔습니다.\n\n하지만 향로님의 [2021년 회고](https://jojoldu.tistory.com/626?utm_source=pocket_mylist) 와 같이 좋은 글을 읽으면서 내가 현재 느끼고 있는 생각이나 감정을 남겨보는 것도 좋겠다고 생각해서 처음으로 그러한 내용을 담아보려 합니다.\n\n\n\n# 좋은 개발자란 무엇일까\n\n막연히 좋은 개발자가 되고 싶었습니다. 그러다 문득 ***'좋은 개발자란 무엇인가?'*** 에 대한 정의를 스스로 한 번 내려봐야 겠다고 생각하였고 같은 회사 팀원분과 이런 저런 이야기를 나눴습니다. 잊기 전에 그 내용을 한 번 정리해봤습니다.\n\n내용은 크게 두 가지로 분류해봤습니다. \n\n첫 번째는 **개발 능력,** \n두 번째는 **협업 능력**\n\n인데 그냥 `개발 능력`과 `개발 외 능력` 으로 볼 수 있습니다.\n\n\n\n## A. 개발능력\n\n### 1. 깊이 탐구하는 능력(a.k.a DFS)\n\n제 스스로에 대한 반성이기도 하지만 저 뿐만 아니라 꽤나 많은 개발자들 역시 어떤 것을 공부해 나갈 때, 피상적인 레벨에서 그치는 경우가 종종 있습니다. \n\n예를 들어 프론트엔드 개발자의 면접 단골 질문인 '브라우저는 어떻게 동작하는가?'에 대해서 알고 싶다면 해당 내용을 구글링해서 정리된 내용을 보고 기계적으로 외우거나 이해하는 거죠.\n\n- DNS로 부터 서버 IP 받아오고, HTML 파싱하고, CSSOM, 렌더트리, Reflow, Repaint ...\n\n부끄럽지만 저는 항상 이 수준에 머물렀었던 것 같습니다.\n\n'그러다가 우리가 자주 쓰는 리액트는 이 과정 중에 언제 붙는걸까?' 라는 질문을 받게 되었고 그와 관련해서 리서치를 다시 시작해보는 중 아래와 같은 글을 만나게 되었습니다.\n\n[왜 virtual dom이 더 좋은가?](https://velog.io/@yesbb/virtual-dom%EC%9D%98-%EC%84%B1%EB%8A%A5%EC%9D%B4-%EB%8D%94-%EC%A2%8B%EC%9D%80%EC%9D%B4%EC%9C%A0) (:bulb: 강추!)\n\n위 아티클을 읽어보면 정말 리액트의 가상돔에 대한 아주 깊은 레벨까지의 리서치, 그리고 그것을 정리해낸 내용을 볼 수 있습니다. 처음 이 글을 읽고 좋은 의미에서의 충격을 좀 받았습니다. **'여태까지 내가 한 것은 공부가 아니었구나'**를 일깨워 준 그런 느낌까지 받았습니다.\n\n이후 이렇게 하나의 주제에 대해서 깊은 레벨까지 파고들어서 학습을 해내는 능력이 개발자의 성장에 정말 중요하다는 것을 깨닫게 되었습니다. 그리고 이 능력이 뭔가 깊이우선탐색(DFS)과 동작원리가 유사한 것 같다고 느껴 제 맘대로 `깊이우선탐색(DFS)능력이 있는 개발자` 라고 명명해봤습니다.\n\n\n\n### 2. 넓게 학습하는 능력\n\n개발 영역에서의 기술 발전 속도는 정말 빠릅니다. 스스로 '한 가지를 이해했다!' 싶으면 열 가지의 새로운 것이 생겨나는 기분입니다. 때문에 한 가지를 깊이 파고드는 능력외에도 다양한 기술을 빨리 습득하는 능력도 매우 중요하다고 생각합니다. \n\n- 해당 기술을 어떻게 사용해야 하는지,\n- 해당 기술이 기존 기술의 어떤 점을 보완하는지\n- 기존 기술이 해당 기술보다 더 나은 점은 없는지\n\n를 비교 분석하여 기존에 사용하는 것보다 더 나은 기술이라는 판단이 들면 프로젝트에 도입할 수 있는 능력도 중요하다고 여겨집니다. \n\n이렇게 다양한 것을 넓게 습득하는 능력이 중요한 이유로 크게 두 가지가 더 생각납니다.\n\n#### 2-1. **우리가 현재 닭 잡는 칼로 소를 잡고 있는 것은 아닌가?**\n\n기술은 특정한 문제를 해결하기 위해 만들어지는 경향이 있습니다. 리액트 초기에 프롭드릴링 같은 상태관리 문제를 해결하기 위한 리덕스가 있었고 그 덕분에 FLUX패턴과 전역 상태관리 개념이 생겨났습니다. 이후 프론트엔드에서 리덕스를 사용하는 비율이 상당히 높아졌습니다. 하지만 리덕스의 큰 덩치와 더불어 상태 하나를 추가하기 위해 여러 줄의 보일러플레이트 코드를 만들어야 하는 문제가 있죠. 또한 리액트에서 제공하는 context API와 Recoil 등 여러 대체제가 생겨나면서 대규모 프로젝트가 아닌 경우에는 굳이 새 프로젝트에 리덕스를 사용하지 않아도 되어가고 있습니다. 이처럼 프로젝트에 딱 알맞는 기술을 취사 선택해서 쓸 수 있는 능력을 위해서는 역시 여러 기술들을 익혀놓는 것이 중요합니다.\n\n\n\n#### 2-2. **사용하는 혹은 사용하려는 기술이 시장에서 어떤 포지션에 있고, 그와 관련하여 인력을 보충하거나 기존 팀원들의 러닝커브를 만들지는 않는가?**\n\n대기업과 달리 스타트업에서는 개발자 한 명을 고용하는 것이 참 어려운 일입니다. 때문에 어떤 기술스택을 쓸 것인지를 판단할 때 위에서 말한 프로젝트 레벨에서만 생각해서는 다소 부족합니다. 프로젝트에는 딱 맞는 스킬일 수 있지만 개발자 시장에서는 해당 기술 스택을 가진 인력을 구하는 것이 매우 어려울 수도 있기 때문입니다. 따라서 프로젝트의 현재 뿐만 아니라 미래에도 프로젝트를 이어나가기 위해서 인력 보충에 용이한 기술, 혹은 앞으로 더 인기가 많아질 확률이 높은 기술을 선택하는 것도 (스타트업 한정? 일 수도 있겠습니다...)개발자의 능력이 될 수 있습니다.\n\n\n\n## 3. 다시 돌아보는 능력\n\n처음에는 이 능력에 대한 제목을 '로그를 남기는 능력'으로 하려했습니다. 어떤 것을 했으면 해당 내용에 대해 그 일을 한 사람 뿐만 아니라 다른 사람이 봐도 알아볼 수 있게 기록을 남기는 능력을 말하고 싶었기 때문이었습니다. 하지만 제목을 '다시 돌아보는 능력'이라고 변경한 데는 기록을 남기기만 하는 것에서 그치는 것이 아니라 과거를 뒤돌아보고 당시 상황에서의 잘한 것과 못한 것을 구분하고 그것을 자신 혹은 팀의 성장에 다시 활용할 수 있어야 한다는 생각이 들었기 때문입니다.\n\n사용자의 로그 기록을 아무리 남겨봐야 그 로그를 가지고 사용자 패턴을 분석하거나 하는데 쓰지 않는다면 의미 없는 로그가 되겠죠.\n\n개발자로서 업무를 하는 것도 일맥상통하는점이 있습니다. 시간에 쫓겨 어떤 feature를 개발했더라도 추후에 시간이 남으면 스스로 더 좋게 리팩토링 할 수 없는지 다시 보고, 혼자서 하기 어렵다면 팀원에게 묻고 그것도 안된다면 스택 오버 플로우나 카카오톡 오픈 채팅방에서 물어볼 사람을 찾아서라도 스스로를 되돌아 보려는 능력이 좋은 개발자가 되는 하나의 능력이라 생각합니다.\n\n\n\n작성해 놓고 보니 위 내용들이 꼭 개발에만 한정되는 것은 아니라는 생각이 듭니다.\n\n개발을 떠나 한 명의 개인으로서도 어떤 것을 깊이 파고들고, 또 다방면으로 학습하는 것, 그리고 스스로를 돌아보는 능력은 그 사람이 얼마나 성장할 수 있는 사람인지를 보여준다는 생각이 드네요. \n\n---\n\n\n\n## B. 개발 외 능력\n\n## 1. 커뮤니케이션 능력\n\n개발자에게 타직군과의 소통능력을 요구하는 내용을 이곳 저곳에서 꽤 많이 봤던 것 같습니다. 그때는 이 내용을 상세히 알지 못해서 '뭐 그거 그냥 잘 얘기해서 일하면 되는거 아닌가?'하고 가볍게 생각했었습니다. 하지만 실전은 다르더군요. 주로 겪는 사례는 다음과 같았습니다.\n\n버전 1. 디자이너\n\n- 디자이너: 이거 이렇게 돼요?\n- 개발자: ('어... 되긴 하는데, 그럴려면 기존에 짜둔거를 이렇게 저렇게 바꿔야 되고 좀 이상한데... 꼭 이걸 그렇게 해야되나?'라고 생각하며) \"예, 되긴 되는데...\"\n- 디자이너: 되면 그렇게 해주세요.\n- 개발자: 음... 근데 그럴거면 기존에 이 컴포넌트를 쓰는 다른 곳에서 레이아웃이 무너질 수 있어서 별로 인거 같아요.\n- 디자이너: 되게 해주시면 안돼요? 혹은 \"그냥 해주세요\"\n- 개발자: ...\n\n\n\n여기서 개발자는 어떤 커뮤니케이션을 잘못한 것일까요?\n\n사실 엄밀히 따졌을 때 개발자의 말 중에서 딱히 틀린말은 없습니다. 별로 좋지 않은 요구사항이어서 그렇지 안되는건 아니니까 되긴 한다고 했거든요.\n\n다소 억울하지만 이럴 때 잘 조율해 나가는 것이 바로 개발자의 커뮤니케이션 능력이라 볼 수 있습니다.\n\n\n\n개발자의 첫 번 째 대답을 다음과 같이 수정해 봅시다.\n\n- 디자이너: 이거 이렇게 돼요?\n- 개발자: 음... 이게 기존에 동일하게 사용하고 있는 컴포넌트에 전체적으로 영향을 줄 수 있는 수정사항이라서 이렇게 적용하는 것은 좋지 않을 것 같습니다. 대신 B방식은 어떨까요?\n\n라고 원 제안에 대해서 왜 안좋은 지를 설명하고나서 바로 다른 대안을 바로 제시하는 것이죠.\n\n물론 실전은 이렇게 간단하게 끝나지를 않지만 그래도 이런 커뮤니케이션이 누적되어야 다른 팀원들도 해당 사항에 대해 지속적으로 듣고 생각하면서 점차 발전해나갈 수 있어서 꼭 필요한 능력이라 여겨집니다.\n\n\n\n## 2. 비즈니스 임팩트를 고려하는 능력\n\n개발자가 신규 기능을 만들거나, 코드 장애 상황을 대처할 때 자신이 하는 일이 비즈니스 적으로 얼만큼의 가치를 가진 일인지를 생각할 수 있는 능력이 있으면 좋은 개발자라고 생각합니다.\n\n예를 들어, 어떤 장애 상황이 발생하여 1시간 동안 신규유저가 가입을 할 수 없는 상황이라 가정해 봅시다. 평상시에 해당 시간대에 평균적으로 약 100명이 들어오고 1명의 회원당 5만원의 밸류를 갖는 것을 알고 있다면 이 한 시간동안의 장애가 500만원짜리 장애라는 것을 추산해볼 수 있습니다. \n\n또, 반대로 이와 같이 신규 회원을 모집하는 이벤트를 할 때 한 시간의 가치가 500만원인 경우 이 이벤트를 한 시간 빨리 런칭할 수 있도록 만들어 낸다면 이 개발자는 회사에서 한 시간이라는 추가적인 리소스 비용을 감축시키고 동시에 500만원의 가치를 한 시간 더 일찍 벌어들일 수 있도록 만들었으므로 500만 +의 가치를 생산해냈다고 여길 수 있습니다.\n\n이처럼 개발자가 자신이 스스로 얼마만큼의 가치를 만들어내고 있는지를 알고 그 가치를 안다면, 그 가치를 더욱 크게 만들 수도 있고 반대로 손실도 줄일 수 있습니다. 또한 어떤 일의 우선순위를 정할 때도 이 \"비즈니스 임팩트\"를 기준으로 하면 더 중요한 일에 집중하고 덜 중요한 일을 나중에 할 수도 있습니다. 때문에 개발자에게 비즈니스 임팩트를 고려하는 능력이 중요한 역량이라 생각합니다.\n\n\n\n여기까지가 제가 생각하는 `좋은 개발자` 에 대한 내용이었습니다. \n\n나중에 더 좋은 내용이 생각나면 추가해보도록 하겠습니다.\n\n여러분이 생각하는 좋은 개발자에 대한 의견이 있으시다면 댓글 남겨주세요. 감사합니다.\n\n");

/***/ }),

/***/ 2630:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"요즘들어 개발자도 커뮤니케이션 능력이 중요하다고 느끼는 이유\"\ndate: \"2022.08.28\"\ntags:\n  - 회고\n  - 커뮤니케이션\n---\n\n\n\n## Intro: 커뮤니케이션 능력? 뭐 그거 걍 최대한 잘 얘기하면 되는거 아니야?\n\n예전에는 `커뮤니케이션 능력`을 보면 '뭐 그거 그냥 최대한 잘 얘기하면 되는거 아니야?'라고 가볍게 생각했던 시절이 있었습니다.\n\n하지만 시간이 지날수록 `커뮤니케이션` 이 참 어렵다는 것을 점점 느껴가고 있습니다. 오늘은 그렇게 느끼는 이유에 대해 한 번 작성해보겠습니다.\n\n![잘안됑](/assets/img/실패.jpg)\n\n\n\n## :one:개발자 커뮤니케이션 실패 사례 \n\n이번에 회사 서비스에 인 앱 결제기능을 추가하는 꽤 규모가 큰 태스크가 있었습니다. 토스 페이먼츠를 연동시켜서 한 번 신용카드를 등록해두면 넷플릭스와 같이 매월마다 자동 결제가 되는 시스템입니다.\n\n하지만 기존에는 결제를 어플리케이션 내부에서 구현하지 않았고 전통적인 계좌이체 방식을 통해 계좌이체가 확인된 경우에만 아이디를 발급하여 유저의 접근을 허용해왔습니다. 다시 말해서 결제와 관련된 내용이 하나도 준비되어있지 않은 상태였죠. 따라서 개발자 입장에서는 이것저것 따져봐야할 게 많은 작업이었습니다.\n\n기존에 일하는 방식은 기획팀에서 기획안을 노션 카드로 작성하면 그 내용을 확인하고 읽은 뒤 개발자가 피드백을 주고 그 뒤에 해당 내용을 보완해서 다시 기획안을 수정한 뒤 개발을 진행하는 방식이었습니다. 다소 전통적인 방식이었죠.\n\n**[구 방식]**\n\n- 1) 기획팀 기획안 작성 \n- 2) 개발팀 보완 사항 피드백\n- 3) 기획팀 기획안 수정 보완\n- 4) 개발 진행\n\n근데 이렇게 하다보면 2-3번 과정이 꽤 여러번 반복될 때도 있습니다. 이 경우 개발팀에서 보완을 요청한 내용을 기획팀에서 정확히 받아들이지 못했다는 이야기이거나 반대 혹은 모두의 이해도가 떨어지는 경우일 수도 있습니다.\n\n이런 문제를 해결하기 위해 저희팀은 앞으로 정식적으로 기획안을 작성하기 전에 기획 초안을 가지고 기획/개발 모두가 함께 모이는 `킥오프 미팅`을 진행할 것을 제안했습니다. 앞서 언급한 결제시스템을 추가하는 기획 내용이 첫 번째 케이스가 되었습니다.\n\n**[킥오프 미팅 진행]**\n\n- 기획팀 Draft 설명\n- 개발팀 피드백\n- 회의 마무리\n\n킥오프 미팅은 단계로 따지면 간단하지만 실상은 저 과정에서 많은 내용이 오갔습니다. 저희가 판매하는 상품은 **월별 or 연별 구독 \"플랜\"**이었고 그 플랜의 종류는 크게 다섯가지가 있습니다. 이 중에서 Education 플랜이 있었는데 대학생/대학원생을 위한 할인 개념의 플랜입니다. 이 과정에서 개발팀에서 예측 가능한 문제들을 생각나는대로 피드백을 드렸습니다.\n\n- 'Education 플랜은 어떻게 구별할 수가 있을까요? 가입할 때의 메일 뒤 도메인을 살펴야 할까요? 아니면 학교 이메일로 verification메일을 전송할까요?'\n- '졸업을 해도 학생 이메일이 살아있는 경우는 어떻게 구별할 수 있을까요?'\n- '지금 설명해주신 User Flow에서는 아무 플랜도 선택하지 않은 유저들의 플로우가 빠져있습니다. 이 NONE 타입 플랜일 경우의 User Flow를 추가해주세요.'\n- '새 플랜을 할인하고 있는데, 이런 할인을 언제까지 할 것인지가 누락되어있습니다. 유저 입장에서는 할인이 언제까지 계속될지를 아는 것이 구매에 중요한 요소가 될텐데, 이를 구매전에 미리 알 수 있도록 공지하는 것이 좋을 것 같습니다. 할인이벤트는 언제까지 할 생각이신가요?'\n\n\n\n\n\n### 다른건 몰라도 유저의 돈이 걸린 일은 최대한 꼼꼼하게 처리해야한다!\n\n![유저는 돈에 예민](https://user-images.githubusercontent.com/18045958/188258485-5123f793-efc0-491b-a766-fa22e6cd1bd6.gif)\n\n유저는 돈에 예민하다\n\n\n\n저와 저희팀은 이번 일은 \"유저의 돈\"을 결제/환불하는 시스템이므로 이전까지의 Feature 개발보다 더욱 견고한 아키텍쳐와 타입을 사용해서 진행해야 한다는 마음이 지배적이었습니다. 따라서 위와 같이 발생할 수 있는 오류 사항과 누락사항들을 다 같이 모인 자리에서 최대한 많이 전달해서 더 좋은 기획안을 만들 수 있도록 기여를 해야겠다는 생각으로 회의실에서 최대한 머리를 쥐어 짜냈고 공유했습니다.\n\n회의를 끝내고서도 혹시나 더 빠뜨린 것은 없을까 생각하며 여러번 검토하고 생각나는 사항들은 그때 그때 기획팀으로 전달했습니다.\n\n![쎄한느낌](/assets/img/쎄한느낌.jpg)\n\n\n\n하지만 뭔가 쎄한 느낌이었습니다. 우리 쪽에서 이렇게 열심히 피드백을 해도 기획팀에서는 개발팀의 피드백에 대한 피드백을 따로 하거나, 별로 달가워 하지 않는 듯한 기분이 들었기 때문입니다.\n\n아무튼 기한은 정해져있고, 토스페이먼츠와 카드사의 심사 또한 필요했으므로 기획을 너무 길게 끌 수는 없는 상황이었습니다. 회사는 기획이 완벽하지 않더라도 일단 최대한 빨리 진행하기를 희망했고 일단 프론트 작업과 꼭 필요해보이는 api 작업부터 먼저 진행하기 시작했습니다.\n\n\n\n### (기획) 그거 별로 일어나지도 않을 상황인거 같은데 너무 깐깐하게 구는거 아냐? 개발팀 일하기 싫어서 꼬장부리는거 같은데?\n\n작업이 시작되고 꽤 시간이 지난 후의 일입니다. 한창 일에 열중해있던 그 즈음 건너 건너 건너서 기획팀이 저희 개발팀에 불만을 갖고 있다는 내용을 알게 되었는데 그 내용이 저에게는 가히 충격적이었습니다.\n\n> 그거 별로 일어나지도 않을 상황인거 같은데 너무 깐깐하게 구는거 아냐? 개발팀 일하기 싫어서 꼬장부리는거 같은데?\n\n그렇게 중요한 것 같지 않은데 킥오프 미팅에서 너무 디테일한 면까지 피드백을 한 그 상황이 맘에 들지 않았다는 것이었습니다. 흠.... 백번 양보해서 '킥오프 미팅에서 너무 디테일한 면까지 이야기하는 것이 뭔가 자신의 기획안을 까는 것처럼 느껴져서 기분나쁠 수도 있겠다.'고 스스로를 반성해보기도 했습니다. 하지만 아무리 생각해도 **\"일 하기 싫어서 일부러 그런다\"** 는 도저히 받아들일 수가 없고 속이 부글부글 끓더라구요. 그럼에도 불구하고 다시 한 번 가슴에 손을 얹고 스스로에게 물어봤습니다. **'정말 단 1g의 마음이라도 일을 하기 싫어했던 마음이 있었는가?'**를 자신에게 여러번 다시 반문해보았습니다. 하지만 여러번 생각해봐도 이 사안에 대해서는 스스로 \"전혀 그런 마음이 1g도 없었다\"고 확신할 수 있었습니다.\n\n\n\n도대체 어떤 이유로  우리팀이 이렇게까지 신뢰를 잃었을까... 참 착잡했습니다.\n\n모르는게 약이라고 차라리 이 내용을 몰랐더라면 괜찮았을텐데 알고 나니까 마인드 컨트롤이 쉽지 않았습니다.\n\n어찌저찌 마음을 추스리고 이 상황을 객관적으로 다시 파악해보려 노력했습니다. 도대체 어떤 과정에서 오류가 있었고, 그 과정을 이전과 다른 어떤 새로운 방식으로 대응한다면 지금과는 다른 결과를 이끌어 낼 수 있을지 고민해봤습니다.\n\n\n\n#### 1. 태도가 문제였는가?\n\n- 기획 내용 피드백을 진행하는 과정속에서 너무 '아는 척' 했었던 것일까?\n- 새로운 방안이나 대안을 생각하기 보다는 비판에만 초점을 맞췄던 것일까?\n\n\n\n#### 2. 피드백의 양이 문제였는가? 즉, 프로세스의 단계별 업무 레벨이 있는데 너무 앞서간 것 아닐까?\n\n- 그렇다면 킥오프 미팅에서 전체 100% 중에서 N%만 피드백을 진행하고 해당 과정을 여러번 반복하며 완성도를 높여 나갔어야 했는가?\n\n\n\n## :two: 개발자의 딜레마 1\n\n![딜레마](/assets/img/가불기.jpg)\n\n> 좋은 기획안을 만들기 위해서는 개발자가 줄 수 있는 최대한 많은 양질의 피드백을 준다. 하지만 이 과정 중에 팀간 conflict 발생 가능성이 높다.\n> VS\n> 기획안의 퀄리티를 조금 포기하더라도 최대한 부드러운 태도와 어투로 필수적인 피드백만을 준다. 하지만 이 과정 속에서 놓칠 수 있는 상황은 스스로 처리해야 한다.\n\n현재 제가 처해있는 상황을 바라봤을 때 저는 어느쪽으로 가더라도 장단점이 있는 명확하게 있어서 한 쪽으로 쉽게 선택하지 못하는 딜레마 상황에 빠져있다는 것을 알게 되었습니다. 이 상황에서는 \"피드백을 하면 할수록 갈등상황이 발생한다\"는 것이 전제로 깔려있습니다.\n\n**\"개발자\"** 즉, 엔지니어로서 가장 높은 퀄리티의 프로덕트를 만드는 것이 직업적 소명이라 볼 수 있습니다. 이를 위해서 최대한 완벽한 기획안을 작성할 수 있도록 가능한 모든 피드백을 전달해야 하지 않을까? 하는 생각이 하나 있고,\n\n다른 하나는 '개발자이기 이전에 한 명의 조직구성원으로서 구성원간의 갈등 상황을 줄이고 최대이익을 위해 어느 정도 타협을 해야 하는 것일까?'하는 것이 두 번째 생각입니다.\n\n이상적으로는 1번과 같이 공리주의적으로 각자의 직군에서 최선의 선을 추구하면  전체 조직의 이익이 최대가 될 수 있지 않을까 생각합니다. 하지만 제가 속한 현실은 대부분 2번처럼 타협을 하게 되더군요.\n\n그렇지만 2번처럼 한다고 해도 문제가 해결되지도 않습니다. 개발자에게는 다음과 같은 사항이 주어지게 되는거죠.\n\n\n\n## :three: 개발자의 딜레마 2\n\n> 오케이. 기획의 빈틈 정도는 어느 정도 인정하고 넘어간다. 하지만 개발자의 역량으로 그 나머지 빈틈을 채워넣어서 최대한 오류를 없애도록 하자\n> VS\n> 기획의 빈틈 인정한다. 하지만 기한이 더 중요하므로 빈틈을 채워넣다가 기한을 놓칠바에는 기한에 맞춰 요구사항만을 지켜 개발한다.\n\n훌륭한 개발자라면 기한 안에 모든 요구사항을 만족하고서 부족한 부분까지 채우겠지만, 그럴 수 없는 상황에 처해 위 2개 중에 하나만을 골라야 하는 상황이 대부분입니다.\n\n물론 1번처럼 하는 것이 개발자의 책임이라 볼 수 있습니다. 저 역시 그렇게 하고 싶습니다. 하지만 대부분 시간이 부족합니다. 1번을 선택했을 때의 단점은, 빈틈을 채워넣더라도 아무도 몰라준다는 것이죠. 알아주는 것까지 바라지는 않지만 \"속도가 느린 개발자\", \"일못하는 개발자\"소리를 들을 수 있다는 것이죠.\n\n또 다른 문제로는 이렇게 되면 이게 기준이 되어서 앞으로도 계속 기획안은 이정도 수준에 머물게 될 수도 있습니다.\n\n\n\n2번처럼 하면 지금 당장은 문제가 생기지 않고 조직 내 갈등 상황도 줄여줄 수 있고 잘하면 인정까지 받을 수 있습니다. 하지만 언제 어디서 그 넘어갔던 이슈가 발생할 수도 있다는 불안감, 그리고 실제로 예상했던 그 버그가 발생하여 서비스 장애를 일으키는 상황이 일어날 수 있다는 단점이 있습니다.\n\n\n\n최근 이런 상황을 실전에서 맞닥뜨리면서 여러 회사에서 말하는 `개발자의 커뮤니케이션 능력`이 얼마나 중요한지를 새삼 체감하고 있습니다.\n\n'커뮤니케이션 그까이꺼 대충'하면 되는게 아니네요. 정답이 없는 이런 문제를 해결하는 것이 가장 어려운 것 같습니다.\n\n안타깝게도 지금은 어떻게 해야 옳은 것인지 잘 모르겠습니다. 찾아나가는 중이라 생각하고 이리 치이고 저리 치이면서 좌충우돌하고 있습니다. \n\n이런 상황 속에서도 그때 그때의 최선의 선택을 고르기 위해 고민해 나가는 경험을 많이 갖으면서 고민하는 시간을 많이 가져가다보면 그래도 꽤 좋은 개발자가 될 수 있지 않을까 기대를 해보며 글을 마칩니다.\n");

/***/ }),

/***/ 3488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./aws/2021-05-28-AWS-EC2-한국어-도메인-연결하기.md": 7175,
	"./ci-cd/2021-09-02-CI-CD-기초개념에-대해-알아보자.md": 5200,
	"./etc/2021-08-07-윈도우-가상-데스크톱-듀얼모니터-활용-극대화-하는법.md": 3143,
	"./etc/2021-08-18-구글-애널리틱스로-jekyll로-만든-내-블로그-방문자-행동패턴-파악하는-방법.md": 1416,
	"./frontend/2020-12-16-개발자를 괴롭히지만 없어서는 안되는 CORS.md": 4559,
	"./frontend/2020-12-16-우리가 항상 쓰는 HTTP 프로토콜이 뭘까.md": 4029,
	"./frontend/2021-01-01-WAS와 웹서버.md": 2826,
	"./frontend/2022-02-22-요것이웹팩이다.md": 8842,
	"./frontend/2022-10-12-자바스크립트-ASSETS관리-라이브러리-추천.md": 4157,
	"./frontend/2022-10-14-FEconf-2022-Rescript같이해요-정미량.md": 713,
	"./jekyll/2020-12-17-jekyll-Blog-만드는게-글쓰는-것보다-힘든-사람들에게.md": 9438,
	"./jekyll/2020-12-17-jekyll-Blog에-포스팅-하는법-이미지넣기.md": 7979,
	"./jekyll/2020-12-17-jekyll-Next-테마-자세히-알아보기.md": 2430,
	"./jekyll/2021-01-05-Jekyll-블로그-조회수-뱃지-달기---HITS.md": 4169,
	"./language/javascript/2021-03-31-Javascript-자주쓰는-내장-함수-복습하기.md": 4372,
	"./language/javascript/2021-08-03-ES2021-최신자바스크립트-새롭게추가된-기능.md": 3278,
	"./language/javascript/2021-08-04-자바스크립트-프로처럼-쓰기.md": 795,
	"./language/javascript/2021-08-09-자바스크립트-var-let-const-진짜-차이점-구별하기.md": 1636,
	"./language/javascript/2021-08-17-자바스크립트-async-await-초스피드-핵심체크.md": 8504,
	"./language/javascript/2021-08-26-자바스크립트-완전히-새로운함수-제너레이터를-알아보자.md": 133,
	"./language/javascript/2021-08-30-자바스크립트-iterable과-iterator에-대해-알아보자.md": 1401,
	"./language/javascript/2021-09-16-javascript-즉시실행함수-일단-알아보자.md": 6907,
	"./language/javascript/2022-03-24-nodejs버전10x-14x로-올리기.md": 7707,
	"./language/javascript/2022-04-07-javascript-정수만-입력받기.md": 7848,
	"./language/typescript/2021-04-14-Typescript-시작하기.md": 6178,
	"./language/typescript/2021-04-27-Typescript-실습퀴즈.md": 1328,
	"./react/2021-04-28-실전-리액트-프로그래밍-section1.-리액트-프로젝트-시작하기.md": 7844,
	"./react/2021-05-04-리액트-디자인-패턴-1.-Container+Presenter.md": 4566,
	"./react/2022-03-23-react-rewired-사용해서-eject없이-CRA에babel설정-추가하기.md": 8677,
	"./react/2022-04-01-cra없이-리액트-프로젝트-설정하기.md": 8723,
	"./react/2022-10-07-리액트-콘솔창-에러-그대로-놔두고-계신가요.md": 9529,
	"./testing/2022-07-08-Jest로-리액트에서-유닛-테스트하기.md": 7442,
	"./vuejs/2021-02-09-Vuejs에서 AWS Lambda와 SES를 사용해서 메일 보내기.md": 1250,
	"./vuejs/2021-03-12-Vuex를 알아보자.md": 2808,
	"./면접/2021-06-02-2021-프론트엔드-개발자-직접-받은-기술-면접-질문-리스트.md": 2975,
	"./번역/2021-01-10-45년동안-개발자로-일하며-배운것들.md": 7880,
	"./번역/2021-08-14-처음부터-끝까지-상세히-알아보자- HTTP3에-대한-A-TO-Z_1편.md": 8261,
	"./번역/2021-08-22-처음부터-끝까지-상세히-알아보자- HTTP3에-대한-A-TO-Z_2편.md": 5720,
	"./요즘 느끼는 것들/2022-08-15-좋은개발자란-무엇일까.md": 4556,
	"./요즘 느끼는 것들/2022-08-28-요즘들어-개발자도-커뮤니케이션-능력이-중요하다고-느끼는-이유.md": 2630
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 3488;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./aws/2021-05-28-AWS-EC2-한국어-도메인-연결하기.md": 7175,
	"./ci-cd/2021-09-02-CI-CD-기초개념에-대해-알아보자.md": 5200,
	"./etc/2021-08-07-윈도우-가상-데스크톱-듀얼모니터-활용-극대화-하는법.md": 3143,
	"./etc/2021-08-18-구글-애널리틱스로-jekyll로-만든-내-블로그-방문자-행동패턴-파악하는-방법.md": 1416,
	"./frontend/2020-12-16-개발자를 괴롭히지만 없어서는 안되는 CORS.md": 4559,
	"./frontend/2020-12-16-우리가 항상 쓰는 HTTP 프로토콜이 뭘까.md": 4029,
	"./frontend/2021-01-01-WAS와 웹서버.md": 2826,
	"./frontend/2022-02-22-요것이웹팩이다.md": 8842,
	"./frontend/2022-10-12-자바스크립트-ASSETS관리-라이브러리-추천.md": 4157,
	"./frontend/2022-10-14-FEconf-2022-Rescript같이해요-정미량.md": 713,
	"./jekyll/2020-12-17-jekyll-Blog-만드는게-글쓰는-것보다-힘든-사람들에게.md": 9438,
	"./jekyll/2020-12-17-jekyll-Blog에-포스팅-하는법-이미지넣기.md": 7979,
	"./jekyll/2020-12-17-jekyll-Next-테마-자세히-알아보기.md": 2430,
	"./jekyll/2021-01-05-Jekyll-블로그-조회수-뱃지-달기---HITS.md": 4169,
	"./language/javascript/2021-03-31-Javascript-자주쓰는-내장-함수-복습하기.md": 4372,
	"./language/javascript/2021-08-03-ES2021-최신자바스크립트-새롭게추가된-기능.md": 3278,
	"./language/javascript/2021-08-04-자바스크립트-프로처럼-쓰기.md": 795,
	"./language/javascript/2021-08-09-자바스크립트-var-let-const-진짜-차이점-구별하기.md": 1636,
	"./language/javascript/2021-08-17-자바스크립트-async-await-초스피드-핵심체크.md": 8504,
	"./language/javascript/2021-08-26-자바스크립트-완전히-새로운함수-제너레이터를-알아보자.md": 133,
	"./language/javascript/2021-08-30-자바스크립트-iterable과-iterator에-대해-알아보자.md": 1401,
	"./language/javascript/2021-09-16-javascript-즉시실행함수-일단-알아보자.md": 6907,
	"./language/javascript/2022-03-24-nodejs버전10x-14x로-올리기.md": 7707,
	"./language/javascript/2022-04-07-javascript-정수만-입력받기.md": 7848,
	"./language/typescript/2021-04-14-Typescript-시작하기.md": 6178,
	"./language/typescript/2021-04-27-Typescript-실습퀴즈.md": 1328,
	"./react/2021-04-28-실전-리액트-프로그래밍-section1.-리액트-프로젝트-시작하기.md": 7844,
	"./react/2021-05-04-리액트-디자인-패턴-1.-Container+Presenter.md": 4566,
	"./react/2022-03-23-react-rewired-사용해서-eject없이-CRA에babel설정-추가하기.md": 8677,
	"./react/2022-04-01-cra없이-리액트-프로젝트-설정하기.md": 8723,
	"./react/2022-10-07-리액트-콘솔창-에러-그대로-놔두고-계신가요.md": 9529,
	"./testing/2022-07-08-Jest로-리액트에서-유닛-테스트하기.md": 7442,
	"./vuejs/2021-02-09-Vuejs에서 AWS Lambda와 SES를 사용해서 메일 보내기.md": 1250,
	"./vuejs/2021-03-12-Vuex를 알아보자.md": 2808,
	"./면접/2021-06-02-2021-프론트엔드-개발자-직접-받은-기술-면접-질문-리스트.md": 2975,
	"./번역/2021-01-10-45년동안-개발자로-일하며-배운것들.md": 7880,
	"./번역/2021-08-14-처음부터-끝까지-상세히-알아보자- HTTP3에-대한-A-TO-Z_1편.md": 8261,
	"./번역/2021-08-22-처음부터-끝까지-상세히-알아보자- HTTP3에-대한-A-TO-Z_2편.md": 5720,
	"./요즘 느끼는 것들/2022-08-15-좋은개발자란-무엇일까.md": 4556,
	"./요즘 느끼는 것들/2022-08-28-요즘들어-개발자도-커뮤니케이션-능력이-중요하다고-느끼는-이유.md": 2630
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4515;

/***/ })

};
;