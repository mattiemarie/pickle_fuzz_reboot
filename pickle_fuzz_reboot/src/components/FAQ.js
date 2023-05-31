import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

const faqData = [
  {
    question: 'Why get a Pickle Fuzz Product?',
    answer: 'Why not? Each Product is handmade with lots of Love! :)'
  },
  {
    question: 'Shipping and Processing Times?',
    answer: 'Packages will be mailed out 3-5 business days once order is placed, once the package is in the hands of USPS it is out of my control. for updates please check the tracking information sent to you via email (once the package has been shipped, no more changes can be made to the order). *Please double-check that the address you enter for shipping is correct before placing your order'
  },
  {
    question: 'Returns and Refunds',
    answer: 'Pickle Fuzz does NOT offer returns due to the time it takes to hand make each product. If you are unhappy with your piece please email me at lilpicklefuzz@gmail.com. I will do my best to help you out.'
  },
  {
    question: 'Caring for your products',
    answer: 'Each crochet product is sent with a care card giving suggested instructions. Crochet Care 1) Grab some mild detergent and make sure your washing area/hands are clean 2) Fill sink with enough cold water so item can be submerged 3) Swish item around gently 4) After washing, rinse thorougly and gently squeeze out excess moisture 5) Wrap item in towel and lay flat to dry * Never wring or hang items'
  }
];

function FAQ() {
  return (
    <div className='faq-container'>
      <div className='faq-heading'>
      FAQ
      </div>
      <div className='accordion-container'>
      <Accordion className='accordion'>
        {faqData.map((item, index) => (
        <AccordionItem className='accoridon-item' key={index}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {item.question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className='accordion-panel'>{item.answer}</AccordionPanel>
        </AccordionItem>
        ))}
      </Accordion>
      </div>
    </div>
  );
}

export default FAQ;