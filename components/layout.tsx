import NavMenu from './navmenu'

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
      {/* Footer */}
      {/* You can add more things here  */}
    </>
  )
}
