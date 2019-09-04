<template>
  <div>
    <Header />
    <Sidebar />
    <Dashboard />
  </div>
</template>




<script>
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard.vue'
// import  {getAllData, closeConnection} from './sqlite/index.js'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar, 
    Dashboard
  },
  methods: {
   
  },
  created() {
    // getAllData()
  }
}

</script>



<style>

</style>
