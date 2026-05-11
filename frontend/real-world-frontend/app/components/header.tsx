import Nav from "@/app/components/nav"

export default function Header() {
    return(
        <header className="flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 bg-[white]">
            <div>
                <a href="/"><img src="/realworld-dual-mode.png" className="md:w-100 md:h-15 w-50 h-7" alt="real world logo" /></a>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}