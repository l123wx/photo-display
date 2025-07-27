<script setup lang="ts">
import exifr from 'exifr'
import { defineAsyncComponent, h } from 'vue'

const props = defineProps<{
  imagePath: string
}>()

const makeMap = {
  nikon: './nikon.png',
  canon: './canon.png',
  apple: './apple.png',
  fujifilm: './fujifilm.png',
  sony: './sony.png',
  leica: './leica.png',
  panasonic: './panasonic.png',
  olympus: './olympus.png',
}
function getLogo(make: string) {
  if (!make)
    return null

  const lowerCaseMake = make.toLocaleLowerCase()

  const logo = Object.keys(makeMap).find(key => lowerCaseMake.includes(key))
  return logo ? makeMap[logo as keyof typeof makeMap] : null
}

const AsyncComp = defineAsyncComponent(async () => {
  // ...从服务器获取组件
  const output = await exifr.parse(props.imagePath)

  if (!output) {
    return h('div')
  }

  return h('div', {
    class: 'info',
    style: {
      color: '#fff',
      fontWeight: 'lighter',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 0',
      zIndex: 1,
    },
  }, [
    h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' } }, [
      getLogo(output.Make) && h('img', { src: getLogo(output.Make), style: { height: '16px' } }),
      output.Model && h('span', `${output.Model}`),
    ]),
    h('div', {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
    }, [
      output.FocalLength && `${output.FocalLength}mm`,
      output.FNumber && `F${output.FNumber}`,
      output.ExposureTime && `1/${Math.round(1 / output.ExposureTime)}s`,
      output.ISO && `ISO${output.ISO}`,
    ].map(text => text && h('span', text))),
  ])
})
</script>

<template>
  <AsyncComp />
</template>
