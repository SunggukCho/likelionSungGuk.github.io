/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostDetailPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2010);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
// EXTERNAL MODULE: ./.yarn/unplugged/styled-components-virtual-4118695063/node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9600);
;// CONCATENATED MODULE: ./src/components/blog-detail/bread-crumbs/index.style.ts

const Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 2rem;

  padding: 0 1.6rem;
`;
const Path = styled_components_cjs/* default.p */.ZP.p`
  width: 60%;

  font-weight: 300;
  color: ${({
  theme
}) => theme.colors.scheme.$gray100};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
/* harmony default export */ var index_style = ({
  Wrapper,
  Path
});
;// CONCATENATED MODULE: ./src/components/blog-detail/bread-crumbs/index.tsx


function Breadcrumbs({
  path,
  title
}) {
  const paths = path.split("/");

  const replaceFileNameToTitle = paths => {
    return [...paths.slice(0, paths.length - 1), title];
  };

  return /*#__PURE__*/jsx_runtime.jsx(index_style.Wrapper, {
    children: /*#__PURE__*/jsx_runtime.jsx(index_style.Path, {
      children: replaceFileNameToTitle(paths).join(" > ")
    })
  });
}
// EXTERNAL MODULE: ./src/assets/icons/index.ts + 14 modules
var icons = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/components/blog-detail/open-post-tabs/open-post-tab/index.style.ts

const index_style_Wrapper = styled_components_cjs/* default.li */.ZP.li`
  ${({
  isSelected,
  theme
}) => `
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 2.4rem;
    padding: 0 0.8rem;
    margin-right: 0.1rem;

    background-color:
      ${isSelected ? theme.colors.scheme.$gray600 : theme.colors.scheme.$gray400};
    color: ${isSelected ? theme.colors.scheme.$white : theme.colors.scheme.$gray100};
  `}
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled_components_cjs/* default.p */.ZP.p`
  width: 8rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
/* harmony default export */ var open_post_tab_index_style = ({
  Wrapper: index_style_Wrapper,
  Title
});
;// CONCATENATED MODULE: ./src/components/blog-detail/open-post-tabs/open-post-tab/index.tsx





function OpenPostTab({
  emoji = "📝",
  title,
  isSelected = false,
  onClick = () => null,
  onClose = () => null
}) {
  const {
    0: isHovered,
    1: setIsHovered
  } = (0,react.useState)(false);
  const isCloseVisible = isSelected || isHovered;

  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(open_post_tab_index_style.Wrapper, {
    isSelected: isSelected,
    onClick: onClick,
    onMouseOver: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(open_post_tab_index_style.Title, {
      children: [emoji, " ", title]
    }), /*#__PURE__*/jsx_runtime.jsx(icons/* CloseIcon */.Tw, {
      onClick: handleClose,
      style: {
        width: "1rem",
        height: "1rem",
        visibility: isCloseVisible ? "visible" : "hidden"
      }
    })]
  });
}
// EXTERNAL MODULE: ./src/contexts/app/index.tsx
var app = __webpack_require__(2837);
;// CONCATENATED MODULE: ./src/components/blog-detail/open-post-tabs/index.style.ts

const open_post_tabs_index_style_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: row;

  min-height: 2.4rem;
  background-color: ${({
  theme
}) => theme.colors.scheme.$gray500};

  overflow-y: auto;
`;
/* harmony default export */ var open_post_tabs_index_style = ({
  Wrapper: open_post_tabs_index_style_Wrapper
});
;// CONCATENATED MODULE: ./src/components/blog-detail/open-post-tabs/index.tsx




function OpenPostTabs() {
  const {
    state: {
      openPosts,
      currentPostId
    },
    action: {
      selectPost,
      closePost
    }
  } = (0,app/* useAppContext */.b)();
  return /*#__PURE__*/jsx_runtime.jsx(open_post_tabs_index_style.Wrapper, {
    children: openPosts.map(({
      id,
      meta
    }) => /*#__PURE__*/jsx_runtime.jsx(OpenPostTab, {
      title: meta.title,
      isSelected: currentPostId === id,
      onClick: () => selectPost(id),
      onClose: () => closePost(id)
    }, id))
  });
}
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.29.0-6faa5b04b8-007a8869d4.zip/node_modules/prismjs/prism.js
var prism = __webpack_require__(963);
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(524);
// EXTERNAL MODULE: ./src/components/common/tag/index.tsx
var common_tag = __webpack_require__(3047);
// EXTERNAL MODULE: ./src/constants/palette.ts
var palette = __webpack_require__(5700);
;// CONCATENATED MODULE: ./src/components/blog-detail/post-template/post-contents.style.ts


const postContentsStyles = styled_components_cjs/* css */.iv`
  td,
  th {
    border: 1px solid ${({
  theme
}) => theme.colors.scheme.$gray100};
    padding: 0.8rem;
  }

  tr:nth-child(even) {
    background-color: ${({
  theme
}) => theme.colors.scheme.$gray400};
  }

  th {
    padding-top: 1rem;
    padding-bottom: 1rem;

    text-align: center;

    background-color: ${({
  theme
}) => theme.colors.scheme.$gray200};
    color: ${({
  theme
}) => theme.colors.scheme.$white};
  }

  code:not([class*="language"]) {
    margin: 0 0.2rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;

    background-color: ${({
  theme
}) => theme.colors.scheme.$gray300};
    color: ${palette/* PINK */.hl};
  }

  strong,
  b {
    background-color: ${({
  theme
}) => theme.colors.scheme.$gray300};
    color: ${palette/* ORANGE */.ud};
  }

  blockquote {
    display: flex;

    padding: 1em;
    margin: 2rem 0;
    border-left: 0.4rem solid ${({
  theme
}) => theme.colors.scheme.$gray300};

    background-color: ${({
  theme
}) => theme.colors.scheme.$gray500};

    white-space: pre-line;

    > p {
      margin: 0;
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/blog-detail/post-template/index.tsx









function PostTemplate({
  post
}) {
  const {
    meta: {
      title,
      date,
      tags
    },
    html
  } = post;
  (0,react.useEffect)(() => {
    prism_default().highlightAll();
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(post_template_Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Article, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Header, {
        children: [/*#__PURE__*/jsx_runtime.jsx(post_template_Title, {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Bio, {
          children: [/*#__PURE__*/jsx_runtime.jsx(Avatar, {
            src: "/images/avatar.png"
          }), /*#__PURE__*/jsx_runtime.jsx(Author, {
            children: "likelionSungGuk"
          }), /*#__PURE__*/jsx_runtime.jsx(post_template_Date, {
            children: date
          })]
        })]
      }), !!tags && /*#__PURE__*/jsx_runtime.jsx(Tags, {
        children: tags.map(tag => /*#__PURE__*/jsx_runtime.jsx(common_tag/* default */.Z, {
          href: `/posts?tag=${tag}`,
          children: tag
        }, tag))
      }), /*#__PURE__*/jsx_runtime.jsx(PostContents, {
        className: "postContents",
        dangerouslySetInnerHTML: {
          __html: html
        }
      })]
    })
  });
}
const post_template_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;
`;
const Article = styled_components_cjs/* default.article */.ZP.article`
  padding: 1.6rem 1.4rem;
  max-width: 700px;

  margin: 0 auto;

  ${theme/* breakpoints.medium */.A.medium} {
    padding: 1.4rem 1.2rem;
    max-width: 100%;
  }
`;
const Header = styled_components_cjs/* default.header */.ZP.header`
  padding-bottom: 1.2rem;

  border-bottom: 1px solid ${({
  theme
}) => theme.colors.scheme.$gray400};
`;
const post_template_Title = styled_components_cjs/* default.h1 */.ZP.h1`
  font-size: 2rem;
  font-weight: 700;

  letter-spacing: -0.004em;
  line-height: 1.5;

  white-space: break-spaces;

  margin-bottom: 1.6rem;

  ${theme/* breakpoints.medium */.A.medium} {
    font-size: 2.2rem;
  }
`;
const Bio = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled_components_cjs/* default.img */.ZP.img`
  width: 1.8rem;
  height: 1.8rem;

  border-radius: 50%;
`;
const Author = styled_components_cjs/* default.b */.ZP.b`
  font-size: 1.2rem;
  font-weight: 500;

  margin-left: 0.4rem;
`;
const post_template_Date = styled_components_cjs/* default.p */.ZP.p`
  font-size: 1.2rem;
  font-weight: 300;

  padding-left: 0.4rem;
  margin-left: 0.4rem;
  border-left: 1px solid ${({
  theme
}) => theme.colors.scheme.$gray100};
`;
const Tags = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 1.2rem;
`;
const PostContents = styled_components_cjs/* default.div */.ZP.div`
  margin-top: 2rem;

  ${postContentsStyles}
`;
;// CONCATENATED MODULE: ./src/components/blog-detail/index.ts



// EXTERNAL MODULE: ./src/services/post.service.ts + 2 modules
var post_service = __webpack_require__(7896);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-77d0572bfd/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/head.js
var head = __webpack_require__(5913);
;// CONCATENATED MODULE: ./src/components/common/seo/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BASE_URL = "https://likelionSungGuk.github.io/";

function SEO({
  canonicalPath,
  title,
  description = "Frontend Dev likelionSungGuk Blog",
  imageUrl = "",
  type = "website",
  jsonld = {}
}) {
  const url = BASE_URL + canonicalPath;
  const openGraphTags = [{
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: description
  }, {
    property: "og:image",
    content: imageUrl
  }, {
    property: "og:url",
    content: url
  }, {
    property: "og:type",
    content: type
  }].filter(v => !!v.content);
  const twitterTags = [{
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: title
  }, {
    name: "twitter:description",
    content: description
  }, {
    name: "twitter:image",
    content: imageUrl
  }, {
    name: "twitter:description",
    content: description
  }].filter(v => !!v.content);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
    children: [/*#__PURE__*/jsx_runtime.jsx("title", {
      children: `${title}`
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "description",
      content: description
    }, "description"), openGraphTags.map(prop => /*#__PURE__*/jsx_runtime.jsx("meta", _objectSpread({}, prop), prop.property)), twitterTags.map(prop => /*#__PURE__*/jsx_runtime.jsx("meta", _objectSpread({}, prop), prop.name)), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "canonical",
      href: url
    }), Object.keys(jsonld).length > 0 && /*#__PURE__*/jsx_runtime.jsx("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonld)
    })]
  });
}

const getBlogJSONLD = ({
  path,
  title,
  imageUrl,
  description,
  datePublished
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  image: imageUrl,
  editor: "likelionSungGuk",
  url: BASE_URL + path,
  datePublished,
  dateCreated: datePublished,
  dateModified: datePublished,
  description: description,
  author: {
    "@type": "Person",
    name: "likelionSungGuk"
  }
});
/* harmony default export */ var seo = (SEO);
;// CONCATENATED MODULE: ./pages/blog/[...id].tsx









function PostDetailPage({
  id,
  post
}) {
  const {
    action: {
      selectPost
    }
  } = (0,app/* useAppContext */.b)();
  (0,react.useEffect)(() => {
    selectPost(post === null || post === void 0 ? void 0 : post.id); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!post) {
    return null;
  }

  const path = `/blog/${id}`;
  const {
    title,
    description,
    thumbnail,
    date
  } = post.meta;
  const blogJSONLD = getBlogJSONLD({
    path,
    title,
    description,
    imageUrl: thumbnail,
    datePublished: date
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(seo, {
      canonicalPath: path,
      title: title,
      description: description,
      imageUrl: thumbnail,
      type: "article",
      jsonld: blogJSONLD
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(_id_Wrapper, {
      children: [/*#__PURE__*/jsx_runtime.jsx(OpenPostTabs, {}), /*#__PURE__*/jsx_runtime.jsx(Breadcrumbs, {
        path: post.id,
        title: title
      }), /*#__PURE__*/jsx_runtime.jsx(PostTemplate, {
        post: post
      })]
    })]
  });
}
async function getStaticPaths() {
  const posts = await post_service/* default.getPosts */.Z.getPosts();
  const paths = posts.map(post => ({
    params: {
      id: post.id.split("/")
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  const id = context.params.id.join("/");
  const post = await post_service/* default.getPost */.Z.getPost(id);
  return {
    props: {
      id,
      post
    }
  };
}
const _id_Wrapper = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

/***/ }),

/***/ 5700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cj": function() { return /* binding */ WHITE; },
/* harmony export */   "E5": function() { return /* binding */ BLACK; },
/* harmony export */   "r4": function() { return /* binding */ DRACULAR_BACKGROUND_LIGHT_DARK; },
/* harmony export */   "Bc": function() { return /* binding */ DRACULAR_BACKGROUND_DEEP_DARK; },
/* harmony export */   "Ej": function() { return /* binding */ BLUE; },
/* harmony export */   "hl": function() { return /* binding */ PINK; },
/* harmony export */   "ud": function() { return /* binding */ ORANGE; },
/* harmony export */   "ZA": function() { return /* binding */ GREEN; },
/* harmony export */   "t4": function() { return /* binding */ PURPLE_DARK; },
/* harmony export */   "Pg": function() { return /* binding */ GRAY_100; },
/* harmony export */   "tc": function() { return /* binding */ GRAY_200; },
/* harmony export */   "BD": function() { return /* binding */ GRAY_300; },
/* harmony export */   "tL": function() { return /* binding */ GRAY_400; },
/* harmony export */   "pX": function() { return /* binding */ GRAY_500; },
/* harmony export */   "eD": function() { return /* binding */ GRAY_600; },
/* harmony export */   "bE": function() { return /* binding */ LIGHT_GRAY_100; },
/* harmony export */   "NK": function() { return /* binding */ LIGHT_GRAY_200; },
/* harmony export */   "LT": function() { return /* binding */ LIGHT_GRAY_300; },
/* harmony export */   "au": function() { return /* binding */ LIGHT_GRAY_400; }
/* harmony export */ });
/* unused harmony exports YELLOW, PURPLE */
const WHITE = "#FFF";
const BLACK = "#000";
const DRACULAR_BACKGROUND_LIGHT_DARK = "#383a59";
const DRACULAR_BACKGROUND_DEEP_DARK = "#282a36";
const YELLOW = "#F1FA8C";
const BLUE = "#8BE9FD";
const PINK = "#FF79C6";
const ORANGE = "#FFB86C";
const GREEN = "#3ee668";
const PURPLE = "#BD93F9";
const PURPLE_DARK = "#25253A";
const GRAY_100 = "#7a7a7a";
const GRAY_200 = "#505050";
const GRAY_300 = "#3c3c3c";
const GRAY_400 = "#333333";
const GRAY_500 = "#252526";
const GRAY_600 = "#1e1e1e";
const LIGHT_GRAY_100 = "#F3F3F3";
const LIGHT_GRAY_200 = "#EAEAEA";
const LIGHT_GRAY_300 = "#E1E1E1";
const LIGHT_GRAY_400 = "#D6D6D6";

/***/ }),

/***/ 6315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6617);

      
      
      
      

      
      const { processEnv } = __webpack_require__(8235)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(5430)

      const appMod = __webpack_require__(6813)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(9855)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(1904),
        notFoundModule: __webpack_require__(6890),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/blog/[...id]",
        buildId: "gVyFFqydsHLvukezBbiOD",
        escapedBuildId: "gVyFFqydsHLvukezBbiOD",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"4ed6f925bbf7f99869e4ee1e978e6d47",previewModeSigningKey:"6cc83866f415bf9853f7f29bf291b238c27bd8089d4dc483c2c7ff5051c3eb3b",previewModeEncryptionKey:"1b0bb87affb701cd12f8612b8cd054f04566dc02000ad2160e30170399ed00f7"}
      })
      
    

/***/ }),

/***/ 4293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 5532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 6417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 8614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 3700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 2087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 2413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 4304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [897,948], function() { return __webpack_require__(6315); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			591: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(897);
/******/ 			__webpack_require__.e(948);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;