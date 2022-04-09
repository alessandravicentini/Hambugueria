import { Logo } from "../Logo"
import { InputSearch } from "../InputSearch"

export const Header = ({showProducts, inputValue, setInputValue, setDisplay}) => {
    return (
        <nav>
            <Logo />
            <InputSearch showProducts={showProducts} inputValue={inputValue} setInputValue={setInputValue} setDisplay={setDisplay}/>
        </nav>
    )
}