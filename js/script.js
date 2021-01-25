/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data. */

let app = new Vue({

    el: '#container',
    data: {
        dim: 'dimension',
        message: 'Prova di testo aggiunto utilizzando Vue!',
        src: 'https://images.unsplash.com/photo-1611561937862-9d0527d25f63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'beach'
    }
    /* methods: {
        clickImmagine() {
            this.message = 'Ciao!'
        }
    } */

});