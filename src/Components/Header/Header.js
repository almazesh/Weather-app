import './Header.scss'
import {BiWorld} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = ({ onSearch , onclicks}) =>{
    return(
        <>
            <div className='header'>
                <h1>World  <BiWorld /> Weather </h1>
                <div>
                    <input type='text' placeholder='Search' onChange={e => onSearch(e.target.value)} />
                    <AiOutlineSearch className='searchIcon' onClick={() => onclicks()}/>
                </div>
                <button>Sign out</button>
            </div>
        </>
    )
}

export default Header;