<script lang="ts" setup>
const {data} = await useFetch(() => '/api/profile', {
  key: 'userdata',
  headers: useRequestHeaders(['cookie']),
})
</script>

<template>
  <nuxt-layout name="cabinet">
    <div>
      Home.
      Profile: {{data}}
    </div>
  </nuxt-layout>
</template>

<style scoped></style>
