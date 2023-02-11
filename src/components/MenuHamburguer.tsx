import '../styles/MenuHamburguer.css'


interface MenuHamburguerProps {
    showMobileMenu: boolean
    setShowMobileMenu: (value: boolean) => void 
}

export const MenuHamburguer: React.FC<MenuHamburguerProps> = ({showMobileMenu, setShowMobileMenu}) => {
  return (
    <div className={`mobile-menu ${showMobileMenu ? 'active' : ''}`} onClick={()=> setShowMobileMenu(!showMobileMenu)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}
