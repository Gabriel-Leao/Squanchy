import * as Accordion from '@radix-ui/react-accordion'
import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContex'
import FiltersList from './FiltersList'

const statusList = [
  {
    name: 'vivo'
  }, 
  {
    name: 'morto'
  }, 
  {
    name:'desconhecido'
  }
]

const Filter = () => {
  const { load } = useContext(CharacterContext)
  
  return (
    <aside className=''>
      <h2>Filtros</h2>
      <a href="#" onClick={() => load()} className="underline text-blue-600">limpar filtros</a>
      <Accordion.Root type="single" defaultValue='item-1' collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className='text-lg py-2 font-bold'>Status</Accordion.Trigger>
          <Accordion.Content className='flex flex-wrap w-[160px]'>
            {statusList.map((item, key) => (
              <FiltersList key={key} item={item.name}/>
            )) }
          </Accordion.Content>
        </Accordion.Item>
      
        <Accordion.Item value="item-2">
          <Accordion.Trigger className='text-lg py-2 font-bold'>Espécie</Accordion.Trigger>
          <Accordion.Content>Mother Fuck</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger className='text-lg py-2 font-bold'>Gênero</Accordion.Trigger>
          <Accordion.Content>Mother Fuck</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </aside>
  )
}

export default Filter