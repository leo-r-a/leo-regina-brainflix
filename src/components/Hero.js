
import "./Hero.scss"


export default function Hero() {
    return (
        <div className='hero'>
            <video className="hero__video" controls>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
}