import { wrapFunctional } from './utils'

export { default as Clean } from '../..\\src\\components\\clean.vue'
export { default as Galery } from '../..\\src\\components\\Galery.vue'
export { default as GalleryCard } from '../..\\src\\components\\galleryCard.vue'
export { default as Intro } from '../..\\src\\components\\intro.vue'
export { default as Logo } from '../..\\src\\components\\Logo.vue'
export { default as OrderCleaning } from '../..\\src\\components\\orderCleaning.vue'
export { default as Plus } from '../..\\src\\components\\plus.vue'
export { default as SwitchButton } from '../..\\src\\components\\SwitchButton.vue'
export { default as Tab } from '../..\\src\\components\\tab.vue'
export { default as Tabs } from '../..\\src\\components\\tabs.vue'
export { default as TheHeader } from '../..\\src\\components\\TheHeader.vue'
export { default as WhereClean } from '../..\\src\\components\\whereClean.vue'

export const LazyClean = import('../..\\src\\components\\clean.vue' /* webpackChunkName: "components/clean" */).then(c => wrapFunctional(c.default || c))
export const LazyGalery = import('../..\\src\\components\\Galery.vue' /* webpackChunkName: "components/galery" */).then(c => wrapFunctional(c.default || c))
export const LazyGalleryCard = import('../..\\src\\components\\galleryCard.vue' /* webpackChunkName: "components/gallery-card" */).then(c => wrapFunctional(c.default || c))
export const LazyIntro = import('../..\\src\\components\\intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\src\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyOrderCleaning = import('../..\\src\\components\\orderCleaning.vue' /* webpackChunkName: "components/order-cleaning" */).then(c => wrapFunctional(c.default || c))
export const LazyPlus = import('../..\\src\\components\\plus.vue' /* webpackChunkName: "components/plus" */).then(c => wrapFunctional(c.default || c))
export const LazySwitchButton = import('../..\\src\\components\\SwitchButton.vue' /* webpackChunkName: "components/switch-button" */).then(c => wrapFunctional(c.default || c))
export const LazyTab = import('../..\\src\\components\\tab.vue' /* webpackChunkName: "components/tab" */).then(c => wrapFunctional(c.default || c))
export const LazyTabs = import('../..\\src\\components\\tabs.vue' /* webpackChunkName: "components/tabs" */).then(c => wrapFunctional(c.default || c))
export const LazyTheHeader = import('../..\\src\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyWhereClean = import('../..\\src\\components\\whereClean.vue' /* webpackChunkName: "components/where-clean" */).then(c => wrapFunctional(c.default || c))
