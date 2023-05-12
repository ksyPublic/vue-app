import './assets/scss/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import message from './locales/message'

import App from './App.vue'
import router from './router'

// layout 관련요소
import PortalHeader from '@/components/portal/PortalHeader.vue'
import PortalContent from '@/components/portal/PortalContent.vue'
import PortalFooter from '@/components/portal/PortalFooter.vue'

const app = createApp(App)

import { UiInput, UiBox } from '@/components'

//layout
app.component('PortalHeader', PortalHeader)
app.component('PortalContent', PortalContent)
app.component('PortalFooter', PortalFooter)

app.component('UiInput', UiInput)
app.component('UiBox', UiBox)

app.use(createPinia())
app.use(router)
app.provide('messages', message)

app.mount('#app')
