import * as Accordion from '@radix-ui/react-accordion'
import FIltersButton from '../FiltersButton'

const Genders = () => {
  const gendersList = [ 'male', 'female', 'unknown', 'genderless' ]

  return (
    <Accordion.Item value="item-3">
    <Accordion.Trigger className='text-lg py-2 font-bold'>Gênero</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { gendersList.map((item, key) => (
        <FIltersButton key={key} name="genders" item={item}/>
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Genders