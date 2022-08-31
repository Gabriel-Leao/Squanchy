import * as Accordion from '@radix-ui/react-accordion'
import FIltersButton from '../FiltersButton'

const Species = () => {
  const speciesList = ['human', 'alien', 'humanoid', 'poopybutthole', 'mythological', 'unknown', 'animal', 'robot', 'cronenberg', 'disease']
  return (
    <Accordion.Item value="item-2">
    <Accordion.Trigger className='text-lg py-2 font-bold'>Espécies</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { speciesList.map((item, key) => (
        <FIltersButton key={key} name="species" item={item}/>
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Species