<template>
  <q-page padding>
    <!-- content -->
    <h4> Adicionar Categoria </h4>
    <q-input v-model="name" stack-label="Nome"/>

    <q-btn @click='insert()' color="primary" label="Adicionar"/>
    <q-btn label="Cancelar" to="/category/List"/>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {

    return {

      name: ''

    }

  },

  methods: {

    insert() {

      let params = new URLSearchParams();

      params.append('action', 'insert');
      params.append('name', this.name);

      this.$axios.post('http://localhost/projectallegra-master/indexCategory.php', params)
      .then((response) => {

        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Cadastrado com sucesso!'
        });
        this.$router.push('/category');

      });
     

    },//fechando insert

  }//fechando methods
}//fechando export default
</script>

<style>
</style>
