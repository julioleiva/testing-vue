// incluir o quitar clases o estilos dependiendo del estado de nuestra aplicación


// ENLAZANDO OBJETOS

/* Podemos enlazar un objeto en un elemento para indicar si una clase se tiene que renderizar en el
HTML o no. */

const app = new Vue({
    el: '#app',
    template: `
            <div class="instance">
                <h1>{{instance.name}} + {{instance.topic }}</h1>
                <h2>{{instance.description}}</h2>
                <p :class="{winner: player1.winner}">{{player1.name}}</p>
                <button @click="toogleStyle()">Cambiar Estilo</button>
                <pre>{{$data}}</pre>
            </div>
        `,
    data: {
        player1: {
            name: 'Player1',
            winner: false
        },
        instance: {
            name: 'Instancia1',
            topic: 'Enlazando clases con objetos',
            description: 'Podemos enlazar un objeto en un elemento para indicar si una clase se tiene que renderizar en el HTML o no'
        }
    },
    methods: {
        toogleStyle() {
            this.player1.winner = !this.player1.winner
        }
    }
})

// ENLAZANDO ARRAYS

// lo que quiero es que el elemento div tenga la clase box y lo que contenga internamente la
// variable winner

// En este caso, hago que winner se incluya o no dependiendo del valor de player1.winner
// 'box' se le aplica siempre y 'winner' dependiendo del valor de player1.winner

const app2 = new Vue({
    el: '#app2',
    template: `
        <div class="instance">
             <h1>{{instance.name}} - {{instance.topic}}</h1>
             <h2>{{instance.description}}</h2>
             <div :class="['box', {winner: player1.winner}]"> Test</div>
             <button @click="toogleStyle()">Cambiar Estilo</button>
             <pre>{{$data}}</pre>
        </div>
    `,
    data: {
        name: 'Julio',
        instance: {
            name: 'Instancia2',
            topic: 'Enlazando clases con Arrays',
            description: 'box se le aplica siempre y winner dependiendo del valor de player1.winner'
        },
        player1: {
            name: 'Player1',
            winner: false
        },
    },
    methods: {
        toogleStyle() {
            this.player1.winner = !this.player1.winner
        }
    }
})