import Hero from "../Components/Hero"
import ContactForm from "../Components/ContactForm"

export default function Home () {
    return (
        <div className="home-container">
            <section>
                <Hero />
            </section>
            <section>
                <ContactForm />
            </section>
    
        </div>
    )
}