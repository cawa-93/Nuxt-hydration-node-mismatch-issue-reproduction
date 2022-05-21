<script lang="ts" setup>
const {data} = await useFetch(() => '/api/profile')
</script>

<template>
  <div>
    <Teleport to="body">
      <div v-if="false">
        Teleported DIV
      </div>
    </Teleport>
    <div>
      Home.
      {{data}}
    </div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/page2">Page2</nuxt-link>
  </div>
</template>

<style scoped></style>
