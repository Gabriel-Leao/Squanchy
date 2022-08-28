import React, { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../../context/CharacterContex'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Pagination = () => {
  const { setPage, page, pagesNumber } = useContext(CharacterContext)

  console.log(page)

  const handleChange = (page: number) => {
    setPage(page)
    window.scroll(0,0)
  }

  const next = () => {
    setPage(page + 1)
    window.scroll(0,0)
  }

  return (
    <div className="flex justify-center my-4">
      <ReactPaginate  pageCount={pagesNumber} 
        className="flex gap-2 items-center"
        previousLabel={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
        nextClassName="opacity-50 hover:opacity-100"
        previousClassName="opacity-50 hover:opacity-100"
        pageLinkClassName=' flex text-[#fff] text-lg w-[40px] py-2 justify-center rounded-3xl bg-green-500'
        activeClassName='opacity-100'
        onPageChange={(page) => handleChange(page.selected + 1)}
        pageClassName="opacity-50"
      />
    </div>
  )
}

export default Pagination