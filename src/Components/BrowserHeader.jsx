import { useState } from 'react'

const BrowserHeader = () => {
    const [searchInput , setSearchInput] = useState('');
    const Menu = [{
          'icon':'fa fa-house',
          'name':'Home',
          'style':'paddingLeft:0px',
          'link' : '/'
        },
        {
          'icon':'fa-brands fa-bitcoin',
          'name':'Coin',
          'style':'',
          'link':'/coins',
        },
        {
          'icon':'fa fa-money-bill-transfer',
          'name':'Exchanges',
          'style':'',
          'link':'/exchanges',
        }];

    const searchWeb = (e) => {
      const input = e.target.value;
      setSearchInput(input);
    }

    return (
      <header className="chakra-stack css-2hzzd0" style={{paddingBottom: '30px'}}>
        <div className="css-8atqhb">
          <div>
            <ul className="main-nav" style={{paddingLeft: '0px'}}>
              {
                Menu.map(function(r,t){
                    return (
                      <li key={t} style={{paddingLeft:'0px',fontSize: '18px'}}> <i class={r.icon} style={{paddingRight: '5px'}}></i><a href={r.link}>{r.name}</a></li>
                    )
                })
              }
            </ul>
          </div>
        </div>
        <div className="css-8atqhb" style={{width: 'auto'}}>
          <form noValidate className="css-5zxsuc">
            <div className="chakra-input__group css-bx0blc" data-group="true">
              <div className="chakra-input__left-element css-1dj04ll">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" className="chakra-icon css-6ovpta">
                  <path d="m15.026 13.848 2.98 2.978a.834.834 0 1 1-1.18 1.18l-2.978-2.98a7.467 7.467 0 0 1-4.681 1.64c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.466 7.466 0 0 1-1.641 4.681Zm-1.672-.619A5.814 5.814 0 0 0 15 9.167a5.832 5.832 0 0 0-5.833-5.834 5.831 5.831 0 0 0-5.834 5.834A5.832 5.832 0 0 0 9.167 15a5.814 5.814 0 0 0 4.062-1.646l.125-.125Z" fill="currentColor" />
                </svg>
              </div>
              <input placeholder="Search by token" className="chakra-input css-1gmlvto" value={searchInput} onChange={(e)=>searchWeb(e)}/>
            </div>
          </form>
        </div>
      </header> 
    )
}

export default BrowserHeader;