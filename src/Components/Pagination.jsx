import React from "react";

const Pagination = () => {
    return (
        <div role="tablist" aria-orientation="horizontal" className="chakra-tabs__tablist css-rfi0do">
        <button type="button" style={{display: 'none'}} id="tabs-:r6q:--tab-0" role="tab" tabIndex={0} aria-selected="true" aria-controls="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab css-3mbhyp" data-index={0}>Validated</button>
        <button type="button" style={{display: 'none'}} id="tabs-:r6q:--tab-1" role="tab" tabIndex={-1} aria-selected="false" aria-controls="tabs-:r6q:--tabpanel-1" className="chakra-tabs__tab css-3mbhyp" data-index={1}>Pending</button>
        <button type="button" className="chakra-button css-x35y51" id="popover-trigger-:r6t:" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-content-:r6t:">···</button>
        <div className="chakra-popover__popper css-iy22zq" style={{visibility: 'hidden', position: 'absolute', minWidth: 'max-content', inset: '0px auto auto 0px'}}>
          <section id="popover-content-:r6t:" tabIndex={-1} role="dialog" className="chakra-popover__content css-89zcca" style={{transformOrigin: 'var(--popper-transform-origin)', opacity: 0, visibility: 'hidden', transform: 'scale(0.95) translateZ(0px)'}} />
        </div>
        <div className="css-zdpt2t">
          <div className="css-1a8sicp">
            <button type="button" className="chakra-button css-1op4o60" disabled>First</button>
            <button type="button" className="chakra-button css-1owoio2" aria-label="Next page" disabled>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" className="chakra-icon css-w3c4vt" aria-hidden="true">
                <path d="M11.535 11.293a1 1 0 0 0 0 1.414l3.536 3.536a1 1 0 1 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414l4.95-4.95a1 1 0 1 1 1.414 1.414l-3.536 3.536Z" fill="currentColor" />
              </svg>
            </button>
            <button type="button" data-active className="chakra-button css-m9lah3">1</button>
            <button type="button" className="chakra-button css-ohpl07" aria-label="Next page">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" className="chakra-icon css-1qemq9c" aria-hidden="true">
                <path d="M11.535 11.293a1 1 0 0 0 0 1.414l3.536 3.536a1 1 0 1 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414l4.95-4.95a1 1 0 1 1 1.414 1.414l-3.536 3.536Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Pagination;