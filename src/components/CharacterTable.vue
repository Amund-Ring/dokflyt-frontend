<template>
  <div class="w-full bg-white">
    <!-- <div>Sorting by: {{ sortBy }}</div> -->
    <!-- <HiSelector /> -->
    <!-- <v-icon name="HiSelector" /> -->

    <table class="min-w-full">
      <thead>
        <tr>
          <th class="border-b-2 border-slate-300 py-5 text-slate-800 px-5 text-left font-bold cursor-pointer">
            Name
            <SortIcon :categoryName="'name'" :sortBy="sortBy" :sortDirection="sortDirection" />
          </th>
          <th class="border-b-2 border-slate-300 py-5 text-slate-800 px-5 text-left font-bold cursor-pointer">
            Race
            <SortIcon :categoryName="'race'" :sortBy="sortBy" :sortDirection="sortDirection" />
          </th>
          <th class="border-b-2 border-slate-300 py-5 text-slate-800 px-5 text-left font-bold cursor-pointer">
            Class
            <SortIcon :categoryName="'class'" :sortBy="sortBy" :sortDirection="sortDirection" />
          </th>
          <th class="border-b-2 border-slate-300 py-5 text-slate-800 px-5 pr-8 text-center font-bold cursor-pointer">
            Level
            <SortIcon :categoryName="'level'" :sortBy="sortBy" :sortDirection="sortDirection" />
          </th>
          <th class="border-b-2 border-slate-300 py-5 text-slate-800 px-5 text-left font-bold cursor-pointer">
            Created At
            <SortIcon :categoryName="'createdAt'" :sortBy="sortBy" :sortDirection="sortDirection" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="character in characters"
          :key="character.name"
          class="even:bg-slate-100"
        >
          <td class="border-b py-4 px-5 text-left">{{ character.name }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.race }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.className }}</td>
          <td class="border-b py-4 px-5 pr-8 text-center">{{ character.level }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SortIcon from './SortIcon.vue';

  export default defineComponent({
    name: 'CharacterTable',
    components: {
      SortIcon
    },
    props: {
      characters: {
        type: Array as any,
        required: true
      },
      sortBy: String,
      sortDirection: String
    }
  });
</script>
