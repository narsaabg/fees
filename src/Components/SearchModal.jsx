import React, { useState } from "react";
import SearchCard from "./SearchCard";

const SearchModal = ({searchResult}) => {

    return (
        <div  className="chakra-popover__popper css-iy22zq snipcss-aUnSp style-6YfqI" data-popper-placement="bottom-start" id="style-6YfqI">
        <section id="popover-content-:r62:" tabIndex={-1} role="dialog" className="chakra-popover__content css-4epjj6 style-Ytg9B" aria-describedby="popover-body-:r62:" style={{width: '340px'}}>
          <div id="popover-body-:r62:" className="chakra-popover__body css-uz7m33">
          {
            searchResult.length === 0 ? (
              <p className="chakra-text css-lcwk4b" style={{paddingTop:'10px',paddingBottom:'10px'}}>
                No result found
              </p>
            ) : (
              searchResult.map((result) => (
                <SearchCard result={result} key={result.id} />
              ))
            )
          }
          </div>
        </section>
      </div> 
    )
}

export default SearchModal;