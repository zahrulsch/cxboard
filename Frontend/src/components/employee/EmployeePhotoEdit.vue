<script lang="ts">
import { defineComponent } from 'vue';
import { NFormItem, NIcon, NImage, useNotification } from 'naive-ui';
import { Image20Regular, Eraser24Filled } from '@vicons/fluent'
import { tFileReader, tFileReaderDrop } from '../../helpers/fileReader';
import { useAddEmployeePayload } from '../../stores/addEmployeePayload';

export default defineComponent({
  name: 'EmployeePhotoEdit',
  components: {
    NFormItem,
    Image20Regular,
    NIcon,
    NImage,
    Eraser24Filled
  },
  setup: function() {
    return {
      payload: useAddEmployeePayload(),
      message: useNotification()
    }
  },
  data: () => ({
    dropText: 'Drop file disini / Klik untuk memilih foto',
    imageUrl: ''
  }),
  methods: {
    drop: function(e: DragEvent) {
      this.dropText = 'Drop file disini / Klik untuk memilih foto'
      tFileReaderDrop(e, {
        onError: err => this.message.error({
          title: 'File Reader Error',
          description: err,
          closable: true,
          duration: 3000
        }),
        onSuccess: data => {
          this.imageUrl = data.fileBlobUrl
          this.payload.photo = String(data.base64Text)
        }
      })
    },
    change: function(e: Event) {
      this.dropText = 'Drop file disini / Klik untuk memilih foto'
      tFileReader(e, {
        allow: ['image/jpeg', 'image/png'],
        onError: err => this.message.error({
          title: 'File Reader Error',
          description: err,
          closable: true,
          duration: 3000
        }),
        onSuccess: data => {
          this.imageUrl = data.fileBlobUrl
          this.payload.photo = String(data.base64Text)
        }
      })
    },
    erase: function() {
      this.imageUrl = ''
      delete this.payload.photo
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-form-item label="Photo Karyawan" :show-feedback="false" :label-props="{class: 'size-3'}">
      <div v-if="!imageUrl" class="upload">
        <label for="pic" id="label-pic" class="radius-4">
          <n-icon size="40" class="color-secondary-0">
            <Image20Regular />
          </n-icon>
          <span class="font-secondary size-5 has-text-weight-light color-secondary-0">{{dropText}}</span>
        </label>
        <input @change="change" @drop="drop" @dragover.prevent="dropText = 'Lepaskan file'" @dragleave.prevent="dropText = 'Drop file disini / Klik untuk memilih foto'" id="pic" type="file" accept=".png,.jpeg" />
      </div>
      <div class="upload-preview radius-5" v-else>
        <n-icon
          class="is-clickable has-text-danger upload-preview-eraser"
          @click="erase"
          size="16"
        >
          <Eraser24Filled />
        </n-icon>
        <n-image 
          :src="imageUrl"
          class="upload-preview-image radius-5"
        />
      </div>
    </n-form-item>
  </div>
</template>

<style scoped lang="scss">
#label-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg-primary);
  width: 100%;
  height: 300px;
}
.upload {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  & > input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }

  &-preview {
    position: relative;
    width: 100%;
    background-image: url('v-bind(imageUrl)');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    background-color: var(--bg-primary);
    &-eraser {
      position: absolute;
      background-color: white;
      padding: 5px;
      width: max-content;
      height: max-content;
      margin: 5px 0 0 5px;
      border-radius: 5px;
      top: 0;
      left: 0;
    }

  }
}
</style>