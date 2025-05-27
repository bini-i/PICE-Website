export const PageBanner = ({title:any}) => {
    return (
        <section className="page-banner">
            <div className="py-14 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#fcfb00,#EAEEFE_100%)]">
                <div className="container">
                    <h1 className="header-marker text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#535303] text-transparent bg-clip-text mt-5">{title}</h1>
                </div>
            </div>
        </section>
    )
}