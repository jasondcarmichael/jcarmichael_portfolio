export default function About () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
                    <p className="mb-4">I am a software engineer with prior training in UX and UI design, along with several years experience in campus facilities and operations. My approach to software engineering includes consideration of end users, passion for elegant visual design, and attention to each part as it relates to the whole project. </p>
                    <p className="mb-4">Previous work honed my skills in managing projects, analyzing and understanding problems, and developing / implementing systems and processes to address problems. </p>
                    <p className="mb-4">I am a strategist, designer and developer. Innovator and problem solver.</p>
                </div>  
                <div className="grid grid-cols-1 gap-4 mt-8 ">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"> */}
                </div>
            </div>
        </section>
    )
}

