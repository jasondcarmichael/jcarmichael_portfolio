import { Label, TextInput, Textarea, Button } from 'flowbite-react'

export default function ContactForm () {


    return (

        <div className="contact-form">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white">Let's Work Together</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="name@email.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="phone"
                            value="Your phone"
                        />
                    </div>
                    <TextInput
                        id="phone"
                        type="text"
                        placeholder="123-456-8900"
                        required={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                        htmlFor="message"
                        value="Your message"
                        />
                    </div>
                    <Textarea
                        id="message"
                        placeholder="Type your message..."
                        required={true}
                        rows={4}
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}