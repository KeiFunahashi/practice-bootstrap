import { Module } from 'vuex'
import { RootState, ProductState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export const state: ProductState = {
  products: [
    {
      id: 1,
      title: '赤ペン',
      price: 180,
      description: '滑らかな書き心地です。',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
    {
      id: 2,
      title: 'シャープペン',
      price: 450,
      description: 'ペン先が回転し、常に尖った状態をキープします',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
    {
      id: 3,
      title: '消しゴム',
      price: 100,
      description: '軽い力でも消せる消しゴムです',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
  ],
}

export const products: Module<ProductState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
