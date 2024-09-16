import { color } from "framer-motion";
import { Timeline } from "../@/components/ui/timeline";
import ScrollToTop from "../components/ScrollToTop";

export function Chisiamo() {
  const data = [
    {
      title: "2019",
      content: (
        <div className="mb-20">
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Esordio e successo virale Kid Yugi debutta nel panorama musicale italiano con il suo primo singolo, guadagnando popolarità grazie a una combinazione di testi emozionanti e sound urban. Il brano diventa virale sui social, portandolo rapidamente sotto i riflettori.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.cromosomimedia.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-12-at-22.05.19.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://raptusnack.com/wp-content/uploads/2023/12/kid-yugi-e1703076991639.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://i.scdn.co/image/ab6761610000e5ebc8d52f142833d2a08e2488e7"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://rapteratura.it/wp-content/uploads/2023/09/kid-yugi-1-e1695495065690.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="mb-20">
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Primo album e consacrazione Nel 2021 esce il suo primo album, confermando il suo talento con una serie di hit che scalano le classifiche italiane. Collabora con alcuni artisti di spicco della scena trap e rap, consolidando la sua presenza.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.thenewnoise.it/wp-content/uploads/2024/04/Senza-titolo-2.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://images2.corriereobjects.it/methode_image/2024/03/10/Spettacoli/Foto%20Spettacoli%20-%20Trattate/skkdkldlfff-k0lh-u3470319015835jwc-656x492corriere-web-sezioni_MASTER.jpg?v=20240309205041"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://primoascolto.it/wp-content/uploads/2023/05/Screenshot_2023-05-22-12-32-27-210_com.instagram.android-edit-1024x1007.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://www.lacasadelrap.com/wp-content/uploads/2024/03/Kid-Yugi-4-scaled.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="mb-20">
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Tour internazionale Kid Yugi intraprende il suo primo tour internazionale, portando la sua musica fuori dall’Italia. Si esibisce in diverse città europee, guadagnando un seguito globale e rafforzando il suo status di promessa della scena musicale urban.
          </p>
          <div className="mb-8">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e33632" className="size-6 me-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div
                className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Annunciate le date del Tour 2024 di Kid Yugi
              </div>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e33632" className="size-6 me-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div
                className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                In arrivo il drop esclusivo del merch di Kid Yugi
              </div>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e33632" className="size-6 me-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div
                className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Collaborazione con artista internazionale anticipata da Kid Yugi
              </div>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e33632" className="size-6 me-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div
                className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Ora disponibile il vinile in edizione limitata di Kid Yugi
              </div>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e33632" className="size-6 me-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div
                className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Aperte le iscrizioni per il Meet & Greet di Kid Yugi
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <video
            src="kidyugi.mp4"
            autoPlay
            loop
            muted
            height={500}
            width={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
             alt="hero template"
            ></video>
            <video
            src="Kid Yugi, Nerissima Serpe, TY1 - MONOPOLIO, L’Anticristo - Live Nameless 16⧸06⧸2024.mp4"
            autoPlay
            loop
            muted
            height={500}
            width={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
             alt="hero template"
            ></video>
             <video
            src="Kid Yugi ｜ Breakthrough Italia 2023 ｜ Amazon Music Live.mp4"
            autoPlay
            loop
            muted
            height={500}
            width={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
             alt="hero template"
            ></video>
           <video
            src="Kid Yugi - Eva (Live Session) ｜ Vevo ctrl.mp4"
            autoPlay
            loop
            muted
            height={500}
            width={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
             alt="hero template"
            ></video>
          </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
      <div className="">
        <ScrollToTop></ScrollToTop>
      </div>
    </div>)
  );
}
export default Chisiamo;
