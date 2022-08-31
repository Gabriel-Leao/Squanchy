import * as Accordion from '@radix-ui/react-accordion'
import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterContex'
import FIltersButton from '../FiltersButton'

const Genders = () => {
  const { setGender, setPage } = useContext(CharacterContext)

  const handleClick = async (gender: string) => {
    setGender(gender)
    setPage(1)
  }

  const gendersList = [ 'male', 'female', 'unknown', 'genderless' ]

  return (
    <Accordion.Item value="item-3">
    <Accordion.Trigger className='text-lg py-2 font-bold w-full'>Gênero</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { gendersList.map((item, key) => (
        <FIltersButton key={key} name="gender" item={item} handleClick={handleClick}/>
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Genders