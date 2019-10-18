import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1110f479 = () => interopDefault(import('../pages/blocks/index.vue' /* webpackChunkName: "pages/blocks/index" */))
const _039e0d6a = () => interopDefault(import('../pages/template.vue' /* webpackChunkName: "pages/template" */))
const _5f44d0f0 = () => interopDefault(import('../pages/transactions/index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _18c3c494 = () => interopDefault(import('../pages/validators/index.vue' /* webpackChunkName: "pages/validators/index" */))
const _28616ec7 = () => interopDefault(import('../pages/account/_address.vue' /* webpackChunkName: "pages/account/_address" */))
const _cd8b8fa6 = () => interopDefault(import('../pages/blocks/_height.vue' /* webpackChunkName: "pages/blocks/_height" */))
const _0eb9e323 = () => interopDefault(import('../pages/transactions/_hash.vue' /* webpackChunkName: "pages/transactions/_hash" */))
const _4b4ebf01 = () => interopDefault(import('../pages/validators/_validator.vue' /* webpackChunkName: "pages/validators/_validator" */))
const _183173dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/blocks",
      component: _1110f479,
      name: "blocks"
    }, {
      path: "/template",
      component: _039e0d6a,
      name: "template"
    }, {
      path: "/transactions",
      component: _5f44d0f0,
      name: "transactions"
    }, {
      path: "/validators",
      component: _18c3c494,
      name: "validators"
    }, {
      path: "/account/:address?",
      component: _28616ec7,
      name: "account-address"
    }, {
      path: "/blocks/:height",
      component: _cd8b8fa6,
      name: "blocks-height"
    }, {
      path: "/transactions/:hash",
      component: _0eb9e323,
      name: "transactions-hash"
    }, {
      path: "/validators/:validator",
      component: _4b4ebf01,
      name: "validators-validator"
    }, {
      path: "/",
      component: _183173dc,
      name: "index"
    }],

    fallback: false
  })
}
