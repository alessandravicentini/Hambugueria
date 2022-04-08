export const InputSearch = ({showProducts, inputValue, setInputValue}) => {
    return (
        <div className="div-input-search">
            <form type='submit' onSubmit={(event) => {
                event.target.reset()
                event.preventDefault()}}>
            <input className="input-search" placeholder="Digitar pesquisa" type="text" name="" id="" onChange={(event) => {setInputValue(event.target.value)}}/>
            <button className="button-input-search" type="submit" onClick={() => {showProducts(inputValue)}}>Pesquisar</button>
            </form>
        </div>
    )
}