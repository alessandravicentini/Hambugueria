export const InputSearch = ({showProducts, inputValue, setInputValue, setDisplay}) => {
    
    return (
        <div className="div-input-search">
            <form type='submit' onSubmit={(event) => {
                event.target.reset()
                event.preventDefault()}}>
            <input className="input-search" placeholder="Digitar pesquisa" type="text" name="" id="" onChange={(event) => {setInputValue(event.target.value)}}/>
            <button className="button-input-search" type="submit" onClick={() => {
                showProducts(inputValue)
                setDisplay('div-results')
                }}>Pesquisar</button>
            </form>
        </div>
    )
}