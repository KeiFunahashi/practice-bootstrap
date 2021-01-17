/* eslint-disable @typescript-eslint/no-unused-vars */
import * as C from '@/common/constants/'

// @ts-ignore
export default (context: Context, inject: any): void => {
  inject('C', C)
}
