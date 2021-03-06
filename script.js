/* Rifare l’esercizio della to do list:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
ATTENZIONE PERO’!!!!
Mi comunicano ora dalla regia che lo variamo un attimo,
la vostra variante sarà che:
il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
gli oggetti avranno questo formato:
{ 'Fare la spesa', done: true }, 
{  'Fare il bucato', done: false }
etc. etc..
quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
gli unici true saranno alcuni nei dati di partenza.
BONUS
Gesticso i done dall’interfaccia,
quindi il task potrà essere anche segnato come done e non per forza cancellato
poi se l’utente vuole potrà anche cancellarlo del tutto. */

var app = new Vue (
    {
        el : "#container",
        data: {
            show: "true",
            newTask : "", 
            tasks : [
                {text: 'fare la spesa',
                done: false },
                {text: 'fare il bucato',
                done: false },
                {text: 'cucinare la pasta',
                done: false },
                {text: 'fare il letto',
                done: false },
                {text: 'andare a prendere i bambini',
                done: false },
                {text: 'andare a lavorare',
                done: false }
            ]
            
        },
        /* qui metterò method con la funzione per aggiungere */
        methods: {
            removeTask (index){
                this.tasks.splice(index, 1);
            },
            
            addTask () {
                 this.tasks.push(this.newTask); 
                 this.newTask = {
                    text:'',
                    done: false
                 
                } 
            },
            barTask (index) {
                if(this.tasks[index].done){
                    this.tasks[index].done= false;
                } else {
                    this.tasks[index].done=true;
                }
            }, 
        }


    }  
);