import { Titulo } from '../components/Titulo'
import { TimeLine } from '../components/TimeLine'
import { useLang } from '../context'

export const Experiencia = () => {
  const { content } = useLang();

  return (
    <div id='experiencia' className='w-full min-h-[100vh] bg-primary'>
        <Titulo>{content.expericia.titulo}</Titulo>
        <h4 className='font-medium text-2xl text-textSecondary text-center font-Poppins font-[600]'>{content.expericia.descripcion}</h4>
        <TimeLine/>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </div>
  )
}
