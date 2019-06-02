<template>
  <q-page padding>
    
    <h4>editar categoria</h4>

    <q-input v-model="name" stack-label="Nome"/>

    <q-btn-group>
      <q-btn @click="update()" label="Atualizar" />
      <q-btn @click="destroy()" color="red-5" label="Remover" />
    </q-btn-group>




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

  mounted(){

    this.$axios.get('http://localhost/ProjectAllegra-master/indexCategory.php?action=show&cod='
     + this.$route.params.cod).then((response)=> {

      this.name = response.data.name;
      
    
    });

  },
 methods: {

    update(){
       
       let params = new URLSearchParams();
       params.append('action', 'update');
       params.append('cod', this.$route.params.cod);
       params.append('name', this.name);

        this.$axios.post('http://localhost/projectallegra-master/indexCategory.php', params).then((response) => {

        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Atualizado com sucesso!'
        })
        this.$router.push('/category');
      });
      },

      destroy(){

        this.$axios.get('http://localhost/ProjectAllegra-master/indexCategory.php?action=delete&cod=' + this.$route.params.cod).then((response) => {

          this.$q.dialog({
          title: 'Atenção',
          message: 'Removido com sucesso'

        });

        this.$router.push('/Category');


        });

      }
  }
}
</script>

<style>
</style>
