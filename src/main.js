import './assets/scss/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// layout 관련요소
import PortalHeader from '@/components/portal/PortalHeader.vue'
import PortalContent from '@/components/portal/PortalContent.vue'
import PortalFooter from '@/components/portal/PortalFooter.vue'

const app = createApp(App)

app.component('PortalHeader', PortalHeader)
app.component('PortalContent', PortalContent)
app.component('PortalFooter', PortalFooter)

app.use(createPinia())
app.use(router)

app.mount('#app')
