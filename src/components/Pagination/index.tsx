import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContex'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Pagination = () => {
  const { setPage, page, pagesNumber } = useContext(CharacterContext)

  const handleChange = (page: number) => {
    setPage(page)
    window.scroll(0,0)
  }

  return (
    <div className="flex justify-center my-4">
      <ReactPaginate  pageCount={pagesNumber}
        forcePage={page - 1}
        marginPagesDisplayed={1}
        className="flex gap-2 items-center"
        previousLabel={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
        nextClassName="opacity-40 hover:opacity-100"
        previousClassName="opacity-40 hover:opacity-100"
        pageLinkClassName='flex text-[#fff] text-lg w-[40px] py-2 justify-center font-bold rounded-3xl bg-[#008139] hover:text-[#fff]'
        activeClassName='opacity-100'
        pageClassName="opacity-50"
        onPageChange={(page) => handleChange(page.selected + 1)}
      />
    </div>
  )
}

export default Pagination