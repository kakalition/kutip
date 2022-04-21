export default function WelcomeFragmentOneComponent(props) {
    return(
        <div className="h-screen w-screen bg-primary">
            <h1 className="font-playfair-display font-black text-[14rem] tracking-wide text-secondary">Kutip</h1>
            <h2 className="w-full break-all font-playfair-display font-regular text-[9rem] tracking-wide leading-[11rem] text-secondary">Curated quotes to bring up your day.</h2>
            <div className="h-20"/>
            <div className="flex flex-row items-center">
                <button className="py-5 px-16 bg-secondary rounded-full font-poppins font-semibold text-xl text-white" type="button">Sign Up</button>
                <div className="w-8"/>
                <button className="p-5 font-poppins font-semibold text-2xl text-secondary" type="button">Login</button>
            </div>
        </div>
    )
}