import Isocard from '../../assets/desktop/isocard.svg'
const Slogan = () => {
    return (
        <section className="text-36 my-px font-extrabold">
            <div className="text-center">
                <p className="">
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className="">
                    Pay Less
                </p>
                <button className="text-2xl px-6 py-1 font-bold mt-6 bg-purple-500 rounded-xl hover:bg-pink-500 transition-all duration-300">
                    Start
                </button>
            </div>
            <div className="mt-16">
                <img src={Isocard} all="credit card" />
            </div>
        </section>
    )
}

export default Slogan;