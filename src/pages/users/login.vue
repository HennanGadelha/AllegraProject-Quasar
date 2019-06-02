<template>
  <q-page padding>

   

    <div>
      <q-input v-model="email" type="email" stack-label="Email" />
      <q-input v-model="password" type="password" stack-label="Senha" /> <br>

      <q-btn @click="logar()" label="Logar" color="primary" />
      <q-btn  label="voltar" to="/users"/>
    </div>


  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted(){

    this.$axios.get('http://localhost/ProjectAllegra-master/indexUsers.php?action=show&cod='
     + this.$route.params.cod).then((response)=> {

});

  },

  methods:{
    logar(){
      let params = new URLSearchParams();
      params.append('action', 'login');
      params.append('cod', this.$route.params.cod);
      params.append('email',this.email);
      params.append('password', this.password);
      
      this.$axios.post('http://localhost/projectallegra-master/indexUsers.php', params)
      .then((response) => {
        console.log(response);
      });
    }
  }
}
</script>

<style>

div {

text-align: center;


}


</style>
