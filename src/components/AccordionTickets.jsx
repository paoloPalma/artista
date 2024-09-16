import {Accordion, AccordionItem} from "@nextui-org/react";

const AccordionTickets = () => {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Informazioni sui metodi di consegna"
        className="px-6"
      >
        <div className="flex justify-normal items-center pb-[16px] px-6 border-b-1">
          <div>
            <img src="images_corriere.png" className="w-[60px] me-2"></img>
          </div>
          <div>
            <div className="flex justify-normal items-center">
              <p className="me-2">Corriere Espresso Italia</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <p className="text-[14px] text-[#666]">
              La consegna è normalmente prevista entro 12 giorni.
            </p>
          </div>
        </div>
        <div className="flex justify-normal items-center py-[16px] px-6 border-b-1">
          <div>
            <img src="images_corriere.png" className="w-[60px] me-2"></img>
          </div>
          <div>
            <div className="flex justify-normal items-center">
              <p className="me-2">Corriere Espresso Europa occidentale e centrale</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <p className="text-[14px] text-[#666]">
                La consegna è normalmente prevista entro 12 giorni.
            </p>
          </div>
        </div>
        <div className="flex justify-normal items-center py-[16px] px-6 border-b-1">
          <div>
            <img src="images_corriere.png" className="w-[60px] me-2"></img>
          </div>
          <div>
            <div className="flex justify-normal items-center">
              <p className="me-2">Corriere Espresso Svizzera, USA e Canada</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <p className="text-[14px] text-[#666]">
              La consegna è normalmente prevista entro 12 giorni.
            </p>
          </div>
        </div>
        <div className="flex justify-normal items-center py-[16px] px-6">
          <div>
            <img src="images_corriere.png" className="w-[60px] me-2"></img>
          </div>
          <div>
            <div className="flex justify-normal items-center">
              <p className="me-2">Corriere Espresso altri paesi del mondo</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <p className="text-[14px] text-[#666]">
              La consegna è normalmente prevista entro 12 giorni.
            </p>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Informazioni sull'acquisto on line"
        className="px-6"
      >
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Acquisto tramite "Miglior posto"</p>
            <p className="mt-3 text-[#666]">Il "Miglior posto" è il metodo tradizionale e automatico basato su un algoritmo di assegnazione del miglior posto disponibile al momento dell'acquisto in base alla tipologia di biglietto selezionata e al numero di biglietti che si desidera acquistare. I posti numerati vengono assegnati generalmente contigui uno all’altro.</p>
          </div>
        </div>
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Acquisto tramite "Scelta in pianta"</p>
            <p className="mt-3 text-[#666]">Il "Miglior posto" è il metodo tradizionale e automatico basato su un algoritmo di assegnazione del miglior posto disponibile al momento dell'acquisto in base alla tipologia di biglietto selezionata e al numero di biglietti che si desidera acquistare. I posti numerati vengono assegnati generalmente contigui uno all’altro.</p>
          </div>
        </div>
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Biglietti di "Posto Unico"</p>
            <p className="mt-3 text-[#666]">Con l'acquisto tramite "Scelta in pianta" l'utente può selezionare direttamente i posti desiderati sulla pianta dell’evento. Selezionando questa modalità di acquisto è necessario attendere solo qualche secondo per l’apertura completa. Tale opzione è disponibile solo per eventi selezionati da TicketOne e che presentano una mappa di posti numerati.</p>
          </div>
        </div>
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Biglietti non disponibili</p>
            <p className="mt-3 text-[#666]">Significa che la quantità di biglietti di cui disponiamo al momento è esaurita. Faremo il possibile per ottenere nuove disponibilità e invitiamo gli utenti interessati a consultare regolarmente il nostro sito web per eventuali aggiornamenti.</p>
          </div>
        </div>
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Biglietti Solo nei Punti Vendita</p>
            <p className="mt-3 text-[#666]">Significa che l'evento è imminente e la consegna dei biglietti non è più possibile. Alcuni biglietti potrebbero essere ancora disponibili presso i Punti Vendita TicketOne o sul luogo dell'evento. </p>
          </div>
        </div>
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Biglietti ridotti</p>
            <p className="mt-3 text-[#666]">Spesso si possono acquistare biglietti ridotti, ad es. per bambini, studenti e anziani. Questi vengono mostrati nelle categorie di posto. Le aree riservate a persone con disabilità sono gestite direttamente dall’organizzatore, il link al sito dell’organizzatore è pubblicato nella scheda dell’evento desiderato. </p>
            <p className="mt-3 text-[#666]">Ai sensi e per gli effetti di cui all’art. 49 del Codice del Consumo i dati identificativi di TicketOne sono i seguenti:
              TicketOne S.p.A. - Sede legale: Via Fabio Filzi, 29 - 20124 Milano - Capitale sociale € 4.998.701,59 P. IVA: 12471480157 REA Milano n.: 1558633 - tel. +3902392261 fax +39023922670.
              Per eventuali richieste e/o reclami ti preghiamo di utilizzare esclusivamente la nostra sezione servizio clienti e nel caso di compilare l’apposito modulo on-line. </p>
            <p className="mt-3 text-[#666]">TicketOne effettua la vendita dei Titoli di Ingresso in nome e per conto dell’Organizzatore i cui dati identificativi sono contenuti nella pagina dell’Evento prescelto. </p>
            <p className="mt-3 text-[#666]">Copyright © 1998-2024 - Tutti i diritti riservati.  </p>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Informazioni sull'organizzatore"
        className="px-6"
      >
        <div className="pb-[16px] px-2 ">
          <div>
            <p className="font-semibold">Avvertenza:</p>
            <p className="mt-3 text-[#666]">TicketOne non è l’organizzatore dell’evento ma si occupa della distribuzione dei biglietti per conto dell’organizzatore. Conseguentemente, sia la tipologia di posti messi in vendita di tempo in tempo per il tramite di TicketOne, sia le procedure e l’entità del rimborso dei titoli d’ingresso in caso di annullamento dell’evento, dipendono esclusivamente da scelte dell’organizzatore, senza alcun intervento e responsabilità di TicketOne.
              In caso di annullamento dell’evento, il mancato rispetto delle procedure che saranno indicate dall’organizzatore per il rimborso dei titoli d’ingresso può determinare decadenza dal diritto di ottenere tale rimborso. E’ facoltà dell’Organizzatore di non procedere al rimborso della componente del prezzo del titolo d’ingresso rappresentata dal diritto di prevendita. In nessun caso saranno rimborsabili le commissioni di servizio applicate da TicketOne.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Organizzatore:</p>
            <p className="mt-3 text-[#666]">ABLU Srl, via Don Ennio Salvadei 4, 62100 Macerata MC, Italia </p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionTickets