<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <SideMenuComponent />
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SideMenuComponent from '@/components/SideMenuComponent.vue';
</script>