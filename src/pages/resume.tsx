import Button from '@/components/atoms/Button'
import Seo from '@/components/atoms/Seo'
import UnderlineLink from '@/components/mollecules/UnderlineLink'
import AlertResume from '@/components/organism/AlertResume'
import PopupResume from '@/components/organism/PopupResume'

import useMediaQuery from '@/hooks/useMediaQuery'
import { EDUCATION, EXPERIENCE, HEADLINE, LINKS, SKILLS } from '@/libs/constants/resume'
import { getMetaData } from '@/libs/metaData'

import htmr from 'htmr'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { HiInformationCircle } from 'react-icons/hi'

const meta = getMetaData({
  title: 'Resume',
  description:
    "Personal resume that I build on the web, as a Frontend Dev, I use my creativity to build my personal resume on the web instead on a regular 'paper'.",
  keywords: ['Taufik Crisnawan Santosa', 'resume', 'curriculum vitae', 'taufik crisnawan cv', 'taufik crisnawan s resume'],
  og_image:
    'https://og-image.vercel.app/**Resume**%20-%20rizkicitra.dev%3Cbr%2F%3ETake%20a%20look%20at%20my%20resume..png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg',
  og_image_alt: 'Resume — Taufik Crisnawan S',
  slug: '/resume',
  type: 'website'
})

const Resume: NextPage = () => {
  const listStyle = 'list-disc list-inside [&>li]:my-2'
  const isMatch = useMediaQuery('(min-width: 768px)')
  const [modal, setModal] = useState({ alert: false, popup: false })

  const setToHide = useCallback(() => setModal((prev) => ({ ...prev, popup: false })), [])
  const openModal = useCallback(() => setModal((prev) => ({ ...prev, popup: true })), [])
  const closeAlert = useCallback(() => setModal((prev) => ({ ...prev, alert: false })), [])
  const openAlert = useCallback(() => setModal((prev) => ({ ...prev, alert: true })), [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMatch) {
        closeAlert()
      }

      if (!isMatch) {
        openAlert()
      }
    }, 100)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMatch])

  return (
    <main className='py-4 dark:print:text-theme-800 dark:print:[&:is(h1)]:text-primary-700'>
      <Seo {...meta} />
      <PopupResume isOpen={modal.popup} setToHide={setToHide} />
      {modal.alert && <AlertResume isOpen={modal.alert} onClose={closeAlert} />}

      <section className='w-full mb-4'>
        <h2 className='text-center'>{HEADLINE.name}</h2>
        <h3 className='text-center'>{HEADLINE.role}</h3>

        <div className='space-x-4 text-center mt-1.5'>
          {LINKS.map((s) => (
            <UnderlineLink className='print:text-primary-500' key={s.href} href={s.href}>
              {s.title === 'Email' ? 'taufiklah87@gmail.com' : s.title}
            </UnderlineLink>
          ))}
        </div>
      </section>

      <div className='space-y-8'>
        <section>
          <div className='flex items-center justify-between pb-2.5 border-b-2 border-b-theme-700'>
            <h3>Experience</h3>
            <Button onClick={openModal} className='print:hidden'>
              <HiInformationCircle className='text-red-500 animate-pulse text-lg' />
              <span className='sr-only'>How to print?</span>
            </Button>
          </div>

          {EXPERIENCE.map((exp, i) => (
            <div key={i} className='mt-4'>
              <div className='flex items-start justify-between mb-2.5'>
                <div>
                  <h4>{exp.companyName}</h4>
                  <h5>{exp.role}</h5>
                </div>

                <p className='text-sm font-semibold'>
                  {exp.period.start} - {exp.period.end}
                </p>
              </div>

              <ul className={listStyle}>
                {exp.lists.map((list, idx) => (
                  <li key={idx}>
                    {htmr(list, {
                      transform: {
                        a: (props) => <UnderlineLink href={props.href ?? ''}>{props.children}</UnderlineLink>
                      }
                    })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className='pb-2.5 border-b-2 border-b-theme-700'>Education</h3>

          {EDUCATION.map((ed) => (
            <div key={ed.school} className='mt-4'>
              <div className='flex items-start justify-between mb-2.5'>
                <h4 className='max-w-md'>{ed.school}</h4>
                <p className='text-sm font-semibold'>
                  {ed.period.start} - {ed.period.end}
                </p>
              </div>

              {ed.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}

              {ed.list && (
                <>
                  <p>{ed.list.title}</p>
                  <ul className={listStyle}>
                    {ed.list.listItem.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </section>

        <section>
          <h3 className='mb-4 pb-2.5 border-b-2 border-b-theme-700'>Skills</h3>

          {SKILLS.map((skill) => (
            <p className='[&:not(:first-of-type)]:mt-2.5' key={skill.name}>
              <strong>{skill.name}:</strong> {skill.list.join(', ')}.
            </p>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Resume