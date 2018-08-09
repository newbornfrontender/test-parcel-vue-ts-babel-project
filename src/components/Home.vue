<template>
  <div class="home-container">
    <h1
      v-on:click="visible = !visible"
    >{{ msg }}</h1>
    <img
      v-if="visible"
      src="../assets/img/vue-logo.png"
      alt="Vue Logo"
    >
  </div>
</template>

<script lang="ts">
'use strict';

import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
// export default class Home extends Vue {
//   @Prop() private msg!: string;
// };

@Component({
  data() {
    return {
      visible: true,
    };
  },
})
export default class Home extends Vue {
  @Prop()
  msg!: string;
}
</script>

<style lang="scss">
.home-container {
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-top: 60px;
}

img {
  height: 400px;
  width: 400px;
}
</style>
