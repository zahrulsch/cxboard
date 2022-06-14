<script lang="ts">
import { defineComponent } from 'vue'
import { NInput, NButton, NIcon, useNotification } from 'naive-ui'
import { ArrowCircleRight16Regular } from '@vicons/fluent'
import { requester } from '../apis/generalRequester'

interface LoginResponse {
  data: { accessToken: string }
}

interface ErrorLogin {
  code: number
  status: string
  message: any
}

export default defineComponent({
  name: 'Login',
  components: {
    NInput,
    NButton,
    NIcon,
    ArrowCircleRight16Regular
  },
  setup: function() {
    return {
      notif: useNotification()
    }
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login: function() {
      requester<LoginResponse, ErrorLogin>('/users/login', 'post', {
        email: this.email,
        password: this.password
      }, {
        onSuccess: data => {
          console.log(data.data.accessToken)
        },
        onError: err => {
          if (err) {
            this.notif.error({
              title: 'Login gagal',
              description: `${err.status} - ${err.message}`,
              meta: `errorcode: ${err.code}`,
              closable: true,
              duration: 3000
            })
          } else {
            
          }
        },
        onLoading: console.log
      })
    }
  }
})
</script>

<template>
  <div class="login">
    <div class="login-panel bg-panel-primary px-4 py-4">
      <h3 class="text-center has-text-weight-bold is-size-5">CXBoard</h3>
      <div class="input-panel">
        <label class="has-text-weight-light size-7 font-secondary">Nama Pengguna</label>
        <n-input 
          :bordered="false"
          placeholder="username"
          class="size-7 font-secondary"
          v-model:value="email"
          size="small"
        />
      </div>
      <div class="input-panel">
        <label class="has-text-weight-light size-7 font-secondary">Kata Sandi</label>
        <n-input 
          :bordered="false"
          placeholder="password"
          class="size-7 font-secondary"
          type="password"
          v-model:value="password"
          show-password-on="click"
          size="small"
        />
      </div>
      <n-button
        type="primary"
        @click="login"
        size="small"
      >
        <template #icon>
          <n-icon>
            <arrow-circle-right16-regular />
          </n-icon>          
        </template>
        <span class="font-secondary">Masuk</span>
      </n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin flexColumn {
  display: flex;
  flex-direction: column;
}
.login {
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  &-panel {
    align-items: center;
    row-gap: 1em;
    width: 100%;
    @include flexColumn;
    @include res('small') {
      width: 40%;
    }
    @include res('large') {
      width: 30%;
    }
    @include res('xlarge') {
      width: 21%;
    }
    @include res('xxlarge') {
      width: 18%;
    }

    &> * {
      width: 100%;
    }
  }
}

.input-panel {
  @include flexColumn;
  row-gap: .5em;
}
</style>