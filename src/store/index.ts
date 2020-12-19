import { StoreOptions } from 'vuex'
import { RootState } from './types'
import { products } from './Product'

export const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    products,
  },
}
