import react, { useState } from 'react'
import SearchModal from './SearchModal';

const MobileHeader = ({showSidebar}) => {
    const [searchInput,setSearchInput] = useState('');
    const [isModalVisible,setIsModalVisible] = useState(false);

    const search = (e) => {
        console.log(e.target.value)
        const input = e.target.value;
        setSearchInput(input);
        if(input.length > 0){
            setIsModalVisible(true);
        }else{
            setIsModalVisible(false);
        }
    }

    return (
        <div className="css-1k7l0a0">
        <header className="css-171hq3w">
          <div className="css-1syq16t" onClick={() => showSidebar()} id='__showSideBar'>
            <svg fill="none" id='__showSideBar_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1a99jdn" aria-label="Menu button">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 16.875C3 17.496 3.504 18 4.125 18h15.75a1.125 1.125 0 0 0 0-2.25H4.125c-.621 0-1.125.504-1.125 1.125ZM3 12c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 0 0 0-2.25h-9.75C3.504 10.875 3 11.379 3 12Zm1.125-3.749a1.125 1.125 0 0 1 0-2.25h12.75a1.125 1.125 0 0 1 0 2.25H4.125Z" fill="currentColor" />
            </svg>
          </div>
          <a href="/" aria-label="Link to main page" className="css-shjlma">
            <img alt="Zora Testnet network logo" src="/favicon.ico" className="chakra-image css-14bjcpq" />
          </a>
          <div className="css-1d5wfwy" />
        </header>
        <form noValidate className="css-5zxsuc" style={{position: 'absolute'}}>
          <div className="chakra-input__group css-bx0blc" data-group="true">
            <div className="chakra-input__left-element css-1dj04ll">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" className="chakra-icon css-6ovpta">
                <path d="m15.026 13.848 2.98 2.978a.834.834 0 1 1-1.18 1.18l-2.978-2.98a7.467 7.467 0 0 1-4.681 1.64c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.466 7.466 0 0 1-1.641 4.681Zm-1.672-.619A5.814 5.814 0 0 0 15 9.167a5.832 5.832 0 0 0-5.833-5.834 5.831 5.831 0 0 0-5.834 5.834A5.832 5.832 0 0 0 9.167 15a5.814 5.814 0 0 0 4.062-1.646l.125-.125Z" fill="currentColor" />
              </svg>
            </div>
            <input placeholder="Search by token " className="chakra-input css-1gmlvto" value={searchInput} onChange={(e)=>search(e)} />
          </div>
        </form>

        { isModalVisible && <SearchModal />}


      </div>
    )
}

export default MobileHeader;