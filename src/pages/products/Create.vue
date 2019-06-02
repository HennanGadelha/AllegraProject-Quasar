<template>
  <q-page padding>
    <h4>Adicionar produto</h4>
    <q-input v-model="name" stack-label="Nome"/>
    <br>

      
    <q-input v-model="photo" type="file" label="Imagem"/>
    <q-input v-model="price" type="number" prefix="R$" stack-label="Preço"/>
    <q-input v-model="quantity" type="number" float-label="Quantidade"/>
    <br>
    <q-select v-model="genre" float-label="Genero" radio :options="selectOptionsGenre"/>
    <q-input v-model="description" type="text" float-label="Descriçao" :max-height="100" rows="3"/>
    <br>
    <q-input v-model="productCategory" type="number" float-label="productCategory"/>
    <br>
    <q-btn @click="insert()" color="primary" label="Adicionar"/>
    <q-btn label="Cancelar"/>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {
    return {
      name: "",
      price: 0,
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
      productCategory: '',
      quantity: 0,
      photo:''
    }; //fechando return
  }, //fechando data

  methods: {
    insert() {
      let params = new URLSearchParams();
      params.append('action','insert');
      params.append('name', this.name);
      params.append('photo',this.photo);
      params.append('quantity',this.quantity);
      params.append('price',this.price);
      params.append('genre',this.genre);
      params.append('description', this.description);
      params.append('productCategory', this.productCategory);
     
     
      

       this.$axios.post('http://localhost/ProjectAllegra-master/indexProducts.php', params)
      .then((response) => {
        console.log(response);
        this.$q.dialog({
          title: 'Atenção',
          message: 'Produto cadastrado com sucesso!'
        })
        this.$router.push('/products');
      });
    },
    
    add(files) {
      let uploader = this.$refs.uploader
      
      let formData = new FormData(); 
      formData.append('cod', 1);
      formData.append('action', "upload");
      formData.append('photo', uploader.files[0]);

      this.$axios.post('http://localhost/ProjectAllegra-master/indexProducts.php', formData)
			.then((response) => {
		    console.log(response);
		  });


      //uploader.files = uploader.files.concat(files)
      //uploader.upload()
    }
  } //fechando methods
}; //fechando export default
</script>

<style>
</style>
