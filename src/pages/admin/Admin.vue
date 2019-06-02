<template>
  <q-page padding>
    <!-- content -->

      <ul>

        <li> <q-btn glossy rounded="2px" color="primary" label="Categorias" to="/category/"/> </li>

        <li> <q-btn glossy rounded="2px" color="primary" label="Produtos" to="/products/"/> </li>

        <li> <q-btn glossy rounded="2px" id="vendas" color="primary" label="Vendas"/> </li>

      </ul>




  </q-page>
</template>

<script>
//import { LocalStorage } from 'quasar';
export default {


      }



</script>

<style>

  
ul{

  list-style: none;
  text-align: center;
  padding: 0;


}

li{

  margin-bottom: 30px;

}
 


</style>
