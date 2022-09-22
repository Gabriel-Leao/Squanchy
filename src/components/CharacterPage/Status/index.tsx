interface Status {
  status: string
}

const unknownStatus =
  'bg-gray-500 text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest  px-2'
const aliveStatus =
  'bg-[#008139] text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest px-2'
const deadStatus =
  'bg-red-500 text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest px-2'

const Status = ({ status }: Status) => {
  return (
    <div>
      <h2
        className={
          status
            ? status == 'unknown'
              ? unknownStatus
              : status == 'Alive'
              ? aliveStatus
              : deadStatus
            : ''
        }>
        {status
          ? status == 'Alive'
            ? 'vivo'
            : status == 'Dead'
            ? 'morto'
            : 'desconhecido'
          : ''}
      </h2>
    </div>
  )
}

export default Status
