import {Accordion, AccordionItem} from "@nextui-org/react";

const Accordion2Tickets = ({prod}) => {
  return (
    <Accordion>
    <AccordionItem key="1" aria-label="Accordion 1" title="Mezzi pubblici">
      <div className="px-3">
        <p className="text-[#5c5c5c] font-bold">In treno</p>
        <p>Sia da nord che da sud, scendere alla stazione ferroviaria di Senigallia.</p>
      </div>
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="In auto">
        <div className="px-3">
            <p className="text-[#5c5c5c] font-bold">Dall’Autostrada A14/E55</p>
            <p>Se si viene da nord, uscire al casello Marotta-Mondolfo e alla rotonda imboccare via Sterpettine/SP155. Dopo 4 km svoltare a sinistra in via Cesanense e poco dopo imboccare via Litoranea/SS16. Alla rotonda prendere la prima uscita e imboccare Strada della Bruciata, dopo 600 metri alla rotonda prendere la seconda uscita e proseguire per via Mattei.</p>
        </div>
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="Parcheggi">
        <div className="px-3">
            <p>Il {prod.des}  dispone di un proprio parcheggio.</p>
        </div>
    </AccordionItem>
  </Accordion>
  )
}

export default Accordion2Tickets