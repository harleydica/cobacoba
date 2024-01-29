import { Hero, LayoutPage } from '@/components/UI/templates'
import { Guestbook, GuestbookEditor } from '@/components/guestbook'

import { supabaseClient } from '@/services/supabase'

import { generateOgImage, getMetaPage } from '@/libs/metapage'

import { useGuestbook, useGuestbookUser } from '@/hooks'
import { Guestbook as GuestbookType } from '@/hooks/guestbook/model'

import { GetStaticProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { Adsense } from '@ctrl/react-adsense'

type GuestbookPageProps = {
  guestbook: GuestbookType[]
}

const meta = getMetaPage({
  title: 'Guestbook',
  description: `Sign a guestbook on my website, you can leave whatever you'd like.`,
  keywords: [
    'Guestbook',
    'taufikcrisnawan',
    'harleydica',
    'Taufik Crisnawan',
    'Taufik C S',
    'Guestbook Taufik',
    'Guestbook message',
    'Taufik Crisnawan Santoso',
    'Taufik Crisnawan Santoso',
    'Guestbook Taufik Crisnawan Santoso',
    'Guestbook Taufik Crisnawan Santoso'
  ],
  og_image: generateOgImage({
    title: 'Guestbook',
    subTitle: "Leave whatever message you'd like on my website",
    theme: 'dark'
  }),
  og_image_alt: 'Guestbook - taufikcrisnawan.dev',
  slug: '/guestbook',
  type: 'website'
})

const GuestbookPage: NextPage<GuestbookPageProps> = ({ guestbook = [] }) => {
  const { getUser } = useGuestbookUser()
  const { guestbook: guestbookClient, getGuestbook } = useGuestbook()

  useEffect(() => {
    ;(async () => {
      await Promise.all([getUser(), getGuestbook()])
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutPage seo={meta}>
      <Hero
        title={meta.title as string}
        description='Hey, leave a little message to let me and other visitors know you were here. You can write whatever you want, maybe some appreciation, a friendly message, a joke, or just a quick hello.'
      />
      <GuestbookEditor />
      <Guestbook guestbook={guestbookClient.length === 0 ? guestbook : guestbookClient} />
      <br></br>
      <Adsense
        client='ca-pub-9254295768355301'
        slot='8000984806'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps<GuestbookPageProps> = async () => {
  const res = await supabaseClient.from('guestbook').select('*')

  return {
    props: {
      guestbook:
        (res.data as GuestbookType[] | null)?.sort((a, b) =>
          new Date(a.created_at) < new Date(b.created_at) ? 1 : new Date(a.created_at) > new Date(b.created_at) ? -1 : 0
        ) ?? []
    },
    revalidate: 30
  }
}

export default GuestbookPage
