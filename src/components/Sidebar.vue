<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <router-link to="/Contador">Contador</router-link>
    <router-link to="/ListaDeTareas">ListaDeTareas</router-link>
  </div>
</template>

<script setup></script>

<style >
  .sidebar{
    width: 200px;
    background: white;
    padding: 20px;
  }
</style>