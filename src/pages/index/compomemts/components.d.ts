import { YimingSwiper } from '@/components/YimingSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    YimingSwiper: typeof YimingSwiper
  }
}
