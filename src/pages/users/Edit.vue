<template>
  <q-page padding>
    <!-- content -->
     <h4> Atualizar Usuario </h4>


    <q-input v-model="name" type="text" stack-label="Nome" />
    <q-input v-model="cpf" type="text" stack-label="Cpf" />
    <q-input v-model="address" type="text" stack-label="Endereço" />
    <q-input v-model="phone" type="number" stack-label="Telefone" />
    <q-input v-model="email" type="email" stack-label="Email" />
    <q-input v-model="password" type="password" stack-label="Senha" />
    <q-select v-model="genre" float-label="Genero"  radio :options="selectOptionsGenre"/>
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

 mounted(){

    this.$axios.get('http://localhost/ProjectAllegra-master/indexUsers.php?action=show&cod='
     + this.$route.params.cod).then((response)=> {

      this.name = response.data.name;
       this.cpf = response.data.cpf;
        this.address = response.data.address;
         this.phone = response.data.phone;
          this.email = response.data.email;
           this.password = response.data.password;
            this.genre = response.data.genre;
      
    
    });

  },
 methods: {

    update(){
       
      let params = new URLSearchParams();
      params.append('action', 'update');
      params.append('cod', this.$route.params.cod);
      params.append('name', this.name);
      params.append('cpf',this.cpf);
      params.append('address',this.address);
      params.append('phone', this.phone);
      params.append('email',this.email);
      params.append('password', this.password);
      params.append('genre',this.genre);

        this.$axios.post('http://localhost/ProjectAllegra-master/indexUsers.php', params).then((response) => {

        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Atualizado com sucesso'
        })
       this.$router.push('/users');
      });
      
      },

      destroy(){

        this.$axios.get('http://localhost/ProjectAllegra-master/indexUsers.php?action=delete&cod=' + this.$route.params.cod).then((response) => {

          this.$q.dialog({
          title: 'Atenção',
          message: 'Removido com sucesso'

        });

        this.$router.push('/users');


        });

      }




  }
}
</script>

<style>
</style>
