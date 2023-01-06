import React from 'react'
import 'boxicons'
import './Pagination.css'

const Pagination = ({page, charactersLength, characterPerPage, setPage}) => {
  
    const pagesPerBlock = 5
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const characterLength = Math.ceil(charactersLength / characterPerPage)
    const blockLength = Math.ceil(characterLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ?  characterLength : initialPage + (pagesPerBlock - 1)

    for(let i = initialPage; i <= limitPage; i++){
        arrPages.push(i)
    }

    const increase = () => {
        if(page < characterLength){
            setPage(page + 1)
        }
    }
    const decrease = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const increaseBlock = () => {
        if(page < characterLength){
            setPage(arrPages[0]+5) 
            console.log(page);
        }
    }
    const decreaseBlock = () => {
        if(page > pagesPerBlock){
            setPage(arrPages[0]-1)
            console.log(page);
        }
    }

    const ChangeValuePage = e => {
        if(page !== e.target.value){
            setPage(+e.target.value)
        }
        
    }


    return (
    <div className='Pagination'>
        {
            page > 5 &&
                <box-icon onClick={decreaseBlock} color="black" animation="fade-left-hover" name='chevrons-left' size='sm'></box-icon>
        }
        
        {
            page !== 1 &&
                <box-icon animation="flashing-hover" onClick={decrease} name='left-arrow-circle' color="black" size='sm'></box-icon>
        }
        
        {
            arrPages.map(pageBlock => (
                <button className={`btn__pagination ${page === pageBlock && "btn__active"}`} onClick={ChangeValuePage} key={pageBlock} value={pageBlock}>{pageBlock}</button>
            ))
        }
        {
            page !== characterLength &&
                <box-icon animation="flashing-hover" onClick={increase} name='right-arrow-circle' color="black" size='sm'></box-icon>
        }
        {
            currentBlock !== blockLength &&
                <box-icon box-icon onClick={increaseBlock} color="black" animation="fade-right-hover" name='chevrons-right' size='sm'></box-icon>
        }
        
    </div>
  )
}

export default Pagination