import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import sampleImg from '../public/sampleimage.svg';
import secondSampleImg from '../public/secondarySample.svg';
import tertiarysampleimage from '../public/tertiarysampleimage.svg';
import four from '../public/fourth.svg';
import five from '../public/fifth.svg';
import six from '../public/sixth.svg';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Shop Template</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Link href="/shop"><button className="material-symbols-outlined shop-icon">shopping_cart</button></Link>

      <div className="topnav">
        <span className="topnav-text">Top navigation content was supposed to be here but im tired</span>
      </div>

      <div className="item-tab">
        <Image src={secondSampleImg} className="item-image"></Image>
        <h1 className="item-name">
          Full stack team 
        </h1>
        <h2 className="item-price"><span className="cost">$35</span> an hour</h2>
        <hr />
        <p className="item-desc">Our full stack development team can roll out websites professionally, safely, and to your needs</p>
        <Link href="#" class="button">Hire us</Link>
      </div>

      <div className="item-tab">
        <Image src={sampleImg} className="item-image"></Image>
        <h1 className="item-name">
          Pilot flight lessons 
        </h1>
        <h2 className="item-price"><span className="cost">$145</span> per lesson</h2>
        <hr/>
        <p className="item-desc">Learn to soar in the clouds up high with our experienced flight classes</p>
        <Link href="#" class="button">Enroll</Link>
      </div>

      <div className="item-tab">
        <Image src={tertiarysampleimage} className="item-image"></Image>
        <h1 className="item-name">
          Cryptocurrency 101
        </h1>  
        <h2 className="item-price"><span className="cost">$25</span> per class</h2>
        <hr/>
        <p className="item-desc">Dive into the rich world of cryptocurrency in Bitcoin in our cryptocurrency 101 program</p>
        <Link href="#" class="button">Sign up</Link>
      </div>

      <div className="item-tab">
        <Image src={four} className="item-image"></Image>
        <h1 className="item-name">
          Podcast
        </h1>  
        <h2 className="item-price"><span className="cost">$0</span> per episode</h2>
        <hr/>
        <p className="item-desc">Listen to our high quality always entertaining podcasts for free</p>
        <Link href="#" class="button">Listen</Link>
      </div>

      <div className="item-tab">
        <Image src={five} className="item-image"></Image>
        <h1 className="item-name">
          E-books
        </h1>  
        <h2 className="item-price"><span className="cost">varies</span> per book</h2>
        <hr/>
        <p className="item-desc">Delve into our rich library of online books, curated for every reader</p>
        <Link href="#" class="button">Read</Link>
      </div>

      <div className="item-tab">
        <Image src={six} className="item-image"></Image>
        <h1 className="item-name">
          Shipping
        </h1>  
        <h2 className="item-price"><span className="cost">$10-55</span> per item</h2>
        <hr/>
        <p className="item-desc">See our various options for shipping our products safely with tracking</p>
        <Link href="#" class="button">Take a look</Link>
      </div>
    
    </main>
  )
}