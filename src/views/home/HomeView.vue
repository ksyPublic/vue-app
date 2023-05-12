<script setup>
import { ref, inject } from 'vue'

const userId = ref('')
const userPassword = ref('')
const messages = inject('messages')

console.log('???', messages.ko.input.id)
</script>

<template>
  <ui-box>
    <ui-input :placeholder="messages.ko.input.id" :v-modal="userId" text="아이디"></ui-input>
    <ui-input
      type="password"
      :placeholder="messages.ko.input.password"
      :v-modal="userPassword"
      text="패스워드"
    ></ui-input>
    <ui-input type="text" :placeholder="messages.ko.input.password" text="아항"></ui-input>
  </ui-box>
</template>
