import family from '../assets/dinosaur_adventure.jpg'

export default function About() {
    return (
        <section>
            <h2 className='text-center pt-4'>About Me</h2>
            <div className="d-flex justify-content-around align-items-center">
                <img src={family} alt="My fiance and I in front of t-rex" className="flex-grow-1 about-image" />
                <p className="flex-grow-2 fs-4 p-5 text-light">I am a new web developer working to enter a new career. Born in Kansas City, recently engaged I decided it was time for a change of career. Training to begin my career in web development.</p>
            </div>
        </section>
    )
}