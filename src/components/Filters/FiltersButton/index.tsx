import { FIltersButton } from "../../../interfaces"

const FIltersButton = ({ item, name, handleClick, }: FIltersButton) => {
  return (
    <div>
      <div>
        <input type="radio" id={`${name}-${item}`} name={name} className='appearance-none peer' />
        <label htmlFor={`${name}-${item}`} 
          className='py-2 px-4 text-center capitalize border-2 border-[#0d6efd] text-[#0d6efd] rounded-lg hover:text-[#fff] hover:bg-[#0d6efd] peer-checked:text-[#fff] peer-checked:bg-[#0d6efd]'
          onClick={() => handleClick(item)}
          >
            { name == 'status' ? item == 'alive' ? 'vivo' : item == 'dead' ? 'morto' : item == 'unknown' ? 'desconecido' : item 
              : name == 'gender' ? item == 'male' ? 'masculino' : item == 'female' ? 'feminino' : item == 'unknown' ? 'desconecido' : 'sem gênero' 
              : item == 'humanoid' ? 'humanoide' : item == 'unknown' ? 'desconhecida' : item == 'human' ? 'humano' : item == 'disease' ? 'doença' : item == 'robot' ? 'robô' : item == 'planet' ? 'planeta' : item == 'mythological' ? 'mitológico' : item == 'poopybutthole' ? 'bunda cagada' : item
            }
        </label>
      </div>
    </div>
  )
}

export default FIltersButton