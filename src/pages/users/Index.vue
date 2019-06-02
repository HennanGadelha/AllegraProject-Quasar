<template>
  <q-page padding>
   <h3>
      Clientes
    </h3>
    <q-table 
      :columns="columns"
      :data="users">
      <q-tr  slot="body" slot-scope="props" :props="props" @click.native="edit(props.row)">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
          <q-icon name="delete"/>
          <q-icon name="edit" />
          
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
      users: []
    }
  },
  mounted() {
   
      this.$axios.get('http://localhost/projectallegra-master/indexUsers.php')
      .then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          this.users.push({
            cod: response.data[i].cod,
            name: response.data[i].name
          });
        }
     
      });
    
  },
  methods: {
    edit(users) {
      this.$router.push('/users/' + users.cod);
    }
  }
}
</script>

<style>
</style>
