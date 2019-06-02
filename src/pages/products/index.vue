<template>
  <q-page padding>
    <!-- content -->
     <h3>
    
    Produtos
    <q-btn to="/products/create" label="Novo" color="primary" />
 </h3>
     <q-table
      
      :columns="columns"
      :data="products">
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="edit(props.row)">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
        <q-icon name="delete"/>
        <q-icon name="edit"/>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data() {
    return {
      columns: [
        {
          name: 'cod',
          field: 'cod',
          align: 'left',
          label: 'Cod'
        },
        {
          name: 'name',
          field: 'name',
          align: 'left',
          label: 'Nome'
        },
        {
          name: 'photo',
          field: 'photo',
          align: 'left',
          label: 'Foto'
        },
          {
          name: 'price',
          field: 'price',
          align: 'left',
          label: 'preço'
        }
      ],
      products: []
    }
  },
  mounted() {
 


      
      this.$axios.get('http://localhost/ProjectAllegra-master/indexProducts.php')
      .then((response) => {
      for(var i = 0; i < response.data.length; i++) {
        
        this.products.push({
        cod: response.data[i].cod ,
        name: response.data[i].name,
        photo: response.data[i].photo, 
        price: response.data[i].price
        });
      }
       
    });
    
   
  },
  methods: {
    edit(products) {
      this.$router.push('/products/' + products.cod);
    }
  }

}
</script>

<style>
</style>
