<template>
    <div class="ma-5">        
        <h1>Kriterien</h1>
         <v-form >
            <v-text-field 
            :counter="10"
            label="Kundenart"
            required
            ></v-text-field>
            <v-text-field 
            label="dex"
            required
            ></v-text-field>
            <v-text-field 
            label="Kontosperre"
            required
            ></v-text-field>
            <v-text-field            
            
            label="kbsnn"
            required
            ></v-text-field>
            <v-text-field            
            
            label="Code"
            required
            ></v-text-field>
            <v-text-field            
            
            label="Wert(cent)"
            required
            ></v-text-field>
            <v-text-field            
            
            label="Zahlart"
            required
            ></v-text-field>
            <v-text-field           
            
            label="Referenztag"
            required
            ></v-text-field>
            <v-btn @click="submit">ok</v-btn>            
        </v-form>  
    </div>
</template>


<script>


export default { 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    submit(){
       this.$store.dispatch("Auth/checkStore");
       console.log("Store value "+this.$store.getters['Auth/getTest'])       
    }  
  }
}
</script>