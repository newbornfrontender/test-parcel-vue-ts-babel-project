<template>
  <div id="app">
    <home
      msg="Vue.js starter kit with Parcel + Typescript"
    />
    <ol>
      <li
        v-for="todo in todos"
        v-bind:key = "todo.id"
      >{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
'use strict';

import { Component, Vue } from 'vue-property-decorator';
import Home from './components/Home.vue';

@Component({
  data() {
    return {
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' },
      ],
    };
  },
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
