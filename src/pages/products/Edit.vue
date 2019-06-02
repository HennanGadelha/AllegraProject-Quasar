<template>
  <q-page padding>
    <!-- content -->
    <h4>Atualizar produto</h4>
    <q-input v-model="name" stack-label="Nome"/>
    <q-input v-model="photo" type="file" label="Imagem"/>
    <q-input v-model="price" type="number" prefix="R$" stack-label="Preço"/>
    <q-input v-model="quantity" type="number" float-label="Quantidade"/>
    <br>
    <q-select v-model="genre" float-label="Genero" radio :options="selectOptionsGenre"/>
    <q-input v-model="description" type="text" float-label="Descriçao" :max-height="100" rows="3"/>
    <br>
    <q-input v-model="productCategory" type="number" float-label="productCategory"/>
    <br>

     <q-btn-group>
      <q-btn @click="update()" label="Atualizar" />
      <q-btn @click="destroy()" color="red-5" label="Remover" />
    </q-btn-group>

    <br>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
   data() {
    return {
      name: "",
      price: "",
      genre: "",
      selectOptionsGenre: [
        {
          label: "Masculino",
          value: "Masculino"
        },
        {
          label: "Feminino",
          value: "Feminino"
        }
      ],
      description: "",
      productCategory: 0,
      quantity: 0,
      photo:""
    }; //fechando return
  }, //fech
   mounted(){

    this.$axios.get('http://localhost/ProjectAllegra-master/indexProducts.php?action=show&cod='
     + this.$route.params.cod).then((response)=> {

      this.name = response.data.name;
     // this.photo = response.data.photo;
      this.quantity = response.data.quantity;
      this.genre = response.data.genre;
      this.price = response.data.price;
      this.description = response.data.description;
     // this.productCategory = response.data.productCategory;

      
    
    });

  }, methods: {

    update(){
       
       let params = new URLSearchParams();
        params.append('action', 'update');
        params.append('cod', this.$route.params.cod);
        params.append('name', this.name);
        params.append('photo', this.photo);
        params.append('quantity', this.quantity);
        params.append('price', this.price);
        params.append('genre', this.genre);
        params.append('description', this.description);
        params.append('productCategory', this.productCategory);

        this.$axios.post('http://localhost/ProjectAllegra-master/indexProducts.php', params)
        .then((response) => {

        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Atualizado com sucesso'
        })
         this.$router.push('/products');

      });
      },

    destroy(){

        this.$axios.get('http://localhost/ProjectAllegra-master/indexProducts.php?action=delete&cod=' + this.$route.params.cod)
        .then((response) => {

          this.$q.dialog({
          title: 'Atenção',
          message: 'Removido com sucesso'

        });

        this.$router.push('/products');


        });

      }
  }

  
  
}
</script>

<style>
</style>
