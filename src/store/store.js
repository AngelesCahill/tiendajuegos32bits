import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  data (){
    return {
        infoProductos: '',
        productos: [
          {
            codigo: '001',
            nombre: 'Sekiro',
            stock: 100,
            precio: '$30.000'
          },
          {
            codigo: '002',
            nombre: 'Fifa 21',
            stock: 100,
            precio: '$25.000'
          },
          {
            codigo: '003',
            nombre: 'Gears of War 4',
            stock: 100,
            precio: '$15.000'
          },
          {
            codigo: '004',
            nombre: 'Mario Tennis Aces',
            stock: 100,
            precio: '$35.000'
          },
          {
            codigo: '005',
            nombre: 'Bloodborne',
            stock: 100,
            precio: '$10.000'
          },
          {
            codigo: '006',
            nombre: 'Forza Horizon 4',
            stock: 100,
            precio: '$20.000'
            }
        ]
    }
  },  
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    
  },
  
})
