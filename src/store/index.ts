import { ProductState } from '@/store/types'
export const state: ProductState = {
  products: [
    {
      id: 1,
      name: '赤ペン',
      price: 180,
      description: '滑らかな書き心地です。',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
    {
      id: 2,
      name: 'シャープペン',
      price: 450,
      description: 'ペン先が回転し、常に尖った状態をキープします',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
    {
      id: 3,
      name: '消しゴム',
      price: 100,
      description: '軽い力でも消せる消しゴムです',
      image: 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png',
    },
  ],
}