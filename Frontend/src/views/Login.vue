<script lang="ts">
import { defineComponent } from 'vue'
import { NInput, NButton, NIcon, useMessage } from 'naive-ui'
import { ArrowCircleRight16Regular } from '@vicons/fluent'
import { useCMutation } from '../apis/customMutation'
import { setInterceptor } from '../apis/client'
import { capitalized } from '../helpers/capitalized'
import cxboard from '../assets/ruangcxo.png'

export default defineComponent({
  name: 'Login',
  components: {
    NInput,
    NButton,
    NIcon,
    ArrowCircleRight16Regular
  },
  setup: function() {
    const { data, isLoading, mutateAsync } = useCMutation('login', '/users/login/', 'POST')
    return {
      notif: useMessage(),
      data,
      isLoading,
      mutateAsync,
      cxboard
    }
  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login: function() {
      this.mutateAsync({ email: this.email, password: this.password }, {
        onSuccess: ({ data }) => {
          localStorage.setItem('cx_token', data.accessToken)
          setInterceptor({ Authorization: data.accessToken })
          this.$router.push('/')
        },
        onError: e => {
          if (typeof e.message === 'string') {
            this.notif.error(capitalized(e.message))
          } else {
            this.notif.error('unpredictable error!')
          }
        }
      })
    }
  }
})
</script>

<template>
  <div class="login">
    <div class="login-panel bg-panel-primary px-4 py-4">
      <img :src="cxboard" title="ruangcxo" style="width: 72px;"/>
      <div class="input-panel">
        <label class="has-text-weight-normal color-primary-1 size-5 font-primary">Email Pengguna</label>
        <n-input 
          :bordered="false"
          placeholder="email@gmail.com"
          class="size-3 font-secondary"
          v-model:value="email"
          @keypress.enter="login"
        />
      </div>
      <div class="input-panel">
        <label class="has-text-weight-normal color-primary-1 size-5 font-primary">Kata Sandi</label>
        <n-input 
          :bordered="false"
          placeholder="••••••••"
          class="size-3 font-secondary"
          type="password"
          v-model:value="password"
          show-password-on="click"
          @keypress.enter="login"
        />
      </div>
      <n-button
        type="warning"
        size="medium"
        :loading="isLoading"
        @click="login"
      >
        <span class="font-secondary size-4 has-text-weight-semibold">Masuk</span>
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
  align-items: center;
  justify-content: center;

  @include res('small') {
    padding: 1rem;
  }

  &-panel {
    align-items: center;
    justify-content: center;
    row-gap: 1em;
    width: 100%;
    height: 100%;
    @include flexColumn;
    @include res('small') {
      width: 40%;
      height: auto;
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
.cxboard {
  color: #55c09c;
}
.input-panel {
  @include flexColumn;
  row-gap: .5em;
}
</style>