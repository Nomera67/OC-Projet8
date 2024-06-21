import './Heroe.scss';

import CopyEmailButton from '../CopyEmailButton/CopyEmailButton';

function Heroe() {

    const email = 'y.rechtenstein@gmail.com';

    return (
       <section className="heroe">
            <div className="heroe__presentation">
                <p className="heroe__welcome">Bienvenue</p>
                <h1 className="heroe__role">Je suis <span className="highlight">Yan</span></h1>
                <p className="heroe__role">Développeur <span className='highlight'>web</span></p>
            </div>
            <div className="heroe__contact">
                <CopyEmailButton email={email} />
            </div>

       </section>
    )
}

export default Heroe