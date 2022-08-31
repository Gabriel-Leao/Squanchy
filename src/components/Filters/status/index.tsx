import * as Accordion from '@radix-ui/react-accordion'
import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterContex'
import FIltersButton from '../FiltersButton'

const Status = () => {
  const { setStatus, setPage } = useContext(CharacterContext)

  const handleClick = async (status: string) => {
    setStatus(status)
    setPage(1)
  }

  const statusList = [ "alive", "dead", "unknown" ]

  return (
    <Accordion.Item value="item-1">
    <Accordion.Trigger className='text-lg py-2 font-bold w-full'>Status</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { statusList.map((item, key) => (
        <FIltersButton key={key} name="status" item={item} handleClick={handleClick} />
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Status