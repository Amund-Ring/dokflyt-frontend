<template>
  <div class="w-full  bg-white">
    <table class="min-w-full">
      <thead>
        <tr>
          <th class="border-b border-slate-300 py-4 px-5 text-left font-bold">Name</th>
          <th class="border-b border-slate-300 py-4 px-5 text-left font-bold">Race</th>
          <th class="border-b border-slate-300 py-4 px-5 text-left font-bold">Class</th>
          <th class="border-b border-slate-300 py-4 px-5 pr-8 text-center font-bold">
            Level
          </th>
          <th class="border-b border-slate-300 py-4 px-5 text-left font-bold">
            Created At
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="character in characters"
          :key="character.name"
          class="odd:bg-slate-100"
        >
          <td class="border-b py-3 px-5 text-left">{{ character.name }}</td>
          <td class="border-b py-3 px-5 text-left">{{ character.race }}</td>
          <td class="border-b py-3 px-5 text-left">{{ character.className }}</td>
          <td class="border-b py-3 px-5 pr-8 text-center">{{ character.level }}</td>
          <td class="border-b py-3 px-5 text-left">{{ character.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CharacterTable',
    props: {
      characters: {
        type: Array as any,
        required: true
      }
    }
  });
</script>
