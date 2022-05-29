import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (<main style={{ maxWidth: '1080px', margin: '0 auto' }}>{children}</main>)

export default Layout