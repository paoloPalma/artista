import { Accordion, AccordionItem } from '@nextui-org/react';


const AccordionHome = () => {
    return (
        <Accordion
        className='acc_home'
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem  aria-label="Terms" title="Terms" className='text-white'>
            <p>By submitting my information, I agree to receive personalized updates and marketing messages about Ed Sheeran based on my information, interests, activities, website visits and device data and in accordance with the Privacy Policy. I understand that I can opt-out at any time by emailing privacypolicy@wmg.com. </p>
          </AccordionItem>
        </Accordion>
      );
}

export default AccordionHome
