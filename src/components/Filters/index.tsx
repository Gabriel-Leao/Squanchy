import * as Accordion from '@radix-ui/react-accordion';

const Filter = () => (
  <div>
    <h2>Filtros</h2>
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Open me</Accordion.Trigger>
        <Accordion.Content>People == SHIT</Accordion.Content>
      </Accordion.Item>
    
      <Accordion.Item value="item-2">
        <Accordion.Trigger>The end</Accordion.Trigger>
        <Accordion.Content>Mother Fuck</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </div>

)

export default Filter