<script lang="ts" setup></script>

<template>

  <div>

    <Teleport to="body">
      <div v-if="false">
        Teleported DIV
      </div>
    </Teleport>

    <main>
      Layout content
      <slot/>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/page2">Page2</nuxt-link>
    </main>
  </div>

</template>
