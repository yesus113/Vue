<template>
  <div>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form-group">
        <h2>Formulario de Registro</h2>
        <div class="form">
          <label for="nombre">Nombre</label>
          <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
          <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div class="form">
          <label for="email">Correo</label>
          <Field type="email" name="email" id="email" placeholder="Ingrese su email"/>
          <ErrorMessage name="email"></ErrorMessage>
        </div>
        <div class="form">
          <button type="submit" class="btn btn-primary">Registrar</button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";
import {schema} from "@/components/modules/registro/schemas/validationSchema";

const onSubmit = () => {
  console.log('El formulario se envio correctamente');
}
</script>
<style scoped>
.form {
  margin-bottom: 10px;
}
</style>