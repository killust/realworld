export default function Footer() {
    return(
        <footer className="mt-auto flex justify-between py-[60px] px-[60px] bg-[whitesmoke]">
            <div className="w-1/2 flex flex-col">
                <a href="/" className="text-green-600 md:text-5xl text-2xl pb-2 font-bold">conduit</a>
                <span className="md:text-lg text-[10px]">
                An interactive learning project. Code &amp; design licensed under MIT.
                </span>
            </div>
            <div className="w-1/2">
                <a href="https://github.com/killust/realworld" className="hover:underline hover:decoration-green-500 hover:decoration-2 hover:text-green-600 hover:underline-offset-8 text-[10px] md:text-lg px-2">Github</a>
                <a href="https://linkedin.com/in/derwaish-kamran-843140212" className="hover:underline hover:decoration-green-500 hover:decoration-2 hover:text-green-600 hover:underline-offset-8 text-[10px] md:text-lg px-2">Linkedin</a>
            </div>
        </footer>
    )
}