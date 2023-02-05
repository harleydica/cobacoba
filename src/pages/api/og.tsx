/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge'
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0) : 'Edge OG with dynamic title'

    return new ImageResponse(
      (
        <div
          tw='flex items-center h-[600px] w-full py-3 px-5 text-zinc-100'
          style={{
            opacity: 1,
            backgroundSize: 'cover',
            backgroundImage: "url('https://ik.imagekit.io/taufik/profile/cover-og')"
          }}
        >
          <div tw='flex flex-col h-full w-full justify-between'>
            <p tw='font-bold text-3xl text-blue-500'>https://taufikcrisnawan.dev/blog</p>
            <p tw='font-extrabold text-6xl max-w-lg'>{title}</p>
            <div tw='flex items-center'>
              <img
                width='44'
                height='44'
                tw='rounded-full'
                style={{
                  objectFit: 'cover'
                }}
                src='https://ik.imagekit.io/taufik/profile/IMG-20220928.webp'
                alt='Taufik Crisnawan Santosa'
              />
              <p tw='ml-2.5 font-bold text-4xl'>Taufik Crisnawan Santosa</p>
            </div>
          </div>

          <img
            src='https://ik.imagekit.io/taufik/profile/icon-192x192.webp'
            alt='logo'
            width='128'
            height='128'
          />
        </div>
      ),
      {
        width: 1200,
        height: 600
      }
    )
  } catch (err) {
    console.info(JSON.stringify(err))
    return new Response('Failed to generate the og image', {
      status: 500,
      statusText: 'failed to generate the og image'
    })
  }
}
