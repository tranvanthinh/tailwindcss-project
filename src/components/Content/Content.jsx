import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { useSpring, animated } from 'react-spring'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'

const Content = () => {

    const customer = useSpring({ customers: 10245, from: { customers: 0 } })
    const card = useSpring({ cards: 12045, from: { cards: 0 } })

    return (
        <section className="">
            <div className="ml-16 mr-12 text-bold flex flex-col items-center bg-gradient-to-b shadow-2xl from-white/40 to-transition rounded-lg">
                <div className="mt-16 gap-8 flex items-start">
                    <FaUser size={"24px"} className="mt-3" />
                    <div className="text-24">
                        <animated.div>
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-14 font-semibold mb-9">
                            Customer
                        </p>
                    </div>
                </div>
                <div className="gap-8 flex items-start mb-16">
                    <BsFillCreditCardFill size={"22px"} className="mt-3" />
                    <div className="text-26">
                        <animated.div>
                            {card.cards.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold">
                            Cards Issued
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex flex-col w-full mt-20 font-semibold ml-14">
                <div className="mb-12 flex gap-8 ml-18 mr-7 items-center">
                    <img src={checkIconMobile} alt="" />
                    <p className="">
                        Card reports sent to your phone
                    </p>
                </div>
                <div className="mb-12 flex gap-8 ml-18 mr-7 items-center">
                    <img src={checkIconMobile} alt="" />
                    <p className="">
                        No external fees
                    </p>
                </div>
                <div className="mb-12 flex gap-8 ml-18 mr-7 items-center">
                    <img src={checkIconMobile} alt="" />
                    <p className="">
                        Set spending limits and rescriptions
                    </p>
                </div>
            </div>
        </section>
    )

}

export default Content;