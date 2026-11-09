'use client'

import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/shared/types'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'

const fallbackFaqs: FAQ[] = [
  {
    _id: '1',
    questionEn: 'What is nephrology?',
    answerEn:
      'Nephrology is the medical specialty focused on the diagnosis and treatment of kidney diseases, including conditions like chronic kidney disease, kidney stones, and kidney failure.',
    questionHi: 'नेफ्रोलॉजी क्या है?',
    answerHi:
      'नेफ्रोलॉजी किडनी रोगों के निदान और उपचार पर केंद्रित चिकित्सा विशेषता है।',
    category: 'general',
  },
  {
    _id: '2',
    questionEn: 'When should I see a kidney specialist?',
    answerEn:
      'You should see a nephrologist if you have persistent swelling, blood in urine, high blood pressure, diabetes affecting kidneys, or declining kidney function detected in blood tests.',
    questionHi: 'मुझे किडनी विशेषज्ञ कब दिखाना चाहिए?',
    answerHi:
      'यदि आपको लगातार सूजन, मूत्र में रक्त, उच्च रक्तचाप, या रक्त परीक्षण में किडनी की कार्यक्षमता में कमी है तो नेफ्रोलॉजिस्ट से मिलें।',
    category: 'general',
  },
  {
    _id: '3',
    questionEn: 'What are the early signs of kidney disease?',
    answerEn:
      'Early signs include fatigue, swelling in legs/ankles, changes in urination frequency, foamy urine, back pain near kidneys, and high blood pressure. Early detection is key to effective treatment.',
    questionHi: 'किडनी रोग के शुरुआती लक्षण क्या हैं?',
    answerHi:
      'शुरुआती लक्षणों में थकान, पैरों में सूजन, पेशाब में बदलाव, झागदार पेशाब और उच्च रक्तचाप शामिल हैं।',
    category: 'kidney-disease',
  },
  {
    _id: '4',
    questionEn: 'Is dialysis a permanent treatment?',
    answerEn:
      'Dialysis is a life-sustaining treatment for kidney failure. It can be temporary (while waiting for a transplant) or long-term. Dr. Vijay will assess your condition and recommend the best approach.',
    questionHi: 'क्या डायलिसिस एक स्थायी उपचार है?',
    answerHi:
      'डायलिसिस किडनी फेलियर के लिए जीवन-रक्षक उपचार है। यह अस्थायी या दीर्घकालिक हो सकता है।',
    category: 'dialysis',
  },
  {
    _id: '5',
    questionEn: 'How can I book an appointment with Dr. Vijay?',
    answerEn:
      'You can book an appointment by calling us directly, using the WhatsApp button on this website, or filling out the contact form. We offer same-day appointments for urgent cases.',
    questionHi: 'डॉ. विजय से अपॉइंटमेंट कैसे बुक करें?',
    answerHi:
      'आप सीधे कॉल करके, WhatsApp बटन का उपयोग करके, या संपर्क फ़ॉर्म भरकर अपॉइंटमेंट बुक कर सकते हैं।',
    category: 'appointment',
  },
]

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
  lang: 'en' | 'hi'
}

const FAQItem = memo(function FAQItem({ faq, isOpen, onToggle, lang }: FAQItemProps) {
  const question = lang === 'hi' && faq.questionHi ? faq.questionHi : faq.questionEn
  const answer = lang === 'hi' && faq.answerHi ? faq.answerHi : faq.answerEn
  const id = `faq-${faq._id}`

  return (
    <div className="border border-[#E0F2FE] rounded-2xl overflow-hidden bg-white">
      <button
        id={`${id}-btn`}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-[#F0F9FF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-inset"
      >
        <span className="font-heading font-600 text-[#0C4A6E] text-base leading-snug">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#0369A1] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[#475569] leading-relaxed text-sm md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
})

interface FAQSectionProps {
  faqs?: FAQ[]
}

function FAQSectionComponent({ faqs = fallbackFaqs }: FAQSectionProps) {
  const { locale, t } = useI18n()
  const [openId, setOpenId] = useState<string | null>(faqs[0]?._id ?? null)

  return (
    <section className="py-16 md:py-24 bg-[#F0F9FF]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-heading font-600 text-[#0369A1] uppercase tracking-widest mb-3">
            {t('faq.eyebrow')}
          </p>
          <h2
            id="faq-heading"
            className="font-heading font-700 text-3xl md:text-4xl text-[#0C4A6E] mb-4"
          >
            {t('faq.title')}
          </h2>
        </div>

        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq) => (
            <div key={faq._id} role="listitem">
              <FAQItem
                faq={faq}
                isOpen={openId === faq._id}
                onToggle={() => setOpenId(openId === faq._id ? null : faq._id)}
                lang={locale}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const FAQSection = memo(FAQSectionComponent)
