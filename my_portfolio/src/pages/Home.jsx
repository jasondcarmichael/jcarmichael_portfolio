import Hero from "../Components/Hero"
import ContactForm from "../Components/ContactForm"
import Skills from "../Components/Skills"

export default function Home () {
    return (
        <div className="home-container">
            <section>
                <Hero />
            </section>
            <section>
                <Skills />
            </section>
            <section>
                <ContactForm />
            </section>
    
        </div>
    )
}