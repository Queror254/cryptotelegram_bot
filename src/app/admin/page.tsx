import Link from 'next/link'

export default function Links(): JSX.Element {

    return (
        <main className="flex h-screen w-auto items-center bg-black bg_img">
            <div className="mx-auto w-full h-full  max-w-lg rounded-lg bg-gray-900 p-2 pt-4 shadow-card  xs:p-6 xs:pt-5 ">
                <Link href="/">
                    <header className="navigation_tab items-center flex flex-row gap-2">
                        <span className=''><svg height={ 20 } width={ 20 } xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></span>
                        <span className='d_none'>Home</span>

                    </header>
                </Link>


            </div>
        </main>
    );
}