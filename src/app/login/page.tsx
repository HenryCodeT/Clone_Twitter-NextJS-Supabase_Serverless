import { AuthButtonServer } from '@/components/auth-button-server'

export default function Login () {
  return (
    <section className=' grid place-content-center min-h-screen'>
      <h1 className='text-2xl font-bold text-center m-2'>Inicia Sesion</h1>
      <AuthButtonServer/>
    </section>
  )
}
