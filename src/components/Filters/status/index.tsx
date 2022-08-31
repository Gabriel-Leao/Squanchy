import * as Accordion from '@radix-ui/react-accordion'
import FIltersButton from '../FiltersButton'

const Status = () => {
  const statusList = [ "alive", "dead", "unknown" ]

  return (
    <Accordion.Item value="item-1">
    <Accordion.Trigger className='text-lg py-2 font-bold'>Status</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { statusList.map((item, key) => (
        <FIltersButton key={key} name="status" item={item}/>
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Status