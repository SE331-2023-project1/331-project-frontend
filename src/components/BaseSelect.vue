<template>
    <label v-if="label">{{ label }}</label>
    <select
      class="field"
      :value="modelValue"
      v-bind="$attrs"
      @input="emit('update:modelValue',($event.target as HTMLInputElement))"
      >
        <option
          v-for="option in options"
          :value="option.id"
          :key="option.id"
          :selected="option.id === modelValue"
        >{{ option.name }}</option>
      </select>
  </template>
  
  <script setup lang="ts">
import type { StudentAdvisor } from '@/student';
import type { PropType } from 'vue';
const emit = defineEmits(['update:modelValue'])
  defineProps({
   
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number, Object],
        default: ''
      },
      options: {
        type: Object as PropType<StudentAdvisor[]>,
        required: true
      }
    
  })
  </script>