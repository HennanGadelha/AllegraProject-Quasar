<template>
  <q-page padding>
    <!-- content -->
  <h3>
   
    category
    <q-btn to="/category/create" label="Novo" />
 </h3>
     <q-table 
      :columns="columns"
      :data="category">
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
        }
      ],
      category: []
    }
  },
  mounted() {
    
      
      this.$axios.get('http://localhost/projectallegra-master/indexCategory.php')
      .then((response) => {
      for(var i = 0; i < response.data.length; i++) {
        
        this.category.push({
        cod: response.data[i].cod ,
        name: response.data[i].name
        });
      }
       
    });
    
      
  },
  methods: {
    edit(category) {
      this.$router.push('/category/' + category.cod);
    }
  }
}
</script>

<style>
</style>
