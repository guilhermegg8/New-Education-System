import './Header.css'

export function Header() {
    return (
        <div className='header'>
            <nav className='nav'>
                <img src='./favicon.png' alt='Logotipo do SIGA' className='nav-logo' />
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Início</a>
                    </li>
                </ul>
            </nav>            
        </div>
    )
}