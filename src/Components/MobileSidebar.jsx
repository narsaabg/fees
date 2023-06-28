import React from "react";

const MobileSidebar = ({sidebarRef}) => {

    return (
        <div className="chakra-portal" >
        <div className="chakra-modal__overlay css-18nm2lm" style={{opacity: 1}} data-aria-hidden="true" aria-hidden="true" />
        <div data-focus-guard="true" tabIndex={0} style={{width: '1px', height: '0px', padding: '0px', overflow: 'hidden', position: 'fixed', top: '1px', left: '1px'}} data-aria-hidden="true" aria-hidden="true" />
        <div data-focus-lock-disabled="false">
          <div className="chakra-modal__content-container css-17pwl6t">
            <div role="dialog" ref={sidebarRef} id="chakra-modal-:R2mcml5f6:" tabIndex={-1} aria-modal="true" className="chakra-slide chakra-modal__content css-nktoso" style={{position: 'fixed', left: '0px', top: '0px', bottom: '0px', width: '100%', transform: 'translateX(0%) translateY(0px) translateZ(0px)'}} aria-describedby="chakra-modal--body-:R2mcml5f6:">
              <div className="chakra-modal__body css-1kxo95v" id="chakra-modal--body-:R2mcml5f6:">
                <div className="css-1h94myw">
                  <div className="css-1xwgmue" style={{transform: 'none'}}>
                    <nav className="css-14bs28v">
                      <ul className="chakra-stack css-1cc0bcs" style={{paddingLeft: '0px'}}>
                        <li className="css-1a59ukd">
                          <div aria-label="Blockchain link group" className="css-4npbiv">
                            <div className="css-9su1t3">
                              <div className="chakra-stack css-h2qvpe">
                              <i className="fa fa-house" style={{paddingRight: '5px'}}></i>
                                <p className="chakra-text css-1qkro23">Home</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="css-1cs5lkz">
                          <a target="_self" className="chakra-link css-o2e9ro" href="/tokens" aria-label="Tokens link">
                            <div className="chakra-stack css-h2qvpe">
                              <i className="fa-brands fa-bitcoin" style={{paddingRight: '5px'}}></i>
                              <p className="chakra-text css-1qkro23">Tokens</p>
                            </div>
                          </a>
                        </li>
                        <li className="css-1cs5lkz">
                          <a target="_self" className="chakra-link css-o2e9ro" href="/stats" aria-label="Charts & stats link">
                            <div className="chakra-stack css-h2qvpe">
                            <i className="fa fa-money-bill-transfer" style={{paddingRight: '5px'}}></i>
                              <p className="chakra-text css-1qkro23">Exchanges</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <footer className="chakra-stack css-178ml7r">
                      <div className="chakra-stack css-7aowt3">
                        <div className="css-1ftfc7g">
                          
                        </div>
                      </div>
                      <div className="css-eegl21">
                        <p className="chakra-text css-op9mh4">Copyright@2022 | withdrawalfee.net</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-focus-guard="true" tabIndex={0} style={{width: '1px', height: '0px', padding: '0px', overflow: 'hidden', position: 'fixed', top: '1px', left: '1px'}} data-aria-hidden="true" aria-hidden="true" />
      </div>
    )
}

export default MobileSidebar;