<template>
  <q-page padding>
    <h4> Cadastrar Usuario </h4>


    <q-input v-model="name" type="text" stack-label="Nome" />
    <q-input v-model="cpf" type="text" stack-label="Cpf" />
    <q-input v-model="address" type="text" stack-label="Endereço" />
    <q-input v-model="phone" type="number" stack-label="Telefone" />
    <q-input v-model="email" type="email" stack-label="Email" />
    <q-input v-model="password" type="password" stack-label="Senha" />
    <q-select v-model="genre" float-label="Genero"  radio :options="selectOptionsGenre"/> <br>

    
    <q-btn @click="insert()" label="Salvar" color="primary" />
    <q-btn @click="insert()" label="Voltar"/>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {
    
    return {

      name: '',
      cpf: '',
      address: '',
      phone: '',
      email: '',
      password: '',
      genre:'',
      selectOptionsGenre: [
        {
          label: 'Masculino',
          value: 'Masculino'
        },
        {
          label: 'Feminino',
          value: 'Feminino'
        }
        ]
    
    }
  },

  methods:{
    insert() {
      let params = new URLSearchParams();
      params.append('action','insert');
      params.append('name', this.name);
      params.append('cpf',this.cpf);
      params.append('address',this.address);
      params.append('phone', this.phone);
      params.append('email',this.email);
      params.append('password', this.password);
      params.append('genre',this.genre);

       this.$axios.post('http://localhost/projectallegra-master/indexUsers.php', params)
      .then((response) => {
        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Cadastrado com sucesso!'
        })
        this.$router.push('/users');
      });
    }//closed insert
  }//closed method

}//closed export default

</script>

<style>
</style>
