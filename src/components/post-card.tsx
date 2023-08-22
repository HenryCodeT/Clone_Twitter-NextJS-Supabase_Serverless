'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'
import Link from 'next/link'

export default function PostCard ({ userFullName, userName, avatarUrl, content }:{userFullName :string, userName:string, avatarUrl:string, content:string }) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20 ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link href={`/${userName}`}>
            <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userName}</h4>
            <h5 className="text-small tracking-tight text-default-400">{userFullName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-whitef">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='h-4 w-4'/>
        </button>
        <button>
          <IconHeart className='h-4 w-4'/>
        </button>
        <button>
          <IconRepeat className='h-4 w-4'/>
        </button>
      </CardFooter>
    </Card>
  )
}