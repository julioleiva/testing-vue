// registrar un componente de manera global con la etiqueta game-header
Vue.component('game-header',{
    template:`<h1>Video Games</h1>`
});


// Se registra otro componente de manera global
Vue.component('game-add',{
    template: `
                <div>
                    <input type="text" v-model="titleGame" />
                    <button @click="emitNewGame">Añadir</button>
                </div>
            `,

    /* El elemento data se inicializa, en un componente, con una función y no con un objeto.
       Si ponemos un objeto, recibiremos un error de VueJS.  */       
    data: function() {
        return {
            titleGame: null
        }
    },
    methods: {
        emitNewGame() {
            if (this.titleGame) {
                this.$emit('new', {title: this.titleGame}),
                this.titleGame = null;
            }
        }
    }
});

/* game-list recibe un modelo como propiedad. Se trata del listado de juegos a
mostrar. En el template vemos la directiva v-for encargado de iterar los juegos e ir pintando
diferentes componentes game-item. */
Vue.component('game-list',{
    props:['games'],
    template:`
            <ol>
                <game-item v-for="item in games" :game="item" :key="item.id"></game-item>
        `
});

/* El sistema es reactivo, es decir que si yo inserto un nuevo elemento en el array de juegos, VueJS es lo
suficientemente inteligente para saber que tiene que renderizar los elementos precisos. */

// El componente game-item recibe un modelo y lo pinta
Vue.component('game-item',{
    props:['game'],
    template:`
            <li>{{game.title}}</li>
        `
})




// Instancia Principal VUE
const app = new Vue({
    el: '#app',
    /* <game-add @new="addNewGame"></game-add>
    cada vez que el componente game-addemite un evento add, el elemento padre se encuentra escuchando y
    ejecuta la función addNewGame */
    template: `
        <div class="view">
            <game-header></game-header>
            <game-add @new="addNewGame"></game-add>
            <game-list :games="games"></game-list>
    `,
    data: {
        games: [
            { title: 'ME: Andromeda' },
            { title: 'Fifa 2017' },
            { title: 'League of Legend' }
        ]
    },

    methods: {
        addNewGame(game){
            this.games.push(game);
        }
    }

})