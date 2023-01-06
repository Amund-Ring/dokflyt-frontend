<template>

  
  
  <div class="flex h-full min-h-screen w-screen flex-col items-center bg-blue-100 py-32">

    <DropdownMenu :options="raceOptions" />


    <div class="w-9/12 overflow-hidden rounded-lg border-2 border-slate-300">
      <div class="w-full border-b border-slate-400 bg-white p-6">
        <input
          type="text"
          v-model="search"
          placeholder="🔎   Search"
          class="w-36 rounded-lg border-2 border-slate-300 px-3 py-2 text-center text-sm"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='🔎   Search name'"
        />

        

      </div>

      <CharacterTable :characters="filteredCharacters" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CharacterTable from './components/CharacterTable.vue';
  import DropdownMenu from './components/DropdownMenu.vue';
  import characterData from './data/characterData.json';

  interface Character {
    name: string;
    race: string;
    className: string;
    level: number;
    createdAt: string;
  }

  export default defineComponent({
    name: 'App',
    components: {
      CharacterTable,
      DropdownMenu
    },
    data() {
      return {
        search: '',
        characters: characterData,
        raceOptions: ['Human', 'Dwarf', 'Elf'],
        selectedRace: ''
      };
    },
    computed: {
      filteredCharacters(): Character[] {
        return this.characters.filter(character =>
          character.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  });
</script>
