import { Module } from 'vuex'
import { RootState, ProductState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

/** state */
export const state: any = {
  products: [],
  productDetail: null,
}

export const products: Module<ProductState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
