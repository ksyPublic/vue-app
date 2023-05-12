<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  format: {
    type: Function,
    default: null
  },
  type: String,
  placeholder: String,
  name: String,
  disabled: Boolean,
  readonly: Boolean,
  text: String,
  invalid: Boolean,
  reset: {
    type: Boolean,
    default: true
  },
  modelValue: {
    required: true,
    type: String,
    default: ''
  }
})

const showType = ref(props.type || 'text')
const uniqueID = uuidv4().slice(0, 8)
const emit = defineEmits(['update:modelValue', 'input'])
const onInput = (event) => {
  const { value } = event.target
  event.target.value = props.format ? props.format(value) : value
  emit('update:modelValue', event.target.value)
  emit('input', event.target.value)
}
</script>

<template>
  <div class="ui-input-div">
    <label :for="uniqueID" class="ui-input-text" v-if="text">{{ text }}</label>
    <input
      class="ui-input"
      :type="showType"
      :id="uniqueID"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="onInput"
    />
    <slot />
    <button
      type="text"
      class="ui-input-button"
      v-if="modelValue !== '' && !disabled && !readonly && reset"
    ></button>
  </div>
</template>

<style lang="scss">
.ui-input-div {
  position: relative;

  + .ui-input-div {
    margin-top: 20px;
  }
}

.ui-input-text {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  + .ui-input {
    margin-top: 10px;
  }
}
.ui-input {
  width: 100%;
  border: 1px solid #e3e3e3;
  height: 50px;
  color: #222;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 12px;
  &::placeholder {
    color: #999;
  }
}
</style>
