<script lang="ts">
import { defineComponent } from 'vue'
import { NInput, NButton, NIcon, useMessage } from 'naive-ui'
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
      notif: useMessage()
    }
  },
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  methods: {
    login: function() {
      requester<LoginResponse, ErrorLogin>('/users/login', 'post', {
        email: this.email,
        password: this.password
      }, {
        onSuccess: data => {
          console.log(data.data.accessToken)
          this.$router.push('/')
        },
        onError: err => {
          if (err) {
            this.notif.error(err.message)
          } else {
            this.notif.error('Error tidak terprediksi')
          }
        },
        onLoading: v => this.loading = v
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
        <label class="has-text-weight-light size-3 font-secondary">Nama Pengguna</label>
        <n-input 
          :bordered="false"
          placeholder="username"
          class="size-3 font-secondary"
          v-model:value="email"
        />
      </div>
      <div class="input-panel">
        <label class="has-text-weight-light size-3 font-secondary">Kata Sandi</label>
        <n-input 
          :bordered="false"
          placeholder="••••••••"
          class="size-3 font-secondary"
          type="password"
          v-model:value="password"
          show-password-on="click"
        />
      </div>
      <n-button
        type="primary"
        @click="login"
        size="medium"
        :loading="loading"
      >
        <template #icon>
          <n-icon>
            <arrow-circle-right16-regular />
          </n-icon>          
        </template>
        <span class="font-secondary size-4">Masuk</span>
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