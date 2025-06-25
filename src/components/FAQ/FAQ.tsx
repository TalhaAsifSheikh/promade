import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection = styled.section`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  color: white;
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 600px) {
    padding: 60px 8px;
    max-width: 100vw;
  }
`;

const Title = styled.h2`
  font-family: 'instrument serif', serif;
  font-size: 64px;
  font-weight: 500;
  font-style: italic;
  margin: 0 0 4px 0;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 600px;
  margin: 0 0 64px 0;
`;

const FaqContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0 4px;
  }
`;

const FaqItem = styled(motion.div)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
  cursor: pointer;
  overflow: hidden;
`;

const FaqQuestion = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding-right: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

const FaqAnswer = styled(motion.div)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.6;
  padding-right: 16px;
  padding-top: 8px;
  will-change: height;
`;

const PlusIcon = styled(motion.div)`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 16px;
  flex-shrink: 0;
`;

const faqData = [
  {
    question: 'What happens if my project scope changes mid-way?',
    answer: 'We understand that project requirements can evolve. We use an agile approach that allows for flexibility. We will discuss any scope changes with you to assess the impact on the timeline and budget and proceed upon your approval.',
  },
  {
    question: 'Can you collaborate with our in-house team?',
    answer: 'Absolutely. We are happy to collaborate with your in-house team. We can adapt to your workflow and communication channels to ensure a seamless partnership.',
  },
  {
    question: 'Why not hire a designer full-time?',
    answer: 'Hiring a full-time designer can be expensive, considering salary, benefits, and other overheads. With us, you get access to a dedicated team of experts at a fraction of the cost, with the flexibility to scale up or down as needed.',
  },
  {
    question: 'Promade vs other contractors',
    answer: 'We differentiate ourselves through our commitment to quality, client-centric approach, and transparent communication. Our team consists of experienced professionals who are passionate about delivering exceptional results.',
  },
  {
    question: 'How do you charge?',
    answer: 'We offer flexible pricing models, including hourly rates, fixed-price projects, and monthly retainers. We will work with you to determine the best option for your budget and project requirements.',
  },
  {
    question: 'What if I only need a small design task?',
    answer: 'No task is too small for us. We are happy to assist with any design needs you may have, whether it\'s a quick touch-up or a complete overhaul. Contact us to discuss your requirements.',
  },
  {
    question: 'How soon can you start?',
    answer: 'Our availability depends on our current workload. We will do our best to accommodate your timeline and get started on your project as soon as possible. Please contact us to discuss your project and our availability.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqSection>
      <Title>FAQs</Title>
      <Description>What majority of our clients have to ask.</Description>
      <FaqContainer>
        {faqData.map((item, index) => (
          <FaqItem 
            key={index}
            initial={false}
            onClick={() => toggleFaq(index)}
          >
            <FaqQuestion>
              <motion.span 
                animate={{ 
                  fontWeight: openIndex === index ? 500 : 400,
                  color: openIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'
                }}
              >
                {item.question}
              </motion.span>
              <PlusIcon
                animate={{
                  rotate: openIndex === index ? 45 : 0,
                  color: openIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </PlusIcon>
            </FaqQuestion>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <FaqAnswer
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { 
                      opacity: 1, 
                      height: 'auto',
                      marginTop: '16px',
                      transition: { 
                        opacity: { duration: 0.3 },
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }
                    },
                    collapsed: { 
                      opacity: 0, 
                      height: 0,
                      marginTop: 0,
                      transition: { 
                        opacity: { duration: 0.15 },
                        height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                      }
                    }
                  }}
                >
                  {item.answer}
                </FaqAnswer>
              )}
            </AnimatePresence>
          </FaqItem>
        ))}
      </FaqContainer>
    </FaqSection>
  );
};

export default FAQ;