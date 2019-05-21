<template>
  <q-page padding>
    <h3> Cadastrar Usuario </h3>

    <q-input v-model="text" stack-label="Nome" />
    <q-radio v-model="option" val="opt1" label="Masculino " />
    <q-radio v-model="option" val="opt2" label="Feminino" />
    <q-input v-model="numero" type="number" stack-label="CPF" />
    <q-input v-model="numero" type="number" stack-label="Telefone" />
    <q-input v-model="text" stack-label="Endereço" />
    <q-input v-model="text" type="email" stack-label="Email" />
    <q-input v-model="text" type="password" float-label="Senha" />
    <q-input v-model="text" type="password" float-label="Repetir senha" />

    <q-btn color="primary" label="Salvar" />
    <q-btn label="Cancelar"/>
    
    
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
