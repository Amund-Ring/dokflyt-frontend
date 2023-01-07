<!-- Jeg ønsket å bruke denne komponenten for de 2 dropdown-menyene. Det fungerte, men det var ikke mulig å vise placeholder-tekst ved å bruke komponenten. -->
<template class>
  <div class="h-full grow">
    <select
      value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="h-full w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-blue-300 focus:ring-blue-100"
    >
      <option value selected>Select Race</option>
      <option v-for="option in options">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DropdownMenu',
    props: {
      options: {
        type: Array as any,
        required: true
      },
      modelValue: String
    }
  });
</script>
