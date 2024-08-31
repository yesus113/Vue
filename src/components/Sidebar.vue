<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/ListaDeTareas">Lista De Tareas</router-link></li>
      <li><router-link to="/h">Hola</router-link></li>
      <li><router-link to="/registrar">Registrar</router-link></li>
    </ul>

  </div>
</template>

<script setup>
</script>

<style>
.sidebar {
  width: 200px;
  background: white;
  padding: 20px;
}
</style>