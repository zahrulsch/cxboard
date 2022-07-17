<script lang="ts">
import { defineComponent } from 'vue';
import { NFormItem, NIcon, NImage, useNotification, NButton } from 'naive-ui';
import { Image20Regular, Delete16Filled } from '@vicons/fluent'
import { tFileReader, tFileReaderDrop } from '../../helpers/fileReader';
import { useEditEmployeePayload } from '../../stores/editEmployeePayload';

export default defineComponent({
  name: 'EmployeePhotoReplace',
  components: {
    NFormItem,
    Image20Regular,
    NIcon,
    NImage,
    NButton,
    Delete16Filled
  },
  setup: function() {
    return {
      edit: useEditEmployeePayload(),
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
          this.edit.photo = String(data.base64Text)
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
          this.edit.photo = String(data.base64Text)
        }
      })
    },
    erase: function() {
      this.imageUrl = ''
      this.edit.photo = ''
    }
  },
  watch: {
    'edit.photo': {
      handler: function(photo: string) {
        if (photo) {
          this.imageUrl = photo
        }
      },
      immediate: true
    }
  },
  computed: {
    imgurl: function() {
      if (this.imageUrl) return `url("${this.imageUrl}")`
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-form-item label="Photo Karyawan" :show-feedback="false" :label-props="{class: 'size-5 font-primary'}">
      <div v-if="!imageUrl" class="upload">
        <label for="pic" id="label-pic">
          <n-icon size="40" class="color-secondary-0">
            <Image20Regular />
          </n-icon>
          <span class="font-secondary size-5 has-text-weight-light color-secondary-0">{{dropText}}</span>
        </label>
        <input @change="change" @drop="drop" @dragover.prevent="dropText = 'Lepaskan file'" @dragleave.prevent="dropText = 'Drop file disini / Klik untuk memilih foto'" id="pic" type="file" accept=".png,.jpeg" />
      </div>
      <div class="upload-preview" v-else>
        <n-button
          class="upload-preview-eraser"
          type="error"
          size="small"
          @click="erase"
        >
          <n-icon>
            <delete16-filled />
          </n-icon>
        </n-button>
        <n-image 
          :src="imageUrl"
          class="imgs"
          object-fit="contain"
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
    display: flex;
    width: 100%;
    padding-top: 100%;
    background-image: v-bind(imgurl);
    background-position: center;
    background-size: cover;
    &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.829);
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      @include ua('backdrop-filter', 'blur(6px)')
    }
    & .imgs {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: max-content;
    }
    &-eraser {
      position: absolute;
      margin: 5px 0 0 5px;
      top: 0;
      z-index: 2;
    }
  }
}
</style>