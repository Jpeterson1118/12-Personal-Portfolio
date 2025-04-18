import Nav from "./NavTabs";

export default function Header() {
  return <header className="header d-flex flex-row">
        <h1 className="desktop p-2 h1 fs-1 text-light">Jacob Peterson</h1>
        <Nav />
      </header>
}