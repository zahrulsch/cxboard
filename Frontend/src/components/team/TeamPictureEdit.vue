<script lang="ts" setup>
import SectionPanel from '../layout/SectionPanel.vue';
import { NFormItem, NImage, NIcon, NButton } from 'naive-ui'
import { Image16Regular, Delete16Regular } from '@vicons/fluent'
import { onMounted, ref, watch } from 'vue';
import { isHttpsUri } from 'valid-url'
import { tFileReader, tFileReaderDrop } from '../../helpers/fileReader';

// define data
const imageurl = ref('')
const dropText = ref('Drop gambar disini / Klik untuk memilih file')

// define props
const props = defineProps<{
  image?: ArrayBuffer | string
}>()

// define emits
const emit = defineEmits<{
  (e: 'update:image', i: string): void
}>()

// define methods
const ondelete = () => {
  emit('update:image', '')
  imageurl.value = ''
}

const ondrop = (e: DragEvent) => {
  dropText.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReaderDrop(e, {
    onSuccess: ({ base64Text, fileBlobUrl }) => {
      imageurl.value = fileBlobUrl
      emit('update:image', String(base64Text))
    }
  })
}

const onchange = (e: Event) => {
  dropText.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReader(e, {
    onSuccess: ({ base64Text, fileBlobUrl }) => {
      imageurl.value = fileBlobUrl
      emit('update:image', String(base64Text))
    }
  })
}

// define hooks
watch(() => props.image, (n) => {
  if (n) {
    if (isHttpsUri(String(n))) imageurl.value = String(n)
  }
}, { immediate: true })

onMounted(() => {
  if (props.image) {
    if (isHttpsUri(String(props.image))) imageurl.value = String(props.image)
  }
})
</script>

<template>
  <section-panel>
    <section-panel class="px-1 font-secondary">
      <n-form-item v-if="imageurl" :show-feedback="false" label="Gambar team">
        <div :style="{width: '100%', backgroundImage: `url(${imageurl})`}" v-if="imageurl" class="radius-5 bg-panel-primary iexist">
          <n-button
            type="error"
            size="small"
            class="clr"
            @click="ondelete"
          >
            <n-icon size="16">
              <delete16-regular />
            </n-icon>
          </n-button>
          <n-image 
            :src="imageurl"
            class="radius-5"
          />
        </div>
      </n-form-item>
      <n-form-item v-else :show-feedback="false" label="Gambar team">
        <div class="iunexist radius-5 bg-panel-primary">
          <input 
            type="file" 
            accept=".jpeg,.jpg,.png"
            @dragover.prevent="dropText = 'Lepaskan file'"
            @dragleave.prevent="dropText = 'Drop gambar disini / Klik untuk memilih file'"
            @drop.prevent="ondrop"
            @change.prevent="onchange"
          />
          <div class="gap-y-4">
            <n-icon size="25">
              <Image16Regular class="color-primary-6"/>
            </n-icon>
            <span class="size-5 has-text-centered font-secondary color-primary-5">{{ dropText }}</span>
          </div>
        </div>
      </n-form-item>
    </section-panel>
  </section-panel>
</template>

<style lang="scss" scoped>
.iexist {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(24, 24, 24, 0.233);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    -moz-backdrop-filter: blur(4px);
    -o-backdrop-filter: blur(4px);
    z-index: 0;
  }
  & > div {
    z-index: 1;
  }
  & .clr {
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
.iunexist {
  position: relative;
  width: 100%;
  padding-top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }
}
</style>