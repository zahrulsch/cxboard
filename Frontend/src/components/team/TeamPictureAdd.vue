<script setup lang="ts">
import { NImage, NIcon, useNotification, NButton } from 'naive-ui'
import { Image20Regular, Eraser20Filled } from '@vicons/fluent'
import { ref } from 'vue';
import { tFileReader, tFileReaderDrop } from '../../helpers/fileReader';
import { useAddTeamPayload } from '../../stores/addTeamPayload';

const dropText = ref('Drop gambar disini / Klik untuk memilih file')
const imgurl = ref('')
const notif = useNotification()
const team = useAddTeamPayload()

const ondrop = (e: DragEvent) => {
  dropText.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReaderDrop(e, {
    onError: e => notif.error({
      closable: true,
      title: 'File reader error',
      description: e,
      meta: `[${new Date().getTime()}] - file drop error, try again!`,
      duration: 2750
    }),
    onSuccess: ({ base64Text, fileBlobUrl }) => {
      imgurl.value = fileBlobUrl
      team.image = base64Text
    }
  })
}

const onchange = (e: Event) => {
  dropText.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReader(e, {
    onSuccess: ({ base64Text, fileBlobUrl }) => {
      imgurl.value = fileBlobUrl
      team.image = base64Text
    },
    onError: e => notif.error({
      closable: true,
      title: 'File reader error',
      description: e,
      meta: `[${new Date().getTime()}] - file drop error, try again!`,
      duration: 2750
    }),
    allow: ['image/jpeg', 'image/png'],
  })
}

const onDelete = () => {
  team.image = ''
  imgurl.value = ''
}
</script>

<template>
  <div class="is-flex is-flex-direction-column gap-y-4 t-create">
    <h4 class="size-2">Gambar profil team</h4>
    <div v-if="!imgurl" class="pic-input-box bg-panel-primary gap-y-4 radius-5 p-3">
      <input 
        @dragover="dropText = 'Lepaskan file'" 
        @dragleave="dropText = 'Drop gambar disini / Klik untuk memilih file'"
        @drop="ondrop"
        @change="onchange"
        type="file"
        accept=".jpeg,.jpg,.png"
      />
      <n-icon size="28">
        <image20-regular class="color-secondary-1" />
      </n-icon>
      <span class="font-secondary size-5 color-secondary-0 px-4">{{dropText}}</span>
    </div>
    <div class="preview radius-5" v-else>
      <n-button
        type="warning"
        size="small"
        class="preview-button"
        @click="onDelete"
      >
        <n-icon>
          <eraser20-filled />
        </n-icon>
      </n-button>
      <n-image 
        :src="imgurl"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  position: relative;
  display: flex;
  &-button {
    position: absolute;
    margin: 5px;
  }
}
.t-create h4 {
  padding-inline: .175em;
}

.t-create .pic-input-box {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  flex-direction: column;
  position: relative;
  
  @include res('small') {
    min-height: 220px;
  }
  @include res('medium') {
    height: 250px;
  }
  @include res('large') {
    height: 260px;
  }
  @include res('xlarge') {
    height: 280px;
  }
  @include res('xxlarge') {
    height: 300px;
  }

  & span {
    text-align: center;
  }

  & input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0;
  }
}
</style>