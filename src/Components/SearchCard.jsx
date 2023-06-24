const SearchCard = ({result}) => {
    return (
        <a href={(result.is === 'coin' ? '/coins/' : '/exchanges/') + result.slug } className="css-k97giw">
            <div className="css-70qvj9">
                <div className="css-ts2jgk">
                <div className="paper style-AeKwk" id="style-AeKwk">
                    <img src={result.image} alt="" style={{width: '-webkit-fill-available'}}/>
                </div>
                </div>
                <span className="css-1p5yq86">
                <span>
                    {result.name}
                </span>
                </span>
            </div>
        </a>
    )
  }

  export default SearchCard;