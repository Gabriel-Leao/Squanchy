import * as Accordion from '@radix-ui/react-accordion'
import Genders from './genders'
import Species from './species'
import Status from './status'

const Filter = () => {
  
  return (
    <aside className=''>
      <h2>Filtros</h2>
      <div className='my-2'><a href="#" className="underline text-blue-600">limpar filtros</a></div>
      <Accordion.Root type="single" defaultValue='item-1' collapsible>
        <Status />
        <Species />
        <Genders />
      </Accordion.Root>
    </aside>
  )
}

export default Filter