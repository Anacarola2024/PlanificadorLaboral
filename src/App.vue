
<script>
export default {
  data() {
    return {
      cargos: ['', '', ''], // lleno con tres cargos
      sectores: ['', '', ''], // lleno con tres sectores
      empresas: ['', '', ''], // lleno con tres empresas
      horas: 0,
      planGuardado: false
    };
  },
  
  

  methods: {
    addCampo(tipo) {
      if (tipo === 'cargos') {
        this.cargos.push('');
      } else if (tipo === 'sectores') {
        this.sectores.push('');
      } else if (tipo === 'empresas') {
        this.empresas.push('');
      }
    },
    submitForm() {
      // Aquí puedes guardar los datos de la forma que necesites, por ahora los mostramos en pantalla
      this.planGuardado = true;
    }
  }
};
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <div id="app">

    <h1 class= "Titulo">Planificador de Búsqueda Laboral</h1>
    
    <!-- Formulario para ingresar datos -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="cargo">Cargos de interés:</label>
        <div v-for="( cargo,index) in cargos" :key="index">
          <input 
            v-model="cargos[index]" 
            type="text" 
            :placeholder= "'' + (index + 1)" />
        </div>
        <button type="button" @click="addCampo('cargos')">Añadir Cargo</button>
      </div>
      
      <div class="form-group">
        <label for="sector">Sectores productivos de interés:</label>
        <div v-for="(sector, index) in sectores" :key="index">
          <input 
            v-model="sectores[index]" 
            type="text" 
            :placeholder="'' + (index + 1)" />
        </div>
        <button type="button" @click="addCampo('sectores')">Añadir Sector</button>
      </div>
      
      <div class="form-group">
        <label for="empresa">Empresas que te interesen:</label>
        <div v-for="(empresa, index) in empresas" :key="index">
          <input 
            v-model="empresas[index]" 
            type="text" 
            :placeholder="'' + (index + 1)" />
        </div>
        <button type="button" @click="addCampo('empresas')">Añadir Empresa</button>
      </div>
      
      <div class="form-group">
        <label for="horas">¿Cuántas horas semanales puedes dedicar a la búsqueda de empleo?</label>
        <input v-model="horas" type="number" min="0" max="168" placeholder="Ej. 10" />

      </div>
      
      <button type="submit">Guardar Plan</button>
    </form>
    
    <div v-if="planGuardado">
      <h2>Plan de Búsqueda Laboral Guardado:</h2>
      <p><strong>Cargos de interés:</strong> {{ cargos.join(', ') }}</p>
      <p><strong>Sectores de interés:</strong> {{ sectores.join(', ') }}</p>
      <p><strong>Empresas que te interesen:</strong> {{ empresas.join(', ') }}</p>
      <p><strong>Horas semanales para búsqueda:</strong> {{ horas }}</p>
    </div>
  </div>
</template>


<style >

      
      
      

h1,h2 {
  font-family: 'pacifico', cursive;
  width: 100%;
}

/* Centramos el contenedor principal */
#app {
  font-family:'pacifico', cursive; 
  width: 100%;
  margin: 0;
  padding: 20px;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #D1C4E9;
  
  /* Centro el contenedor en la página */
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;  /* Centrado del contenido dentro del contenedor */
}

/* Título centrado en la parte superior */
.titulo {
  font-size: 26px;
  margin-bottom: 20px;
  color: #333;
}

.formulario {
  background-color: #ffcccc; /* Rosa claro */
 /* Color de fondo del formulario  */
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
}

button {
  background-color:#FF8A80;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  font-family:'Dancing Script', cursive; 
}

button:hover {
  background-color: #FF6F61;
}

button[type="submit"] {
  background-color: #008CBA;
}

button[type="submit"]:hover {
  background-color: #007B9E;
}
</style>