import Nav from "./NavTabs";

export default function Header() {
  return <header className="header d-flex flex-row justify-content-between bg-dark">
        <h1 className="p-2 h1 fs-1 m-1 text-light">Jacob Peterson</h1>
        <Nav />
      </header>
}