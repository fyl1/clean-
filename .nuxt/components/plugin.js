import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Clean: () => import('../..\\src\\components\\clean.vue' /* webpackChunkName: "components/clean" */).then(c => wrapFunctional(c.default || c)),
  Galery: () => import('../..\\src\\components\\Galery.vue' /* webpackChunkName: "components/galery" */).then(c => wrapFunctional(c.default || c)),
  GalleryCard: () => import('../..\\src\\components\\galleryCard.vue' /* webpackChunkName: "components/gallery-card" */).then(c => wrapFunctional(c.default || c)),
  Intro: () => import('../..\\src\\components\\intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\src\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  OrderCleaning: () => import('../..\\src\\components\\orderCleaning.vue' /* webpackChunkName: "components/order-cleaning" */).then(c => wrapFunctional(c.default || c)),
  Plus: () => import('../..\\src\\components\\plus.vue' /* webpackChunkName: "components/plus" */).then(c => wrapFunctional(c.default || c)),
  SwitchButton: () => import('../..\\src\\components\\SwitchButton.vue' /* webpackChunkName: "components/switch-button" */).then(c => wrapFunctional(c.default || c)),
  Tab: () => import('../..\\src\\components\\tab.vue' /* webpackChunkName: "components/tab" */).then(c => wrapFunctional(c.default || c)),
  Tabs: () => import('../..\\src\\components\\tabs.vue' /* webpackChunkName: "components/tabs" */).then(c => wrapFunctional(c.default || c)),
  TheHeader: () => import('../..\\src\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c)),
  WhereClean: () => import('../..\\src\\components\\whereClean.vue' /* webpackChunkName: "components/where-clean" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
