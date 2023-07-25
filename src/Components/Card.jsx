import React,{useEffect, useState} from "react";

const Card = ({sttc}) => { 
    const [cCount,setCCount] = useState(0);
    const [eCount,setECount] = useState(0);

    useEffect(()=>{
          if(sttc){
            setCCount(sttc.coin.count);
            setECount(sttc.exchange.count);
          }  
    },[sttc]);

    return (
        <>
            <div className="css-19ypa6d">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" focusable="false" className="chakra-icon css-1ev3uyk">
                    <path d="M10.466 11.652c-1.382 0-2.697-.3-3.697-.848C5.63 10.182 5 9.3 5 8.326c0-.974.628-1.854 1.77-2.478C7.768 5.301 9.081 5 10.465 5c1.385 0 2.698.301 3.695.848 1.142.624 1.77 1.504 1.77 2.478 0 .974-.626 1.856-1.77 2.478-.997.547-2.31.848-3.695.848Zm0-5.171c-1.123 0-2.212.243-2.986.666-.635.345-1 .777-1 1.18 0 .4.365.83 1 1.178.774.424 1.863.666 2.986.666 1.123 0 2.213-.242 2.987-.666.635-.345.999-.777.999-1.179s-.364-.832-1-1.179c-.771-.423-1.862-.666-2.986-.666Z"></path>
                    <path d="M22.131 14.976a.74.74 0 0 1-.484-1.3c.216-.187.473-.48.473-.82 0-.871-1.704-1.845-3.985-1.845-.967 0-1.907.177-2.647.5a.74.74 0 1 1-.592-1.357c.935-.408 2.056-.624 3.239-.624 1.384 0 2.697.3 3.696.848 1.142.624 1.77 1.504 1.77 2.478 0 .713-.341 1.382-.987 1.94a.74.74 0 0 1-.483.18Zm-11.665 6.056c-1.382 0-2.697-.302-3.697-.849C5.629 19.56 5 18.679 5 17.705V8.328a.74.74 0 0 1 1.48 0v9.377c0 .402.365.832 1 1.179.774.424 1.862.667 2.986.667a7.128 7.128 0 0 0 2.205-.333c.111-.037.218-.076.316-.115a.74.74 0 0 1 .556 1.372 5.529 5.529 0 0 1-.409.148 8.633 8.633 0 0 1-2.668.409Z"></path>
                    <path d="M15.192 14.456a.74.74 0 0 1-.74-.74v-5.39a.74.74 0 0 1 1.48 0v5.39a.74.74 0 0 1-.74.74Zm-4.726 4.174c-1.382 0-2.697-.3-3.697-.848C5.629 17.159 5 16.28 5 15.305a.74.74 0 1 1 1.48 0c0 .87 1.705 1.845 3.986 1.845a7.134 7.134 0 0 0 2.205-.332c.159-.053.31-.11.449-.172a.74.74 0 1 1 .597 1.355 6.64 6.64 0 0 1-.581.223 8.624 8.624 0 0 1-2.67.407Z"></path>
                    <path d="M10.466 16.231c-1.382 0-2.697-.301-3.697-.848C5.629 14.758 5 13.879 5 12.905a.74.74 0 1 1 1.48 0c0 .871 1.705 1.845 3.986 1.845.941 0 1.829-.161 2.567-.466a.74.74 0 1 1 .566 1.368c-.916.379-1.999.579-3.133.579Zm4.402-1.644a.74.74 0 0 1-.602-1.17.882.882 0 0 0 .186-.512.74.74 0 1 1 1.48 0c0 .482-.155.944-.46 1.373a.74.74 0 0 1-.604.31Z"></path>
                    <path d="M10.466 13.83c-1.382 0-2.697-.3-3.697-.848C5.63 12.358 5 11.478 5 10.505a.74.74 0 1 1 1.48 0c0 .401.365.83 1 1.178.774.424 1.863.667 2.986.667 1.123 0 2.215-.243 2.987-.667.635-.345.999-.777.999-1.178a.74.74 0 1 1 1.48 0c0 .973-.627 1.853-1.769 2.477-.999.548-2.312.849-3.697.849Zm7.668 5.856c-1.52 0-2.96-.33-4.055-.93-1.236-.676-1.917-1.625-1.917-2.673s.681-1.997 1.917-2.674c1.096-.599 2.536-.929 4.055-.929 1.52 0 2.962.33 4.055.93 1.236.676 1.918 1.628 1.918 2.673 0 1.045-.681 1.996-1.918 2.674-1.095.599-2.535.929-4.055.929Zm0-5.725c-1.257 0-2.475.272-3.343.747-.73.4-1.148.9-1.148 1.375s.418.976 1.148 1.375c.868.473 2.085.747 3.343.747 1.26 0 2.476-.272 3.344-.747.73-.4 1.148-.9 1.148-1.375s-.42-.976-1.148-1.375c-.868-.475-2.085-.747-3.344-.747Z"></path>
                    <path d="M18.134 25c-1.52 0-2.96-.33-4.055-.93-1.236-.675-1.917-1.625-1.917-2.673v-5.314a.74.74 0 0 1 1.481 0v5.314c0 .475.418.976 1.148 1.375.868.475 2.086.748 3.343.748 1.258 0 2.476-.273 3.344-.748.728-.398 1.148-.9 1.148-1.375v-5.314a.74.74 0 0 1 1.48 0v5.314c0 1.048-.68 1.998-1.917 2.674-1.095.6-2.535.93-4.055.93Z"></path>
                    <path d="M18.134 22.343c-1.52 0-2.96-.33-4.055-.93-1.236-.676-1.917-1.626-1.917-2.673a.74.74 0 1 1 1.481 0c0 .474.418.976 1.148 1.374.868.476 2.086.748 3.343.748 1.258 0 2.476-.272 3.344-.748.728-.398 1.148-.9 1.148-1.374a.74.74 0 1 1 1.48 0c0 1.047-.68 1.997-1.917 2.674-1.095.599-2.535.929-4.055.929Zm4.726-6.673a.74.74 0 0 1-.74-.741v-2.073a.74.74 0 1 1 1.48 0v2.073a.74.74 0 0 1-.74.74Z"></path>
                </svg>
                <div className="css-2kgh3g" style={{display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'start', alignItems: 'start'}}>
                    <p className="chakra-text css-1lh8eyo" style={{color: '#fff', fontSize: 'var(--chakra-fontSizes-xs)', lineHeight: '16px'}}>Coins</p>
                    <p className="chakra-text css-10v4ets" style={{fontWeight: 500, fontSize: 'var(--chakra-fontSizes-md)', color: '#fff'}}>{cCount}</p>
                </div>
            </div>
            <div className="css-19ypa6d">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" focusable="false" className="chakra-icon css-1ev3uyk">
                    <path fill="currentColor" fillRule="evenodd" d="M14.688 4.75c-5.482 0-9.938 4.456-9.938 9.938 0 5.481 4.456 9.937 9.938 9.937 5.481 0 9.937-4.456 9.937-9.938 0-5.481-4.456-9.937-9.938-9.937Zm3.499 5.781a14.655 14.655 0 0 0-1.813-3.855 8.151 8.151 0 0 1 5.359 3.855h-3.546Zm-7.219 0H7.644a8.16 8.16 0 0 1 5.094-3.787 14.079 14.079 0 0 0-1.77 3.787Zm5.39 0h-3.56a12.705 12.705 0 0 1 1.78-3.382 12.64 12.64 0 0 1 1.78 3.382ZM6.5 14.687c0-.831.131-1.65.369-2.406h3.692a14.62 14.62 0 0 0-.013 4.737l-3.695.027a7.864 7.864 0 0 1-.353-2.358Zm5.83 2.327c-.3-1.57-.3-3.176 0-4.733h4.496c.3 1.555.3 3.147.028 4.705l-4.524.028Zm6.295-.047a14.364 14.364 0 0 0-.029-4.686h3.91c.238.756.369 1.575.369 2.406 0 .783-.116 1.542-.313 2.252l-3.937.028Zm-2.246 5.73a14.004 14.004 0 0 0 1.843-3.98l3.596-.026a8.21 8.21 0 0 1-5.439 4.005Zm-1.802-.472a12.283 12.283 0 0 1-1.8-3.462l3.613-.026a12.946 12.946 0 0 1-1.813 3.488Zm-1.84.406a8.208 8.208 0 0 1-5.128-3.837l3.328-.027c.394 1.347 1 2.657 1.8 3.864Z" clipRule="evenodd"></path>
                </svg>
                <div className="css-2kgh3g" style={{display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'start', alignItems: 'start'}}>
                    <p className="chakra-text css-1lh8eyo" style={{color: '#fff', fontSize: 'var(--chakra-fontSizes-xs)', lineHeight: '16px'}}>Exchanges</p>
                    <p className="chakra-text css-10v4ets" style={{fontWeight: 500, fontSize: 'var(--chakra-fontSizes-md)', color: '#fff'}}>{eCount}</p>
                </div>
            </div>
        </>
    )
}

export default Card;