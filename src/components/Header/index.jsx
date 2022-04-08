import { Logo } from "../Logo"
import { InputSearch } from "../InputSearch"

export const Header = ({showProducts, inputValue, setInputValue}) => {
    return (
        <nav>
            <Logo />
            <InputSearch showProducts={showProducts} inputValue={inputValue} setInputValue={setInputValue}/>
        </nav>
    )
}